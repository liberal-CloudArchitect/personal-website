import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { experience } from '../../data/personalInfo';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">工作经历</h2>
        <p className="text-white/95 text-lg max-w-3xl mx-auto">
          我的职业发展和工作经验
        </p>
      </motion.div>

      {/* 时间轴 */}
      <div className="relative">
        {/* 中心线 */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-violet via-primary-blue to-primary-cyan" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* 时间轴节点 */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-gradient-to-r from-primary-violet to-primary-cyan shadow-glow z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-violet to-primary-cyan animate-ping opacity-75" />
              </div>

              {/* 内容卡片 */}
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                <Card hover>
                  <div className="space-y-4">
                    {/* 头部信息 */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-primary-violet to-primary-cyan flex items-center justify-center text-white text-xl">
                          <FaBriefcase />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary-cyan font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 时间和地点 */}
                    <div className="flex flex-wrap gap-4 text-sm text-white/90 font-medium">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-primary-cyan" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary-cyan" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* 职责描述 */}
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-2">主要职责：</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-2 text-white/95 text-sm"
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-cyan mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* 技术栈标签 */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">技术栈：</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Badge variant="primary" size="sm">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 查看更多按钮 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href={`mailto:robinr27477@gmail.com`}
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-primary-violet to-primary-cyan text-white font-semibold hover:shadow-glow transition-all hover:scale-105"
        >
          了解更多工作经历
        </a>
      </motion.div>
    </section>
  );
};

export default Experience;

