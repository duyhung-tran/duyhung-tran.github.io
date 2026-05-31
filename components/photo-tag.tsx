'use client';

import Image from 'next/image';
import { useState } from 'react';

type TagPosition = {
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
};

type PhotoTagProps = {
  photoSrc: string;
  photoWidth: number;
  photoHeight: number;
  className?: string;
  tagSrc: string;
  tagWidth: number;
  tagHeight: number;
  tagPosition: TagPosition;
  alt?: string;
};

export default function PhotoTag({
  photoSrc,
  photoWidth,
  photoHeight,
  className = '',
  tagSrc,
  tagPosition,
  tagHeight,
  tagWidth,
  alt = 'Photo with tag',
}: PhotoTagProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full inline-block ${className}`}
      style={{ aspectRatio: `${photoWidth} / ${photoHeight}` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <Image
        src={photoSrc}
        alt={alt}
        fill
        className="object-contain"
        style={{ filter: 'contrast(90%)' }}
      />

      {/* SVG Overlay for Tag */}
      <svg
        viewBox={`0 0 ${photoWidth} ${photoHeight}`}
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <image
          href={tagSrc}
          x={tagPosition.x}
          y={tagPosition.y}
          width={tagWidth}
          height={tagHeight}
          style={{
            transformOrigin: 'bottom center',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 150ms',
            animation: isHovered
              ? 'moveUpOvershoot 450ms forwards'
              : 'moveDown 300ms forwards',
          }}
        />
      </svg>

    </div>
  );
}
