'use client'

import React from 'react'
import { Search, Bell, HelpCircle, Menu } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/format'

import { useSidebarStore } from '@/lib/store/sidebar'

export function TopBar() {
  const { toggle } = useSidebarStore()

  return (
    <header className="sticky top-0 z-[100] flex items-center justify-between w-full h-20 px-8 bg-surface-dim/40 backdrop-blur-xl border-b border-outline-variant/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-4 flex-1">
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={toggle}
        >
          <Menu className="w-6 h-6" />
        </Button>
        
        <div className="relative w-full max-w-md hidden lg:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
          <Input 
            placeholder="Search transactions, goals..." 
            className="pl-12"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Button variant="ghost" size="sm" className="rounded-full p-2">
          <Bell className="w-5 h-5 text-on-surface-variant" />
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full p-2">
          <HelpCircle className="w-5 h-5 text-on-surface-variant" />
        </Button>
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
          <span className="font-bold text-primary">C</span>
        </div>
      </div>
    </header>
  )
}
