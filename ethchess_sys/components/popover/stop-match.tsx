import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function StopMatchPopover() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="secondary" className="bg-red-500 hover:bg-red-600 text-white px-20 py-12">
          Stop Match
        </Button>} />
        <PopoverContent className="w-64" align="center">
          <PopoverHeader>
            <PopoverTitle>Stop Match</PopoverTitle>
            <PopoverDescription>
              Enter Customer Id and Click Stop Match to stop the match. 
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="user-id" className="w-1/2">
                Customer Id
              </FieldLabel>
              <Input id="user-id" defaultValue="ETH001 / U001" />
            </Field>
            <Field orientation="horizontal">
              <Input id="calculate-fees" type="button" defaultValue="Calculate fees" /> <div className="bg-green-500 size-3 rounded-full"></div>
            </Field>
            <Field orientation="horizontal">
              <Input id="match-cancelled" type="button" defaultValue="Match Cancelled" /> <div className="bg-red-500 size-3 rounded-full"></div>
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}

