// 组件配置
const components = [
    { path: '3d-model-reveal', name: '3D Model Reveal', category: 'cards', tag: 'Cards', desc: 'Hover effect' },
    { path: 'cube-loader', name: 'Cube Loader', category: 'loaders', tag: 'Loaders', desc: '3D animation' },
    { path: 'fill-button', name: 'Fill Button', category: 'buttons', tag: 'Buttons', desc: 'Fill animation' },
    { path: 'generate-button', name: 'Generate Button', category: 'buttons', tag: 'Buttons', desc: 'Shimmer effect' },
    { path: 'glass-radio', name: 'Glass Radio', category: 'radio', tag: 'Radio', desc: 'Glass morphism' },
    { path: 'glow-button', name: 'Glow Button', category: 'buttons', tag: 'Buttons', desc: 'Glow border' },
    { path: 'glow-search', name: 'Glow Search', category: 'inputs', tag: 'Inputs', desc: 'Animated border' },
    { path: 'gradient-border-button', name: 'Gradient Border', category: 'buttons', tag: 'Buttons', desc: 'Rotating border' },
    { path: 'holo-number', name: 'Holo Number', category: 'cards', tag: 'Cards', desc: '3D hologram' },
    { path: 'holo-toggle', name: 'Holo Toggle', category: 'toggles', tag: 'Toggles', desc: 'Holographic' },
    { path: 'isometric-social', name: 'Isometric Social', category: 'cards', tag: 'Cards', desc: '3D isometric' },
    { path: 'nebula-checkbox', name: 'Nebula Checkbox', category: 'checkboxes', tag: 'Checkboxes', desc: 'Nebula effect' },
    { path: 'neo-toggle', name: 'Neo Toggle', category: 'toggles', tag: 'Toggles', desc: 'Neumorphism' },
    { path: 'neon-radio', name: 'Neon Radio', category: 'radio', tag: 'Radio', desc: 'Neon glow' },
    { path: 'shimmer-button', name: 'Shimmer Button', category: 'buttons', tag: 'Buttons', desc: 'Shimmer + Ripple' },
    { path: 'slide-button', name: 'Slide Button', category: 'buttons', tag: 'Buttons', desc: 'Text slide' },
    { path: 'spin-button', name: 'Spin Button', category: 'buttons', tag: 'Buttons', desc: 'Spin gradient' },
    { path: 'wallet-cards', name: 'Wallet Cards', category: 'cards', tag: 'Cards', desc: 'Card stack' }
];

// 加载组件到Shadow DOM
async function loadComponentShadow(path, containerId) {
    try {
        const response = await fetch(`${path}/index.html`);
        const html = await response.text();
        
        // 提取body内容
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        const bodyContent = bodyMatch ? bodyMatch[1] : '';
        
        // 提取style内容
        const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
        const styleContent = styleMatches.map(s => s.replace(/<\/?style[^>]*>/gi, '')).join('\n');
        
        // 获取外部CSS
        const linkMatches = html.match(/<link[^>]*href="([^"]*\.css)"[^>]*>/gi) || [];
        const cssFiles = await Promise.all(
            linkMatches.map(async (link) => {
                const hrefMatch = link.match(/href="([^"]*)"/);
                if (hrefMatch) {
                    const cssResponse = await fetch(`${path}/${hrefMatch[1]}`);
                    return await cssResponse.text();
                }
                return '';
            })
        );
        
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // 创建Shadow DOM
        const shadow = container.attachShadow({ mode: 'open' });
        
        // 注入样式
        const style = document.createElement('style');
        style.textContent = `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            :host { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
            ${cssFiles.join('\n')}
            ${styleContent}
        `;
        shadow.appendChild(style);
        
        // 注入内容
        const wrapper = document.createElement('div');
        wrapper.innerHTML = bodyContent;
        shadow.appendChild(wrapper);
        
    } catch (error) {
        console.error(`Failed to load ${path}:`, error);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 加载所有组件
    components.forEach(comp => {
        loadComponentShadow(comp.path, `preview-${comp.path}`);
    });
    
    // 分类筛选
    const navItems = document.querySelectorAll('.nav-item');
    const cards = document.querySelectorAll('.card');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            const category = item.dataset.category;
            
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
