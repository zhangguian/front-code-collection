# Glitch Input

Glitch effect input with scanline and data visualization

## 描述
科幻风格输入框，焦点时标签故障抖动+扫描线+数据流条动画

## 技术实现
- clip-path + translate 故障动画
- CSS linear-gradient 扫描线
- transform: scaleY 数据条脉冲
- 四角装饰 border裁剪

## 使用方法
```html
<div class="input-container">
    <input type="text" class="holo-input" placeholder=" " />
    <label class="input-label" data-text="ACCESS_CODE">ACCESS_CODE</label>
    <div class="input-border"></div>
    <div class="input-scanline"></div>
    <div class="input-glow"></div>
    <div class="input-data-stream">
        <div class="stream-bar" style="--i: 0;"></div>
        <!-- 更多条 -->
    </div>
    <div class="input-corners">
        <div class="corner corner-tl"></div>
        <!-- 更多角 -->
    </div>
</div>
```
