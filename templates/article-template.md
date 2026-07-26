---
title: 文章主标题
subtitle: 文章副标题
subtitleLang: zh
description: "用一两句话介绍这篇文章。这段文字会显示在主页和搜索页面。"
draft: true
publishedAt: 2026-07-26
slug: test-article
# 可根据内容使用：story、essay、reading、photography、poster、exhibition
tags:
  - story
---

这里是文章导言。可以简单说明写作缘起，也可以直接删除这一段，从正文开始。

## 正文小标题

这里开始写正文。

普通段落之间空一行。Markdown 会自动把它们显示成两个段落。

### 更小一级的标题

这里继续写正文。

> 这里是一段引用。
>
> 引用有多段时，每一段前面都保留 `>`。

## 单张图片

<figure>
  <img src="/images/test-article/example.jpg" alt="请用一句话说明图片内容">
  <figcaption>这里填写图片说明或图片来源</figcaption>
</figure>

## 两张并排图片

<div class="image-pair">
  <figure>
    <img src="/images/test-article/example-01.jpg" alt="第一张图片的内容">
    <figcaption>第一张图片的说明</figcaption>
  </figure>
  <figure>
    <img src="/images/test-article/example-02.jpg" alt="第二张图片的内容">
    <figcaption>第二张图片的说明</figcaption>
  </figure>
</div>

## 链接

[显示给读者看的文字](https://example.com)

<section class="further-readings">
  <h2>Further Readings</h2>
  <ul>
    <li><a href="https://example.com">资料名称</a></li>
    <li>书籍或纸质资料名称</li>
  </ul>
</section>
