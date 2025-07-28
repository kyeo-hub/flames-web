import fs from 'fs';
import path from 'path';

/**
 * 获取本地潜水图片列表
 * @returns 图片URL数组
 */
const getLocalDivingImages = (): string[] => {
  try {
    const imageDir = path.join(process.cwd(), 'public', 'images', 'diving');
    
    // 检查目录是否存在
    if (!fs.existsSync(imageDir)) {
      return [];
    }

    // 读取目录下所有文件
    const files = fs.readdirSync(imageDir);
    
    // 过滤图片文件并返回URL路径
    return files
      .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .map(file => `/images/diving/${file}`);
  } catch (error) {
    console.error('Error loading local diving images:', error);
    return [];
  }
};

/**
 * 从Unsplash API获取潜水图片
 * @returns 图片URL数组
 */
const getUnsplashImages = async (): Promise<string[]> => {
  try {
    // 使用Unsplash简化接口（无需API密钥）
    const response = await fetch(
      `https://source.unsplash.com/?scuba,diving,underwater`,
      { next: { revalidate: 3600 } } // 每小时重新验证一次
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results.map((result: { urls: { regular: string } }) => result.urls.regular);
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return [];
  }
};

/**
 * 获取潜水图片列表（本地优先， fallback到Unsplash）
 * @returns 图片URL数组
 */
export const getDivingImages = async (): Promise<string[]> => {
  // 优先加载本地图片
  const localImages = getLocalDivingImages();
  if (localImages.length > 0) {
    return localImages;
  }

  // 本地无图片时加载Unsplash图片
  return getUnsplashImages();
};

/**
 * 获取随机潜水图片（用于背景等场景）
 * @returns 随机图片URL
 */
export const getRandomDivingImage = async (): Promise<string | null> => {
  const images = await getDivingImages();
  if (images.length === 0) return null;

  // 随机选择一张图片
  return images[Math.floor(Math.random() * images.length)];
};