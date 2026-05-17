'use client'

import React from 'react'
import { PlusCircle, Lock, Calendar, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { mockSavingsGoals } from '@/lib/mock/dashboard'
import { formatNaira, cn } from '@/lib/utils/format'
import { motion } from 'framer-motion'

export default function SavingsPage() {
  const totalSaved = mockSavingsGoals.reduce((acc, goal) => acc + goal.currentKobo, 0)
  
  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-bold text-on-surface">Savings Goals</h1>
          <p className="text-body-md text-on-surface-variant">Track your progress and build your future.</p>
        </div>
        <Button variant="primary" size="md" className="flex items-center gap-2">
          <PlusCircle className="w-5 h-5" />
          <span>Create New Goal</span>
        </Button>
      </header>

      {/* Summary Card */}
      <section>
        <Card className="rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Lock className="w-8 h-8 text-primary fill-primary/20" />
              </div>
              <div>
                <span className="text-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Total Locked Savings</span>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-[48px] font-bold text-on-surface">{formatNaira(totalSaved)}</h3>
                  <span className="text-secondary font-bold text-body-md">+12.4% this month</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-label-sm text-on-surface-variant">Next Unlock</p>
                <p className="text-body-md text-on-surface font-bold">Oct 24, 2024</p>
              </div>
              <div className="w-[1px] h-12 bg-outline-variant/20 mx-2"></div>
              <div className="text-right">
                <p className="text-label-sm text-on-surface-variant">Active Goals</p>
                <p className="text-body-md text-on-surface font-bold">{mockSavingsGoals.length} Total</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Bento Grid of Goal Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {mockSavingsGoals.map((goal, index) => {
          const progress = (goal.currentKobo / goal.targetKobo) * 100
          const isSecondary = index % 2 === 1

          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 flex flex-col group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-white/10">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "p-4 rounded-2xl border border-outline-variant/10 shadow-lg transition-all duration-500 bg-surface-container-high",
                    isSecondary ? "group-hover:neon-glow-secondary" : "group-hover:neon-glow"
                  )}>
                    <div className="w-12 h-12 flex items-center justify-center">
                      {/* Icon placeholder since we don't have the 3D images */}
                      <div className={cn(
                        "w-8 h-8 rounded-lg",
                        isSecondary ? "bg-secondary" : "bg-primary"
                      )} />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-label-sm text-on-surface-variant">Completion</span>
                    <span className={cn(
                      "text-[28px] font-bold",
                      isSecondary ? "text-secondary" : "text-primary"
                    )}>
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[28px] font-bold text-on-surface mb-1">{goal.name}</h4>
                  <p className="text-label-sm text-on-surface-variant flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Unlock date: {new Date(goal.unlockDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex justify-between text-label-sm mb-1">
                    <span className="text-on-surface-variant">Saved: {formatNaira(goal.currentKobo)}</span>
                    <span className="text-on-surface">Target: {formatNaira(goal.targetKobo)}</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full transition-all duration-500",
                        isSecondary 
                          ? "bg-gradient-to-r from-secondary to-primary" 
                          : "bg-gradient-to-r from-primary to-secondary"
                      )}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  
                  {/* Hover Actions */}
                  <div className="flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pt-2">
                    <Button variant="glass" className="flex-1 bg-white/10 hover:bg-white/20">
                      Add Funds
                    </Button>
                    <Button variant="glass" size="sm" className="p-3 bg-white/5">
                      <Settings className="w-5 h-5 text-on-surface-variant hover:text-primary transition-colors" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}

        {/* Empty State / Add New Goal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: mockSavingsGoals.length * 0.1 }}
        >
          <div className="border-2 border-dashed border-outline-variant/30 rounded-3xl p-6 flex flex-col items-center justify-center group cursor-pointer hover:border-primary transition-colors min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
              <PlusCircle className="w-8 h-8 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
            <h4 className="text-body-md text-on-surface-variant group-hover:text-on-surface font-bold">New Goal</h4>
            <p className="text-label-sm text-on-surface-variant text-center mt-1">Start saving for your next adventure.</p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
