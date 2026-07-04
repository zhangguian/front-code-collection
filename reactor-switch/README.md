# Reactor Switch

Sci-fi reactor toggle switch

## 描述
科幻风格反应堆开关，能量光束旋转+发光效果

## 技术实现
- conic-gradient能量光束
- radial-gradient多层光影
- cubic-bezier平滑过渡

## 使用方法
```html
<div class="reactor-widget">
    <div class="reactor-switch">
        <input type="checkbox" id="reactor" />
        <label for="reactor">
            <span class="reactor-switch__core"></span>
            <span class="reactor-switch__beam"></span>
            <span class="reactor-switch__thumb"></span>
            <span class="reactor-switch__state reactor-switch__state--off">OFF</span>
            <span class="reactor-switch__state reactor-switch__state--on">ON</span>
        </label>
    </div>
</div>
```
