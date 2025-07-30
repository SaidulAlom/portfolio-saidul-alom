"use client";

import { motion } from 'framer-motion';
import { ArrowUp, Heart, Github, Linkedin, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SaidulAlom",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saidulalom/",
    color: "hover:text-blue-600 dark:hover:text-blue-400"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/s.alom.17/",
    color: "hover:text-pink-600 dark:hover:text-pink-400"
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    href: "https://x.com/S_Alom_83",
    color: "hover:text-blue-500 dark:hover:text-blue-300"
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/S.Alom.17",
    color: "hover:text-blue-700 dark:hover:text-blue-500"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:saidulalom525@gmail.com",
    color: "hover:text-red-600 dark:hover:text-red-400"
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright and Scroll to Top */}
          <div className="flex flex-col items-center space-y-3">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1">
                <span>© 2024 Saidul Alom. Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
                <span>and lots of coffee.</span>
              </p>
            </motion.div>

            {/* Scroll to top button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="icon"
                className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}