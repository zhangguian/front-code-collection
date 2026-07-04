# Stripe Button

Button with sliding stripes animation

## 描述
黑色按钮，悬停时白色条纹从上下滑入，mix-blend-mode混合

## 技术实现
- mix-blend-mode: difference 混合模式
- ::before/::after 条纹伪元素
- CSS变量 --progress 控制滑入
- translateY 变换位置

## 使用方法
```html
<button class="button"><span>Button</span></button>
```
