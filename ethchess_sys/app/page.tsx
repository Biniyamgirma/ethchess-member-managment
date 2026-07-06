import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import ETHCHESS_LOGO from "@/public/ETHCHESS.jpg"
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-full">
      <div className="flex flex-col items-center justify-center min-h-screen  w-3/4 space-x-0 md:space-x-6 md:space-y-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src={ETHCHESS_LOGO}
            alt="ETHCHESS Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

      <h1 className="text-2xl font-bold">Welcome to ETHCHESS</h1>
      <p className="text-muted-foreground">
        Please fill out the form below to get started.
      </p>
      <div className="w-full max-w-sm mt-4">
        <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">ETHCHESS ID / User ID</FieldLabel>
        <Input id="fieldgroup-name" placeholder="ETH001/U001" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Password</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="password"
          placeholder="••••••••"
        />
        <FieldDescription>
          Please ensure that your credentials are correct before submitting the form.
        </FieldDescription>
      </Field>
      <Field orientation="vertical" className="space-y-2">
        <Button className='py-3 px-4' type="reset" variant="outline">
          Register
        </Button>
        <Button className="py-3 px-4 bg-accent-foreground " type="submit">
          Submit
        </Button>
      </Field>
    </FieldGroup>
      </div>
    </div>
    </div>
  )
}
