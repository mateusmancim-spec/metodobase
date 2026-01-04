import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emagreça de Forma Realista | E-book de Emagrecimento",
  description:
    "Método simples e comprovado para emagrecer sem dietas radicais ou treinos extremos. Receitas fáceis e treinos de 20-30 minutos.",
  generator: "v0.app",
  icons: {
    icon: "/base.jpg",
    apple: "/base.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
