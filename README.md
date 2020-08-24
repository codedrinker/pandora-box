# 潘多拉盒子
Chrome 插件，一个集成神奇工具的地方

## 加载插件
1. 下载代码    
`git clone https://github.com/codedrinker/pandora-box.git`    
2. 管理插件  
`chrome://extensions/`  
3. 导入插件  
打开`开发者模式`，点击`加载已解压的扩展程序`加载`pandora-box`目录。 

## 贡献功能
1. 编写代码  
在 `/modules` 目录下面创建一个文件夹，比如命名为 `unix-timestamp`，在内部创建 `icon.png` 和 `index.html`。  
其中 `icon.png` 为小工具的图标，`index.html` 为小工具的页面。 如下图  
```
├── modules
│   └── unix-timestamp
│       ├── icon.png
│       └── index.html
├── modules.json
```

2. 配置模块  
按照 1 编写完内容以后，在 `modules.json` 里面增加一组配置，用户自动加载到插件的列表页面。  
```xml
[
  {
    "title": "时间戳转换",
    "desc": "在线时间戳值转换工具",
    "page": "/modules/unix-timestamp/index.html",
    "icon": "/modules/unix-timestamp/icon.png"
  }
]
```
3. 预览如下  
![](https://static01.imgkr.com/temp/2497ae12e5c948ec855d511905af725c.png)

