document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    
    // 点击涟漪效果
    button.addEventListener('click', (e) => {
        // 创建涟漪元素
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        
        // 设置涟漪位置
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // 动画结束后移除
        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
});
