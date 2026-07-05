import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function TotalFeeCarousel() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
    <div className="text-center mb-4 text-lg font-medium text-gray-600">
        <p><span className="font-bold text-white">Match ID</span>: 12345</p>
        <h1 className="text-2xl font-bold text-white">Total Chess Minutes and Fee</h1>
        <h3 className="text-lg text-white">Player 1: John Doe</h3>
        <h3 className="text-lg text-white">Player 2: Jane Smith</h3>
    </div>
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
        {Array.from({ length: 1 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 space-y-4">
                  <span className="text-4xl font-semibold">{20 + ` min`}</span>
                  <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="text-center mt-4 text-lg font-medium text-gray-600">
      Total Fee: <span className="font-bold text-white" >200birr</span>
    </div>
    </div>
  )
}
