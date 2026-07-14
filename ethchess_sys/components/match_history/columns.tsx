"use client"

import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Match = {
  user_id: string
  match_id:string
  first_name: string
  phone:string
  game_started_at:Date | string
  game_end_at:Date | string
  min:number | null
  result:string | null
  total_amount:number | null
}

export const columns: ColumnDef<Match>[] = [
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "match_id",
    header: "Match ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "game_started_at",
    header: "Game Started Time",
    cell: ({row})=>{
      const dateVal = row.getValue("game_started_at");
      if(!dateVal) return "N/A";
      const date = new Date(dateVal as string | Date);
      return format(date,"EEEE, M/d/yyyy HH:mm:ss");
    }
  },
  {
    accessorKey: "game_end_at",
    header: "Game End Time",
    cell: ({row})=>{
      const dateVal = row.getValue("game_end_at");
      if(!dateVal) return "N/A";
      const date = new Date(dateVal as string | Date);
      return format(date,"EEEE, M/d/yyyy HH:mm:ss");
    }
  },
  {
    accessorKey: "min",
    header: "Total Time in Min",
  },
  {
    accessorKey: "result",
    header: "Match Result",
    cell:({row})=>{
      const resultVal = row.getValue("result");
      if(!resultVal) return "N/A";

      return (resultVal=="completed" ? <div className="bg-green-400 py-2 px-4 rounded-2xl">completed</div> :resultVal=="on_going"  ? <div className="bg-yellow-400 py-2 px-4 rounded-2xl">Canceled</div> : <div className="bg-red-400 py-2 px-4 rounded-2xl">Canceled</div>)
    }
  },
  {
    accessorKey: "total_amount",
    header: "Total Amount",
  },
]