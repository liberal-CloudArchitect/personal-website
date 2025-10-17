# 🚀 蔡万鑫的个人网站

一个现代化、科技感十足的个人作品展示网站，采用 React + Vite + TypeScript 构建。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)

## ✨ 特性

### 🎨 设计特点
- **独特视觉风格**：避免常见AI风格，采用「机械诗学 × 数字艺术」设计理念
- **玻璃态设计（Glassmorphism）**：现代化的半透明效果
- **渐变色系统**：紫罗兰-青蓝-翠绿的动态渐变
- **完全响应式**：完美适配桌面、平板和移动设备

### 🎬 动画效果
- **Three.js 3D场景**：机械齿轮与有机粒子系统
- **Framer Motion动画**：流畅的页面过渡和元素动画
- **滚动触发动画**：Intersection Observer实现的视差效果
- **微交互动画**：按钮悬停、卡片翻转等细节动画

### 🛠 技术栈
- **前端框架**：React 19.1 + TypeScript
- **构建工具**：Vite 7.1
- **样式方案**：Tailwind CSS 4.1
- **动画库**：Framer Motion, GSAP
- **3D渲染**：Three.js + React Three Fiber
- **图标库**：React Icons
- **部署**：GitHub Pages

## 📂 项目结构

```
personal-website/
├── src/
│   ├── assets/              # 静态资源
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/          # React组件
│   │   ├── common/          # 通用组件（Button, Card, Loading等）
│   │   ├── layout/          # 布局组件（Header, Footer）
│   │   ├── sections/        # 页面区块
│   │   └── three/           # Three.js组件
│   ├── data/                # 数据文件
│   │   └── personalInfo.ts  # 个人信息数据
│   ├── hooks/               # 自定义Hooks
│   ├── types/               # TypeScript类型定义
│   ├── utils/               # 工具函数
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── public/                  # 公共资源
├── index.html               # HTML模板
├── vite.config.ts           # Vite配置
├── tailwind.config.js       # Tailwind配置
├── tsconfig.json            # TypeScript配置
└── package.json             # 项目依赖
```

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖
```bash
cd personal-website
npm install
```

### 本地开发
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
```

构建产物将生成在 `dist/` 目录。

### 预览生产版本
```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 1. 更新仓库配置

确保 `vite.config.ts` 中的 `base` 配置正确：

```typescript
export default defineConfig({
  base: '/', // 如果部署到子目录，改为 '/repository-name/'
})
```

### 2. 部署命令

```bash
npm run deploy
```

这将自动构建项目并部署到 `gh-pages` 分支。

### 3. 配置 GitHub Pages

1. 进入 GitHub 仓库设置
2. 找到 **Pages** 选项
3. Source 选择 `gh-pages` 分支
4. 点击保存

几分钟后，网站将在 `https://liberal-cloudarchitect.github.io/` 访问。

## 🎨 自定义配置

### 修改个人信息

编辑 `src/data/personalInfo.ts` 文件：

```typescript
export const personalInfo = {
  name: "你的姓名",
  email: "your.email@example.com",
  // ... 其他信息
};
```

### 修改色彩系统

编辑 `tailwind.config.js` 和 `src/index.css`：

```javascript
colors: {
  primary: {
    violet: '#8B5CF6',  // 修改主色调
    // ...
  }
}
```

### 添加新页面区块

1. 在 `src/components/sections/` 创建新组件
2. 在 `src/App.tsx` 中引入并添加
3. 在 `src/components/layout/Header.tsx` 添加导航链接

## 📝 页面内容

### 主要区块

1. **Hero（首页）**
   - 3D背景动画
   - 打字机效果
   - 个人简介
   - CTA按钮

2. **About（关于我）**
   - 教育背景
   - 个人统计
   - 技能亮点

3. **Skills（技能）**
   - 编程语言
   - AI框架
   - 开发工具
   - 液态进度条

4. **Experience（经历）**
   - 工作经历
   - 时间轴展示
   - 技术栈标签

5. **Projects（项目）**
   - 项目展示
   - 分类筛选
   - 详情模态框

6. **Contact（联系）**
   - 联系方式
   - 交互式表单
   - 社交链接

## 🔧 开发建议

### 代码规范
- 使用 ESLint 进行代码检查：`npm run lint`
- 遵循 TypeScript 严格模式
- 组件采用函数式编程

### 性能优化
- ✅ 代码分割（Code Splitting）
- ✅ 懒加载（Lazy Loading）
- ✅ 图片优化（WebP格式）
- ✅ 动画使用GPU加速

### SEO优化
- ✅ Meta标签完善
- ✅ Open Graph标签
- ✅ 语义化HTML
- ✅ Sitemap生成

## 📊 性能指标

目标 Lighthouse 评分：
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👤 作者

**蔡万鑫**
- GitHub: [@liberal-CloudArchitect](https://github.com/liberal-CloudArchitect)
- Email: robinr27477@gmail.com
- 位置: 福建·厦门

## 🙏 致谢

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ 如果这个项目对你有帮助，请给一个 Star！

💼 正在寻找工作机会，欢迎联系！
