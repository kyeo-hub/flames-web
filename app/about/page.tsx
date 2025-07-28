"use client";
import Image from 'next/image';
import { Card } from '@heroui/react';
import ImageLoader from '../ImageLoader';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <ImageLoader />
      <Card className="w-full max-w-4xl mx-auto relative z-10">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* 照片部分 */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Profile Photo"
                width={300}
                height={300}
                priority
                className="rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* 简介内容 */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">探索海底世界的冒险家</h2>
              <p className="text-white mb-4">
                我是一名拥有10年经验的专业潜水教练，曾探索过全球20多个国家的潜水胜地。
                致力于推广海洋保护理念，记录海底生物的美丽瞬间。
              </p>
              <p className="text-white mb-4">
                持有PADI教练执照，擅长技术潜水和水下摄影。希望通过我的分享，
                让更多人了解海洋的奥秘，共同守护蓝色星球。
              </p>
              <p className="text-white">
                曾参与多个海洋保护项目，包括珊瑚礁修复和海洋生物普查。
                我的摄影作品曾在国际潜水杂志发表，希望通过镜头展现海洋的脆弱与美丽。
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}