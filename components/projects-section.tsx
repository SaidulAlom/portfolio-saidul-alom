"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, ChevronDown, ChevronUp, Target, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'All Projects', color: 'bg-gray-500' },
  { id: 'landing', name: 'Landing Pages', color: 'bg-blue-500' },
  { id: 'portfolio', name: 'Portfolio', color: 'bg-purple-500' },
  { id: 'ecommerce', name: 'E-commerce', color: 'bg-green-500' },
  { id: 'saas', name: 'SaaS', color: 'bg-indigo-500' },
  { id: 'fitness', name: 'Fitness', color: 'bg-red-500' },
  { id: 'job', name: 'Job Portal', color: 'bg-yellow-500' },
  { id: 'weather', name: 'Weather', color: 'bg-cyan-500' }
];

const projects = [
  {
    title: "Modern Responsive Landing Page",
    description: "A stunning, fully responsive landing page with modern design principles, smooth animations, and optimized performance. Features interactive elements and mobile-first approach.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/SaidulAlom/Modern-Responsive-Landing-Page",
    live: "https://modern-responsive-landing-page.vercel.app/",
    featured: true,
    category: "landing",
    caseStudy: {
      challenge: "Create a high-converting landing page with smooth animations that works flawlessly across all devices while maintaining fast load times.",
      solution: "Implemented React with Tailwind CSS for responsive design, used Framer Motion for performance-optimized animations, and applied lazy loading for images.",
      results: ["98% mobile responsiveness score", "2.1s average load time", "45% increase in user engagement"]
    }
  },
  {
    title: "3D Portfolio with Animations",
    description: "An innovative portfolio website featuring 3D animations, interactive elements, and cutting-edge web technologies. Showcases creative design and technical expertise.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Three.js", "React", "3D Graphics", "WebGL", "Animations"],
    github: "https://github.com/SaidulAlom/Modern-Responsive-Landing-Page",
    live: "https://modernportfoliouiwith3dsnimation.netlify.app/",
    featured: true,
    category: "portfolio",
    caseStudy: {
      challenge: "Build an immersive 3D portfolio that showcases technical skills while maintaining smooth performance across different devices and browsers.",
      solution: "Used Three.js for 3D rendering, implemented LOD (Level of Detail) for performance, and created fallback 2D versions for low-end devices.",
      results: ["60fps on most devices", "WebGL compatibility 95%", "Unique user experience"]
    }
  },
  {
    title: "Guwahati Flavors",
    description: "A food delivery and restaurant discovery platform showcasing local cuisine from Guwahati. Features menu browsing, order tracking, and restaurant reviews.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "MongoDB", "Food API", "Payment Integration"],
    github: "https://github.com/SaidulAlom/Guwahati-Flavors",
    live: "https://guwahatiflavors.netlify.app/",
    featured: true,
    category: "ecommerce",
    caseStudy: {
      challenge: "Create a comprehensive food delivery platform with real-time order tracking, payment integration, and restaurant management system.",
      solution: "Built with MERN stack, integrated Stripe for payments, implemented Socket.io for real-time updates, and used MongoDB for flexible data storage.",
      results: ["Real-time order tracking", "Secure payment processing", "Multi-restaurant support"]
    }
  },
  {
    title: "SaaS Frontend",
    description: "Modern SaaS application frontend with subscription management, user dashboard, and analytics. Clean, professional design optimized for business users.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "TypeScript", "SaaS", "Dashboard", "Analytics"],
    github: "https://github.com/SaidulAlom/SaaSify",
    live: "https://saasfrontend.netlify.app/",
    featured: false,
    category: "saas",
    caseStudy: {
      challenge: "Build a scalable SaaS dashboard with complex data visualization, subscription management, and role-based access control.",
      solution: "Used TypeScript for type safety, implemented modular dashboard components, integrated Chart.js for analytics, and created reusable UI components.",
      results: ["Type-safe codebase", "Modular architecture", "Interactive analytics dashboard"]
    }
  },
  {
    title: "FitFlow Gym",
    description: "Comprehensive gym management and fitness tracking application. Features workout plans, progress tracking, and membership management system.",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Fitness API", "Progress Tracking", "Gym Management"],
    github: "https://github.com/SaidulAlom/FitFlow-Gym-Website-",
    live: "https://fitflow-gym.netlify.app/",
    featured: false,
    category: "fitness",
    caseStudy: {
      challenge: "Create a comprehensive gym management system with member tracking, workout plans, and progress visualization.",
      solution: "Integrated fitness APIs for exercise data, built custom progress tracking charts, and implemented membership management with local storage.",
      results: ["Complete workout database", "Visual progress tracking", "Member management system"]
    }
  },
  {
    title: "One Soul E-Corner",
    description: "Comprehensive job portal platform connecting job seekers with employers. Features job listings, application tracking, resume upload, and employer dashboard.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Job Portal", "Application Tracking", "Resume Management"],
    github: "https://github.com/SaidulAlom/OneSoul-e-Corner",
    live: "https://one-soul-e-corner.vercel.app/",
    featured: false,
    category: "job",
    caseStudy: {
      challenge: "Develop a dual-sided job portal with separate interfaces for job seekers and employers, including application tracking and resume management.",
      solution: "Built role-based routing, implemented file upload for resumes, created application status tracking, and designed separate dashboards for each user type.",
      results: ["Dual-user interface", "Resume upload system", "Application tracking"]
    }
  },
  {
    title: "Futuristic Startup Landing",
    description: "Cutting-edge landing page for a futuristic startup with advanced animations, interactive elements, and modern design trends.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Futuristic Design", "Animations", "Startup"],
    github: "https://github.com/SaidulAlom/Futuristic-Start-up-Landing-Page",
    live: "https://futuristic-start-up-landing-page.vercel.app/",
    featured: false,
    category: "landing",
    caseStudy: {
      challenge: "Design a visually striking landing page that captures a futuristic aesthetic while maintaining usability and fast loading times.",
      solution: "Used CSS animations and transforms for futuristic effects, implemented parallax scrolling, and optimized assets for performance.",
      results: ["Unique visual identity", "Smooth animations", "Fast load times"]
    }
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Clean UI with smooth animations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Weather API", "Location Services", "Real-time Data"],
    github: "https://github.com/SaidulAlom/weather-app",
    live: "https://weather-app-gamma-eight-59.vercel.app/",
    featured: false,
    category: "weather",
    caseStudy: {
      challenge: "Build a weather app with accurate location detection, real-time data updates, and intuitive weather visualization.",
      solution: "Integrated OpenWeather API, implemented geolocation services, created dynamic weather icons, and added forecast charts.",
      results: ["Real-time weather data", "Location-based forecasts", "Interactive weather maps"]
    }
  }
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern web technologies, and creative design solutions.
          </p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedCategory(category.id);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

                {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-2xl hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="rounded-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="rounded-full"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                      Featured
                    </Badge>
                  )}
                  {/* Category Badge */}
                  <Badge className="absolute bottom-4 left-4 bg-black/70 text-white text-xs">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 mb-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                  
                  {/* Case Study Toggle */}
                  {project.caseStudy && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      >
                        Case Study
                        {expandedProject === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </Button>
                      
                      {/* Expandable Case Study */}
                      {expandedProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3"
                        >
                          <div className="flex items-start space-x-2">
                            <Target className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Challenge</h4>
                              <p className="text-xs text-gray-600 dark:text-gray-300">{project.caseStudy.challenge}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-2">
                            <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Solution</h4>
                              <p className="text-xs text-gray-600 dark:text-gray-300">{project.caseStudy.solution}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Results</h4>
                              <ul className="space-y-1">
                                {project.caseStudy.results.map((result, idx) => (
                                  <li key={idx} className="text-xs text-gray-600 dark:text-gray-300 flex items-center">
                                    <span className="w-1 h-1 bg-green-500 rounded-full mr-2" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category. Try selecting a different category.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg rounded-2xl border-2 hover:bg-indigo-50 dark:hover:bg-indigo-950"
            onClick={() => window.open('https://github.com/SaidulAlom', '_blank')}
          >
            <Code className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}