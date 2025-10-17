import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ThreeBackground from '../three/ThreeBackground';
import Button from '../common/Button';
import { personalInfo } from '../../data/personalInfo';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js 3D Background */}
      <ThreeBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="relative"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-primary-violet via-primary-blue to-primary-cyan p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                {/* 如果有头像图片，可以替换为 <img src={personalInfo.avatar} alt="Avatar" /> */}
                <div className="w-full h-full bg-gradient-to-br from-primary-violet/30 to-primary-cyan/30 flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">蔡</span>
                </div>
              </div>
            </div>
            
            {/* Floating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-primary-violet/30 scale-110" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-primary-cyan/30 scale-125" />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              {personalInfo.englishName}
            </p>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-16 sm:h-20"
          >
            <TypeAnimation
              sequence={[
                '智能制造工程学士',
                2000,
                'AI & 机械工程',
                2000,
                '全栈开发者',
                2000,
                '机器学习工程师',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-3xl sm:text-4xl font-bold gradient-text"
              repeat={Infinity}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl text-lg text-white/80 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<FaGithub />}
              onClick={() => window.open(personalInfo.github, '_blank')}
            >
              访问 GitHub
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<FaEnvelope />}
              onClick={() => scrollToSection('#contact')}
            >
              联系我
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<FaDownload />}
              onClick={() => {
                // 下载简历功能
                window.open('/resume.pdf', '_blank');
              }}
            >
              下载简历
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 pt-4"
          >
            {[
              { icon: <FaGithub />, href: personalInfo.github },
              { icon: <FaEnvelope />, href: `mailto:${personalInfo.email}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white text-xl hover:shadow-glow transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              onClick={() => scrollToSection('#about')}
              className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-sm">向下滚动</span>
              <FaChevronDown className="text-2xl" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

