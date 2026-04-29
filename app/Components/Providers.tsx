"use client"
import { HeroUIProvider } from "@heroui/react"
import { SessionProvider } from "next-auth/react"

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <SessionProvider>{children}</SessionProvider>
        </HeroUIProvider>
    )
}