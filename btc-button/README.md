# BTC Button

Bitcoin buy button with stars animation

## 描述
比特币购买按钮，hover时星星四散飞出并发光

## 技术实现
- SVG Bitcoin图标作为星星
- transition + cubic-bezier 曲线运动
- drop-shadow 发光效果
- ::before/::after 边框动画

## 使用方法
```html
<button>
    <span class="box">Buy BTC
        <div class="star-1"><svg>...</svg></div>
        <div class="star-2"><svg>...</svg></div>
        ...
    </span>
</button>
```
