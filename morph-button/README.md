# Morph Button

Morphing button with multiple effects

## 描述
悬停时果冻变形+轨道小球环绕+文字逐字母弹跳+角落装饰旋转

## 技术实现
- cubic-bezier弹性动画
- CSS变量计算字母延迟
- 多层嵌套动画组合
- isolation: isolate隔离层叠上下文

## 使用方法
```html
<button class="morph-btn">
    <span class="btn-fill"></span>
    <span class="shadow"></span>
    <span class="btn-text">
        <span style="--i:0">L</span>
        <span style="--i:1">a</span>
        <span style="--i:2">u</span>
        <span style="--i:3">n</span>
        <span style="--i:4">c</span>
        <span style="--i:5">h</span>
    </span>
    <span class="orbit-dots">
        <span></span><span></span><span></span><span></span>
    </span>
    <span class="corners">
        <span></span><span></span><span></span><span></span>
    </span>
</button>
```
