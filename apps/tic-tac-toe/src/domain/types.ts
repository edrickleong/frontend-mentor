export type CreateGameRoomCommand = {
  roomId: string
  playerId: string
}

export type JoinGameRoomCommand = {
  roomId: string
  playerId: string
}

export interface Repository {
  load(id: string): Promise<GameRoom | undefined>

  save(gameRoom: GameRoom): Promise<void>
}

export type Mark = "X" | "O"

export type WaitingState = {
  type: "Waiting"
  playerIdToMark: {
    [key: string]: Mark
  }
}

export type PlayingState = {
  type: "Playing"
  playerIdToMark: {
    [key: string]: Mark
  }
  currentPlayerMark: Mark
  board: string[][]
}

export type EndedState = {
  type: "Ended"
  playerIdToMark: {
    [key: string]: Mark
  }
  board: string[][]
  winner: Mark
}

export type GameState = WaitingState | PlayingState | EndedState

export type GameRoom = {
  id: string
  version: number
  state: GameState
}
