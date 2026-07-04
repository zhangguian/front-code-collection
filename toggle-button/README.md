# Toggle Button

YES/NO toggle button with smooth animation

## 描述
圆形开关按钮，带YES/NO标签切换动画

## 技术实现
- CSS ::before/::after 伪元素创建YES/NO标签
- checkbox:checked 联动切换动画
- border-radius 圆形设计
- background-color 变色过渡

## 使用方法
```html
<label class="toggle-button-cover">
    <div id="button-2" class="button r">
        <input class="checkbox" type="checkbox">
        <div class="knobs"></div>
        <div class="layer"></div>
    </div>
</label>
```
