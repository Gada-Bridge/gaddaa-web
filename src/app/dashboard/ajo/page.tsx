'use client'

import React from 'react'
import { PlusCircle, Search, Bell, HelpCircle, Rocket, Diamond, Home, ArrowRight, UserPlus, Shield, Lock, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { mockAjoCircles } from '@/lib/mock/dashboard'
import { formatNaira, cn } from '@/lib/utils/format'
import { motion } from 'framer-motion'

export default function AjoPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-bold text-on-surface">Ajo Circles</h1>
          <p className="text-body-md text-on-surface-variant">Collaborative wealth building with people you trust.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="glass" className="flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            <span>Join Group</span>
          </Button>
          <Button variant="primary" className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            <span>Create Group</span>
          </Button>
        </div>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Main Content Area (8 Columns) */}
        <div className="col-span-12 xl:col-span-8 space-y-8">
          {/* Active Circles */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[24px] font-bold text-on-surface">Your Active Circles</h3>
              <Badge variant="primary">3 Active</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Tech Bros */}
              <Card className="p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <Badge variant="primary">Upcoming</Badge>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-on-surface">Tech Bros Syndicate</h4>
                    <p className="text-on-surface-variant text-label-sm">8 members • Monthly Cycle</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-end">
                    <span className="text-on-surface-variant text-label-sm font-medium">Cycle Progress</span>
                    <span className="text-primary font-bold text-body-md">Cycle 3/10</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[30%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <div>
                    <p className="text-on-surface-variant text-[11px] uppercase tracking-wider font-bold">Contribution</p>
                    <p className="text-on-surface font-bold text-[20px]">{formatNaira(5000000)}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-full p-3 hover:bg-primary/20 text-primary">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </Card>

              {/* Card 2 - Lagos Elite */}
              <Card className="p-6 relative overflow-hidden group border-primary/30 active-glow">
                <div className="absolute top-0 right-0 p-4">
                  <Badge variant="secondary">Paid</Badge>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                    <Diamond className="w-8 h-8 fill-secondary/20" />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-on-surface">Lagos Elite Savings</h4>
                    <p className="text-on-surface-variant text-label-sm">12 members • Bi-Weekly Cycle</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-end">
                    <span className="text-on-surface-variant text-label-sm font-medium">Cycle Progress</span>
                    <span className="text-secondary font-bold text-body-md">Cycle 8/12</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-primary-container w-[66%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <div>
                    <p className="text-on-surface-variant text-[11px] uppercase tracking-wider font-bold">Contribution</p>
                    <p className="text-on-surface font-bold text-[20px]">{formatNaira(12000000)}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-full p-3 hover:bg-primary/20 text-primary">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </section>

          {/* Activity Feed */}
          <section className="space-y-4">
            <h3 className="text-[24px] font-bold text-on-surface">Recent Activity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-on-surface font-bold">Contribution Received</p>
                    <p className="text-on-surface-variant text-sm">Tech Bros Syndicate • Cycle 3 Payment</p>
                  </div>
                </div>
                <p className="text-primary font-bold">+₦50k</p>
              </Card>
              <Card className="p-6 flex flex-col justify-center items-center text-center">
                <p className="text-secondary font-bold text-[24px]">2 Days</p>
                <p className="text-on-surface-variant text-sm">Until your payout from Lagos Elite</p>
              </Card>
            </div>
          </section>
        </div>

        {/* Side Panel (4 Columns) */}
        <aside className="col-span-12 xl:col-span-4 space-y-8">
          {/* Circle Discovery */}
          <Card className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-bold text-on-surface">Circle Discovery</h3>
              <Button variant="ghost" size="sm" className="text-primary hover:underline">View All</Button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Abuja Real Estate Devs', type: 'Verified', amount: '₦200k/mo', spots: '4 Spots left', icon: Shield },
                { name: 'SaaS Founders\' Hub', type: 'Private', amount: '₦100k/mo', spots: 'Invite only', icon: Lock },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="text-on-surface font-bold group-hover:text-primary transition-colors">{item.name}</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-2">Focused on property acquisition.</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-on-surface-variant uppercase">{item.amount}</span>
                      <span className={cn(
                        "text-[11px] font-bold uppercase",
                        item.spots.includes('left') ? "text-primary" : "text-secondary"
                      )}>{item.spots}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Invites */}
          <Card className="p-6 space-y-4 border-primary/20 bg-primary/5">
            <h3 className="text-[20px] font-bold text-on-surface">Pending Invites</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-variant" />
                <p className="text-sm font-medium">
                  <span className="font-bold text-on-surface">Sarah Oh</span> invited you to <span className="font-bold text-primary">FemTech Angels</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="primary" className="flex-1 py-2">Accept</Button>
                <Button variant="glass" className="flex-1 py-2">Decline</Button>
              </div>
            </div>
          </Card>

          {/* Equity Chart Sim */}
          <Card className="p-6 overflow-hidden relative">
            <h3 className="text-[20px] font-bold text-on-surface mb-2">Total Circle Equity</h3>
            <p className="text-on-surface font-bold text-[32px] mb-4">₦1,420,000.00</p>
            <div className="h-24 w-full flex items-end gap-1">
              {[40, 60, 55, 80, 70, 90, 100].map((h, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex-1 rounded-t transition-all cursor-pointer",
                    i === 6 ? "bg-secondary active-glow" : "bg-primary/40 hover:bg-primary"
                  )} 
                  style={{ height: `${h}%` }} 
                />
              ))}
            </div>
            <p className="text-on-surface-variant text-[11px] font-medium mt-4 text-center uppercase tracking-wider">Growth across all circles</p>
          </Card>
        </aside>
      </div>
    </div>
  )
}
