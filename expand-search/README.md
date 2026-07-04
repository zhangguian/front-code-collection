# Expand Search

Expandable search input component

## 描述
点击圆形图标展开搜索框，新拟态内阴影风格

## 技术实现
- CSS transition宽度过渡动画
- :focus/:invalid伪类控制展开
- box-shadow新拟态效果

## 使用方法
```html
<div class="search-wrapper">
    <input type="text" class="input" required="" placeholder="Type to search...">
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
            <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path>
        </svg>
    </div>
</div>
```
