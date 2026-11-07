"use client";

import { useState } from "react";
import { 
  BookOpen, 
  Clock, 
  Users, 
  PlayCircle, 
  CheckCircle2, 
  Search, 
  Filter, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  progress: number;
  totalLectures: number;
  completedLectures: number;
  duration: string;
  studentsCount: number;
  status: "In Progress" | "Completed";
  imageGradient: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Full-Stack Web Development with MERN & Next.js",
    category: "Software Engineering",
    instructor: "Rupali Akter",
    progress: 75,
    totalLectures: 40,
    completedLectures: 30,
    duration: "12 Weeks",
    studentsCount: 1420,
    status: "In Progress",
    imageGradient: "from-purple-600 to-indigo-500",
  },
  {
    id: "2",
    title: "Advanced Data Structures & Algorithms in TypeScript",
    category: "Computer Science",
    instructor: "Dr. Rahman",
    progress: 45,
    totalLectures: 32,
    completedLectures: 14,
    duration: "8 Weeks",
    studentsCount: 980,
    status: "In Progress",
    imageGradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "3",
    title: "Database Management Systems & SQL Optimization",
    category: "Database",
    instructor: "Prof. Tanvir",
    progress: 100,
    totalLectures: 24,
    completedLectures: 24,
    duration: "6 Weeks",
    studentsCount: 1150,
    status: "Completed",
    imageGradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "4",
    title: "Computer Networks & Cisco Packet Tracer Labs",
    category: "Networking",
    instructor: "Engr. Farhan",
    progress: 60,
    totalLectures: 20,
    completedLectures: 12,
    duration: "5 Weeks",
    studentsCount: 740,
    status: "In Progress",
    imageGradient: "from-orange-600 to-amber-500",
  },
];

export default function MyClassesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"All" | "In Progress" | "Completed">("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "All" || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8 pb-10">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-8 text-white shadow-xl shadow-purple-500/10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Learning Hub</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Enrolled Classes
          </h1>
          <p className="mt-2 text-sm text-purple-100 leading-relaxed">
            Track your semester courses, monitor progress across lectures, and jump right back into your active coding sessions.
          </p>
        </div>
        {/* Decorative background element */}
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Controls Bar: Search & Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <span className="absolute left-3.5 top-3 text-zinc-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search classes or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-sm"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {(["All", "In Progress", "Completed"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                filterStatus === status
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wide">
                  {course.category}
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  course.status === "Completed"
                    ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                    : "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                }`}>
                  {course.status === "Completed" ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                  {course.status}
                </span>
              </div>

              {/* Title & Instructor */}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {course.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Instructor: <span className="text-zinc-700 dark:text-zinc-300">{course.instructor}</span>
              </p>

              {/* Progress Bar */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-500 dark:text-zinc-400">Course Progress</span>
                  <span className="text-zinc-900 dark:text-zinc-100">{course.progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${course.imageGradient} transition-all duration-500 rounded-full`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                  <span>{course.completedLectures} of {course.totalLectures} lectures completed</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>

            {/* Card Footer: Meta & Action Button */}
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                <Users className="w-4 h-4" />
                <span>{course.studentsCount} enrolled</span>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-purple-600 dark:hover:bg-purple-600 text-xs font-semibold transition-colors shadow-sm"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Continue</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}