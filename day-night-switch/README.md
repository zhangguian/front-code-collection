# Day Night Switch

Day/Night toggle switch with sun and moon icons

## 描述
圆形开关，点击切换太阳/月亮图标，旋转缩放动画

## 技术实现
- CSS :checked伪类状态控制
- transform rotate旋转+scale缩放
- transition过渡动画

## 使用方法
```html
<input id="checkboxInput" type="checkbox" />
<label class="toggleSwitch" for="checkboxInput">
    <div class="icon icon--moon">
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.528 1.718a.75.75 0 01.162.819..."></path>
        </svg>
    </div>
    <div class="icon icon--sun">
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25..."></path>
        </svg>
    </div>
</label>
```
