# Water Sphere

Water sphere loader with SVG waves

## 描述
多色渐变球体，SVG水波纹动画，色相旋转效果

## 技术实现
- SVG mask 水波遮罩
- d: path() 波浪变形动画
- hue-rotate 色相旋转
- radial-gradient 球体渐变

## 使用方法
```html
<div class="loader">
    <div class="sphere"></div>
    <svg viewBox="0 0 100 100">
        <defs>
            <mask id="waves">...</mask>
        </defs>
        <g id="shapes" mask="url(#fade)">
            <circle cx="50" cy="50" r="50" fill="currentColor" mask="url(#waves)"/>
        </g>
    </svg>
</div>
```
