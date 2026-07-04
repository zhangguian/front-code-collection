# Portal Button

Magic portal button with star SVG

## 描述
深色传送门按钮，SVG星星+线条+渐变文字Magic

## 技术实现
- radial-gradient 深色按钮
- SVG path星星点点
- background-clip: text 渐变文字
- filter: blur 模糊线条

## 使用方法
```html
<button class="button flex">
    <div class="text-let">Let's</div>
    <div class="portal flex">
        <div class="blue-line"></div>
        <div class="portal-line"></div>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
    <svg class="svg" viewBox="0 0 40 100">
        <path d="M26 26C26..." fill="white"/>
        <!-- 更多星星 -->
    </svg>
    <div class="text-magic">Magic</div>
</button>
```
