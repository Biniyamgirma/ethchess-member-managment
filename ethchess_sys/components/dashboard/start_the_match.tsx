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
export function StartMatch() {
  const [user_id, setUserId] = useState("")
  const [IsLoading,setIsLoading] = useState(false)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setIsLoading(true)

    try{
      const response = await fetch("/api/start_match", {
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
      toast.success(`Match for ${data.user_id}  Created Successfuly `)
      setIsLoading(false)
      setUserId("")
    } catch(error: any){
        toast.error(error.message || "An unexpected error occurred.")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="bg-green-400 dark:bg-[#1F7D53] py-8 px-12">Start Match</Button>} />
      <SheetContent>
        <form onSubmit={handleSubmit} className="w-full">
        <SheetHeader>
          <SheetTitle className="text-[#B0E4CC] text-2xl">Start ,Chess Match Section</SheetTitle>
          <SheetDescription className="text-gray-400">
           Input the active player's User ID to start the match.
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
            disabled={IsLoading}
            className="mt-4 py-4 "
            />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit" className="py-4 dark:bg-[#1F7D53] text-white">Start Chess Match</Button>
          <SheetClose render={<Button variant="outline" className="py-4">Close</Button>} />
        </SheetFooter>
    </form>
      </SheetContent>
      </Sheet>
    
  )
}


