# Discord Button

Discord join button with text swap animation

## 描述
Discord按钮，悬停时"Join"滑出，"now!"滑入，图标缩放

## 技术实现
- transform translateX文字滑动
- transition-delay延迟效果
- scale图标缩放动画

## 使用方法
```html
<button>
    <svg viewBox="0 0 16 16" fill="currentColor" height="36" width="36">
        <path d="M13.545 2.907a13.227..."></path>
    </svg>
    <span class="now">now!</span>
    <span class="play">Join</span>
</button>
```
