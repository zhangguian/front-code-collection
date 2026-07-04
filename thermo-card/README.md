# Thermo Card

Interactive thermostat temperature control card

## 描述
温度控制卡片，可点击刻度调节温度，带颜色变化和发光效果

## 技术实现
- CSS radio button 状态切换
- CSS custom properties (变量) 控制颜色/高度/文字
- cubic-bezier 平滑过渡动画
- backdrop-filter 毛玻璃效果
- radial-gradient 发光效果

## 使用方法
```html
<div class="thermo-card">
    <input type="radio" name="thermo-temp" id="thermo-t30" class="thermo-state" checked />
    <input type="radio" name="thermo-temp" id="thermo-t40" class="thermo-state" />
    ...
    <div class="thermo-ui">
        <div class="thermo-body">
            <div class="thermo-scale">...</div>
            <div class="thermo-track">
                <div class="thermo-mercury"></div>
            </div>
            <div class="thermo-click-zone">...</div>
            <div class="thermo-knob"></div>
        </div>
        <div class="thermo-readout">
            <div class="thermo-value"></div>
            <div class="thermo-label">CURRENT</div>
            <div class="thermo-status"></div>
        </div>
    </div>
</div>
```
