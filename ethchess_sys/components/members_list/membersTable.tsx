import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
        id: "ETH001",
        fullName: "John Doe",
        phone: "123-456-7890",
        email: "john.doe@example.com",
        tropy: "Trophy 1",
        memebr_title: "Member",
        eth_chess_rapid_rating: "1200",
        address: "123 Main St",
        status: 1
    },
    {
        id: "ETH002",
        fullName: "Jane Smith",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        tropy: "Trophy 2",
        memebr_title: "Member",
        eth_chess_rapid_rating: "1300",
        address: "456 Oak Ave",
        status: 1
    },
    {
        id: "ETH003",
        fullName: "Alice Johnson",
        phone: "555-123-4567",
        email: "alice.johnson@example.com",
        tropy: "Trophy 3",
        memebr_title: "Member",
        eth_chess_rapid_rating: "1400",
        address: "789 Pine Rd",
        status: 1
    },
    {
        id: "ETH004",
        fullName: "Bob Brown",
        phone: "444-555-6666",
        email: "bob.brown@example.com",
        tropy: "Trophy 4",
        memebr_title: "Member",
        eth_chess_rapid_rating: "1500",
        address: "101 Elm St",
        status: 1
    }
    // ...
  ]
}

export async function MembersTable() {
  const data = await getData()

  return (
    <div className="w-full overflow-x-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}