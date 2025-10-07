"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // EmailJS konfigürasyonu
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ilkerylmaz57@hotmail.com'
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

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
                I am a 4th-year Computer Engineering student with a strong passion for software development and web technologies. 
                Alongside enhancing my knowledge in data structures, algorithms, and modern programming practices, I specialize in 
                designing and developing visually appealing, user-friendly websites. I continuously work on projects that combine 
                functionality with modern web design trends, aiming to create seamless and engaging digital experiences.
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
                    <span className="text-emerald-400 font-semibold">GPA: 3.26</span>
                    <span className="text-gray-400">(4.00 Scale)</span>
                  </div>
                  <a
                    href="/academic"
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
    <h2 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h2>
    <p className="text-gray-300 text-center mb-12">
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      Feel free to reach out via the form below or through the channels listed.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white">Contact Info</h3>
        <div className="text-gray-300">
          <p><strong>Email:</strong> <a href="mailto:ilkerylmaz57@hotmail.com" className="hover:text-blue-400 transition">ilkerylmaz57@hotmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ilker-yılmaz-b097a1251/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">linkedin.com/in/ilker-yılmaz</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/ilkerylmaz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">github.com/ilkerylmaz</a></p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
        <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
        
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-600 text-white rounded-lg">
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-3 bg-red-600 text-white rounded-lg">
            Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
          </div>
        )}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full font-semibold py-3 rounded-lg transition ${
            isLoading 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {isLoading ? 'Gönderiliyor...' : 'Send Message'}
        </button>
      </form>
    </div>
  </div>
</section>

    </main>
  );
}
