"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  fullName: string
  phone: string
  email: string
  tropy: string
  memebr_title: string
  eth_chess_rapid_rating: string
  address: string
  status: number
}

export const columns: ColumnDef<Payment>[] = [
    {
    accessorKey: "id",
    header: "ID",
    },
    {
        accessorKey: "fullName",
        header: "Full Name",
    },
    {
        accessorKey: "phone",
        header: "Phone",    
    },
    {
  accessorKey: "email",
  header: "Email",
  cell: ({ getValue }) => (
    <div className="max-w-[150px] truncate" title={getValue() as string}>
      {getValue() as string}
    </div>
  ),
},
    {
        accessorKey: "tropy",
        header: "Tropy",
    },
    {
        accessorKey: "memebr_title",
        header: "Member Title",
    },
    {
        accessorKey: "eth_chess_rapid_rating",
        header: "ETH Chess Rapid Rating",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            let statusText = '';
            let statusColor = '';
            let statusBgColor = '';
            if(status === 0) {
                statusText = 'Pending';
                statusColor = 'text-yellow-500';
                statusBgColor = 'bg-yellow-500/20';
            } else if(status === 1) {
                statusText = 'Active';
                statusColor = 'text-green-500';
                statusBgColor = 'bg-green-500/20';
            } else if(status === 2) {
                statusText = 'Inactive';
                statusColor = 'text-red-500';
                statusBgColor = 'bg-red-500/20';
            }
            return <span className={statusColor + ' rounded-2xl px-1 py-0.5' + ' ' + statusBgColor }>{statusText}</span>;
    },
},
{
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger
                    render={(props) => (
                        <button
                            {...props}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 cursor-pointer focus-visible:outline-none"
                        >
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </button>
                    )}
                />
                <DropdownMenuContent align="end">
                    {/* Changed from DropdownMenuLabel to a styled div to fix the MenuGroupContext error */}
                    <div className="px-2 py-1.5 text-sm font-semibold">Actions</div>
                    
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(row.original.id)}
                    >
                        Copy payment ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                    <DropdownMenuItem>View payment details</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
}
]