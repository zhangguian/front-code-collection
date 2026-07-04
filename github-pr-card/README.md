# GitHub PR Card

Spinning gradient border card

## 描述
GitHub PR 列表卡片，带旋转渐变发光边框

## 技术实现
- SVG filter feColorMatrix 透明度增强
- @keyframes speen 旋转动画
- 多层 spin 堆叠模糊效果
- backdrop-filter 毛玻璃
- 自定义 checkbox 样式

## 使用方法
```html
<div class="card-container">
    <div class="spin spin-blur"></div>
    <div class="spin spin-intense"></div>
    <div class="backdrop"></div>
    <div class="card-border">
        <div class="spin spin-inside"></div>
    </div>
    <div class="card">...</div>
</div>
```
