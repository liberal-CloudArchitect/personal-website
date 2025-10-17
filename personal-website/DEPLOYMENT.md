# 🚀 部署指南

本文档详细说明如何将网站部署到GitHub Pages。

## 📋 部署前准备

### 1. 确保代码已推送到GitHub

首先，确保你的代码已经推送到GitHub仓库。如果还没有创建仓库，请按以下步骤操作：

```bash
# 初始化Git仓库（如果还没有）
cd personal-website
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Personal website"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/liberal-CloudArchitect/personal-website.git

# 推送到GitHub
git push -u origin main
```

### 2. 检查配置

确保 `vite.config.ts` 中的 `base` 配置正确：

#### 如果部署到用户主页（推荐）
仓库名称为：`username.github.io`
```typescript
export default defineConfig({
  base: '/',
})
```

访问地址：`https://liberal-cloudarchitect.github.io/`

#### 如果部署到项目页面
仓库名称为：`personal-website`
```typescript
export default defineConfig({
  base: '/personal-website/',
})
```

访问地址：`https://liberal-cloudarchitect.github.io/personal-website/`

## 🚀 部署步骤

### 方法一：使用npm脚本（推荐）

```bash
npm run deploy
```

这个命令会：
1. 自动运行 `npm run build` 构建生产版本
2. 将 `dist` 目录内容推送到 `gh-pages` 分支

### 方法二：手动部署

```bash
# 1. 构建项目
npm run build

# 2. 进入构建目录
cd dist

# 3. 初始化Git并推送
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:liberal-CloudArchitect/personal-website.git main:gh-pages

# 4. 返回项目根目录
cd ..
```

## ⚙️ 配置GitHub Pages

### 1. 启用GitHub Pages

1. 访问你的GitHub仓库
2. 点击 **Settings** （设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单中选择 `gh-pages` 分支
5. 文件夹选择 `/ (root)`
6. 点击 **Save** （保存）

### 2. 等待部署完成

GitHub会自动部署你的网站。通常需要几分钟时间。你可以在Pages设置页面查看部署状态。

部署完成后，你会看到网站地址：
```
Your site is published at https://liberal-cloudarchitect.github.io/
```

## 🔄 更新网站

每次更新网站内容后，只需：

```bash
# 1. 提交更改
git add .
git commit -m "Update website content"
git push

# 2. 重新部署
npm run deploy
```

## 🎨 自定义域名（可选）

### 1. 购买域名

从域名提供商（如Namecheap、GoDaddy等）购买域名。

### 2. 配置DNS

在域名提供商处添加以下DNS记录：

#### A记录（推荐）
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

#### CNAME记录（可选）
```
Type: CNAME
Host: www
Value: liberal-cloudarchitect.github.io
```

### 3. 在GitHub设置自定义域名

1. 在仓库根目录创建 `public/CNAME` 文件
2. 文件内容为你的域名（如：`example.com`）
3. 推送更改
4. 在GitHub Pages设置中输入自定义域名
5. 勾选 "Enforce HTTPS"

### 4. 等待DNS生效

DNS更改可能需要24-48小时才能完全生效。

## 🐛 常见问题

### 问题1：页面404错误

**原因**：`base` 配置不正确

**解决**：
- 检查 `vite.config.ts` 中的 `base` 配置
- 如果部署到用户主页，使用 `base: '/'`
- 如果部署到项目页面，使用 `base: '/repository-name/'`

### 问题2：样式丢失

**原因**：资源路径不正确

**解决**：
- 确保所有资源使用相对路径或绝对路径
- 检查 `index.html` 中的资源引用

### 问题3：路由404错误（SPA）

**原因**：GitHub Pages不支持前端路由

**解决**：
- 本项目使用锚点导航（`#section`），不存在此问题
- 如果使用React Router，需要使用HashRouter或配置404.html

### 问题4：部署后更新未生效

**原因**：浏览器缓存或CDN缓存

**解决**：
- 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）
- 等待几分钟让CDN更新
- 使用隐私模式/无痕模式测试

### 问题5：构建失败

**原因**：依赖问题或TypeScript错误

**解决**：
```bash
# 清理缓存
rm -rf node_modules dist
npm cache clean --force

# 重新安装依赖
npm install

# 检查TypeScript错误
npm run build
```

## 📊 监控与分析

### 添加Google Analytics

1. 在 `index.html` 的 `<head>` 标签中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. 替换 `GA_MEASUREMENT_ID` 为你的实际ID

### GitHub Actions自动部署（高级）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

这样每次推送到main分支时，会自动构建并部署。

## ✅ 部署检查清单

在部署前，请确认：

- [ ] 所有个人信息已更新（`src/data/personalInfo.ts`）
- [ ] 项目描述和截图已添加
- [ ] 联系方式正确无误
- [ ] 所有外部链接可访问
- [ ] 图片资源已优化
- [ ] SEO信息完整（meta标签）
- [ ] 在本地预览没有问题（`npm run preview`）
- [ ] Git仓库已创建并推送
- [ ] `vite.config.ts` 中 `base` 配置正确
- [ ] `.gitignore` 已配置

## 📝 部署后验证

部署完成后，请检查：

1. ✅ 网站可以正常访问
2. ✅ 所有页面区块显示正常
3. ✅ 动画效果流畅
4. ✅ 响应式设计在移动端正常
5. ✅ 所有链接可点击
6. ✅ 联系表单可以提交
7. ✅ GitHub链接正确
8. ✅ 页面加载速度快

## 🎉 完成！

恭喜！你的个人网站已成功部署到GitHub Pages。

现在你可以：
- 分享网站链接给朋友和雇主
- 在简历中添加网站链接
- 在GitHub个人资料中添加网站链接
- 在社交媒体分享

## 📞 获取帮助

如果遇到问题：
1. 查看GitHub Pages文档：https://docs.github.com/pages
2. 查看Vite部署文档：https://vitejs.dev/guide/static-deploy.html
3. 提交Issue到项目仓库

---

祝你部署顺利！🚀

