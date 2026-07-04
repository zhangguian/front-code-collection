document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('revealCard');
    const colorLayer = document.getElementById('colorLayer');
    const modeBtns = document.querySelectorAll('.mode-btn');
    
    // 当前模式
    let currentMode = 'spotlight';
    
    // 配置
    const config = {
        spotlight: {
            revealRadius: 120
        },
        sweep: {
            width: 50  // 横扫宽度百分比
        }
    };
    
    let isHovering = false;
    let animationFrameId = null;
    
    // 手电筒模式 - 圆形揭示
    function spotlightClipPath(mouseX, mouseY, rect) {
        const centerX = mouseX - rect.left;
        const centerY = mouseY - rect.top;
        const radius = config.spotlight.revealRadius;
        
        const topLeft = getCornerClip(centerX, centerY, 0, 0, radius);
        const topRight = getCornerClip(centerX, centerY, rect.width, 0, radius);
        const bottomRight = getCornerClip(centerX, centerY, rect.width, rect.height, radius);
        const bottomLeft = getCornerClip(centerX, centerY, 0, rect.height, radius);
        
        const points = [
            `${topLeft.x}px ${topLeft.y}px`,
            `${topRight.x}px ${topRight.y}px`,
            `${bottomRight.x}px ${bottomRight.y}px`,
            `${bottomLeft.x}px ${bottomLeft.y}px`
        ];
        
        return `polygon(${points.join(', ')})`;
    }
    
    function getCornerClip(centerX, centerY, cornerX, cornerY, radius) {
        const dx = cornerX - centerX;
        const dy = cornerY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance <= radius) {
            return { x: cornerX, y: cornerY };
        }
        
        const angle = Math.atan2(dy, dx);
        const clipX = centerX + Math.cos(angle) * radius;
        const clipY = centerY + Math.sin(angle) * radius;
        
        return { x: clipX, y: clipY };
    }
    
    // 横扫模式 - 水平擦除
    function sweepClipPath(mouseX, rect) {
        const mouseXRelative = mouseX - rect.left;
        const mouseXPercent = (mouseXRelative / rect.width) * 100;
        const halfWidth = config.sweep.width / 2;
        
        const left = Math.max(0, mouseXPercent - halfWidth);
        const right = Math.min(100, mouseXPercent + halfWidth);
        
        return `polygon(0 0, ${right}% 0, ${right}% 100%, 0 100%, 0 0, ${left}% 0, ${left}% 100%, 0 100%)`;
    }
    
    // 更新 clip-path
    function updateClipPath(e) {
        if (!isHovering) return;
        
        const rect = card.getBoundingClientRect();
        let clipPath;
        
        if (currentMode === 'spotlight') {
            clipPath = spotlightClipPath(e.clientX, e.clientY, rect);
        } else {
            clipPath = sweepClipPath(e.clientX, rect);
        }
        
        colorLayer.style.clipPath = clipPath;
    }
    
    // 模式切换
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.dataset.mode;
            
            // 重置颜色图层
            if (!isHovering) {
                colorLayer.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
            }
        });
    });
    
    // 鼠标移入
    card.addEventListener('mouseenter', (e) => {
        isHovering = true;
        card.classList.add('hovering');
        updateClipPath(e);
    });
    
    // 鼠标移动
    card.addEventListener('mousemove', (e) => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        animationFrameId = requestAnimationFrame(() => {
            updateClipPath(e);
            animationFrameId = null;
        });
    });
    
    // 鼠标移出
    card.addEventListener('mouseleave', () => {
        isHovering = false;
        card.classList.remove('hovering');
        colorLayer.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    });
    
    // 触摸设备支持
    card.addEventListener('touchstart', (e) => {
        isHovering = true;
        updateClipPath(e.touches[0]);
    });
    
    card.addEventListener('touchmove', (e) => {
        e.preventDefault();
        updateClipPath(e.touches[0]);
    });
    
    card.addEventListener('touchend', () => {
        isHovering = false;
        colorLayer.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    });
});
