'use client'

import React from 'react'
import { ChevronRight, Users } from 'lucide-react'
import { AjoCircle } from '@/lib/mock/dashboard'

export function AjoCircleCard({ circle }: { circle: AjoCircle }) {
  return (
    <div className="py-4 flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-3">
        {circle.isUserTurn ? (
          <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex -space-x-3 overflow-hidden">
            <div className="w-full h-full bg-primary/20 flex items-center justify-center font-bold text-[10px]">
              {circle.memberCount}+
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
            <Users className="w-5 h-5 text-on-surface-variant" />
          </div>
        )}
        <div>
          <p className="text-body-md font-bold text-on-surface group-hover:text-primary transition-colors">
            {circle.name}
          </p>
          <p className={circle.isUserTurn ? "text-label-sm text-primary" : "text-label-sm text-on-surface-variant"}>
            {circle.isUserTurn ? "Your turn in 12 days" : `Payout in ${new Date(circle.nextPayoutDate).toLocaleString('default', { month: 'short' })}`}
          </p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
    </div>
  )
}
