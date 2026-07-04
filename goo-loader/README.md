# Goo Loader

Gooey effect loading animation

## 描述
两个圆形上下弹跳，SVG滤镜创建粘性融合效果

## 技术实现
- SVG feGaussianBlur模糊滤镜
- feColorMatrix颜色矩阵增强粘性
- CSS animation弹跳动画

## 使用方法
```html
<div class="loader">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
            </filter>
        </defs>
    </svg>
</div>
```
