'use client'

import React from 'react'
import { Building2, Plane, BookOpen, Briefcase, type LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { formatNaira } from '@/lib/utils/format'
import { SavingsGoal } from '@/lib/mock/dashboard'
import { cn } from '@/lib/utils/format'

const iconMap: Record<string, LucideIcon> = {
  apartment: Building2,
  vacation: Plane,
  education: BookOpen,
  business: Briefcase,
}

export function SavingsGoalCard({ goal }: { goal: SavingsGoal }) {
  const Icon = iconMap[goal.category] || BookOpen
  const progress = (goal.currentKobo / goal.targetKobo) * 100

  return (
    <Card className="p-6 rounded-2xl hover:border-primary/40 transition-colors">
      <div className="flex justify-between items-start mb-6">
        <div className={cn(
          "p-3 rounded-xl bg-opacity-10",
          goal.category === 'vacation' ? "bg-secondary text-secondary" : "bg-primary text-primary"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-label-sm font-medium text-on-surface-variant">
          {Math.round(progress)}%
        </span>
      </div>
      
      <h3 className="text-body-md font-bold text-on-surface">{goal.name}</h3>
      <p className="text-label-sm text-on-surface-variant mb-4">
        {formatNaira(goal.currentKobo)} / {formatNaira(goal.targetKobo)}
      </p>
      
      <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full bg-gradient-to-r transition-all duration-500",
            goal.category === 'vacation' ? "from-secondary to-secondary-container" : "from-primary to-primary-container"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  )
}
