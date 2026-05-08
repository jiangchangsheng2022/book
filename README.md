# 《用户研究：从入门到精通》读者服务网站

这是《用户研究：从入门到精通》（蒋昌盛 著）的官方读者服务站点，纯静态网站，部署在 GitHub Pages 上。

线上地址：<https://jiangchangsheng2022.github.io/>

## 站点结构

- `/` 首页
- `/templates/` 模板包（8 份模板：研究计划书、甄别问卷、知情同意书、访谈提纲、问卷模板、用户画像、用户旅程图、研究报告 PPT）
- `/glossary/` 术语词典（80+ 条，可搜索可筛选）
- `/tools/` 工具地图（按使用场景导航）
- `/compliance/` 合规清单（可勾选可打印）
- `/cases/` 真实案例（占位）
- `/newsletter/` 刊物（占位）
- `/errata/` 勘误与版本
- `/circle/` 读者圈（预约通知占位）
- `/about/` 关于本书与作者
- `/en/` 英文版骨架（首页、术语词典、关于）

## 本地开发

需要 Node.js 20+。

```bash
# 安装依赖
npm install

# 本地预览（默认 http://localhost:4321）
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署

### 第一次部署

1. 在 GitHub 上创建仓库 `jiangchangsheng2022.github.io`（仓库名必须和你的用户名一致，这样会自动作为 user 站点）。
2. 把当前文件夹内容推到仓库的 `main` 分支：

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/jiangchangsheng2022/jiangchangsheng2022.github.io.git
   git push -u origin main
   ```

3. 在 GitHub 仓库页面 → Settings → Pages → Source 选 **GitHub Actions**。
4. 推送之后等 1-2 分钟，第一次构建完成后会自动部署。

### 之后的更新

每次 `git push` 到 `main` 分支，GitHub Actions 会自动构建并部署。

### 如果你用的是 `book` 仓库而不是 user 站点仓库

如果你的仓库名是 `book` 而不是 `jiangchangsheng2022.github.io`，把 `astro.config.mjs` 里的 `base` 从 `'/'` 改成 `'/book/'`，URL 会变成 <https://jiangchangsheng2022.github.io/book/>。

## 内容怎么改

### 改文字

所有页面在 `src/pages/` 下，用 Astro 组件编写。文字直接编辑就好。

### 改模板信息 / 添加模板

编辑 `src/data/templates.json`。每份模板的字段：

```json
{
  "slug": "research-proposal",        // URL 路径
  "title": "研究计划书范本",          // 标题
  "category": "项目立项",             // 分类
  "format": ".docx",                  // 文件格式
  "stage": "Kick-off 阶段",           // 适用阶段
  "summary": "...",                   // 简介
  "useCase": "...",                   // 适用场景
  "highlights": ["...", "..."],       // 特点列表
  "placeholder": true                 // true 表示文件未上传，false 表示已上传可下载
}
```

### 添加模板实际文件

把 `.docx` / `.pptx` / `.zip` 放到 `public/templates/<slug>.<ext>`，然后把 `templates.json` 里对应模板的 `placeholder` 改为 `false`。文件链接会自动指向 `/templates/files/<slug>.<ext>` ——记得在添加文件后改一下下载按钮的 href（`src/pages/templates/[slug].astro` 中已有占位逻辑）。

### 改术语词典

编辑 `src/data/glossary.json`。每条术语字段：`en`、`zh`、`def`、`category`。

### 改工具地图

编辑 `src/data/tools.json`。

## 站点资源占位说明

当前版本中以下资源以"占位 + 描述"形式呈现，将在下一轮内容更新中补齐实际文件或正文：

- 8 份模板的实际 .docx / .pptx 文件
- 真实案例的正文（计划 2-3 篇）
- 刊物第一期
- 勘误表单（计划接入 Formspree）
- 读者圈邮箱预约（计划接入 Buttondown 或 ConvertKit）
- OG 分享图、作者头像等图片资源

## 技术栈

- [Astro 5](https://astro.build/) — 静态站点生成器
- 纯 CSS（无 Tailwind / 无 UI 库）
- TypeScript
- GitHub Actions 自动部署

## 协议

- 站点源代码：MIT
- 内容（书籍配套素材、文字）：CC BY-NC 4.0

---

如果发现问题或有改进建议，欢迎在仓库里提 [Issue](https://github.com/jiangchangsheng2022/jiangchangsheng2022.github.io/issues)。
