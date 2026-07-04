# Join Button

Join button with fold and particle effects

## 描述
紫色渐变按钮，悬停时折角展开+粒子浮动+星星旋转发光

## 技术实现
- radial-gradient渐变背景
- transform折角展开动画
- animation粒子浮动效果

## 使用方法
```html
<button type="button" class="join-button">
    <span class="fold"></span>
    <div class="points_wrapper">
        <i class="point"></i>
        <i class="point"></i>
        <!-- 8 more points -->
    </div>
    <span class="inner-btn">
        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10,21.236..."></path>
        </svg>
        Hover me
    </span>
</button>
```
