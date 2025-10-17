import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCode, FaChartLine } from 'react-icons/fa';
import Card from '../common/Card';
import { education, stats } from '../../data/personalInfo';

const About: React.FC = () => {
  const statsData = [
    {
      icon: <FaCode />,
      value: stats.projectsCompleted,
      label: '完成项目',
      suffix: '+',
      color: 'from-primary-violet to-primary-blue',
    },
    {
      icon: <FaChartLine />,
      value: stats.yearsExperience,
      label: '年经验',
      suffix: '+',
      color: 'from-primary-blue to-primary-cyan',
    },
    {
      icon: <FaAward />,
      value: stats.codeLines,
      label: '代码行数',
      suffix: '',
      color: 'from-primary-cyan to-primary-emerald',
    },
    {
      icon: <FaCode />,
      value: stats.accuracy,
      label: '模型准确率',
      suffix: '',
      color: 'from-primary-emerald to-accent-orange',
    },
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">关于我</h2>
        <p className="text-white/95 text-lg max-w-3xl mx-auto">
          探索我的教育背景、专业技能和职业成就
        </p>
      </motion.div>

      {/* 统计数据 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-2xl`}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {typeof stat.value === 'number' ? (
                  <CountUp end={stat.value} />
                ) : (
                  stat.value
                )}
                {stat.suffix}
              </motion.div>
              <p className="text-white/90 text-sm font-medium">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 教育背景 */}
      <div className="grid md:grid-cols-1 gap-8 mb-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-violet to-primary-cyan flex items-center justify-center text-white text-2xl">
                    <FaGraduationCap />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {edu.school}
                      </h3>
                      <p className="text-white/85 text-sm font-medium">{edu.englishName}</p>
                    </div>
                    <span className="px-4 py-1 rounded-full bg-primary-blue/20 text-primary-cyan text-sm font-medium mt-2 md:mt-0 w-fit">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-white font-semibold mb-2 text-lg">{edu.degree}</p>
                  <p className="text-white/90 text-sm mb-3 font-medium">{edu.major}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-accent-orange to-accent-yellow text-white text-sm font-bold">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  
                  {/* 课程成绩 */}
                  <div className="mt-4">
                    <h4 className="text-white font-semibold mb-3">主要课程</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {edu.courses.map((course, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="glass rounded-lg p-2 text-center"
                        >
                          <p className="text-white/90 text-sm font-medium mb-1">
                            {course.name}
                          </p>
                          <p className="text-primary-cyan font-bold">
                            {course.score}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 个人亮点 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card>
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
            个人亮点
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI算法开发',
                description: '主导3个机器学习项目，模型准确率均超85%',
                icon: '🤖',
              },
              {
                title: '全栈开发',
                description: '熟练掌握Docker部署、前后端联调及跨域问题解决',
                icon: '💻',
              },
              {
                title: '团队协作',
                description: '带领4人小组完成省级赛事，沟通高效',
                icon: '👥',
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-white/90 text-sm font-medium">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

// 数字计数动画组件
const CountUp: React.FC<{ end: number }> = ({ end }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return <div ref={ref}>{count}</div>;
};

export default About;

