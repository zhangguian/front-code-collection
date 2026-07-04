# 发光边框按钮

Glow Button

## 描述
发光边框按钮，使用SVG滤镜实现辉光效果。

## 技术实现
- SVG feGaussianBlur滤镜
- CSS filter应用滤镜
- 动态辉光动画
- box-shadow辅助发光

## 使用方法
```html
<svg class="svg-filters">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
    </filter>
  </defs>
</svg>
<button class="glow-btn">Hover to Glow</button>
```
