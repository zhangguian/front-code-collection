# Gradient Card

Rotating gradient background card

## 描述
渐变背景卡片，hover时背景旋转90°，底部按钮滑入

## 技术实现
- ::before 旋转渐变背景
- ::after 模糊发光效果
- cubic-bezier 弹性旋转
- 按钮 translate + opacity 过渡

## 使用方法
```html
<div class="card">
    <div>
        <p class="heading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
    </div>
    <button class="card-button">More Info</button>
</div>
```
