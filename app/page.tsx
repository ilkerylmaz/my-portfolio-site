"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Sparkles */}
      <section className="h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full h-40 relative">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-6xl font-bold">İlker Yılmaz</h1>
          </div>
        </div>
        <p className="text-gray-400 mt-4 text-xl">Frontend Developer</p>
        <div className="absolute bottom-10">
          <span className="text-white animate-bounce block">↓ Scroll Down ↓</span>
        </div>
      </section>

      {/* About Me Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
        <div className="max-w-4xl mx-auto pt-20">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300">
                I continue my education as a 3rd year Computer Engineering student.
                While developing myself in areas such as software development, data structures
                and algorithms, and web technologies, I am developing projects using modern
                web technologies.
              </p>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'JavaScript',
                    'HTML',
                    'CSS',
                    'Next.js',
                    'Tailwind CSS'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-700 pl-4">
                  <h4 className="text-white font-medium">İnönü University</h4>
                  <p className="text-gray-400">Computer Engineering • 2022 - Present</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-emerald-400 font-semibold">GPA: 3.30</span>
                    <span className="text-gray-400">(4.00 Scale)</span>
                  </div>
                  <a
                    href="/academic"
                    target="_blank"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    View Academic Transcript
                  </a>
                </div>
                {/* You can add more education items */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto pt-20">
          <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Weather Forecast Website</h3>
              <p className="text-gray-300 mb-4">
                Weather forecast website that displays weather conditions based on the entered city
              </p>
              <div className="flex gap-2">
                <a
                  href="https://weatherste.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/ilkerylmaz/weather-web-interface/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* You can add more project cards */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-black p-8">
        <div className="max-w-4xl mx-auto pt-20">
          <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              You can reach me through the following channels:
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:ilkerylmaz57@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/ilker-yılmaz-b097a1251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ilkerylmaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
