import {
  CreateGameRoomCommand,
  GameRoom,
  JoinGameRoomCommand,
  Repository,
} from "./types"

type PlaceMarkCommand = {
  roomId: string
  playerId: string
  row: number
  col: number
}

export class GameCommandHandler {
  constructor(private readonly repository: Repository) {}

  async createGame(command: CreateGameRoomCommand) {
    await this.repository.save({
      id: command.roomId,
      version: 1,
      state: {
        type: "Waiting",
        playerIdToMark: {
          [command.playerId]: "X",
        },
      },
    })
  }

  async joinGame(command: JoinGameRoomCommand) {
    const room = await this.repository.load(command.roomId)
    if (room == null) throw new GameRoomNotFoundError()
    if (room.state.type !== "Waiting")
      throw new CannotJoinWhenGameStartedError()
    if (Object.keys(room.state.playerIdToMark).includes(command.playerId))
      throw new PlayerAlreadyJoinedError()

    const updatedGameRoom = {
      id: room.id,
      version: room.version + 1,
      state: {
        type: "Playing",
        playerIdToMark: {
          ...room.state.playerIdToMark,
          [command.playerId]: "O",
        },
        currentPlayerMark: "X",
        board: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      },
    } satisfies GameRoom

    await this.repository.save(updatedGameRoom)
  }

  async placeMark(command: PlaceMarkCommand) {
    const room = await this.repository.load(command.roomId)
    if (room == null) throw new GameRoomNotFoundError()
    if (room.state.type !== "Playing")
      throw new CannotPlaceMarkWhenGameNotPlayingError()
    const playerMark = room.state.playerIdToMark[command.playerId]
    if (playerMark == null) throw new PlayerNotInGameError()
    if (playerMark !== room.state.currentPlayerMark)
      throw new NotPlayersTurnError()
    if (room.state.board[command.row][command.col] !== "")
      throw new CannotPlaceMarkOnExistingMarkError()

    const currentPlayerMark = room.state.currentPlayerMark

    const updatedGameRoom = {
      id: room.id,
      version: room.version + 1,
      state: {
        type: "Playing",
        playerIdToMark: room.state.playerIdToMark,
        currentPlayerMark: room.state.currentPlayerMark === "X" ? "O" : "X",
        board: room.state.board.map((row, rowIndex) =>
          row.map((col, colIndex) =>
            rowIndex === command.row && colIndex === command.col
              ? currentPlayerMark
              : col,
          ),
        ),
      },
    } satisfies GameRoom

    await this.repository.save(updatedGameRoom)
  }
}

export class GameRoomNotFoundError extends Error {}

export class CannotJoinWhenGameStartedError extends Error {}

export class PlayerAlreadyJoinedError extends Error {}

export class CannotPlaceMarkWhenGameNotPlayingError extends Error {}

export class PlayerNotInGameError extends Error {}

export class NotPlayersTurnError extends Error {}

export class CannotPlaceMarkOnExistingMarkError extends Error {}
