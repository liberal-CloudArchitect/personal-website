# 个人网站项目计划书

## 📋 项目概述

**项目名称**: 蔡万鑫个人网站  
**部署平台**: GitHub Pages  
**GitHub账号**: [@liberal-CloudArchitect](https://github.com/liberal-CloudArchitect)  
**项目类型**: 个人博客/作品展示网站  

---

## 🎨 设计理念

### 核心设计方向：「机械诗学 × 数字艺术」

避免常见的暗色调科技风、数据流背景等陈旧设计，采用创新的设计语言：

1. **色彩系统**
   - 主色调：渐变色系统（紫罗兰-青蓝-翠绿）
   - 辅助色：温暖的橙黄色作为点缀
   - 背景：明亮的渐变背景 + 玻璃态设计（Glassmorphism）
   - 创意：使用动态色彩系统，根据时间/交互改变色调

2. **视觉风格**
   - 新拟态设计（Neumorphism）与玻璃态（Glassmorphism）结合
   - 3D卡片翻转效果
   - 流体动画（Fluid Animation）
   - 粒子系统（但不是传统的点阵，而是有机形态）
   - 几何图形的流动变换
   - 微交互动画（Micro-interactions）

3. **独特元素**
   - 机械齿轮与有机形态的结合
   - SVG路径动画展示技能树
   - 滚动触发的视差效果（Parallax）
   - 鼠标跟随的光影效果
   - 手绘风格的装饰元素
   - 等距投影（Isometric）的项目展示

---

## 🛠 技术栈选择

### 前端框架
- **React 18** + **Vite**: 现代化构建工具，快速开发
- **TypeScript**: 类型安全

### UI/动画库
1. **Framer Motion**: 强大的动画库，流畅的交互动画
2. **Three.js / React Three Fiber**: 3D场景和粒子系统
3. **GSAP (GreenSock)**: 专业级动画引擎
4. **Lottie**: JSON动画
5. **Anime.js**: 轻量级动画库
6. **React Spring**: 物理引擎驱动的动画
7. **Particles.js** (自定义版本): 有机粒子效果

### 样式方案
- **Tailwind CSS**: 快速样式开发
- **Styled Components** 或 **CSS Modules**: 组件级样式
- **SCSS**: 高级样式功能

### 特效库
- **Splitting.js**: 文字动画分割
- **Rellax.js**: 视差滚动
- **AOS (Animate On Scroll)**: 滚动动画
- **Tilt.js**: 3D倾斜效果
- **KUTE.js**: SVG形态变换

### 图表/可视化
- **D3.js**: 数据可视化
- **Chart.js**: 简单图表
- **Recharts**: React图表库

### 其他工具
- **React Router**: 路由管理
- **React Icons**: 图标库
- **React Helmet**: SEO优化
- **Intersection Observer API**: 滚动检测
- **Web Animations API**: 原生动画

---

## 📐 页面结构设计

### 1. 首页 (Hero Section)
**创意点**: 
- 全屏沉浸式入口
- 3D机械齿轮装置背景（Three.js）
- 打字机效果展示个人标语
- 有机粒子跟随鼠标移动
- 平滑滚动提示动画

**内容**:
- 个人头像（圆形玻璃态框架 + 发光效果）
- 姓名与职位标题
- 简短的个人介绍
- CTA按钮（查看作品/联系我）

### 2. 关于我 (About Section)
**创意点**:
- 时间轴采用曲线路径动画
- 技能图采用雷达图/蜘蛛网动画
- 卡片翻转展示不同信息面
- 统计数据采用计数动画

**内容**:
- 个人简介（动画文字）
- 教育背景（时间轴）
- 技能树可视化（交互式图表）
- 个人统计（项目数/成就数/代码行数等）

### 3. 项目展示 (Projects Section)
**创意点**:
- 等距投影3D卡片布局
- 悬停时卡片浮起 + 阴影扩散
- 项目分类筛选（带动画过渡）
- 点击后模态框详细展示（Lightbox效果）
- 项目标签云

**内容**:
- 项目卡片（图片/标题/简介/技术栈）
- GitHub项目同步（通过GitHub API）
- 项目详情页（技术细节/成果/链接）

### 4. 技能与工具 (Skills Section)
**创意点**:
- SVG图标动画
- 技能进度条采用液态效果
- 工具图标采用3D图标库
- 分类展示（编程/框架/工具/语言）
- 技能认证徽章动画

**内容**:
- 编程语言（Python, C++, JavaScript等）
- 框架与库（TensorFlow, PyTorch, React等）
- 工具（Docker, Git, VSCode等）
- 软技能可视化

### 5. 工作经历 (Experience Section)
**创意点**:
- 垂直时间轴（曲线路径）
- 每个职位采用展开卡片
- 职位描述采用列表动画
- 公司Logo动画展示

**内容**:
- 工作时间轴
- 职位与公司
- 工作内容与成就
- 技术栈标签

### 6. 博客文章 (Blog Section)
**创意点**:
- 瀑布流/砌体布局（Masonry）
- 文章卡片采用玻璃态设计
- 分类标签彩色渐变
- 阅读进度指示器
- 文章搜索与筛选动画

**内容**:
- 文章列表（标题/摘要/日期/标签）
- 分类筛选
- 文章详情页（Markdown渲染）
- 评论系统（可选：Gitalk/Utterances）

### 7. 联系方式 (Contact Section)
**创意点**:
- 交互式联系表单（带验证动画）
- 社交媒体图标采用悬停动画
- 地图可视化（可选）
- 发送成功后的粒子爆炸效果
- Email复制按钮带反馈动画

**内容**:
- 联系表单（姓名/邮箱/消息）
- 社交链接（GitHub/LinkedIn/Email/Phone）
- 下载简历按钮
- 位置信息（厦门）

### 8. 页脚 (Footer)
**创意点**:
- 波浪形状分隔
- 渐变背景
- 回到顶部按钮（火箭动画）

**内容**:
- 版权信息
- 快速链接
- 社交媒体图标
- 备案信息（如需要）

---

## 🎯 核心功能特性

### 必备功能
1. ✅ 响应式设计（移动端/平板/桌面）
2. ✅ 暗黑/明亮模式切换（但不是传统的暗黑模式）
3. ✅ 平滑滚动动画
4. ✅ 懒加载图片
5. ✅ SEO优化
6. ✅ 性能优化（Code Splitting）
7. ✅ GitHub API集成（自动获取项目）
8. ✅ 多语言支持（中文/英文）可选

### 创新功能
1. 🎨 自定义光标效果
2. 🎨 音乐播放器（背景音乐）可选
3. 🎨 彩蛋功能（隐藏的交互）
4. 🎨 访客计数器动画
5. 🎨 代码雨效果（在特定区域）
6. 🎨 成就解锁系统（滚动到特定位置触发）
7. 🎨 日/夜主题根据时间自动切换

---

## 📊 技术实现要点

### 1. 性能优化
- 图片懒加载与WebP格式
- 代码分割（React.lazy）
- 防抖与节流（滚动/窗口调整）
- Service Worker缓存
- 压缩与混淆

### 2. 动画性能
- 使用CSS Transform和Opacity（GPU加速）
- 使用requestAnimationFrame
- Intersection Observer代替滚动监听
- 减少重排重绘
- 动画使用will-change提示

### 3. 兼容性
- Babel转译
- Polyfill支持
- 浏览器前缀自动添加
- 渐进增强策略

### 4. SEO优化
- 语义化HTML
- Meta标签完善
- Open Graph标签
- Sitemap生成
- 结构化数据（JSON-LD）

---

## 🚀 开发流程

### Phase 1: 基础搭建（第1-2天）
- [x] 项目初始化（React + Vite + TypeScript）
- [ ] 基础文件结构搭建
- [ ] 安装核心依赖
- [ ] 配置Tailwind CSS
- [ ] 设置路由结构
- [ ] 建立组件库结构

### Phase 2: 核心组件开发（第3-5天）
- [ ] Header导航栏（带滚动隐藏效果）
- [ ] Footer页脚
- [ ] 通用Card组件
- [ ] 通用Button组件
- [ ] Loading动画组件
- [ ] 滚动进度指示器

### Phase 3: 页面开发（第6-10天）
- [ ] Hero首页
- [ ] About关于页面
- [ ] Projects项目展示
- [ ] Skills技能页面
- [ ] Experience经历页面
- [ ] Contact联系页面

### Phase 4: 动画与交互（第11-13天）
- [ ] 集成Framer Motion
- [ ] 集成Three.js场景
- [ ] 页面过渡动画
- [ ] 滚动动画
- [ ] 微交互动画
- [ ] 粒子系统

### Phase 5: 功能完善（第14-15天）
- [ ] GitHub API集成
- [ ] 暗黑模式切换
- [ ] 多语言支持（可选）
- [ ] 表单验证与提交
- [ ] 博客系统（可选）

### Phase 6: 优化与部署（第16-17天）
- [ ] 性能优化
- [ ] SEO优化
- [ ] 跨浏览器测试
- [ ] 移动端适配优化
- [ ] GitHub Pages配置
- [ ] 自定义域名（可选）
- [ ] 部署上线

### Phase 7: 测试与完善（第18天）
- [ ] 功能测试
- [ ] 性能测试（Lighthouse）
- [ ] 修复bug
- [ ] 文档完善
- [ ] 添加README

---

## 📦 依赖包清单

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "three": "^0.159.0",
    "gsap": "^3.12.0",
    "lottie-react": "^2.4.0",
    "particles.js": "^2.0.0",
    "animejs": "^3.2.1",
    "react-spring": "^9.7.0",
    "d3": "^7.8.5",
    "chart.js": "^4.4.0",
    "react-chartjs-2": "^5.2.0",
    "recharts": "^2.10.0",
    "react-icons": "^4.12.0",
    "react-helmet-async": "^2.0.0",
    "axios": "^1.6.0",
    "react-intersection-observer": "^9.5.0",
    "react-type-animation": "^3.2.0",
    "react-scroll": "^1.9.0",
    "react-tilt": "^1.0.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "sass": "^1.69.0",
    "@types/three": "^0.159.0",
    "gh-pages": "^6.1.0"
  }
}
```

---

## 🎯 成功标准

### 设计标准
- ✅ 视觉独特，避免常见AI风格
- ✅ 动画流畅，帧率稳定在60fps
- ✅ 响应式完美适配各种设备
- ✅ 色彩搭配和谐，符合现代审美

### 技术标准
- ✅ Lighthouse性能评分 > 90
- ✅ 首屏加载时间 < 2秒
- ✅ 代码覆盖率 > 80%
- ✅ 无控制台错误

### 用户体验标准
- ✅ 交互直观，无需学习成本
- ✅ 信息架构清晰
- ✅ 动画有意义，不干扰内容
- ✅ 加载状态明确

---

## 📝 注意事项

1. **版权问题**: 所有使用的图片、字体、图标确保有使用权
2. **隐私保护**: 不要在代码中硬编码敏感信息
3. **浏览器兼容**: 确保主流浏览器（Chrome/Firefox/Safari/Edge）正常显示
4. **移动优先**: 优先考虑移动端体验
5. **可维护性**: 代码结构清晰，注释完善
6. **可扩展性**: 预留博客功能的接口

---

## 🎨 设计灵感参考

- [Awwwards](https://www.awwwards.com/) - 顶级网页设计灵感
- [Dribbble](https://dribbble.com/) - UI设计灵感
- [CodePen](https://codepen.io/) - 前端动画效果
- [Three.js Examples](https://threejs.org/examples/) - 3D效果
- [CSS Design Awards](https://www.cssdesignawards.com/) - CSS创意

---

## 📅 时间估算

**总计**: 约15-20工作日

- 规划与设计: 2天
- 开发实现: 12-15天
- 测试优化: 2-3天
- 部署上线: 1天

---

## 🔗 相关链接

- GitHub仓库: https://github.com/liberal-CloudArchitect
- GitHub Pages部署地址: 待定
- 项目文档: 本文档
- 简历信息: RESUME_INFO.md

---

*最后更新: 2025年10月17日*

