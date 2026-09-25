import React from 'react';
import { cn } from '../../lib/utils';

const colorVariants = {
  blue: 'bg-blue-100 text-blue-800',
  cyan: 'bg-cyan-100 text-cyan-800',
  default: 'bg-gray-100 text-gray-800',
  orange: 'bg-orange-100 text-orange-800',
};

export const TechBadge = ({ name, color = 'default' }) => {
  return (
    <span className={cn('inline-flex items-center px-2 py-1 rounded-full text-xs font-medium', colorVariants[color])}>
      {name}
    </span>
  );
};
