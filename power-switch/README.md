# Power Switch

Neon LED power toggle switch

## 描述
科技感电源开关，带LED指示灯和霓虹光效边框

## 技术实现
- SVG stroke-dasharray 霓虹动画
- SVG filter glow 发光效果
- linearGradient 渐变色
- checkbox:checked 联动切换
- LED 状态指示灯

## 使用方法
```html
<label class="switch">
    <input class="switch__input" type="checkbox" role="switch" />
    <span class="switch__base-outer"></span>
    <span class="switch__base-inner"></span>
    <svg class="switch__base-neon">...</svg>
    <span class="switch__knob-shadow"></span>
    <span class="switch__knob-container">
        <span class="switch__knob">...</span>
    </span>
    <span class="switch__led"></span>
</label>
```
