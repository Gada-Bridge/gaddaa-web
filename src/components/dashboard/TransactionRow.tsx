'use client'

import React from 'react'
import { ShoppingCart, Landmark, ArrowRightLeft, CreditCard, type LucideIcon } from 'lucide-react'
import { Transaction } from '@/lib/mock/dashboard'
import { formatNaira, cn } from '@/lib/utils/format'
import { Badge } from '@/components/ui/Badge'

const iconMap: Record<string, LucideIcon> = {
  'Subscription': ShoppingCart,
  'Investment': Landmark,
  'Transfer': ArrowRightLeft,
}

export function TransactionRow({ transaction }: { transaction: Transaction }) {
  const Icon = iconMap[transaction.category] || CreditCard
  const isNegative = transaction.amountKobo < 0

  return (
    <tr className="hover:bg-white/[0.02] transition-colors group">
      <td className="px-8 py-5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
            <Icon className={cn(
              "w-5 h-5",
              transaction.category === 'Investment' ? "text-secondary" : "text-primary"
            )} />
          </div>
          <div>
            <p className="text-body-md font-bold text-on-surface">{transaction.name}</p>
            <p className="text-label-sm text-on-surface-variant">ID: #{transaction.id}</p>
          </div>
        </div>
      </td>
      <td className="px-8 py-5 text-on-surface-variant">
        {new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </td>
      <td className="px-8 py-5">
        <Badge variant={transaction.category === 'Investment' ? 'secondary' : 'surface'}>
          {transaction.category}
        </Badge>
      </td>
      <td className={cn(
        "px-8 py-5 font-bold",
        isNegative ? "text-on-surface" : "text-primary"
      )}>
        {isNegative ? '- ' : '+ '}{formatNaira(Math.abs(transaction.amountKobo))}
      </td>
      <td className="px-8 py-5">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-2 h-2 rounded-full",
            transaction.status === 'completed' ? "bg-primary active-glow" : "bg-on-surface-variant"
          )} />
          <span className={cn(
            "text-label-sm",
            transaction.status === 'completed' ? "text-primary" : "text-on-surface-variant"
          )}>
            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
          </span>
        </div>
      </td>
    </tr>
  )
}
