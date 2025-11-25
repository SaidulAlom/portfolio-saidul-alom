"use client";

import { motion } from 'framer-motion';
import { Github, GitCommit, Star, GitFork } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stats = [
  { label: "Total Commits", value: "1,247", icon: GitCommit },
  { label: "Repositories", value: "42", icon: Github },
  { label: "Stars Earned", value: "156", icon: Star },
  { label: "Forks", value: "23", icon: GitFork }
];

export default function GitHubActivity() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Activity</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Consistent coding and open source contributions
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Contribution Activity
            </h4>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://github.com/SaidulAlom', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              View Profile
            </Button>
          </div>
          
          {/* GitHub Contribution Graph Embed */}
          <div className="w-full overflow-x-auto">
            <img
              src="https://github-readme-stats.vercel.app/api?username=SaidulAlom&show_icons=true&theme=radical&hide_border=true"
              alt="GitHub Stats"
              className="w-full max-w-md mx-auto rounded-lg mb-4"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=SaidulAlom&theme=radical&hide_border=true"
              alt="GitHub Streak"
              className="w-full max-w-md mx-auto rounded-lg mb-4"
            />
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=SaidulAlom&theme=react-dark&hide_border=true&area=true"
              alt="GitHub Contribution Calendar"
              className="w-full max-w-4xl mx-auto rounded-lg"
              style={{ minWidth: '600px' }}
            />
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Contributions in the last year • Updated daily
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}