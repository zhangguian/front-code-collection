# Upload Button

File upload button with hover animation

## 描述
绿色上传按钮，悬停时背景从左到右展开效果

## 技术实现
- 伪元素width动画展开
- 隐藏file input覆盖
- transition过渡效果

## 使用方法
```html
<button class="container-btn-file">
    <svg fill="#fff" viewBox="0 0 50 50" width="20" height="20">
        <path d="M28.8125 .03125L.8125..."></path>
    </svg>
    Upload File
    <input class="file" name="text" type="file" />
</button>
```
