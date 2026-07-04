# Path Switch

SVG path toggle switch

## 描述
SVG路径组成的切换开关，点击时路径描边动画变化

## 技术实现
- SVG pathLength 路径长度
- stroke-dasharray 描边动画
- scale: 1 -1 翻转路径
- checkbox:checked 控制状态

## 使用方法
```html
<input id="check" type="checkbox" />
<label class="switch" for="check">
    <svg viewBox="0 0 212.4992 84.4688">
        <path pathLength="360" d="M42..."/>
        <path pathLength="360" style="scale: 1 -1" d="M42..."/>
    </svg>
</label>
```
