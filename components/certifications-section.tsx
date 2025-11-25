"use client";

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    credentialId: "AWS-SAA-2024-001",
    verifyUrl: "https://aws.amazon.com/certification/",
    skills: ["Cloud Architecture", "AWS Services", "Security"]
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/60108077",
    credentialId: "GCP-PD-2023-002",
    verifyUrl: "https://cloud.google.com/certification",
    skills: ["GCP", "Cloud Development", "Kubernetes"]
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2023",
    badge: "https://images.credly.com/size/340x340/images/0c6d9839-f468-4adc-987d-5cfae4a9ee67/image.png",
    credentialId: "META-FE-2023-003",
    verifyUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    skills: ["React", "JavaScript", "UI/UX"]
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2023",
    badge: "https://images.credly.com/size/340x340/images/e6eebd0c-6a17-4c06-b172-02ca9f6beb92/image.png",
    credentialId: "MONGO-DEV-2023-004",
    verifyUrl: "https://university.mongodb.com/",
    skills: ["MongoDB", "Database Design", "NoSQL"]
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2022",
    badge: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    credentialId: "DOCKER-DCA-2022-005",
    verifyUrl: "https://www.docker.com/certification",
    skills: ["Docker", "Containerization", "DevOps"]
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2022",
    badge: "https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
    credentialId: "TF-DEV-2022-006",
    verifyUrl: "https://www.tensorflow.org/certificate",
    skills: ["Machine Learning", "TensorFlow", "AI"]
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications & <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6"
                  >
                    <img
                      src={cert.badge}
                      alt={cert.title}
                      className="w-24 h-24 mx-auto object-contain"
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    ID: {cert.credentialId}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(cert.verifyUrl, '_blank')}
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Verify Certificate
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}