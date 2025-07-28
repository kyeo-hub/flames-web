import { getRandomDivingImage } from '../../../lib/imageUtils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const images = await getRandomDivingImage();
    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error fetching diving images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}