"use client";

import { motion } from 'framer-motion';
import { Building, Users, Trophy, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "Software Development Intern",
    company: "IOCL Digboi",
    location: "Digboi, Assam",
    period: "June 2024 - August 2024",
    type: "Internship",
    icon: Building,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    description: [
      "Worked on digital transformation initiatives for India's oldest refinery",
      "Developed internal tools using modern web technologies",
      "Collaborated with senior engineers on process optimization projects",
      "Gained hands-on experience with industrial software systems"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Eco Club Coordinator",
    company: "College Environmental Initiative",
    location: "Campus",
    period: "2022 - Present",
    type: "Leadership",
    icon: Users,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950",
    description: [
      "Leading environmental awareness campaigns and sustainability projects",
      "Organizing workshops and seminars on climate change and conservation",
      "Managing a team of 25+ volunteers for various environmental initiatives",
      "Coordinating with local NGOs and government bodies for community projects"
    ],
    technologies: ["Leadership", "Project Management", "Community Outreach", "Event Planning"]
  },
  {
    title: "Volleyball Team Captain",
    company: "College Sports Team",
    location: "Campus",
    period: "2023",
    type: "Achievement",
    icon: Trophy,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    description: [
      "Led the college volleyball team to championship victory",
      "Demonstrated exceptional teamwork and leadership skills",
      "Organized training sessions and strategic game planning",
      "Mentored junior players and fostered team collaboration"
    ],
    technologies: ["Leadership", "Teamwork", "Strategic Thinking", "Mentoring"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional experiences and leadership roles that have shaped my skills and perspectives.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Timeline indicator */}
                    <div className="lg:w-48 p-6 bg-gray-50 dark:bg-gray-800 flex flex-col items-center lg:items-start space-y-4">
                      <div className={`p-4 rounded-2xl ${exp.bgColor} ${exp.color} shadow-lg`}>
                        <exp.icon className="h-8 w-8" />
                      </div>
                      <div className="text-center lg:text-left">
                        <Badge variant="secondary" className="mb-2">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </p>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (pointIndex * 0.1), duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {point}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
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