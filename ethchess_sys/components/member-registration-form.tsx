"use client"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function InputForm() {
  const countries = [
  {
    id: 1022,
    label: "Akaki Kality"
  },
  {
    id: 1023,
    label: "Nifas Silk Lafto"
  },
  {
    id: 1024,
    label: "Kolfe Keraniyo"
  },
  {
    id: 1025,
    label: "Bole"
  },
  {
    id: 1026,
    label: "Lideta"
  },
  {
    id: 1027,
    label: "Kirkos"
  },
  {
    id: 1028,
    label: "Yeka"
  },
  {
    id: 1029,
    label: "Addis Ketema"
  },
  {
    id: 1030,
    label: "Arada"
  },
  {
    id: 1031,
    label: "Gulele"
  },
  {
    id: 1032,
    label: "Lemi Kura"
  }
]
  return (
    <form className="w-full max-w-sm ">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-first-name">First Name</FieldLabel>
          <Input
            id="form-first-name"
            type="text"
            placeholder="Abebe"
            required
            className="mt-4"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-middle-name">Middle Name</FieldLabel>
          <Input
            id="form-middle-name"
            type="text"
            placeholder="Kebede"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-last-name">Last Name</FieldLabel>
          <Input
            id="form-last-name"
            type="text"
            placeholder="Alemu"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+251 12 345 6789" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Subcity</FieldLabel>
            <Select id="form-country" name="subcity" required >
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem key={country.id} value={country.label}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input id="form-address" type="text" placeholder="Megenana" />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-password">Password</FieldLabel>
          <Input id="form-password" type="password" placeholder="••••••••" />
        </Field>
         <Field>
          <FieldLabel htmlFor="form-About-Us">Where Did You Hear About Us?</FieldLabel>
          <Input
            id="form-About-Us"
            type="text"
            placeholder="instagram, facebook, youtube, etc"
            required
          />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
