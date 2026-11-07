"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut 
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Classes", href: "/dashboard/my-classes", icon: <BookOpen className="w-5 h-5" /> },
  { label: "My Grades", href: "/dashboard/grades", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Schedule", href: "/dashboard/schedule", icon: <Calendar className="w-5 h-5" /> },
  { label: "Messages", href: "/dashboard/messages", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Settings", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 justify-between transition-colors shrink-0 min-h-screen">
      <div>
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">
            DB
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              DevBook
            </h2>
            <span className="text-[10px] font-medium tracking-wider uppercase text-purple-600 dark:text-purple-400">
              Student Workspace
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl font-medium text-sm transition-all ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Section */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => console.log("Logging out...")}
          className="flex items-center gap-3.5 w-full px-4 py-3 rounded-2xl font-medium text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}