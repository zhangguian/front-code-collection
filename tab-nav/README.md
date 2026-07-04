# Tab Nav

Radio button tab navigation

## 描述
数字标签导航，选中时放大+蓝色背景+圆点指示器

## 技术实现
- CSS radio button 联动
- ::before/::after 伪元素动画
- cubic-bezier 弹性过渡
- box-shadow 层叠阴影

## 使用方法
```html
<div class="tabs">
    <div class="tab-group">
        <input checked id="tab1" name="tab" value="1" type="radio" />
        <label for="tab1"><span>1</span></label>
    </div>
    <div class="tab-group">
        <input id="tab2" name="tab" value="2" type="radio" />
        <label for="tab2"><span>2</span></label>
    </div>
    <div class="tab-group">
        <input id="tab3" name="tab" value="3" type="radio" />
        <label for="tab3"><span>3</span></label>
    </div>
</div>
```
