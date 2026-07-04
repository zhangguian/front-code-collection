# Line Button

Dynamic line button with background rotation

## 描述
黑色按钮，悬停时出现流动线条+背景扇形旋转

## 技术实现
- conic-gradient扇形背景
- SVG stroke-dasharray + stroke-dashoffset 动画
- skewX文字倾斜
- animation-play-state控制动画

## 使用方法
```html
<div class="button">
    <div class="bg"></div>
    <div class="border"></div>
    <div class="content">
        <div class="svgBox">
            <svg width="100" height="4" class="svgLine">
                <line x1="0" y1="2" x2="100" y2="2" stroke-width="2" stroke-dasharray="60"></line>
            </svg>
            <!-- 更多线条 -->
        </div>
        <span class="text" data-text="GO">GO</span>
    </div>
</div>
```
