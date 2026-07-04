# Countdown Timer

3D flip countdown digits

## 描述
3D翻转倒计时数字，个位每秒翻转，十位每10秒翻转

## 技术实现
- CSS perspective 3D透视
- @keyframes rotateX 翻转动画
- attr() 读取data-num属性
- backface-visibility 背面隐藏
- 多层z-index叠加

## 使用方法
```html
<div class="container">
    <div class="nums nums-ten">
        <div class="num" data-num="0" data-num-next="1"></div>
        ...
    </div>
    <div class="nums nums-one">
        <div class="num" data-num="0" data-num-next="1"></div>
        ...
    </div>
</div>
```
