"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {toast} from 'sonner'
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
interface MatchHistory {
  id: string; // or number, depending on your user_id type
  result: "completed" | "ongoing" | "pending"; // use a union type for exact statuses
  game_end_at: string | Date; // Date from backend often arrives as an ISO string in frontend
  status: number;
  total_amount: number;
  min: number;
}

export function EndMatch() {
   const [user_id, setUserId] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [price,setPrice] = useState(false)
    const [gameData,setGameData] = useState<MatchHistory | null>(null)
    const calculatefee = async (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault()
      setIsLoading(true)
      
      try{
        const response = await fetch("/api/calculate_fee", {
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id:user_id.trim()
          })
        })
  
        const data = await response.json()
        setGameData(data.data)
        if(!response.ok){
          throw new Error(data.error || "Failed to Start The Match.")
        }
        toast.success(`Match Fee Calculated Success`)
        setPrice(true)
        setIsLoading(false)
        setUserId("")
      } catch(error: any){
              toast.error(error.message || "An unexpected error occurred.")
      } finally {
        setIsLoading(false)
      }
    }
    const cancelMatch = async (event: React.MouseEvent<HTMLButtonElement>)=>{
      event.preventDefault()
      setIsLoading(true)
              

      try{
        const response = await fetch("/api/canceled_fee", {
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id:user_id.trim()
          })
        })
  
        const data = await response.json()
  
        if(!response.ok){
          throw new Error(data.error || "Failed to Start The Match.")
        }
        toast.success(`Match for user ID: ${data.user_id}  fee calculated success `)
        setIsLoading(false)
        setUserId("")
      } catch(error: any){
              toast.error(error.message || "An unexpected error occurred.")
      } finally {
        setIsLoading(false)
      }
    }
  return (
    <>
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="bg-red-400 dark:bg-[#C3110C] py-8 px-12">End Match</Button>} />
      <SheetContent>
        <form onSubmit={calculatefee}>
        <SheetHeader>
          <SheetTitle>END Chess Match Section</SheetTitle>
          <SheetDescription>
            Enter the player's User ID below to manage their session. Calculate the final match fee or cancel the active chess match when ready.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">User ID</Label>
            <Input id="sheet-demo-name"
            type="text"
            placeholder="U001"
            required
            value={user_id}
            onChange={(e)=> setUserId(e.target.value ?? "")}
            disabled={isLoading}
            className="mt-4 py-4"
            />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Calculate Match fee</Button>
          <Button type="button" 
              variant="outline"
              disabled={isLoading}
              onClick={cancelMatch}
          >Cancel Chess Match</Button>
        </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>

    {price ? (
  <div className="absolute bg-gray-600/30 backdrop-blur-md top-0 w-full flex flex-col items-center justify-center" >
    <button onClick={()=>setPrice(false)} className="bg-red-800 py-2 px-4 rounded-2xl absolute right-2 top-2 hover:bg-red-800/30 hover:cursor-pointer">Close total</button>
    <div className="text-center mb-4 text-lg font-medium text-gray-600">
        <p><span className="font-bold text-white">Match ID</span>:{gameData?.id} </p>
        <h1 className="text-2xl font-bold text-white">Total Chess Minutes and Fee</h1>
        {/* <h3 className="text-lg text-white">Player 1: John Doe</h3>
        <h3 className="text-lg text-white">Player 2: Jane Smith</h3> */}
    </div>
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-4">
                  <span className="text-4xl font-semibold">{gameData?.min + ` min`}</span>
                  <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="text-center mt-4 text-lg font-medium text-gray-600">
      Total Fee: <span className="font-bold text-white" >{gameData?.total_amount} birr</span>
    </div>
    </div>
    ) : " "}
    </>
  )
}


