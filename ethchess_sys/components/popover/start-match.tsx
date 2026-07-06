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

export function StartMatchPopover() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="secondary" className="bg-green-500 hover:bg-green-600 text-white px-20 py-12">
          Start Match
        </Button>} />
        <PopoverContent className="w-64" align="center">
          <PopoverHeader>
            <PopoverTitle>Start Match</PopoverTitle>
            <PopoverDescription>
              Enter Customer Id and Click Start Match to start the match. 
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="width" className="w-1/2">
                Customer Id
                
              </FieldLabel>
              <Input id="width" defaultValue="" placeholder="ETH001 / U001" />
            </Field>
            <Field orientation="horizontal">
              <Input id="height" type="button" defaultValue="Start Match" /> <div className="bg-green-200 size-3 rounded-full"></div>
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}

