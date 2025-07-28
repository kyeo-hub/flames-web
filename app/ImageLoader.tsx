// app/ImageLoader.tsx
"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageLoader() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch('/api/background-image');
        if (response.ok) {
          const data = await response.json();
          console.log(data.images);
          setBackgroundImage(data.images);
        } else {
          setBackgroundImage(null);
        }
      } catch (error) {
        console.error('Error fetching background image:', error);
        setBackgroundImage(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBackgroundImage();
  }, []);

  // 如果还在加载中，不渲染任何内容
  if (loading) {
    return null;
  }

  // 如果有背景图片，则渲染背景
  if (backgroundImage) {
    return (
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
    );
  }

  // 如果没有背景图片，则不渲染任何内容（不渲染背景）
  return null;
}