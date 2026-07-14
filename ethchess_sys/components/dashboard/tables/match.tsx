import { columns, Match } from "@/components/match_history/columns"
import { DataTable } from "@/components/match_history/data-table"
import { useEffect,useState } from "react"



export   function DemoPage() {
  const [data, setData] = useState<Match[]>([{
    user_id: "N/A",
  match_id:"N/A",
  first_name: "N/A",
  phone:"+251-928250000",
  game_started_at: new Date(),
  game_end_at:new Date(),
  min:0,
  result:"N/A",
  total_amount:0.00
  }]);

  useEffect(() => {
    async function getData() {
      try {
        // Replace this mock array with your actual fetch call:
        const response = await fetch('/api/match_data');
        const res = await response.json();
        // const res: Match[] = [
        //   {
        //     user_id: "U001",
        //     match_id: "12",
        //     first_name: "Biniyam",
        //     phone: "+251-928250000",
        //     game_started_at: new Date(),
        //     game_end_at: new Date(),
        //     min: 0,
        //     result: "completed",
        //     total_amount: 0.00
        //   },
        //   {
        //     user_id: "U002",
        //     match_id: "13",
        //     first_name: "Bini",
        //     phone: "+251-928250000",
        //     game_started_at: new Date(),
        //     game_end_at: new Date(),
        //     min: 0,
        //     result: "completed",
        //     total_amount: 0.00
        //   }
        // ];
        
        setData(res.data);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    }

    getData();

    // const intervalId = setInterval(getData, 5000);

    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}