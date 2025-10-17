import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaStar, FaCodeBranch, FaSync } from 'react-icons/fa';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Modal from '../common/Modal';
import Loading from '../common/Loading';
import { projects as localProjects } from '../../data/personalInfo';
import { fetchGitHubRepos, TransformedProject } from '../../services/githubAPI';
import type { Project } from '../../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [githubProjects, setGithubProjects] = useState<TransformedProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useGitHubData, setUseGitHubData] = useState(true);

  //获取GitHub项目数据
  useEffect(() => {
    const loadGitHubProjects = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const repos = await fetchGitHubRepos();
        setGithubProjects(repos);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load GitHub projects:', err);
        setError('无法加载GitHub项目数据');
        setUseGitHubData(false); // 回退到本地数据
        setIsLoading(false);
      }
    };

    loadGitHubProjects();
  }, []);

  // 合并GitHub项目和本地项目（转换格式）
  const convertedGitHubProjects: Project[] = githubProjects.map(repo => ({
    id: repo.id.toString(),
    title: repo.title,
    description: repo.description,
    period: `更新于 ${repo.updatedAt}`,
    tech: repo.technologies,
    github: repo.githubLink,
    demo: repo.liveLink !== '#' ? repo.liveLink : undefined,
    highlights: [
      `⭐ ${repo.stars} Stars`,
      `🍴 ${repo.forks} Forks`,
      `📝 主要语言: ${repo.language}`,
    ],
    image: undefined,
  }));

  // 使用GitHub数据或本地数据
  const projects = useGitHubData && githubProjects.length > 0 
    ? convertedGitHubProjects 
    : localProjects;

  // 提取所有技术标签
  const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));
  const filters = ['all', ...allTech.slice(0, 5)]; // 限制显示的过滤器数量

  // 过滤项目
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">项目展示</h2>
        <p className="text-white/95 text-lg max-w-3xl mx-auto mb-4">
          我参与和主导的精选项目
        </p>
        
        {/* 数据源指示器 */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {!isLoading && (
            <div className="flex items-center gap-2 text-sm">
              <FaGithub className={`${useGitHubData && githubProjects.length > 0 ? 'text-primary-cyan' : 'text-white/40'}`} />
              <span className="text-white/70">
                {useGitHubData && githubProjects.length > 0 
                  ? `实时GitHub数据 (${githubProjects.length}个项目)` 
                  : `本地项目数据 (${localProjects.length}个项目)`}
              </span>
            </div>
          )}
          {error && (
            <div className="text-accent-orange text-sm">
              ⚠️ {error}
            </div>
          )}
        </div>

        {/* 过滤器 */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === tech
                  ? 'bg-gradient-to-r from-primary-violet to-primary-cyan text-white shadow-glow'
                  : 'glass text-white/70 hover:text-white'
              }`}
            >
              {tech === 'all' ? '全部' : tech}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* 加载状态 */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loading />
          <p className="text-white/70 mt-4">正在从GitHub加载项目数据...</p>
        </div>
      )}

      {/* 项目网格 */}
      {!isLoading && (
        <AnimatePresence mode="wait">
          <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              layout
            >
              <Card
                hover
                onClick={() => setSelectedProject(project)}
                className="h-full cursor-pointer group"
              >
                {/* 项目图片 */}
                {project.image ? (
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary-violet/20 to-primary-cyan/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary-violet/20 via-primary-blue/20 to-primary-cyan/20 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                )}

                {/* 项目信息 */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <FaStar className="text-accent-yellow text-lg" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <FaCalendar />
                    <span>{project.period}</span>
                  </div>

                  <p className="text-white/80 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="primary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary" size="sm">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* 链接 */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-white text-sm hover:bg-white/20 transition-colors"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-white text-sm hover:bg-white/20 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      )}

      {/* 查看GitHub链接 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/liberal-CloudArchitect"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary-violet to-primary-cyan text-white font-semibold hover:shadow-glow transition-all hover:scale-105"
        >
          <FaGithub className="text-xl" />
          <span>查看更多项目</span>
        </a>
      </motion.div>

      {/* 项目详情模态框 */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="lg"
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* 项目图片 */}
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            {/* 时间 */}
            <div className="flex items-center gap-2 text-white/70">
              <FaCalendar />
              <span>{selectedProject.period}</span>
            </div>

            {/* 描述 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">项目描述</h3>
              <p className="text-white/80 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* 亮点 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">项目亮点</h3>
              <ul className="space-y-2">
                {selectedProject.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/80">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-cyan mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 技术栈 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, idx) => (
                  <Badge key={idx} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 链接 */}
            <div className="flex gap-4 pt-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-violet to-primary-cyan text-white font-semibold hover:shadow-glow transition-all"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg glass text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;

