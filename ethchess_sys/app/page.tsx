"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
import { toast } from "sonner"

export default function Page() {
  const router = useRouter()
  
  // Local state to keep track of user inputs and request loading states
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          password: password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong during login.")
      }

      // Store JWT token for session tracking
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      // Trigger success toast notice
      toast.success("Welcome back! Redirecting...")

      // Redirect the user to the application dashboard
      router.push("/dashboard")
      
    } catch (err: any) {
      // Trigger error toast message with backend details
      toast.error(err.message || "An unexpected error occurred.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center justify-center min-h-screen w-3/4 space-x-0 md:space-x-6 md:space-y-4">
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
        
        <form onSubmit={handleSubmit} className="w-full max-w-sm mt-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">ETHCHESS ID / User ID</FieldLabel>
              <Input 
                id="fieldgroup-name" 
                placeholder="ETH001/U001" 
                required
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                disabled={isLoading}
              />
            </Field>
            
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
              <Input
                id="fieldgroup-password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <FieldDescription>
                Please ensure that your credentials are correct before submitting the form.
              </FieldDescription>
            </Field>
            
            <Field orientation="vertical" className="space-y-2">
              <Button 
                className="py-3 px-4 bg-accent-foreground text-background" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Submit"}
              </Button>
              <Button 
                className="py-3 px-4" 
                type="button" 
                variant="outline"
                onClick={() => router.push("/member-registration")}
                disabled={isLoading}
              >
                Register
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  )
}