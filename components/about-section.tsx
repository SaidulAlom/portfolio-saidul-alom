"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Code, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import GitHubActivity from '@/components/github-activity';

const timelineItems = [
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science Engineering",
    subtitle: "Expected 2025",
    description: "Currently pursuing my Bachelor's degree with focus on software development and AI/ML technologies.",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Code,
    title: "Full Stack Development Journey",
    subtitle: "2023 - Present",
    description: "Transitioning from frontend to full-stack development with hands-on projects in MERN stack.",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Trophy,
    title: "Volleyball Champion",
    subtitle: "2023",
    description: "Demonstrated leadership and teamwork skills as volleyball champion.",
    color: "text-yellow-600 dark:text-yellow-400"
  },
  {
    icon: Users,
    title: "Eco Club Coordinator",
    subtitle: "2022 - Present",
    description: "Leading environmental initiatives and organizing community events.",
    color: "text-emerald-600 dark:text-emerald-400"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer transitioning from frontend to full stack, with hands-on projects in MERN stack, 
            internship at IOCL Digboi, and academic project "Geo Construct". I'm also the Eco Club coordinator and volleyball champion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur-2xl scale-110"></div>
                
                {/* Photo container */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/asstes/profile-img.png"
                    alt="Saidul Alom - Profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 320px, 384px"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full opacity-80"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-80"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  As a Computer Science Engineering student graduating in 2025, I've been on an exciting journey 
                  from frontend development to becoming a full-stack developer. My passion lies in creating 
                  innovative web solutions that make a real impact.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Through my internship at IOCL Digboi and various academic projects like "Geo Construct", 
                  I've gained valuable industry experience and technical expertise in the MERN stack.
                </p>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Currently Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Advanced AI/ML concepts, Cloud technologies (AWS), and modern DevOps practices
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className={`text-sm font-medium ${item.color} mb-2`}>
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <GitHubActivity />
      </div>
    </section>
  );
}