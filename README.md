# ahyo's blog

`ahyoooo.com` 的独立个人网站。文章、图片和网站代码都保存在这个项目中，不依赖 Notion。

## 网站内容

- Home：文章列表
- About：网站与作者介绍
- Bookmarks：喜欢的网站
- Search：文章全文与关键词检索
- Blog：保存在 `src/content/blog/` 中的 Markdown 文章
- Images：保存在 `public/images/` 中的本地图片

## 日常更新

新文章将作为 Markdown 文件保存在 `src/content/blog/`；文章图片保存在 `public/images/`。完成修改并上传 GitHub 后，托管平台会自动生成并更新网站。

## 本地预览

```sh
pnpm install
pnpm dev
```

浏览器打开终端显示的本地地址。

## 上线前检查

```sh
pnpm build
```

生成成功后，适合发布的网站文件会出现在 `dist/`。这个文件夹由系统自动生成，不需要手动编辑或上传。
