# Paper Atlas

一个以封面为入口的个人科研文献管理静态网站。

## 本地预览

直接用浏览器打开 `index.html` 即可；也可以在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 功能

- 通过封面卡片快速浏览论文
- 标题、作者、方向和会议搜索
- 按研究方向筛选
- 论文详情页
- 直接跳转 arXiv / OpenAI / GitHub 等外部页面
- 在卡片或详情页上传自定义封面，并保存到当前浏览器的 localStorage

## GitHub Pages

这是无构建依赖的静态站点。将仓库推送到 GitHub 后，在仓库设置中打开 **Settings → Pages**，选择 **Deploy from a branch**，分支选择 `main`、目录选择 `/ (root)`，保存即可。

自定义封面是浏览器本地数据，不会上传到 GitHub，也不会在不同设备间同步。
