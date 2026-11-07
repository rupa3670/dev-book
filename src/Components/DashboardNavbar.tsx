"use client";

import { useState } from "react";
import { Bell, Search, Sun, Moon, Menu } from "lucide-react";

interface DashboardNavbarProps {
  userName?: string;
  userRole?: string;
  avatarUrl?: string;
  onSearchChange?: (value: string) => void;
}

export default function DashboardNavbar({
  userName = "Rupali Akter",
  userRole = "Student",
  avatarUrl,
  onSearchChange,
}: DashboardNavbarProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      {/* Left: Mobile Menu & Dynamic User Greeting */}
      <div className="flex items-center gap-4">
        <button 
          type="button"
          className="md:hidden p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
          aria-label="Open Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-zinc-900 dark:text-white">
            Hello, {userName}
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Welcome back to your DevBook dashboard.
          </p>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden md:flex items-center relative w-72">
        <span className="absolute left-3 text-zinc-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Search features, classes..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearchChange?.(e.target.value)
          }
          className="w-full pl-9 pr-4 py-2 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all border border-transparent dark:border-zinc-700"
        />
      </div>

      {/* Right: Actions & User Avatar */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          type="button"
          onClick={toggleDarkMode}
          className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Notifications */}
        <button 
          type="button"
          className="relative p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
        </button>

        {/* Dynamic User Profile Avatar */}
        <div className="flex items-center gap-3 pl-2 border-l border-zinc-200 dark:border-zinc-800">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={userName}
              className="w-10 h-10 rounded-xl object-cover border border-zinc-200 dark:border-zinc-700"
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-purple-500/20">
              {getInitials(userName)}
            </div>
          )}
          
          <div className="hidden lg:block text-left">
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              {userName}
            </p>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
              {userRole}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}