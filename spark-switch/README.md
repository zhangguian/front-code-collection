# Spark Switch

Space themed toggle switch

## 描述
太空主题开关，星星漂移+光速拉伸效果

## 技术实现
- CSS animation星星漂移
- transform scaleX拉伸为线条
- 渐变背景+发光边框

## 使用方法
```html
<label class="spark-switch">
    <input type="checkbox" />
    <div class="track">
        <div class="stars">
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
        </div>
        <div class="knob">
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
</label>
```
