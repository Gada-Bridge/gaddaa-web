'use client'

import React from 'react'
import { PlusCircle, TrendingUp, Filter, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { BalanceCard } from '@/components/dashboard/BalanceCard'
import { SavingsGoalCard } from '@/components/dashboard/SavingsGoalCard'
import { AjoCircleCard } from '@/components/dashboard/AjoCircleCard'
import { TransactionRow } from '@/components/dashboard/TransactionRow'
import { 
  mockUser, 
  mockSavingsGoals, 
  mockAjoCircles, 
  mockTransactions 
} from '@/lib/mock/dashboard'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header & Greetings */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[32px] font-bold text-on-surface tracking-tight">
            Welcome back, {mockUser.name}
          </h1>
          <p className="text-on-surface-variant text-body-md">
            Your portfolio grew by {mockUser.portfolioGrowth}% this month. Keep it up!
          </p>
        </motion.div>
        
        <div className="flex gap-4">
          <Button variant="glass" className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            <span>Add Funds</span>
          </Button>
          <Button variant="primary" className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>Analytics</span>
          </Button>
        </div>
      </section>

      {/* Total Balance Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <BalanceCard 
          balanceKobo={mockUser.balanceKobo} 
          growth={2.4} 
        />
      </motion.section>

      {/* Bento Grid: Savings & Ajo */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Savings Goals */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-bold text-on-surface">Savings Goals</h2>
            <Button variant="ghost" size="sm" className="text-primary hover:underline">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockSavingsGoals.slice(0, 2).map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <SavingsGoalCard goal={goal} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ajo Circles Status */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-bold text-on-surface">Ajo Circles</h2>
            <Button variant="ghost" size="sm">
              <PlusCircle className="w-5 h-5 text-on-surface-variant" />
            </Button>
          </div>
          <Card className="rounded-2xl p-4 divide-y divide-outline-variant/10">
            {mockAjoCircles.map((circle, index) => (
              <motion.div
                key={circle.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AjoCircleCard circle={circle} />
              </motion.div>
            ))}
            <div className="pt-4">
              <Button 
                variant="ghost" 
                className="w-full border border-dashed border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-all font-bold flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Join New Circle</span>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Activity Table */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] font-bold text-on-surface">Recent Activity</h2>
          <div className="flex gap-2">
            <Button variant="glass" size="sm" className="p-2">
              <Filter className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="sm" className="p-2">
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <Card className="rounded-[1.5rem] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/10 bg-white/[0.02]">
                  <th className="px-8 py-5 text-[12px] font-medium text-on-surface-variant uppercase tracking-wider">Transaction</th>
                  <th className="px-8 py-5 text-[12px] font-medium text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="px-8 py-5 text-[12px] font-medium text-on-surface-variant uppercase tracking-wider">Category</th>
                  <th className="px-8 py-5 text-[12px] font-medium text-on-surface-variant uppercase tracking-wider">Amount</th>
                  <th className="px-8 py-5 text-[12px] font-medium text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {mockTransactions.map((tx) => (
                  <TransactionRow key={tx.id} transaction={tx} />
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </div>
  )
}
