# Social Marquee

Social media icons infinite scroll marquee

## 描述
两行社交媒体图标无限水平滚动，左右渐变遮罩

## 技术实现
- @keyframes marquee 水平平移
- ::before/::after 渐变遮罩
- gap 间距控制
- 不同速度两行

## 使用方法
```html
<div class="content">
    <div class="benefits">
        <div class="basic-marquee basic-marquee-1">
            <a href="#"><button class="button"><svg>...</svg></button></a>
        </div>
        <div class="basic-marquee basic-marquee-2">
            <a href="#"><button class="button"><svg>...</svg></button></a>
        </div>
    </div>
</div>
```
