# Marquee

Infinite scrolling marquee component

## 描述
无限滚动跑马灯，渐变遮罩两端淡出效果

## 技术实现
- mask-image渐变遮罩
- 两组内容无缝循环
- animation linear无限滚动

## 使用方法
```html
<div class="marquee">
    <div class="marquee_header">Infinite Marquee</div>
    <div class="marquee__inner">
        <div class="marquee__group">
            <span>🔥 Item 1</span>
            <span>✨ Item 2</span>
            <span>🚀 Item 3</span>
            <span>🌟 Item 4</span>
            <span>🎉 Item 5</span>
        </div>
        <div class="marquee__group">
            <!-- duplicate for seamless loop -->
        </div>
    </div>
</div>
```
