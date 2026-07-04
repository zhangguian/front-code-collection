# 3D立方体加载动画

Cube Loader

## 描述
基于CSS 3D变换的立方体旋转加载动画。

## 技术实现
- CSS 3D transforms创建立方体
- CSS animation实现旋转动画
- perspective设置透视效果
- transform-style: preserve-3d保持3D空间

## 使用方法
```html
<div class="cube-loader">
  <div class="cube">
    <div class="face front"></div>
    <div class="face back"></div>
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="face top"></div>
    <div class="face bottom"></div>
  </div>
</div>
```
