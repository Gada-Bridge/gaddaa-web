import React from 'react'
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-72">
        <TopBar />
        <main className="flex-1 p-4 md:p-8 max-w-[1400px] mx-auto w-full">
          {children}
        </main>
        <footer className="w-full mt-auto flex flex-col items-center gap-4 py-12 border-t border-outline-variant/10 bg-surface-container-lowest">
          <span className="font-headline-lg text-[24px] font-black text-on-surface">Gaddaa</span>
          <div className="flex flex-wrap justify-center gap-8 px-6">
            <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Cookie Policy</a>
            <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
          </div>
          <p className="text-[12px] text-on-surface-variant text-center max-w-lg px-6">
            © 2024 Gaddaa Fintech. Built for the future of finance. Gaddaa is a financial technology company, not a bank. Banking services provided by our licensed partner banks.
          </p>
        </footer>
      </div>
    </div>
  );
}
