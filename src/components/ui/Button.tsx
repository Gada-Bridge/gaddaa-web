import * as React from "react"
import { cn } from "@/lib/utils/format"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-on-primary font-bold hover:opacity-90 active:scale-95 transition-all',
      secondary: 'bg-secondary text-on-secondary font-bold hover:opacity-90 active:scale-95 transition-all',
      outline: 'border border-outline-variant text-on-surface hover:bg-surface-variant/20 active:scale-95 transition-all',
      ghost: 'text-on-surface-variant hover:bg-surface-variant/20 active:scale-95 transition-all',
      glass: 'glass-card text-on-surface hover:bg-white/10 active:scale-95 transition-all',
    }

    const sizes = {
      sm: 'px-4 py-2 text-label-sm rounded-lg',
      md: 'px-6 py-3 text-label-sm rounded-xl',
      lg: 'px-8 py-4 text-body-md rounded-2xl',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
