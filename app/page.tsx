import Image from 'next/image';
import { getRandomDivingImage } from '../lib/imageUtils';

export default async function Home() {
  // 获取随机潜水背景图
  const backgroundImage = await getRandomDivingImage();

  return (
    <div className="min-h-screen flex flex-col">
      

      {/* 英雄区 */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* 背景图片 */}
        {backgroundImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Underwater landscape"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            {/* 半透明叠加层增强文字可读性 */}
            <div className="absolute inset-0 bg-deep-blue/40 backdrop-blur-[2px]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue to-deep-blue/80 z-0"></div>
        )}

        {/* 英雄区内容 */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            探索<span className="text-coral-orange">海底</span>世界的奥秘
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            专业潜水教练带你领略海洋生物的绚丽与奇妙
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/博客"
              className="bg-coral-orange hover:bg-coral-orange/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              阅读潜水日志
            </a>
            <a
              href="/关于"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
            >
              了解我的故事
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}