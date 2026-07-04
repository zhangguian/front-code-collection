# Coffee Loader

Coffee cup loading animation

## 描述
咖啡杯造型加载动画，烟雾上升+杯子摇晃效果

## 技术实现
- CSS伪元素绘制杯子造型
- filter模糊创建烟雾效果
- 多个animation组合动画

## 使用方法
```html
<div class="loader">
    <div class="cup">
        <div class="cup-handle"></div>
        <div class="smoke one"></div>
        <div class="smoke two"></div>
        <div class="smoke three"></div>
    </div>
    <div class="load">Loading...</div>
</div>
```
