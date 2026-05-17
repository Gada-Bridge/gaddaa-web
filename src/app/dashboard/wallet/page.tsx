'use client'

import React from 'react'
import { PlusCircle, ArrowUpRight, ArrowDownLeft, CreditCard, Shield, Settings, Copy, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { mockUser, mockTransactions } from '@/lib/mock/dashboard'
import { formatNaira, cn } from '@/lib/utils/format'
import { motion } from 'framer-motion'
import { TransactionRow } from '@/components/dashboard/TransactionRow'

export default function WalletPage() {
  const [showCardNumber, setShowCardNumber] = React.useState(false)

  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-bold text-on-surface">Your Wallet</h1>
          <p className="text-body-md text-on-surface-variant">Manage your funds, cards, and transactions.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="glass" className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            <span>Fund Wallet</span>
          </Button>
          <Button variant="primary" className="flex items-center gap-2">
            <ArrowUpRight className="w-5 h-5" />
            <span>Withdraw</span>
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Wallet Area (7 Columns) */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          {/* Virtual Card */}
          <section className="space-y-4">
            <h3 className="text-[20px] font-bold text-on-surface">Active Cards</h3>
            <Card className="aspect-[1.586/1] w-full max-w-[450px] bg-gradient-to-br from-[#1a1c1c] to-[#0c0f0f] border-primary/20 relative overflow-hidden group p-8 flex flex-col justify-between shadow-2xl">
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-on-surface-variant font-medium">Virtual Debit Card</p>
                  <h4 className="text-[24px] font-black text-on-surface">Gaddaa Black</h4>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-primary/80 blur-[2px]" />
                  <div className="w-8 h-8 rounded-full bg-secondary/80 blur-[2px] -ml-4" />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-4">
                  <p className="text-[24px] font-mono tracking-[0.2em] text-on-surface">
                    {showCardNumber ? "4521 8802 1290 4421" : "•••• •••• •••• 4421"}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-1 hover:bg-white/10"
                    onClick={() => setShowCardNumber(!showCardNumber)}
                  >
                    {showCardNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-[10px] uppercase text-on-surface-variant font-bold">Expiry</p>
                    <p className="text-sm font-bold">12/28</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-on-surface-variant font-bold">CVV</p>
                    <p className="text-sm font-bold">***</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <p className="text-[18px] font-bold text-on-surface">{mockUser.name.toUpperCase()}</p>
                <div className="flex gap-2">
                  <Button variant="glass" size="sm" className="p-2 rounded-lg bg-white/5 border-white/5">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="glass" size="sm" className="p-2 rounded-lg bg-white/5 border-white/5">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Wallet Balance Summary */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-2 bg-surface-container-low/40">
              <p className="text-label-sm text-on-surface-variant font-medium uppercase tracking-wider">Available Balance</p>
              <h3 className="text-[32px] font-bold text-on-surface">{formatNaira(mockUser.balanceKobo)}</h3>
              <div className="flex items-center gap-2 text-primary">
                <ArrowDownLeft className="w-4 h-4" />
                <span className="text-sm font-bold">+₦12,400.00 today</span>
              </div>
            </Card>
            <Card className="p-6 space-y-2 bg-surface-container-low/40">
              <p className="text-label-sm text-on-surface-variant font-medium uppercase tracking-wider">Total Spending</p>
              <h3 className="text-[32px] font-bold text-on-surface">{formatNaira(8450000)}</h3>
              <div className="flex items-center gap-2 text-secondary">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm font-bold">-₦4,500.00 today</span>
              </div>
            </Card>
          </section>
        </div>

        {/* Side History Panel (5 Columns) */}
        <aside className="col-span-12 lg:col-span-5 space-y-8">
          <Card className="p-0 overflow-hidden border-outline-variant/10">
            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="text-[20px] font-bold text-on-surface">Recent Transactions</h3>
              <Button variant="ghost" size="sm" className="text-primary font-bold">See All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody className="divide-y divide-outline-variant/10">
                  {mockTransactions.slice(0, 6).map((tx) => (
                    <TransactionRow key={tx.id} transaction={tx} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-surface-container-lowest/50 text-center">
              <p className="text-label-sm text-on-surface-variant">
                Looking for older transactions? <span className="text-primary cursor-pointer hover:underline">Download Statement</span>
              </p>
            </div>
          </Card>

          {/* Quick Security Actions */}
          <Card className="p-6 space-y-4">
            <h3 className="text-[20px] font-bold text-on-surface">Security</h3>
            <div className="space-y-3">
              {[
                { label: 'Freeze Card', icon: Shield, color: 'text-secondary' },
                { label: 'Manage Limits', icon: Settings, color: 'text-on-surface-variant' },
                { label: 'Request Physical Card', icon: CreditCard, color: 'text-primary' },
              ].map((action, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-lg bg-surface-variant/40 flex items-center justify-center", action.color)}>
                      <action.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-on-surface">{action.label}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  )
}
