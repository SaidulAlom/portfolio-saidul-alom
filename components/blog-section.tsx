"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large React applications using TypeScript, custom hooks, and modern state management patterns for maintainable code.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "TypeScript", "Architecture"],
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://react.dev/learn/typescript"
  },
  {
    title: "Optimizing Web Performance: Core Web Vitals Guide",
    excerpt: "A comprehensive guide to improving your website's Core Web Vitals scores through code splitting, lazy loading, and performance monitoring.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Performance",
    tags: ["Performance", "Web Vitals", "Optimization"],
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://web.dev/vitals/"
  },
  {
    title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
    excerpt: "Explore advanced CSS techniques including CSS Grid, Flexbox, custom properties, and modern layout patterns for responsive design.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Responsive Design"],
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
  },
  {
    title: "Full-Stack Development with Next.js and MongoDB",
    excerpt: "Complete guide to building full-stack applications using Next.js API routes, MongoDB integration, and deployment strategies.",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Full-Stack",
    tags: ["Next.js", "MongoDB", "Full-Stack"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://nextjs.org/learn"
  },
  {
    title: "Machine Learning Integration in Web Applications",
    excerpt: "How to integrate machine learning models into web applications using TensorFlow.js and practical implementation examples.",
    date: "2023-12-20",
    readTime: "14 min read",
    category: "AI/ML",
    tags: ["Machine Learning", "TensorFlow.js", "AI"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://www.tensorflow.org/js"
  },
  {
    title: "DevOps for Frontend Developers: CI/CD Pipelines",
    excerpt: "Setting up automated deployment pipelines, testing strategies, and monitoring for frontend applications using modern DevOps tools.",
    date: "2023-12-15",
    readTime: "11 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Deployment"],
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://docs.github.com/en/actions"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing insights, tutorials, and best practices in web development, AI/ML, and modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-indigo-500 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

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
            onClick={() => window.open('https://dev.to/', '_blank')}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}