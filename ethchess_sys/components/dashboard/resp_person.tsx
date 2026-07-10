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
import {StartMatch} from '@/components/dashboard/start_the_match'
import {EndMatch} from '@/components/dashboard/end_match'



export function MatchManager() {
  return (
    <div className="relative w-full flex justify-center items-center md:space-x-8 space-x-4">
      <StartMatch />
      <EndMatch />
    </div>
    
  )
}


