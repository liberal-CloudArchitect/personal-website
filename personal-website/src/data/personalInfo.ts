// 个人信息数据
export const personalInfo = {
  name: "蔡万鑫",
  englishName: "Wanxin Cai",
  title: "智能制造工程学士 | AI & 机械工程",
  bio: "具备扎实的AI算法开发经验，主导3个机器学习项目，经验多元。善于集成DeepSeek、OpenAI等多种AI平台，学生画像生成率、模型准确率均超85%。擅长全栈开发与工程实践，熟练掌握Docker部署、前后端联调及跨域问题解决。",
  email: "robinr27477@gmail.com",
  phone: "+86 13664200368",
  location: "福建·厦门",
  birthday: "21 January, 2004",
  github: "https://github.com/liberal-CloudArchitect",
  linkedin: "", // 可选
  website: "", // 可选
  avatar: "/avatar.jpg", // 需要添加头像图片
};

// 教育背景
export const education = [
  {
    school: "华侨大学",
    englishName: "Huaqiao University",
    degree: "智能制造工程学士",
    major: "机电及自动化学院—智能制造工程",
    period: "2022.09 - 2026.06",
    gpa: "3.96 (专业前9.8%)",
    courses: [
      { name: "工程图表", score: 96 },
      { name: "嵌入式程序设计", score: 94 },
      { name: "智能控制系统", score: 94 },
      { name: "控制工程基础", score: 93 },
      { name: "数据库基础", score: 93 },
    ],
  },
];

// 技能
export const skills = {
  programming: [
    { name: "Python", level: 90, icon: "SiPython" },
    { name: "C/C++", level: 85, icon: "SiCplusplus" },
    { name: "Java", level: 75, icon: "SiJava" },
    { name: "JavaScript", level: 85, icon: "SiJavascript" },
    { name: "HTML/CSS", level: 90, icon: "SiHtml5" },
  ],
  frameworks: [
    { name: "TensorFlow", level: 88, icon: "SiTensorflow" },
    { name: "PyTorch", level: 85, icon: "SiPytorch" },
    { name: "React", level: 80, icon: "SiReact" },
    { name: "Node.js", level: 75, icon: "SiNodedotjs" },
    { name: "Express", level: 75, icon: "SiExpress" },
  ],
  tools: [
    { name: "Docker", level: 85, icon: "SiDocker" },
    { name: "Git", level: 90, icon: "SiGit" },
    { name: "VSCode", level: 95, icon: "SiVisualstudiocode" },
    { name: "PyCharm", level: 85, icon: "SiPycharm" },
  ],
  engineering: [
    { name: "AutoCAD", level: 80, icon: "SiAutodesk" },
    { name: "SolidWorks", level: 85, icon: "" },
    { name: "Keil", level: 75, icon: "" },
    { name: "MatLab", level: 80, icon: "" },
  ],
  languages: [
    { name: "中文", level: 100 },
    { name: "English (CET-6)", level: 80 },
  ],
};

// 工作经验
export const experience = [
  {
    title: "机器学习工程师",
    company: "Upwork",
    period: "2024.10 - 2025.02",
    location: "远程",
    responsibilities: [
      "参与全模态情绪分析算法模型开发，负责架构神经网络（CNN）和长短期记忆网络（LSTM），实现模型准确率提升至85%",
      "解决模态融合问题，利用PCA和自编码器进行特征维度降维剪，实现多模态数据的有效融合",
      "应用动态时间规整（DTW）算法解决模态时间同步问题，提高数据布局精度",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "CNN", "LSTM", "PCA", "DTW"],
  },
  {
    title: "机械研发工程师实习生",
    company: "普江市安海联诚机械有限公司",
    period: "2024.07 - 2024.09",
    location: "福建",
    responsibilities: [
      "参与产品二维设计和三维建模，使用AutoCAD和SolidWorks完成5款机械零件的设计，提升设计效率20%",
      "协助团队优化产品结构，通过有限元分析（FEA）减少材料成本15%",
      "参与机械创新大赛，设计并制作自动化装配设备，获校级二等奖",
    ],
    tech: ["AutoCAD", "SolidWorks", "FEA", "机械设计"],
  },
];

// 项目
export const projects = [
  {
    id: 1,
    title: "华侨大学智能管理系统",
    description: "设计并开发智能管理系统，通过DeepSeek生成学生画像，预测未来发展方向",
    period: "2025.03 - 2025.04",
    highlights: [
      "系统准确率达到90%",
      "完成前期服务器搭建和数据库设计",
      "利用Docker实现一键启动及多端互通，提升系统部署效率30%",
      "解决跨域问题，通过配置响应头Access-Control-Allow-Origin和使用Express框架的cors中间件",
    ],
    tech: ["Python", "DeepSeek", "Docker", "Express", "CORS", "数据库"],
    github: "",
    demo: "",
    image: "",
  },
  {
    id: 2,
    title: "机械创新大赛",
    description: "设计并制作自动化装配设备，优化机械结构",
    period: "2022.10 - 2023.10",
    highlights: [
      "提升装配效率25%",
      "协调4人团队，完成设备调试和性能测试",
      "获校级二等奖",
    ],
    tech: ["机械设计", "自动化", "团队协作"],
    github: "",
    demo: "",
    image: "",
  },
];

// 荣誉奖项
export const awards = [
  {
    title: "实用型实用器械专利",
    organization: "机械创新大赛",
    date: "2023.03",
    description: "一种全自动的作物和地小车",
  },
  {
    title: "智能学生分析管理系统",
    organization: "软件系统著作人",
    date: "2025.03 - 2025.04",
    description: "智能化的分析平台，通过AI对数据进行整合分析",
  },
];

// 统计数据
export const stats = {
  projectsCompleted: 3,
  yearsExperience: 2,
  codeLines: "50K+",
  accuracy: "85%+",
};

