"use client";

import { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  Sparkles, 
  BookOpen, 
  Laptop, 
  Layers,
  ChevronRight
} from "lucide-react";

interface ScheduleItem {
  id: string;
  time: string;
  endTime: string;
  courseCode: string;
  courseTitle: string;
  instructor: string;
  room: string;
  type: "Lecture" | "Lab" | "Online";
  day: "Saturday" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday";
  accentColor: string;
}

const scheduleData: ScheduleItem[] = [
  {
    id: "1",
    time: "09:00 AM",
    endTime: "10:30 AM",
    courseCode: "CSE-411",
    courseTitle: "Full-Stack Web Development (MERN & Next.js)",
    instructor: "Rupali Akter",
    room: "Lab 402 (Annex)",
    type: "Lab",
    day: "Saturday",
    accentColor: "from-purple-500 to-indigo-600",
  },
  {
    id: "2",
    time: "11:00 AM",
    endTime: "12:30 PM",
    courseCode: "CSE-401",
    courseTitle: "Advanced Data Structures & Algorithms",
    instructor: "Dr. Rahman",
    room: "Room 305",
    type: "Lecture",
    day: "Saturday",
    accentColor: "from-blue-500 to-cyan-600",
  },
  {
    id: "3",
    time: "02:00 PM",
    endTime: "03:30 PM",
    courseCode: "CSE-305",
    courseTitle: "Database Management Systems & SQL",
    instructor: "Prof. Tanvir",
    room: "Room 501",
    type: "Lecture",
    day: "Sunday",
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "4",
    time: "10:00 AM",
    endTime: "12:00 PM",
    courseCode: "CSE-302",
    courseTitle: "Computer Networks & Cisco Packet Tracer Labs",
    instructor: "Engr. Farhan",
    room: "Networking Lab 2",
    type: "Lab",
    day: "Monday",
    accentColor: "from-orange-500 to-amber-600",
  },
  {
    id: "5",
    time: "11:30 AM",
    endTime: "01:00 PM",
    courseCode: "MAT-201",
    courseTitle: "Linear Algebra & Numerical Methods",
    instructor: "Dr. Sultana",
    room: "Room 204",
    type: "Lecture",
    day: "Tuesday",
    accentColor: "from-pink-500 to-rose-600",
  },
  {
    id: "6",
    time: "03:00 PM",
    endTime: "04:30 PM",
    courseCode: "CSE-499",
    courseTitle: "Final Year Thesis & Project Consultation",
    instructor: "Panel Reviewers",
    room: "Online Zoom Session",
    type: "Online",
    day: "Wednesday",
    accentColor: "from-purple-600 to-pink-600",
  },
  {
    id: "7",
    time: "09:30 AM",
    endTime: "11:00 AM",
    courseCode: "CSE-411",
    courseTitle: "Next.js App Router Architecture & Security",
    instructor: "Rupali Akter",
    room: "Lab 402 (Annex)",
    type: "Lab",
    day: "Thursday",
    accentColor: "from-indigo-500 to-purple-600",
  },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>("Saturday");

  const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  const filteredSchedule = scheduleData.filter((item) => item.day === selectedDay);

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 text-white shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-900/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic Routine</span> <span>Academic Routine</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Weekly Class & Lab Schedule
            </h1>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Track your daily class timings, lecture locations, lab assignments, and instructor consultation hours seamlessly.
            </p>
          </div>

          {/* Quick Date Indicator */}
          <div className="flex items-center gap-4 bg-zinc-800/60 border border-zinc-700/50 p-4 rounded-2xl backdrop-blur-md">
            <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">{selectedDay}</span>
              <p className="text-xs text-zinc-400 font-medium">Current Active View</p>
            </div>
          </div>
        </div>
      </div>

      {/* Day Selector Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-3 rounded-2xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              selectedDay === day
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 scale-[1.02]"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            }`}
          >
            <span>{day}</span>
            {scheduleData.some((item) => item.day === day) && (
              <span className={`w-2 h-2 rounded-full ${selectedDay === day ? "bg-white" : "bg-purple-500"}`} />
            )}
          </button>
        ))}
      </div>

      {/* Schedule Timeline Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            Classes for {selectedDay}
          </h2>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            {filteredSchedule.length} scheduled sessions
          </span>
        </div>

        {filteredSchedule.length === 0 ? (
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">No Classes Today</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
              Enjoy your day off or use this time for self-study, coding practice, and assignment completions!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col md:flex-row md:items-center justify-between rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 gap-6"
              >
                {/* Left Side: Time & Course Code */}
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.accentColor} text-white shadow-md flex flex-col items-center justify-center min-w-[90px]`}>
                    <span className="text-xs font-bold tracking-wider">{item.time.split(" ")[1]}</span>
                    <span className="text-base font-black">{item.time.split(" ")[0]}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono font-bold text-purple-600 dark:text-purple-400 text-xs px-2.5 py-0.5 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                        {item.courseCode}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.type === "Lab"
                          ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                          : item.type === "Online"
                          ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                          : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                      }`}>
                        {item.type === "Lab" ? <Laptop className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors pt-1">
                      {item.courseTitle}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-purple-500" />
                        {item.instructor}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-500" />
                        {item.room}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Duration & Action */}
                <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-zinc-100 dark:border-zinc-800">
                  <div className="text-left md:text-right">
                    <span className="text-[11px] text-zinc-400 font-medium block">Duration</span>
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      {item.time} - {item.endTime}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-purple-600 hover:text-white text-zinc-700 dark:text-zinc-300 text-xs font-semibold transition-all shadow-sm group-hover:bg-purple-600 group-hover:text-white"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}