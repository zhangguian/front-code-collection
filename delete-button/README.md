# Delete Button

Delete button with shredder animation

## 描述
悬停显示文档，点击触发碎纸机销毁效果

## 技术实现
- 多层box-shadow立体效果
- clip-path碎纸机动画
- CSS transform缩放旋转

## 使用方法
```html
<div class="wrapper">
    <button class="btn-delete">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="btn-svg">
            <path fill-rule="evenodd" d="M16.5 4.478v.227..." clip-rule="evenodd"></path>
        </svg>
        Shred
    </button>
    <div class="document"></div>
    <svg class="shredded" viewBox="0 0 154.57 151.52">
        <path class="shred" d="M22.74,0v59.49c0..."></path>
    </svg>
</div>
```
