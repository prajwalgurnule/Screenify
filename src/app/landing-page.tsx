"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useConvexAuth } from "convex/react";
import LoaderUI from "@/components/LoaderUI";
import { CodeIcon, Sparkles } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { Mic, Video, Phone, Share2, Zap, Clock, Code, Monitor, Users, Calendar } from 'lucide-react';

const features = [
  {
    title: "Real-time Video",
    description: "Crystal clear video interviews with AI-powered noise cancellation",
    icon: <Video className="w-6 h-6" />,
    color: "bg-emerald-100 dark:bg-emerald-900/50",
    hoverColor: "hover:bg-emerald-200 dark:hover:bg-emerald-800/70"
  },
  {
    title: "Smart Screen Sharing",
    description: "Share your screen with built-in annotation tools",
    icon: <Monitor className="w-6 h-6" />,
    color: "bg-green-100 dark:bg-green-900/50",
    hoverColor: "hover:bg-green-200 dark:hover:bg-green-800/70"
  },
  {
    title: "Code Collaboration",
    description: "Real-time code editor with syntax highlighting",
    icon: <Code className="w-6 h-6" />,
    color: "bg-teal-100 dark:bg-teal-900/50",
    hoverColor: "hover:bg-teal-200 dark:hover:bg-teal-800/70"
  },
  {
    title: "Interview Recording",
    description: "Auto-record sessions with transcript generation",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-lime-100 dark:bg-lime-900/50",
    hoverColor: "hover:bg-lime-200 dark:hover:bg-lime-800/70"
  },
  {
    title: "Multi-party Calls",
    description: "Host panel interviews with up to 10 participants",
    icon: <Users className="w-6 h-6" />,
    color: "bg-emerald-100 dark:bg-emerald-900/50",
    hoverColor: "hover:bg-emerald-200 dark:hover:bg-emerald-800/70"
  },
  {
    title: "Scheduling",
    description: "Calendar integration with automated reminders",
    icon: <Calendar className="w-6 h-6" />,
    color: "bg-green-100 dark:bg-green-900/50",
    hoverColor: "hover:bg-green-200 dark:hover:bg-green-800/70"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director, TechCorp",
    content: "Screenify reduced our hiring cycle by 40%. The collaborative coding environment is game-changing for technical interviews.",
    avatar: "👩‍💼",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Engineering Manager",
    content: "The AI-powered interview summaries save me hours each week. I can focus on candidates rather than note-taking.",
    avatar: "👨‍💻",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Recruitment Specialist",
    content: "Our acceptance rates improved by 30% since using Screenify. Candidates love the professional yet friendly interface.",
    avatar: "👩‍🎓",
    rating: 4
  }
];

const stats = [
  { value: "10K+", label: "Interviews Conducted" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "40%", label: "Faster Hiring" },
  { value: "24/7", label: "Support Available" }
];

