# Cart Button

Add to cart button with animation

## 描述
加入购物车按钮，进度条+3D倾斜+成功变绿动画

## 技术实现
- transform-style: preserve-3d 3D效果
- checkbox状态切换动画
- keyframes多阶段动画

## 使用方法
```html
<input hidden="" class="cart-toggle" id="cart-toggle" type="checkbox" />
<label class="cart-button" for="cart-toggle">
    <span class="cart-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle r="1" cy="21" cx="9"></circle>
            <circle r="1" cy="21" cx="20"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
    </span>
    Add to Cart
    <div class="progress-bar"></div>
</label>
```
