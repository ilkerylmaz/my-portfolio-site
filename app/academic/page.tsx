"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useState } from 'react';
import { BarChart, Bar } from 'recharts';

interface Course {
    code: string;
    name: string;
    credit: number;
    grade: string;
}

interface YearSectionProps {
    year: number;
    fallCourses: Course[];
    springCourses: Course[];
}

interface GradeData {
    term: string;
    termGPA: number;
    cumulativeGPA: number;
}

// Yıl bölümü componenti
const YearSection = ({ year, fallCourses, springCourses }: YearSectionProps) => {
    const getGradeColor = (grade: string) => {
        const firstChar = grade.charAt(0);
        switch (firstChar) {
            case 'A': return 'text-emerald-400';
            case 'B': return 'text-blue-400';
            case 'C': return 'text-yellow-400';
            case 'D': return 'text-orange-400';
            default: return 'text-red-400';
        }
    };

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 inline-block px-4 py-2 rounded-lg">
                {year}. Year
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Fall Semester */}
                <div className="bg-gray-800/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Fall Semester</h3>
                    <div className="space-y-3">
                        {fallCourses.map((course) => (
                            <motion.div
                                key={course.code}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="border-l-2 border-gray-700 pl-4 py-2"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium">{course.name}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-400">{course.credit} CR</span>
                                        <span className={`font-semibold ${getGradeColor(course.grade)}`}>
                                            {course.grade}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Spring Semester */}
                <div className="bg-gray-800/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Spring Semester</h3>
                    <div className="space-y-3">
                        {springCourses.map((course) => (
                            <motion.div
                                key={course.code}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="border-l-2 border-gray-700 pl-4 py-2"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium">{course.name}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-400">{course.credit} CR</span>
                                        <span className={`font-semibold ${getGradeColor(course.grade)}`}>
                                            {course.grade}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AcademicPage = () => {
    const [isAreaChart, setIsAreaChart] = useState(true);

    // Tüm sınıfların verileri
    const academicData = [
        {
            year: 1,
            fallCourses: [
                { code: "BITM101", name: "Introduction to Computer Engineering", credit: 4, grade: "C2" },
                { code: "BITM103", name: "Discrete Mathematics", credit: 4, grade: "A2" },
                { code: "BITM105", name: "Programming I", credit: 7, grade: "B1" },
                { code: "BITM111", name: "General Physics", credit: 2, grade: "B1" },
                { code: "BITM181", name: "General Mathematics I", credit: 6, grade: "B2" },
                { code: "BITM191", name: "Turkish Language I", credit: 2, grade: "C3" },
                { code: "BITM193", name: "Atatürk's Principles I", credit: 2, grade: "B3" },
                { code: "BITM197", name: "English I", credit: 3, grade: "B2" },
            ],
            springCourses: [
                { code: "BITM104", name: "Linear Algebra", credit: 6, grade: "A1" },
                { code: "BITM106", name: "Programming II", credit: 7, grade: "A1" },
                { code: "BITM182", name: "General Mathematics II", credit: 6, grade: "A1" },
                { code: "BITM186", name: "Electric Circuits", credit: 4, grade: "B1" },
                { code: "BITM192", name: "Turkish Language II", credit: 2, grade: "C1" },
                { code: "BITM194", name: "Atatürk's Principles II", credit: 2, grade: "B2" },
                { code: "BITM198", name: "English II", credit: 3, grade: "A3" },
            ],
        },
        {
            year: 2,
            fallCourses: [
                { code: "BITM201", name: "Data Structures", credit: 4, grade: "C1" },
                { code: "BITM203", name: "Object Oriented Programming", credit: 4, grade: "B3" },
                { code: "BITM205", name: "Formal Languages and Automata", credit: 3, grade: "B2" },
                { code: "BITM223", name: "Logic Circuit Design", credit: 4, grade: "B2" },
                { code: "BITM289", name: "Data Organization", credit: 3, grade: "B2" },
                { code: "USD003", name: "Contemporary Religious Issues", credit: 2, grade: "C2" },
            ],
            springCourses: [
                { code: "BITM202", name: "Programming Languages", credit: 4, grade: "A3" },
                { code: "BITM224", name: "Probability and Statistics", credit: 3, grade: "A1" },
                { code: "BITM232", name: "Computer Architecture", credit: 3, grade: "A2" },
                { code: "BITM252", name: "Microcomputer Systems", credit: 4, grade: "A1" },
                { code: "BITM288", name: "Numerical Methods", credit: 3, grade: "A1" },
                { code: "BITM258", name: "English Writing", credit: 2, grade: "C1" },
            ],
        },
        {
            year: 3,
            fallCourses: [
                { code: "BITM301", name: "Computer Networks", credit: 4, grade: "C2" },
                { code: "BITM311", name: "Mobile Application Development", credit: 3, grade: "A1" },
                { code: "BITM335", name: "Database Management Systems", credit: 4, grade: "B1" },
                { code: "BITM337", name: "Operating Systems", credit: 3, grade: "A3" },
                { code: "BITM365", name: "Image Processing", credit: 4, grade: "A3" },
                { code: "BITM387", name: "Entrepreneurship", credit: 2, grade: "A1" },
            ],
            springCourses: [
                { code: "BITM302", name: "Algorithm Analysis", credit: 3, grade: "--" },
                { code: "BITM306", name: "Internet Programming", credit: 4, grade: "--" },
                { code: "BITM374", name: "Artificial Intelligence", credit: 4, grade: "--" },
                { code: "BITM376", name: "Object Oriented Software Engineering", credit: 4, grade: "--" },
                { code: "BITM378", name: "Signals and Systems", credit: 3, grade: "--" },
                { code: "BITM396", name: "Human Values and Scientific Perspective", credit: 2, grade: "--" },
            ],
        },
        {
            year: 4,
            fallCourses: [
                { code: "BITM007", name: "Technical Elective Courses", credit: 3, grade: "--" },
                { code: "BITM077", name: "Compulsory Courses", credit: 3, grade: "--" },
                { code: "BITM099", name: "Graduation Project", credit: 5, grade: "--" },
            ],
            springCourses: [
                { code: "BITM008", name: "Technical Elective Courses", credit: 15, grade: "--" },
                { code: "BITM088", name: "Compulsory Courses", credit: 3, grade: "--" },
                { code: "BITM888", name: "Graduation Project II", credit: 5, grade: "--" },
            ],
        },
    ];

    const gradeData: GradeData[] = [
        { term: "2022-23 Fall", termGPA: 2.79, cumulativeGPA: 2.79 },
        { term: "2022-23 Spring", termGPA: 3.68, cumulativeGPA: 3.24 },
        { term: "2023-24 Fall", termGPA: 2.26, cumulativeGPA: 2.96 },
        { term: "2023-24 Spring", termGPA: 3.74, cumulativeGPA: 3.16 },
        { term: "2024-25 Fall", termGPA: 3.16, cumulativeGPA: 3.30 },
    ];

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
                    <p className="text-gray-300 mb-2">{label}</p>
                    <p className="text-emerald-400">
                        Term GPA: {payload[0].value.toFixed(2)}
                    </p>
                    <p className="text-blue-400">
                        Cumulative GPA: {payload[1].value.toFixed(2)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">Academic Transcript</h1>

                    {academicData.map((yearData) => (
                        <YearSection
                            key={yearData.year}
                            year={yearData.year}
                            fallCourses={yearData.fallCourses}
                            springCourses={yearData.springCourses}
                        />
                    ))}

                    {/* GPA Charts Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-16"
                    >
                        <div className="flex items-center justify-center mb-8">
                            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 inline-block px-4 py-2 rounded-lg mr-4">
                                Academic Performance
                            </h2>

                            {/* Toggle Switch */}
                            <div className="relative inline-flex items-center">
                                <div
                                    className={`w-[120px] h-[40px] rounded-full p-1 duration-300 ease-in-out cursor-pointer ${isAreaChart ? 'bg-blue-600' : 'bg-emerald-600'
                                        }`}
                                    onClick={() => setIsAreaChart(!isAreaChart)}
                                >
                                    <div
                                        className={`bg-white w-[50px] h-[32px] rounded-full shadow-lg transform duration-300 ease-in-out flex items-center justify-center ${isAreaChart ? 'translate-x-0' : 'translate-x-[60px]'
                                            }`}
                                    >
                                        {isAreaChart ? (
                                            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6">
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    {isAreaChart ? (
                                        <AreaChart
                                            data={gradeData}
                                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                                        >
                                            <defs>
                                                <linearGradient id="termGPA" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="cumulativeGPA" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis
                                                dataKey="term"
                                                stroke="#9CA3AF"
                                                tick={{ fill: '#9CA3AF' }}
                                            />
                                            <YAxis
                                                domain={[0, 4]}
                                                stroke="#9CA3AF"
                                                tick={{ fill: '#9CA3AF' }}
                                            />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Legend
                                                wrapperStyle={{ paddingTop: "20px" }}
                                                formatter={(value) => (
                                                    <span className="text-gray-300">{value}</span>
                                                )}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="termGPA"
                                                name="Term GPA"
                                                stroke="#10B981"
                                                fillOpacity={1}
                                                fill="url(#termGPA)"
                                                strokeWidth={2}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="cumulativeGPA"
                                                name="Cumulative GPA"
                                                stroke="#3B82F6"
                                                fillOpacity={1}
                                                fill="url(#cumulativeGPA)"
                                                strokeWidth={2}
                                            />
                                        </AreaChart>
                                    ) : (
                                        <BarChart
                                            data={gradeData}
                                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                                        >
                                            <XAxis
                                                dataKey="term"
                                                stroke="#9CA3AF"
                                                tick={{ fill: '#9CA3AF' }}
                                            />
                                            <YAxis
                                                domain={[0, 4]}
                                                stroke="#9CA3AF"
                                                tick={{ fill: '#9CA3AF' }}
                                            />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Legend
                                                wrapperStyle={{ paddingTop: "20px" }}
                                                formatter={(value) => (
                                                    <span className="text-gray-300">{value}</span>
                                                )}
                                            />
                                            <Bar
                                                dataKey="termGPA"
                                                name="Term GPA"
                                                fill="#10B981"
                                                radius={[4, 4, 0, 0]}
                                            />
                                            <Bar
                                                dataKey="cumulativeGPA"
                                                name="Cumulative GPA"
                                                fill="#3B82F6"
                                                radius={[4, 4, 0, 0]}
                                            />
                                        </BarChart>
                                    )}
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default AcademicPage; 