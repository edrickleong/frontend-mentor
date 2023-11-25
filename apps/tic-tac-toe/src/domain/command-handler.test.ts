import { beforeEach, expect, test } from "vitest"
import { GameRoom, Repository } from "@/domain/types"
import {
  CannotJoinWhenGameStartedError, CannotPlaceMarkOnExistingMarkError,
  CannotPlaceMarkWhenGameNotPlayingError,
  GameCommandHandler,
  GameRoomNotFoundError,
  NotPlayersTurnError,
  PlayerAlreadyJoinedError,
  PlayerNotInGameError,
} from "@/domain/command-handler"

let gameRoomRepository: InMemoryGameRoomRepository
let commandHandler: GameCommandHandler

beforeEach(() => {
  gameRoomRepository = new InMemoryGameRoomRepository()
  commandHandler = new GameCommandHandler(gameRoomRepository)
})

test("given no game room, when creating a game, then a game room is created", async () => {
  await commandHandler.createGame({
    roomId: "1",
    playerId: "1",
  })

  const gameRoom = await gameRoomRepository.load("1")
  expect(gameRoom).toEqual({
    roomId: "1",
    version: 1,
    state: {
      type: "Waiting",
      playerIdToMark: {
        "1": "X",
      },
    },
  })
})

test("given no game room, when joining a game, then game room not found error is thrown", async () => {
  await expect(
    commandHandler.joinGame({
      roomId: "1",
      playerId: "1",
    }),
  ).rejects.toThrow(GameRoomNotFoundError)
})

test("given waiting game room, when joining a game with same player, then nothing happens", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 1,
    state: {
      type: "Waiting",
      playerIdToMark: {
        "1": "X",
      },
    },
  })

  await expect(
    commandHandler.joinGame({
      roomId: "1",
      playerId: "1",
    }),
  ).rejects.toThrow(PlayerAlreadyJoinedError)
})

test("given waiting game room, when joining a game with different player, then player joined and game starts", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 1,
    state: {
      type: "Waiting",
      playerIdToMark: {
        "1": "X",
      },
    },
  })

  await commandHandler.joinGame({
    roomId: "1",
    playerId: "2",
  })

  const gameRoom = await gameRoomRepository.load("1")
  expect(gameRoom).toEqual({
    roomId: "1",
    version: 2,
    state: {
      type: "Playing",
      playerIdToMark: {
        "1": "X",
        "2": "O",
      },
      currentPlayerMark: "X",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  })
})

test("given playing game room, when joining a game, then cannot join when game started error", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 2,
    state: {
      type: "Playing",
      playerIdToMark: {
        "1": "X",
        "2": "O",
      },
      currentPlayerMark: "X",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  })

  await expect(
    commandHandler.joinGame({
      roomId: "1",
      playerId: "3",
    }),
  ).rejects.toThrow(CannotJoinWhenGameStartedError)
})

test("given no game room, when placing a mark, then game room not found error is thrown", async () => {
  await expect(
    commandHandler.placeMark({
      roomId: "1",
      playerId: "1",
      row: 0,
      col: 0,
    }),
  ).rejects.toThrow(GameRoomNotFoundError)
})

test("given waiting game room, when placing a mark, then cannot place mark when game not started error is thrown", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 1,
    state: {
      type: "Waiting",
      playerIdToMark: {
        "1": "X",
      },
    },
  })

  await expect(
    commandHandler.placeMark({
      roomId: "1",
      playerId: "1",
      row: 0,
      col: 0,
    }),
  ).rejects.toThrow(CannotPlaceMarkWhenGameNotPlayingError)
})

test("given playing game room, when placing a mark with different player, then player not in game error is thrown", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 2,
    state: {
      type: "Playing",
      playerIdToMark: {
        "1": "X",
        "2": "O",
      },
      currentPlayerMark: "X",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  })

  await expect(
    commandHandler.placeMark({
      roomId: "1",
      playerId: "3",
      row: 0,
      col: 0,
    }),
  ).rejects.toThrow(PlayerNotInGameError)
})

test("given playing game room, when placing a mark when not in turn, then cannot place mark when not your turn error is thrown", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 2,
    state: {
      type: "Playing",
      playerIdToMark: {
        "1": "X",
        "2": "O",
      },
      currentPlayerMark: "X",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  })

  await expect(
    commandHandler.placeMark({
      roomId: "1",
      playerId: "2",
      row: 0,
      col: 0,
    }),
  ).rejects.toThrow(NotPlayersTurnError)
})

test("given playing game room, when placing a mark, then mark is placed", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 2,
    state: {
      type: "Playing",
      playerIdToMark: {
        "1": "X",
        "2": "O",
      },
      currentPlayerMark: "X",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  })

  await commandHandler.placeMark({
    roomId: "1",
    playerId: "1",
    row: 0,
    col: 0,
  })

  const gameRoom = await gameRoomRepository.load("1")
  expect(gameRoom).toEqual({
    roomId: "1",
    version: 3,
    state: {
      type: "Playing",
      playerIdToMark: {
        "1": "X",
        "2": "O",
      },
      currentPlayerMark: "O",
      board: [
        ["X", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  })
})

test("given playing game room, when placing a mark on somewhere with a mark, then cannot place mark on existing mark error", async () => {
  await gameRoomRepository.save({
    id: "1",
    version: 3,
    state: {
      type: "Playing",
      playerIdToMark: {
        "1": "X",
        "2": "O",
      },
      currentPlayerMark: "O",
      board: [
        ["X", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  })

  await expect(
    commandHandler.placeMark({
      roomId: "1",
      playerId: "2",
      row: 0,
      col: 0,
    }),
  ).rejects.toThrow(CannotPlaceMarkOnExistingMarkError)
})

class InMemoryGameRoomRepository implements Repository {
  private gameRoomById = new Map<string, GameRoom>()

  async save(gameRoom: GameRoom): Promise<void> {
    this.gameRoomById.set(gameRoom.id, gameRoom)
  }

  async load(id: string): Promise<GameRoom | undefined> {
    return this.gameRoomById.get(id)
  }
}
