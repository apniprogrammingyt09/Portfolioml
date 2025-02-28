import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Krish Bhagat - AI/ML Developer & Full-Stack Engineer",
  description:
    "Portfolio of Krish Bhagat, AI/ML developer, full-stack web enthusiast, and co-founder of KodRish Innovation & Solution LLP.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}



import './globals.css'