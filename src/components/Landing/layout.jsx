import React from 'react'

import { BackgroundGradient } from './background-gradient'
import { Header } from './header'
import { Footer } from './footer'
import '../../assests/styles/styles.css'
import { AuthProvider } from "../Authorization/Auth";

export function Layout({ children }) {
  return (
    <AuthProvider>
    <div className="relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl">
      <BackgroundGradient className="absolute top-0 bottom-0 left-1/2 ml-28 hidden w-1/2 lg:block" />

      <Header />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
      <Footer />
    </div>
    </AuthProvider>
  )
}