export default function LandingPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { openSignIn } = useClerk();

  if (isLoading) return <LoaderUI />;

  if (isAuthenticated) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 4 === 0 ? "bg-emerald-400" : 
              i % 4 === 1 ? "bg-green-400" : 
              i % 4 === 2 ? "bg-teal-400" : "bg-lime-400"
            } opacity-30 dark:opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Floating larger shapes */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-64 h-64 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 blur-3xl top-20 left-10"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-64 h-64 rounded-full bg-green-100/50 dark:bg-green-900/20 blur-3xl bottom-10 right-10"
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 to-transparent dark:from-emerald-600/5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>New: Interview Scheduling</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-300 mb-6"
            >
              <span className="inline-flex items-center">
                <CodeIcon className="mr-4 w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                {/* <CodeIcon className="mr-4 w-12 h-12" /> */}
                Screenify
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            >
              The <span className="font-semibold text-emerald-600 dark:text-emerald-400">next-generation</span> platform for technical interviews and collaborative hiring
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => openSignIn()}
                  className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                  Get Started - It's Free
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => {
                    const features = document.getElementById("features");
                    features?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 text-lg font-semibold bg-white text-emerald-600 border-2 border-emerald-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-400 flex items-center gap-2"
                >
                  See Features
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Animated video call interface illustration */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-400 to-green-500 opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-emerald-100 overflow-hidden shadow-2xl dark:bg-gray-800/90 dark:border-emerald-900">
                {/* Browser header */}
                <div className="p-4 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 border-b border-emerald-100 dark:border-emerald-800/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium px-4 py-1 bg-white/80 rounded-full dark:bg-gray-700/80">
                    meet.screenify.app/interview-session
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300">
                      <Users className="w-3 h-3" />
                    </div>
                    <div className="text-xs font-medium text-emerald-600 dark:text-emerald-300">2</div>
                  </div>
                </div>

                {/* Video call interface */}
                <div className="p-6">
                  {/* Participants grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Interviewer video */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-emerald-100 rounded-xl overflow-hidden shadow-sm dark:bg-emerald-900/30 relative group"
                    >
                      <div className="aspect-video bg-emerald-200 flex items-center justify-center text-6xl dark:bg-emerald-800/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-400/20 dark:to-emerald-600/10"></div>
                        👨🏽💼
                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 text-white text-xs rounded-md">
                          Interviewer
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="h-3 bg-emerald-200 rounded-full w-3/4 mb-2 dark:bg-emerald-700/50"></div>
                        <div className="h-2 bg-emerald-100 rounded-full w-1/2 dark:bg-emerald-800/30"></div>
                      </div>
                      <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">
                        <Mic className="w-3 h-3" />
                      </div>
                    </motion.div>

                    {/* Candidate video */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-100 rounded-xl overflow-hidden shadow-sm dark:bg-green-900/30 relative group"
                    >
                      <div className="aspect-video bg-green-200 flex items-center justify-center text-6xl dark:bg-green-800/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-400/20 dark:to-green-600/10"></div>
                        👩💻
                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 text-white text-xs rounded-md">
                          Candidate
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="h-3 bg-green-200 rounded-full w-3/4 mb-2 dark:bg-green-700/50"></div>
                        <div className="h-2 bg-green-100 rounded-full w-1/2 dark:bg-green-800/30"></div>
                      </div>
                      <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                        <Mic className="w-3 h-3" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Screen sharing section (coding problem) */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl overflow-hidden shadow-sm dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-100 dark:border-emerald-800/50">
                    {/* IDE header */}
                    <div className="bg-emerald-200 px-4 py-2 flex items-center dark:bg-emerald-800/50 border-b border-emerald-300 dark:border-emerald-700/50">
                      <div className="flex space-x-2 mr-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <div className="text-xs font-mono text-emerald-800 dark:text-emerald-200 flex-1">
                        solution.py • Candidate's Screen
                      </div>
                      <div className="text-xs font-mono text-emerald-800/70 dark:text-emerald-200/70">
                        Python 3.9
                      </div>
                    </div>
                    
                    {/* Code editor */}
                    <div className="p-4 font-mono text-sm bg-white/80 dark:bg-gray-800/80">
                      <div className="flex mb-1">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">1</span>
                        <span className="text-blue-600 dark:text-blue-400">def</span> <span className="text-emerald-600 dark:text-emerald-300">twoSum</span>(nums, target):
                      </div>
                      <div className="flex mb-1">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">2</span>
                        <span className="text-gray-400 ml-4"># Candidate is coding...</span>
                      </div>
                      <div className="flex mb-1">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">3</span>
                        <span className="ml-4">hash_map = {}</span>
                      </div>
                      <div className="flex mb-1">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">4</span>
                        <span className="ml-4 text-blue-600 dark:text-blue-400">for</span> i, num <span className="text-blue-600 dark:text-blue-400">in</span> enumerate(nums):
                      </div>
                      <div className="flex mb-1">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">5</span>
                        <span className="ml-8">complement = target - num</span>
                      </div>
                      <div className="flex mb-1">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">6</span>
                        <span className="ml-8 text-blue-600 dark:text-blue-400">if</span> complement <span className="text-blue-600 dark:text-blue-400">in</span> hash_map:
                      </div>
                      <div className="flex mb-1">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">7</span>
                        <span className="ml-12 text-blue-600 dark:text-blue-400">return</span> [hash_map[complement], i]
                      </div>
                      <div className="flex">
                        <span className="text-emerald-600 dark:text-emerald-400 w-8 inline-block">8</span>
                        <span className="ml-8">hash_map[num] = i</span>
                      </div>
                    </div>
                  </div>

                  {/* Call controls */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex space-x-4 bg-white/90 dark:bg-gray-700/90 px-6 py-3 rounded-full border border-emerald-200 dark:border-emerald-700 shadow-lg backdrop-blur-sm">
                      <motion.div 
                        whileHover={{ scale: 1.1, backgroundColor: "#d1fae5" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300 cursor-pointer"
                      >
                        <Mic className="w-5 h-5" />
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, backgroundColor: "#d1fae5" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300 cursor-pointer"
                      >
                        <Video className="w-5 h-5" />
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-800 dark:text-red-300 cursor-pointer"
                      >
                        <Phone className="w-5 h-5" />
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, backgroundColor: "#d1fae5" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300 cursor-pointer"
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, backgroundColor: "#d1fae5" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300 cursor-pointer"
                      >
                        <Code className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900 relative z-10">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-emerald-50 to-transparent dark:from-emerald-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4 dark:bg-emerald-900/30 dark:text-emerald-200"
            >
              <Zap className="w-4 h-4" />
              ✨ Powerful Features
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need for <span className="text-emerald-600 dark:text-emerald-400">Technical Hiring</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Designed by engineers for seamless technical interviews
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.color} ${feature.hoverColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800/50`}
              >
                <div className="w-12 h-12 rounded-full bg-emerald-200 dark:bg-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-900 relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl dark:bg-emerald-800/20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl dark:bg-green-800/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4 dark:bg-emerald-900/30 dark:text-emerald-200">
                <Video className="w-4 h-4" />
                🎥 Interactive Demo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Experience Screenify in <span className="text-emerald-600 dark:text-emerald-400">Action</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                See how Screenify transforms technical interviews with our interactive demo. Experience the seamless collaboration, crystal-clear video, and powerful coding tools.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mt-1 flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Instant Setup</h4>
                    <p className="text-gray-600 dark:text-gray-400">No downloads required - start interviewing in seconds</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mt-1 flex-shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Real-time Coding</h4>
                    <p className="text-gray-600 dark:text-gray-400">Experience our collaborative IDE with syntax highlighting</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mt-1 flex-shrink-0">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Smart Screen Share</h4>
                    <p className="text-gray-600 dark:text-gray-400">Try our annotation tools and selective window sharing</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => openSignIn()}
                    className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Try Live Demo
                  </button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 opacity-10 dark:opacity-5"></div>
                <div className="relative p-2 bg-white dark:bg-gray-800">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-600/20 animate-pulse"></div>
                    </div>
                    
                    {/* Mock demo interface */}
                    <div className="relative z-10 w-full h-full flex flex-col">
                      {/* Demo header */}
                      <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-b border-emerald-100 dark:border-emerald-800/50">
                        <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Screenify Demo</div>
                      </div>
                      
                      {/* Demo content */}
                      <div className="flex-1 p-4 flex flex-col items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          className="mb-6"
                        >
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white text-3xl">
                            <Video className="w-8 h-8" />
                          </div>
                        </motion.div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                          Interactive Demo
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md mx-auto">
                          Experience Screenify's powerful interview tools in action
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-300 text-sm font-medium">
                              Join as Interviewer
                            </button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <button className="w-full px-6 py-3 bg-white text-emerald-600 border border-emerald-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium dark:bg-gray-700 dark:text-emerald-400 dark:border-emerald-400">
                              Join as Candidate
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4 dark:bg-emerald-900/30 dark:text-emerald-200">
              ❤️ Loved by Teams
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by <span className="text-emerald-600 dark:text-emerald-400">Leading</span> Companies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of teams who conduct better interviews with Screenify
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100 dark:border-emerald-800/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-500 relative z-10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your <span className="text-emerald-100">Interview Process</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto"
            >
              Join thousands of teams who conduct better interviews with Screenify
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => openSignIn()}
                  className="px-8 py-4 text-lg font-semibold bg-white text-emerald-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Zap className="w-5 h-5 animate-pulse" />
                  Get Started - It's Free
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => {
                    const demo = document.getElementById("features");
                    demo?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 text-lg font-semibold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  See Features
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}