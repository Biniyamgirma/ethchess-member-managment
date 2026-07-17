import { Geist, Geist_Mono,Space_Grotesk, } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import localFont from 'next/font/local'

// const fontMono = localFont({src:'../fonts/Satoshi-Regular.otf'})

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const font_space_grotesk = Space_Grotesk({subsets:['latin'],variable:'--font-sans'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased",
        //  fontMono.className,
          "font-sans", font_space_grotesk.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
