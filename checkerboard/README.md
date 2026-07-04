# Checkerboard

CSS checkerboard background pattern

## 描述
45度斜线棋盘格背景图案，可自定义尺寸和颜色

## 技术实现
- linear-gradient渐变叠加
- background-size控制格子大小
- background-position错位排列

## 使用方法
```html
<div class="checkerboard"></div>
```

```css
.checkerboard {
    background-color: white;
    background-image: 
        linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), 
        linear-gradient(45deg, #ccc 25%, white 25%, white 75%, #ccc 75%, #ccc);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
}
```
