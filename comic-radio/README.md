# Comic Radio

Comic style radio button group

## 描述
漫画风格单选按钮组，POW/BAM/ZAP选项，滑块切换动画

## 技术实现
- CSS选择器兄弟组合器控制滑块
- radial-gradient圆点图案
- cubic-bezier弹性动画

## 使用方法
```html
<div class="comic-radio-group">
    <input type="radio" name="plan" id="comic-pow" checked="" />
    <label for="comic-pow">POW!</label>

    <input type="radio" name="plan" id="comic-bam" />
    <label for="comic-bam">BAM!</label>

    <input type="radio" name="plan" id="comic-zap" />
    <label for="comic-zap">ZAP!</label>

    <div class="comic-glider"></div>
</div>
```
