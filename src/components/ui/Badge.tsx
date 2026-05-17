import * as React from "react"
import { cn } from "@/lib/utils/format"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'surface' | 'error'
}

function Badge({ className, variant = 'surface', ...props }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/20 text-primary border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30',
    outline: 'border border-outline-variant text-on-surface-variant',
    surface: 'bg-surface-variant text-on-surface-variant',
    error: 'bg-error-container text-on-error-container border-error/30',
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
