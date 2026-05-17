'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Bell, 
  HelpCircle, 
  Wallet, 
  Users, 
  Bolt, 
  ArrowRight, 
  Globe, 
  Share2,
  Lock,
  ShieldCheck
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils/format'

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/30 min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-[100] flex items-center justify-between w-full h-20 px-6 md:px-12 bg-surface-dim/40 backdrop-blur-xl border-b border-outline-variant/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-black text-xl">G</span>
          </div>
          <span className="font-headline-lg text-[24px] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gaddaa
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-body-md text-primary font-bold border-b-2 border-primary py-2">Home</Link>
          <Link href="/dashboard/savings" className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2 rounded-lg">Savings</Link>
          <Link href="/dashboard/ajo" className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2 rounded-lg">Ajo</Link>
          <Link href="/dashboard/wallet" className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2 rounded-lg">Wallet</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="rounded-full p-2">
            <Bell className="w-5 h-5 text-on-surface-variant" />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full p-2">
            <HelpCircle className="w-5 h-5 text-on-surface-variant" />
          </Button>
          <Link href="/dashboard">
            <div className="w-10 h-10 rounded-full bg-surface-variant border border-outline-variant overflow-hidden">
              <img 
                alt="User profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6E7mmTLbr_aoXyQArWOXDSaX1WIsQCV8kHwF0__3MFDs9KWqdCNBUN_vcF9JK-tV3Z8L0tKv-NtmV29fFlT4nhinJEXY6NZQVOhIzVXfVMJHqU06kGhoncj8o1g3PyWZHWS2YqDde71eEfXHcxU7WUxUBkeUHGJLTt43NBjrTOu5yT9tzEvN_4AWY1hmg39gdT4w7nmHkdZuL2YPbOXaInv5LB2wjaMItEbBJsNUevOZ620EHspwgppJ9mO4n0WtOiwf0MBZGbw" 
              />
            </div>
          </Link>
        </div>
      </nav>

      <main className="relative overflow-hidden flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Decorative Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
          
          <motion.div 
            className="flex-1 text-center md:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="primary" className="mb-6 px-4 py-1.5 neon-glow-primary">
              NOW LIVE: AJO SAVINGS 2.0
            </Badge>
            <h1 className="text-[64px] font-black text-on-surface mb-6 tracking-tighter leading-tight">
              Na you get your bank.
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Your bridge to financial freedom. Manage your wealth with high-fidelity control, automated savings, and community-driven Ajo circles designed for the next generation of finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/dashboard">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary font-black shadow-lg neon-glow-primary">
                  Create Account
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="glass" size="lg" className="w-full sm:w-auto font-bold border border-outline-variant/30">
                  Login
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 relative z-10 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square glass-card rounded-[40px] flex items-center justify-center overflow-hidden">
              <img 
                alt="Save with Purpose Compass" 
                className="w-full h-full object-cover scale-110" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhrXp0Gntbh2mfOB4wiIQhQi8rEMc8obBH_3CcyVUxLxf27_4g5HM1-1M6V5C51rYKXl1Kdij57b_Vo86am1OLtVrXrcOxueGTQFBic0Dk3Ql5A0lH3_vt4_V-raYMVCgWbSPJXK8RDXnF-ZDmNwgbIEVTcFZSjbdfv75zkhXBZG_9YN5vhSDOBeFS1vtu0FBsa5dohn08Roo2LQzezOGcCOyl7VPexqs1SdAp9kITQgXH7Kd4btyydsg" 
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl border-l-4 border-primary">
                <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-widest">Global Reach</p>
                <p className="text-body-md text-on-surface font-bold">Saving With Purpose</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-[40px] font-bold text-on-surface mb-4">Precision Financial Tools</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Experience high-fidelity finishes on every transaction. Depth through luminosity, control through design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Secure Wallet */}
            <motion.div 
              className="md:col-span-8 group glass-card rounded-[32px] p-10 hover:border-primary/50 transition-all duration-500 overflow-hidden relative"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                    <Wallet className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-[32px] font-bold text-on-surface mb-4">Secure Wallet</h3>
                  <p className="text-body-md text-on-surface-variant max-w-md">
                    Multi-layer encryption with real-time biometric verification. Your assets are stored in a high-security vault with 99.9% uptime and instant liquidity.
                  </p>
                </div>
                <div className="mt-12 flex gap-3">
                  <div className="h-1.5 w-16 bg-primary rounded-full shadow-[0_0_10px_#b4c5ff]"></div>
                  <div className="h-1.5 w-4 bg-surface-variant rounded-full"></div>
                  <div className="h-1.5 w-4 bg-surface-variant rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-full h-full bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Ajo Circles */}
            <motion.div 
              className="md:col-span-4 glass-card rounded-[32px] p-10 border-l-4 border-secondary/40"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-[32px] font-bold text-on-surface mb-4">Ajo Circles</h3>
              <p className="text-body-md text-on-surface-variant mb-8">
                Harness the power of community savings. Join verified circles, set contributions, and take your turn with zero-interest loans powered by trust.
              </p>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background glass-card overflow-hidden">
                    <img 
                      alt="Member" 
                      className="w-full h-full object-cover" 
                      src={`https://i.pravatar.cc/150?u=${i}`} 
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-background glass-card bg-surface-variant flex items-center justify-center text-[12px] font-bold text-on-surface">
                  +12
                </div>
              </div>
            </motion.div>

            {/* Automated Savings */}
            <motion.div 
              className="md:col-span-12 glass-card rounded-[32px] p-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <Bolt className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-[40px] font-bold text-on-surface mb-4">Automated Savings</h3>
                <p className="text-body-md text-on-surface-variant mb-8 max-w-xl">
                  Set it and forget it. Our intelligent algorithms round up your transactions and move the difference into high-yield accounts while you sleep. Watch your wealth grow with neon precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Card className="px-6 py-4 rounded-2xl flex flex-col gap-1 min-w-[140px] bg-white/5">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Avg. Growth</span>
                    <span className="text-[24px] text-primary font-bold">+12.4%</span>
                  </Card>
                  <Card className="px-6 py-4 rounded-2xl flex flex-col gap-1 min-w-[140px] bg-white/5">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Active Goals</span>
                    <span className="text-[24px] text-secondary font-bold">8,420</span>
                  </Card>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                <div className="w-full h-64 glass-card rounded-3xl border border-primary/20 relative overflow-hidden p-6">
                  <div className="absolute inset-x-0 bottom-0 h-32 flex items-end px-4 gap-2">
                    {[40, 60, 50, 80, 70, 95].map((h, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "flex-1 rounded-t-lg transition-all border-t",
                          i === 5 ? "bg-primary/40 border-primary" : "bg-primary/20 border-primary/40"
                        )} 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-on-surface font-bold">Monthly Yield</h4>
                      <p className="text-label-sm text-on-surface-variant">Tracking performance</p>
                    </div>
                    <span className="text-primary font-bold text-[24px]">+$1,204.00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-12">
          <motion.div 
            className="max-w-4xl mx-auto glass-card rounded-[48px] p-16 text-center relative overflow-hidden border border-primary/30"
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px]"></div>
            <h2 className="text-[48px] font-black text-on-surface mb-6">Ready to control your future?</h2>
            <p className="text-body-md text-on-surface-variant mb-10 max-w-xl mx-auto">
              Join 50,000+ users building their financial fortress with Gaddaa. Experience the future of banking today.
            </p>
            <Link href="/dashboard">
              <Button variant="primary" size="lg" className="px-12 py-5 rounded-2xl font-black shadow-2xl neon-glow-primary active:scale-95 transition-all bg-gradient-to-r from-primary to-secondary">
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant/10 flex flex-col items-center gap-8">
        <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-black">G</span>
              </div>
              <span className="font-headline-lg text-[20px] font-black text-on-surface">Gaddaa</span>
            </div>
            <p className="text-[12px] text-on-surface-variant max-w-xs text-center md:text-left">
              © 2024 Gaddaa Fintech. Built for the future of finance.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="text-[12px] text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[12px] text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[12px] text-on-surface-variant hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="#" className="text-[12px] text-on-surface-variant hover:text-primary transition-colors">Security</Link>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer">
              <Globe className="w-5 h-5 text-on-surface-variant" />
            </div>
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer">
              <Share2 className="w-5 h-5 text-on-surface-variant" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
