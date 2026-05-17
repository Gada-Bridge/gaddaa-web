'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Wallet, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut, 
  HelpCircle,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils/format'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

import { useSidebarStore } from '@/lib/store/sidebar'
import { X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Savings', href: '/dashboard/savings', icon: TrendingUp },
  { name: 'Ajo', href: '/dashboard/ajo', icon: Users },
  { name: 'Wallet', href: '/dashboard/wallet', icon: CreditCard },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, close } = useSidebarStore()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden" 
          onClick={close}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 z-[110] flex flex-col h-screen border-r border-outline-variant/10 bg-surface-container-low/90 backdrop-blur-md w-72 pt-8 pb-8 transition-transform duration-300 md:translate-x-0 md:flex",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-6 right-6 md:hidden"
          onClick={close}
        >
          <X className="w-6 h-6" />
        </Button>
        <div className="px-8 mb-12">
          <Link href="/" className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-black">G</span>
            </div>
            <span className="font-headline-lg text-[20px] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gaddaa
            </span>
          </Link>
          <div className="mt-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
            <img 
              alt="Gaddaa user" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5vIZ2xQJQP92KoYIQyPJiAt-YXiP_gXn08u851jT2mdOvPdwsotlP2PCjfA6xEOJ2bCt2Igdh1tGKyLLOU2bpqpavpqGof2Cp0lBBLlkx6CYmeLjo0O2Vd0S7MYBaljg5ihBOM51oQ2L2AqnPf5bMdUdDL-ine51_l74NwL8Z59EEZ9QW-HXpTcekDb0BeiEBpioHPi5QvStbNiHJyirUkqv8y6ZEIwWX0Fdrm29ZAMUIdAMrBKrIP0Am-CuWzt2FVXAY96maEw" 
            />
          </div>
          <div>
            <p className="text-[12px] font-medium text-on-surface-variant">Welcome back</p>
            <p className="text-body-md font-bold text-on-surface">Managing your wealth</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 transition-all duration-300 relative",
                isActive 
                  ? "bg-primary/10 text-primary border-r-4 border-primary" 
                  : "text-on-surface-variant hover:bg-surface-variant/20"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "fill-primary/20")} />
              <span className="font-body-md">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/5 -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto px-6">
        <Button 
          variant="primary" 
          className="w-full bg-gradient-to-r from-primary to-secondary-container neon-glow"
        >
          Upgrade to Premium
        </Button>
        
        <div className="mt-8 flex flex-col gap-1">
          <Link 
            href="/support" 
            className="flex items-center gap-4 text-on-surface-variant px-2 py-3 hover:text-primary transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-label-sm">Support</span>
          </Link>
          <button 
            className="flex items-center gap-4 text-on-surface-variant px-2 py-3 hover:text-error transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-label-sm">Logout</span>
          </button>
        </div>
      </div>
    </aside>
    </>
  )
}
