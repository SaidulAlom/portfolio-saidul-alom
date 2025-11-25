import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Code, Calendar, Award } from 'lucide-react';

export default function MetricsSection() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    fetch('/api/metrics', { method: 'POST' })
      .then(res => res.json())
      .then(data => setVisitors(data.visitors))
      .catch(() => {});
  }, []);

  const stats = [
    { icon: Eye, label: 'Visitors', value: visitors.toLocaleString() },
    { icon: Code, label: 'Projects', value: '12' },
    { icon: Calendar, label: 'Experience', value: '2+ Years' },
    { icon: Award, label: 'Skills', value: '25' }
  ];

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}