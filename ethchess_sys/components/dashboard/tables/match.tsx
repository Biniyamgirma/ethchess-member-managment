import { columns, Match } from "@/components/match_history/columns"
import { DataTable } from "@/components/match_history/data-table"
import { useEffect,useState } from "react"



export   function DemoPage() {
  const [data, setData] = useState<Match[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        // Replace this mock array with your actual fetch call:
        const response = await fetch('/api/match_data');
        const res = await response.json();
        
        setData(res.data);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    }

    getData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}