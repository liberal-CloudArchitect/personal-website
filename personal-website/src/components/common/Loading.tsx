import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'md', text }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* 机械齿轮加载动画 */}
      <div className="relative">
        {/* 外圈齿轮 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className={`${sizes[size]} border-4 border-t-primary-violet border-r-primary-blue border-b-primary-cyan border-l-primary-emerald rounded-full`}
        />
        
        {/* 内圈齿轮 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12'
          } border-4 border-t-accent-orange border-r-accent-yellow border-b-accent-pink border-l-primary-violet rounded-full`}
        />
      </div>
      
      {text && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// 全屏加载组件
export const FullPageLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-violet/20 via-primary-blue/20 to-primary-emerald/20 backdrop-blur-sm flex items-center justify-center z-50">
      <Loading size="lg" text="加载中..." />
    </div>
  );
};

export default Loading;

