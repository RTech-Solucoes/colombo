'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fallback?: string;
}

const Avatar = ({ src, alt, size = 'md', className, fallback }: AvatarProps) => {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        'relative inline-flex items-center justify-center rounded-full bg-gray-100 overflow-hidden',
        sizes[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium text-gray-600">
          {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
        </span>
      )}
    </motion.div>
  );
};

export default Avatar;