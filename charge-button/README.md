# Charge Button

Gradient circles fill animation button

## 描述
充电按钮，hover时彩色圆圈滑入填充，带模糊闪烁效果

## 技术实现
- @keyframes b-a 圆圈水平滑入动画
- @keyframes blur 交替模糊闪烁
- @keyframes cir-1/6-border 圆角变化
- 多层 z-index 叠加
- transition 颜色过渡

## 使用方法
```html
<button class="button">
    <div class="b-hover">
        <div class="cir-1 filter"></div>
        <div class="cir-2 filter"></div>
        <div class="cir-3 filter"></div>
        <div class="cir-4 filter"></div>
        <div class="cir-5 filter"></div>
        <div class="cir-6 filter"></div>
    </div>
    Charge &amp; Go
</button>
```
