
import React from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}: OptimizedImageProps) => {
  // Make sure the image path is correct - use the full path if it doesn't start with "/"
  const imageSrc = src.startsWith('/') ? src : `/${src}`;
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
    />
  );
};

export default OptimizedImage;
