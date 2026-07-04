# Hint Tooltip

Hover hint with arc animation

## 描述
紫色圆形按钮，悬停时显示提示内容+白色弧线连接动画

## 技术实现
- transform: rotate(-225deg) 创建弧线
- opacity/visibility 淡入显示
- scale 缩放光圈

## 使用方法
```html
<div class="item-hints">
    <div class="hint" data-position="4">
        <span class="hint-radius"></span>
        <span class="hint-dot">Tip</span>
        <div class="hint-content">
            <p>提示内容</p>
        </div>
    </div>
</div>
```
