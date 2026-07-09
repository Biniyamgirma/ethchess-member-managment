"use client"

import { useState } from "react"
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
import { toast } from "sonner"
import { useRouter } from "next/navigation"
export function InputForm() {
  const router = useRouter();
  const countries = [
    { id: 1022, label: "Akaki Kality" },
    { id: 1023, label: "Nifas Silk Lafto" },
    { id: 1024, label: "Kolfe Keraniyo" },
    { id: 1025, label: "Bole" },
    { id: 1026, label: "Lideta" },
    { id: 1027, label: "Kirkos" },
    { id: 1028, label: "Yeka" },
    { id: 1029, label: "Addis Ketema" },
    { id: 1030, label: "Arada" },
    { id: 1031, label: "Gulele" },
    { id: 1032, label: "Lemi Kura" }
  ]

  // Form states
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [telegram,setTelegram] = useState("")
  const [lichess,setLichess] = useState("")
  const [cdc,setCdc] = useState("")
  const [phone, setPhone] = useState("")
  const [subcity, setSubcity] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [userFrom, setUserFrom] = useState("")
  
  // UI Control states
  const [isLoading, setIsLoading] = useState(false)
  const [generatedId, setGeneratedId] = useState<string | null>(null)
  const [showSuccessCard, setShowSuccessCard] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          middleName: middleName.trim(),
          lastName: lastName.trim(),
          telegram: telegram.trim(),
          phone: phone.trim(),
          subcity: subcity,
          address: address.trim(),
          password: password,
          userFrom: userFrom.trim(),
          lichess:lichess.trim(),
          cdc:cdc.trim()
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to register member.")
      }

      toast.success("Account created successfully!")
      
      // Capture the generated 7-character VarChar ID from your backend logic
      setGeneratedId(data.member.id)
      setShowSuccessCard(true)

      // Reset form fields
      setFirstName("")
      setMiddleName("")
      setLastName("")
      setTelegram("")
      setPhone("")
      setSubcity("")
      setAddress("")
      setPassword("")
      setUserFrom("")
      setCdc("")
      setLichess("")
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-full max-w-sm top-20 mb-6">
      <form onSubmit={handleSubmit} className="w-full">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="form-first-name">First Name</FieldLabel>
            <Input
              id="form-first-name"
              type="text"
              placeholder="Abebe"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value ?? "")}
              disabled={isLoading}
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
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              disabled={isLoading}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-last-name">Last Name</FieldLabel>
            <Input
              id="form-last-name"
              type="text"
              placeholder="Alemu"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value ?? "")}
              disabled={isLoading}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-telegram">Telegram Username</FieldLabel>
            <Input 
              id="form-telegram" 
              type="text" 
              placeholder="@hello_" 
              value={telegram}
              onChange={(e) => setTelegram(e.target.value ?? "")}
              disabled={isLoading}
            />
            <FieldDescription>
              We&apos;ll never share your email with anyone.
            </FieldDescription>
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
              <Input 
                id="form-phone" 
                type="tel" 
                placeholder="09 12 345 6789" 
                value={phone}
                onChange={(e) => setPhone(e.target.value ?? "")}
                disabled={isLoading}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-subcity">Subcity</FieldLabel>
              <Select 
                value={subcity} 
                onValueChange={(value) => setSubcity(value ?? "")}
                disabled={isLoading}
              >
                <SelectTrigger id="form-subcity">
                  <SelectValue placeholder="Arada" />
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
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="form-lichess">Lichess Username</FieldLabel>
              <Input 
                id="form-lichess" 
                type="text" 
                placeholder="The_rook" 
                value={lichess}
                onChange={(e) => setLichess(e.target.value ?? "")}
                disabled={isLoading}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-cdc">Chess.com Username</FieldLabel>
              <Input 
                id="form-cdc" 
                type="text" 
                placeholder="hunter_01" 
                value={cdc}
                onChange={(e) => setCdc(e.target.value ?? "")}
                disabled={isLoading}
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="form-address">Address</FieldLabel>
            <Input 
              id="form-address" 
              type="text" 
              placeholder="Megenana" 
              value={address}
              onChange={(e) => setAddress(e.target.value ?? "")}
              disabled={isLoading}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-password">Password</FieldLabel>
            <Input 
              id="form-password" 
              type="password" 
              placeholder="••••••••" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value ?? "")}
              disabled={isLoading}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-About-Us">Where Did You Hear About Us?</FieldLabel>
            <Input
              id="form-About-Us"
              type="text"
              placeholder="instagram, facebook, youtube, etc"
              required
              value={userFrom}
              onChange={(e) => setUserFrom(e.target.value ?? "")}
              disabled={isLoading}
            />
          </Field>
          <Field orientation="horizontal">
            <Button type="button" variant="outline" disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "Submit"}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      {/* Red Warning/Success Screen Overlay Card */}
      {showSuccessCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 bg-green-600 text-white rounded-xl shadow-2xl border-2 border-green-800 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-white/20 rounded-full animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-13.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-black tracking-tight">CRITICAL INFORMATION</h2>
              
              <p className="text-red-100 text-sm leading-relaxed">
                Your account was successfully registered. You must copy and securely save the ID displayed below.
              </p>

              <div className="w-full py-4 bg-black/30 rounded-lg border border-white/20 select-all cursor-pointer group relative" title="Click to copy">
                <span className="block text-3xl font-mono font-bold tracking-widest text-yellow-300">
                  {generatedId}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-red-200 block mt-1">
                  Your ETHCHESS ID (Select to copy)
                </span>
              </div>

              <p className="text-xs font-semibold text-red-200 bg-red-700/50 p-3 rounded border border-red-500/30">
                ⚠️ NOTE: You will need this exact ID to login or complete subsequent subscription registration actions. Do not lose it!
              </p>

              <Button 
                onClick={() => router.push("/")} 
                className="w-full mt-2 bg-white text-red-700 hover:bg-red-50 font-bold shadow"
              >
                I Have Saved My ID
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}