# Nav Outline

Navigation bar with SVG outline animation

## 描述
悬停导航项时SVG矩形描边跟随动画

## 技术实现
- SVG stroke-dasharray/dashoffset动画
- nth-child选择器定位不同按钮
- CSS transition过渡效果

## 使用方法
```html
<div class="nav">
    <div class="container">
        <div class="btn">Home</div>
        <div class="btn">Contact</div>
        <div class="btn">About</div>
        <div class="btn">FAQ</div>
        <svg class="outline" viewBox="0 0 400 60">
            <rect class="rect" pathLength="100" x="0" y="0" width="400" height="60" fill="transparent" stroke-width="5"></rect>
        </svg>
    </div>
</div>
```
