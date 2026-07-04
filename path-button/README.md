# Path Button

Button with path drawing animation

## 描述
悬停时边框线条变换+路径依次绘制动画

## 技术实现
- CSS伪元素路径绘制
- animation-fill-mode: forwards保持最终状态
- 多动画延迟依次触发

## 使用方法
```html
<a class="button type--A" href="#">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text">ENTRY</span>
    <div class="button__drow1"></div>
    <div class="button__drow2"></div>
</a>
```
