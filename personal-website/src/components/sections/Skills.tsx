import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiTensorflow, SiPytorch, SiNodedotjs, SiExpress } from 'react-icons/si';
import Card from '../common/Card';
import { skills } from '../../data/personalInfo';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: '编程语言',
      icon: '💻',
      skills: skills.programming,
      color: 'from-primary-violet to-primary-blue',
    },
    {
      title: 'AI 框架',
      icon: '🤖',
      skills: skills.frameworks,
      color: 'from-primary-blue to-primary-cyan',
    },
    {
      title: '开发工具',
      icon: '🛠️',
      skills: skills.tools,
      color: 'from-primary-cyan to-primary-emerald',
    },
    {
      title: '工程软件',
      icon: '⚙️',
      skills: skills.engineering,
      color: 'from-primary-emerald to-accent-orange',
    },
  ];

  // 图标映射
  const iconMap: { [key: string]: React.ReactNode } = {
    SiPython: <FaPython />,
    SiCplusplus: <SiCplusplus />,
    SiJava: <FaJava />,
    SiJavascript: <SiJavascript />,
    SiHtml5: <span>HTML</span>,
    SiTensorflow: <SiTensorflow />,
    SiPytorch: <SiPytorch />,
    SiReact: <FaReact />,
    SiNodedotjs: <SiNodedotjs />,
    SiExpress: <SiExpress />,
    SiDocker: <FaDocker />,
    SiGit: <FaGitAlt />,
  };

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">技能专长</h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          掌握的技术栈和专业工具
        </p>
      </motion.div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <Card>
              {/* 分类标题 */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* 技能列表 */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {skill.icon && iconMap[skill.icon] && (
                          <div className="text-2xl text-primary-cyan">
                            {iconMap[skill.icon]}
                          </div>
                        )}
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary-cyan font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* 进度条 */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 + 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        {/* 液态波动效果 */}
                        <motion.div
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 语言能力 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card>
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-6">
              语言能力
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              {skills.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary-violet to-primary-cyan flex items-center justify-center relative">
                    <div className="absolute inset-2 rounded-full glass flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {lang.level}%
                      </span>
                    </div>
                  </div>
                  <p className="text-white font-medium">{lang.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Skills;

