"use client";

import { useState } from "react";
import { 
  GraduationCap, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Search, 
  Sparkles,
  CheckCircle2,
  FileText
} from "lucide-react";

interface GradeItem {
  id: string;
  courseCode: string;
  courseTitle: string;
  credits: number;
  grade: string;
  gradePoint: number;
  semester: string;
  status: "Completed" | "Ongoing";
}

const gradesData: GradeItem[] = [
  {
    id: "1",
    courseCode: "CSE-411",
    courseTitle: "Full-Stack Web Development (MERN & Next.js)",
    credits: 4.0,
    grade: "A+",
    gradePoint: 4.0,
    semester: "Fall 2026",
    status: "Ongoing",
  },
  {
    id: "2",
    courseCode: "CSE-401",
    courseTitle: "Advanced Data Structures & Algorithms",
    credits: 3.0,
    grade: "A",
    gradePoint: 3.75,
    semester: "Summer 2026",
    status: "Completed",
  },
  {
    id: "3",
    courseCode: "CSE-305",
    courseTitle: "Database Management Systems & SQL",
    credits: 3.0,
    grade: "A+",
    gradePoint: 4.0,
    semester: "Spring 2026",
    status: "Completed",
  },
  {
    id: "4",
    courseCode: "CSE-302",
    courseTitle: "Computer Networks & Cisco Packet Tracer",
    credits: 3.0,
    grade: "A",
    gradePoint: 3.75,
    semester: "Spring 2026",
    status: "Completed",
  },
  {
    id: "5",
    courseCode: "MAT-201",
    courseTitle: "Linear Algebra & Numerical Methods",
    credits: 3.0,
    grade: "A-",
    gradePoint: 3.50,
    semester: "Fall 2025",
    status: "Completed",
  },
];

export default function MyGradesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<string>("All");

  const semesters = ["All", "Fall 2026", "Summer 2026", "Spring 2026", "Fall 2025"];

  const filteredGrades = gradesData.filter((item) => {
    const matchesSearch = item.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.courseCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSemester = selectedSemester === "All" || item.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner & GPA Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hero Section */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 text-white shadow-2xl flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-900/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic Performance</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              My Grades & Transcript
            </h1>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-xl">
              Review your semester-wise academic standing, credit completions, and cumulative grade point averages in Computer Science & Engineering.
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-800/80">
            <div>
              <span className="text-xs text-zinc-400 font-medium">Total Completed Credits</span>
              <p className="text-lg font-bold text-white mt-0.5">16.0 Credits</p>
            </div>
            <div className="w-px h-8 bg-zinc-800 hidden sm:block" />
            <div>
              <span className="text-xs text-zinc-400 font-medium">Major Institution</span>
              <p className="text-lg font-bold text-white mt-0.5">Dhaka International University</p>
            </div>
          </div>
        </div>

        {/* CGPA Highlight Card */}
        <div className="rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-8 text-white shadow-xl shadow-purple-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
              Cumulative GPA
            </span>
            <Award className="w-8 h-8 text-purple-200" />
          </div>
          <div className="my-6">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight">3.82</span>
              <span className="text-purple-200 text-sm font-semibold">/ 4.00</span>
            </div>
            <p className="text-xs text-purple-100 mt-2 font-medium">
              Top Tier Standing (First Class Honors equivalent)
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold bg-white/10 p-3 rounded-2xl backdrop-blur-md">
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span>Consistent upward trend across semesters</span>
          </div>
        </div>
      </div>

      {/* Controls Bar: Search & Semester Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <span className="absolute left-3.5 top-3 text-zinc-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search by course code or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-sm"
          />
        </div>

        {/* Semester Filter Tabs */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedSemester === sem
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      {/* Grades Table Card */}
      <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              Course Grade Records
            </h2>
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            Showing {filteredGrades.length} courses
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Course Code</th>
                <th className="py-3.5 px-6">Course Title</th>
                <th className="py-3.5 px-6">Credits</th>
                <th className="py-3.5 px-6">Semester</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Grade & Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
              {filteredGrades.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <td className="py-4 px-6 font-mono font-bold text-purple-600 dark:text-purple-400 text-xs">
                    {item.courseCode}
                  </td>
                  <td className="py-4 px-6 font-semibold text-zinc-900 dark:text-white">
                    {item.courseTitle}
                  </td>
                  <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 font-medium">
                    {item.credits.toFixed(1)} Cr
                  </td>
                  <td className="py-4 px-6 text-zinc-500 dark:text-zinc-400 text-xs font-medium">
                    {item.semester}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                      item.status === "Completed"
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                    }`}>
                      <CheckCircle2 className="w-3 h-3" />
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 font-bold text-xs">
                        {item.grade}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        ({item.gradePoint.toFixed(2)})
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}