"use client";

import Link from "next/link";
import { Heart, ShieldCheck, HelpCircle, FileText } from "lucide-react";

export default function DashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-4 mt-auto bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        
        {/* Left: Copyright & Branding */}
        <div className="flex items-center gap-1.5 font-medium">
          <span>© {currentYear} DevBook Dashboard. Made with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          <span>for learners.</span>
        </div>

        {/* Center/Right: Quick Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="/privacy" 
            className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy</span>
          </Link>
          <Link 
            href="/terms" 
            className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms</span>
          </Link>
          <Link 
            href="/support" 
            className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}