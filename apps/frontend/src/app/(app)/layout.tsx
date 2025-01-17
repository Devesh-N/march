import React from "react"

import PageTracker from "@/src/components/PageTracker"
import { Sidebar } from "@/src/components/Sidebar/Sidebar"
import { Toaster } from "@/src/components/ui/toaster"
import { AuthProvider } from "@/src/contexts/AuthContext"
import ModalProvider from "@/src/contexts/ModalProvider"
import QueryProvider from "@/src/contexts/QueryProvider"
interface Props {
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <QueryProvider>
        <ModalProvider>
          <main className="flex h-screen bg-background">
            <PageTracker />
            <Sidebar />
            <section className="flex-1">{children}</section>
            <Toaster />
          </main>
        </ModalProvider>
      </QueryProvider>
    </AuthProvider>
  )
}

export default AppLayout
