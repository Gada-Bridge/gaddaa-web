'use client'

import React from 'react'
import { Eye, Send, ArrowDownLeft } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatNaira } from '@/lib/utils/format'
import { motion } from 'framer-motion'

interface BalanceCardProps {
  balanceKobo: number;
  growth: number;
}

export function BalanceCard({ balanceKobo, growth }: BalanceCardProps) {
  return (
    <Card className="rounded-[2rem] p-10 relative overflow-hidden group">
      {/* Background Accent */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary-container/20 blur-[100px] rounded-full group-hover:bg-secondary-container/30 transition-all duration-700"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="text-[12px] uppercase tracking-widest font-medium">Total Available Balance</span>
            <Eye className="w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[48px] font-bold text-on-surface leading-tight">
              {formatNaira(balanceKobo)}
            </span>
            <span className="text-primary font-bold text-body-md">+{growth}%</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            className="rounded-2xl bg-gradient-to-r from-primary to-primary-container font-black shadow-lg"
          >
            <Send className="w-5 h-5 fill-on-primary" />
            <span>Send Money</span>
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="rounded-2xl border border-white/10 font-bold"
          >
            <ArrowDownLeft className="w-5 h-5" />
            <span>Request</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
