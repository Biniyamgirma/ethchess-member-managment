import React from 'react'
import { StartMatchPopover} from '@/components/popover/start-match'
import { StopMatchPopover} from '@/components/popover/stop-match'
import { TotalFeeCarousel } from '@/components/carousel/total-fee'
function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-full space-y-6">
     <StartMatchPopover />
     <StopMatchPopover />
     {/* <TotalFeeCarousel /> */}
    </div>
  )
}

export default page
