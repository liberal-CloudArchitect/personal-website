import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaPaperPlane, FaCheck } from 'react-icons/fa';
import Card from '../common/Card';
import Button from '../common/Button';
import { personalInfo } from '../../data/personalInfo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 这里可以集成EmailJS或其他邮件服务
    // 模拟提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // 3秒后重置状态
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: '邮箱',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-primary-violet to-primary-blue',
    },
    {
      icon: <FaPhone />,
      label: '电话',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-primary-blue to-primary-cyan',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: '位置',
      value: personalInfo.location,
      href: '#',
      color: 'from-primary-cyan to-primary-emerald',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: '@liberal-CloudArchitect',
      href: personalInfo.github,
      color: 'from-primary-emerald to-accent-orange',
    },
  ];

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">联系我</h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          有项目合作或工作机会？欢迎随时联系
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 联系信息 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6">联系方式</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-lg glass hover:bg-white/10 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </Card>

          {/* 地图或其他信息 */}
          <Card>
            <h3 className="text-xl font-bold text-white mb-4">关于我</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              我是一名热爱技术的工程师，专注于AI和全栈开发。
              如果你有有趣的项目想法或合作机会，欢迎随时联系我！
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/60 text-sm">
                最佳联系时间：周一至周五 9:00-18:00
              </p>
            </div>
          </Card>
        </motion.div>

        {/* 联系表单 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6">发送消息</h3>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-lg bg-primary-emerald/20 border border-primary-emerald/30 flex items-center gap-3"
              >
                <FaCheck className="text-primary-emerald text-xl" />
                <p className="text-white">消息发送成功！我会尽快回复您。</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 姓名 */}
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="您的姓名"
                />
              </div>

              {/* 邮箱 */}
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* 主题 */}
              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                  主题 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-cyan transition-colors"
                  placeholder="消息主题"
                />
              </div>

              {/* 消息 */}
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  消息 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                  placeholder="请输入您的消息..."
                />
              </div>

              {/* 提交按钮 */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                icon={isSubmitting ? undefined : <FaPaperPlane />}
                disabled={isSubmitting}
              >
                {isSubmitting ? '发送中...' : '发送消息'}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

