# Jelly Button

Jelly button with blob effect

## 描述
紫色果冻按钮，悬停变形+弹出blob，按下压缩，SVG滤镜粘性效果

## 技术实现
- SVG feGaussianBlur + feColorMatrix goo滤镜
- scaleX/scaleY 挤压变形
- cubic-bezier 弹性曲线
- 多blob延迟弹出

## 使用方法
```html
<button class="jelly-btn">
    <span class="jelly-btn__text">Click me</span>
    <span class="jelly-btn__blob jelly-btn__blob--1"></span>
    <span class="jelly-btn__blob jelly-btn__blob--2"></span>
    <span class="jelly-btn__blob jelly-btn__blob--3"></span>
    <span class="jelly-btn__gloss"></span>
    <svg class="jelly-btn__svg">
        <defs>
            <filter id="jelly-goo">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>
</button>
```
