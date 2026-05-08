// @ts-check
import { defineConfig } from 'astro/config';

// 部署到 https://jiangchangsheng2022.github.io/ 时：
//   - site = 'https://jiangchangsheng2022.github.io'
//   - base = '/'                （仓库名为 jiangchangsheng2022.github.io，根域名）
// 部署到 https://jiangchangsheng2022.github.io/book/ 时：
//   - site = 'https://jiangchangsheng2022.github.io'
//   - base = '/book/'           （仓库名为 book，子路径）
// 二选一：默认假设你按推荐用根域名仓库。如果用 book 仓库，把下面的 base 改成 '/book/'。

export default defineConfig({
  site: 'https://jiangchangsheng2022.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
