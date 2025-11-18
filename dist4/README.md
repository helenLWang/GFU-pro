# GFU-NailTech-Pro

一个美观的美甲技术展示和预约网站，采用白+淡粉色系设计风格，提供分析、预约、主页和介绍功能。

## 网站功能

- **主页**：展示品牌信息、服务特点和关键数据
- **分析**：展示小红书粉丝、点赞等数据分析
- **预约**：在线预约美甲服务
- **介绍**：品牌故事和团队介绍

## 技术栈

- HTML5
- CSS3
- JavaScript
- Chart.js（用于数据可视化）
- Font Awesome（用于图标）

## 文件结构

```
GFU-version4/
├── index.html         # 主页
├── analytics.html     # 分析页面
├── booking.html       # 预约页面
├── about.html         # 介绍页面
├── css/
│   └── main.css       # 主要样式文件
├── js/
│   └── main.js        # JavaScript功能文件
└── images/            # 图片文件夹（可根据需要添加图片）
```

## GitHub上传步骤

### 方法一：删除现有仓库文件后上传（保留历史记录）

1. **克隆仓库到本地**（如果你本地没有的话）
   ```bash
   git clone https://github.com/helenLWang/GFU-NailTech-Pro.git
   cd GFU-NailTech-Pro
   ```

2. **删除所有受版本控制的文件和文件夹**
   ```bash
   git rm -rf .
   ```

3. **复制我们新创建的网站文件到仓库目录**
   ```bash
   # 假设新文件在 GFU-version4 目录
   cp -r /path/to/GFU-version4/* .
   ```

4. **添加新文件**
   ```bash
   git add .
   ```

5. **提交更改**
   ```bash
   git commit -m "Update with new website design"
   ```

6. **推送到 GitHub**
   ```bash
   git push origin main
   ```

### 方法二：直接初始化新仓库（如果需要）

1. **初始化新的git仓库**
   ```bash
   cd /path/to/GFU-version4
   git init
   ```

2. **添加远程仓库**
   ```bash
   git remote add origin https://github.com/helenLWang/GFU-NailTech-Pro.git
   ```

3. **添加所有文件**
   ```bash
   git add .
   ```

4. **提交更改**
   ```bash
   git commit -m "Initial website commit"
   ```

5. **推送到GitHub（可能需要强制推送）**
   ```bash
   git push -f origin main
   ```

## Vercel部署步骤

1. **访问Vercel官网**：[https://vercel.com](https://vercel.com)

2. **注册/登录账号**

3. **连接GitHub账号**
   - 点击右上角的"Add New Project"
   - 选择"Import from Git Repository"
   - 点击"Continue with GitHub"
   - 授权Vercel访问你的GitHub仓库

4. **选择仓库**
   - 从列表中选择"GFU-NailTech-Pro"仓库

5. **配置部署设置**
   - Framework Preset: 选择 "Other"
   - Root Directory: 保持默认 (不需要修改)
   - Build Command: 不需要填写
   - Output Directory: 不需要填写
   - 其他设置保持默认

6. **点击"Deploy"开始部署**

7. **部署完成后**
   - Vercel会生成一个预览URL
   - 可以通过这个URL访问你的网站
   - 之后每次推送到GitHub，Vercel会自动重新部署

## 注意事项

1. 本网站是纯前端项目，没有后端功能，完全兼容GitHub上传和Vercel部署
2. 所有文件命名都使用小写字母和连字符（如analytics.html），符合Web标准命名规范
3. 如需添加图片，请将图片文件放入images文件夹，并在HTML中正确引用
4. 预约表单目前是前端模拟实现，提交后会显示成功提示但不会实际发送数据

## 开发说明

如需进一步开发，可以修改以下文件：
- 修改样式：编辑 `css/main.css`
- 修改交互：编辑 `js/main.js`
- 修改页面内容：编辑对应的HTML文件