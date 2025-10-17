import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/liberal-CloudArchitect',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: 'mailto:robinr27477@gmail.com',
    },
  ];

  const quickLinks = [
    { label: '首页', href: '#home' },
    { label: '关于', href: '#about' },
    { label: '技能', href: '#skills' },
    { label: '经历', href: '#experience' },
    { label: '项目', href: '#projects' },
    { label: '联系', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* 波浪形状 SVG */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-white/5"
          />
          <path
            d="M0 40L60 46.7C120 53 240 67 360 70C480 73 600 67 720 63.3C840 60 960 60 1080 63.3C1200 67 1320 73 1380 76.7L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z"
            className="fill-white/10"
          />
        </svg>
      </div>

      {/* 渐变背景 */}
      <div className="bg-gradient-to-br from-primary-violet/20 via-primary-blue/20 to-primary-emerald/20 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 个人信息 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-violet to-primary-cyan flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">蔡</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">蔡万鑫</h3>
                  <p className="text-white/70 text-sm">Wanxin Cai</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                智能制造工程学士 | AI & 机械工程
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-cyan" />
                  <span>福建·厦门</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-primary-cyan" />
                  <a href="mailto:robinr27477@gmail.com" className="hover:text-primary-cyan transition-colors">
                    robinr27477@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-primary-cyan" />
                  <a href="tel:+8613664200368" className="hover:text-primary-cyan transition-colors">
                    +86 13664200368
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 快速链接 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white font-bold text-lg">快速链接</h3>
              <nav className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-primary-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* 社交媒体 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-white font-bold text-lg">社交媒体</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:shadow-glow transition-all"
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 分隔线 */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* 版权信息 */}
              <p className="text-white/60 text-sm text-center md:text-left">
                © {currentYear} Wanxin Cai. Made with{' '}
                <FaHeart className="inline text-red-500 animate-pulse" /> using React + Vite
              </p>

              {/* 回到顶部按钮 */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-violet to-primary-cyan text-white font-medium shadow-glow"
              >
                <span>回到顶部</span>
                <FaArrowUp />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

