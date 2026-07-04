# Sleeping Cat Loader

Sleeping cat loading animation

## 描述
睡觉猫剪影加载动画，尾巴摇摆+ZZZ文字闪烁

## 技术实现
- SVG绘制猫剪影造型
- transform-origin旋转尾巴
- CSS animation ZZZ渐隐效果

## 使用方法
```html
<div class="loader">
    <div class="wrapper">
        <div class="catContainer">
            <svg class="catbody" viewBox="0 0 733 673">
                <path fill="#fff" d="M111.002 139.5C270.502..."></path>
            </svg>
            <svg class="tail" viewBox="0 0 158 564">
                <path fill="#ddd" d="M5.97602 76.066C-11.1099..."></path>
            </svg>
            <div class="text">
                <span class="bigzzz">Z</span>
                <span class="zzz">Z</span>
            </div>
        </div>
        <div class="wallContainer">
            <svg class="wall" viewBox="0 0 500 126">
                <!-- brick wall lines -->
            </svg>
        </div>
    </div>
</div>
```
