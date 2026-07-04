# Arc Loader

Gradient arc loader with blur effect

## 描述
双层SVG弧形遮罩，锥形渐变旋转，模糊+色相旋转

## 技术实现
- SVG mask base64 弧形遮罩
- conic-gradient 锥形渐变
- mix-blend-mode: hue-rotate 色相混合
- filter: blur 模糊

## 使用方法
```html
<div class="loader-wrapper">
    <div class="blur">
        <div class="loader">
            <div class="background"></div>
        </div>
    </div>
    <div class="loader">
        <div class="background"></div>
    </div>
</div>
```
