# 3D Model Reveal Effect

鼠标悬停交互效果 - 根据鼠标位置实时显示模型纹理

## 效果演示

- **手电筒模式**：以鼠标位置为中心，显示圆形区域的灰色模型
- **横扫模式**：从左往右擦除，显示灰色模型

## 使用方法

1. 打开 `index.html`
2. 鼠标移入卡片
3. 移动鼠标查看效果
4. 点击顶部按钮切换模式

## 技术实现

- 纯 HTML/CSS/JS，无依赖
- 使用 `clip-path: polygon()` 控制图层显示区域
- `requestAnimationFrame` 优化动画性能

## 文件结构

```
3d-model-reveal/
├── index.html
├── style.css
├── script.js
└── images/
    ├── gray.webp
    └── color.webp
```
