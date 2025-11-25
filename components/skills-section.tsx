"use client";

import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, Brain, Repeat as React, MonitorSpeaker } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 65 }
    ]
  },
  {
    title: "Database",
    icon: MonitorSpeaker,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 60 },
      { name: "Firebase", level: 70 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 }
    ]
  },
  {
    title: "Currently Learning",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Machine Learning", level: 55 },
      { name: "TensorFlow", level: 45 },
      { name: "Kubernetes", level: 40 },
      { name: "Microservices", level: 50 },
      { name: "DevOps", level: 45 }
    ]
  }
];

export default function SkillsSection() {

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's my technical expertise across different domains of software development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner group-hover/skill:h-3 transition-all duration-300">
                          <motion.div
                            initial={{ width: 0, opacity: 0.8 }}
                            whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                            transition={{ 
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, 
                              duration: 1.2, 
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative shadow-sm group-hover/skill:shadow-md transition-shadow duration-300`}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            <motion.div 
                              className="absolute right-0 top-0 h-full w-1 bg-white/50 rounded-full"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 1.5 }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}