import {GameState} from "@/domain/types";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      games: {
        Row: {
          created_at: string
          id: string
          version: number,
          state: GameState
        }
        Insert: {
          created_at?: string
          id?: string
          version: number,
          state: GameState
        }
        Update: {
          created_at?: string
          id?: string
          version?: number,
          state?: GameState
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
