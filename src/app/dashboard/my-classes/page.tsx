"use client";

import { useState } from "react";
import { 
  BookOpen, 
  Clock, 
  Users, 
  PlayCircle, 
  CheckCircle2, 
  Search, 
  Sparkles,
  Layers,
  GraduationCap
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
  accentColor: string;
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
    accentColor: "from-purple-500 to-indigo-600",
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
    accentColor: "from-blue-500 to-cyan-600",
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
    accentColor: "from-emerald-500 to-teal-600",
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
    accentColor: "from-orange-500 to-amber-600",
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
    <div className="space-y-8 pb-12">
      {/* Redesigned Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 text-white shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-900/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Semester Dashboard</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              My Enrolled Classes
            </h1>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Manage your active coursework, monitor lecture completions, and pick up right where you left off.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-zinc-800/60 border border-zinc-700/50 p-4 rounded-2xl backdrop-blur-md">
            <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">{courses.length}</span>
              <p className="text-xs text-zinc-400 font-medium">Active Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
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

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {(["All", "In Progress", "Completed"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                filterStatus === status
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300"
          >
            <div>
              {/* Card Top Meta */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5 text-purple-500" />
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

              {/* Course Title & Instructor */}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {course.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Instructor: <span className="text-zinc-700 dark:text-zinc-300">{course.instructor}</span>
              </p>

              {/* Progress Section */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-500 dark:text-zinc-400">Progress</span>
                  <span className="text-zinc-900 dark:text-zinc-100">{course.progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${course.accentColor} transition-all duration-500 rounded-full`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-0.5">
                  <span>{course.completedLectures}/{course.totalLectures} lectures completed</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <Users className="w-4 h-4 text-purple-500" />
                <span>{course.studentsCount} students</span>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition-all shadow-md shadow-purple-600/20"
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