'use client';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@heroui/react';
import ImageLoader from '../ImageLoader';

const recentActivities = [
  {
    id: 1,
    title: '海洋保护志愿者招募',
    date: '2023-10-15',
    description: '参与珊瑚礁修复项目，为期两周的海岛生态保护活动',
    location: '菲律宾 阿尼洛'
  },
  {
    id: 2,
    title: '潜水安全培训课程',
    date: '2023-11-05',
    description: 'PADI救援潜水员认证课程，提升水下应急处理能力',
    location: '上海 海洋水族馆'
  },
  {
    id: 3,
    title: '海洋摄影展',
    date: '2023-12-01',
    description: '展示全球水下摄影作品，呼吁海洋环境保护意识',
    location: '线上展览'
  }
];

export default function ActionPage() {
  return (
    <div className="min-h-screen relative">
      <ImageLoader />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">近期活动</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">          {recentActivities.map(activity => (
            <Card key={activity.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white" isHoverable shadow="md" isBlurred radius="lg">
              <CardHeader>
                <h2 className="text-xl font-bold">{activity.title}</h2>
                  <p className="text-white/80">
                  {activity.date} • {activity.location}
                </p>
              </CardHeader>
              <CardBody>
                <p>{activity.description}</p>
              </CardBody>
              <CardFooter className="border-t border-white/20 pt-4 mt-2">
                <Button variant="solid" className="bg-blue-600 hover:bg-blue-700 text-white">了解更多</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}