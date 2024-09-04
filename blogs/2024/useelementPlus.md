---
title: 如何引入element-plus
date: 2024/1/15
tags:
 - element-plus
categories:
 - UI
---

## 快速开始


**npm**

```bash
# 安装element-plus
npm install element-plus --save
```
在.vuepress文件夹中新建client.js文件，写入以下内容
```bash

import { defineClientConfig } from '@vuepress/client';
import ElementPlus from 'element-plus'
# import './styles/index.scss'
import 'element-plus/dist/index.css'
export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)
  }
});
```