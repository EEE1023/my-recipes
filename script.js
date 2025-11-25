// Recipe data
const recipes = [
    {
        id: 1,
        title: '柠檬凤爪',
        category: '凉拌',
        emoji: '🍋',
        description: '酸爽开胃的柠檬凤爪，夏日必备美食，清新解腻',
        cookTime: '60分钟',
        difficulty: '中等',
        ingredients: [
            '鸡爪 500克',
            '柠檬 2个',
            '小米辣 5-6个',
            '香菜 适量',
            '大蒜 5瓣',
            '生姜 3片',
            '生抽 4勺',
            '香醋 3勺',
            '白糖 2勺',
            '盐 适量',
            '料酒 2勺'
        ],
        steps: [
            '鸡爪洗净剪去指甲，对半切开备用',
            '锅中加入冷水，放入鸡爪、姜片、料酒，大火煮开后转中火煮15分钟',
            '煮好的鸡爪立即放入冰水中浸泡，这样口感更Q弹',
            '柠檬切薄片，小米辣切圈，大蒜切末，香菜切段',
            '调制酱汁：生抽、香醋、白糖、盐、蒜末混合均匀',
            '将鸡爪、柠檬片、小米辣、香菜放入容器中',
            '倒入调好的酱汁，搅拌均匀',
            '盖上保鲜膜，放入冰箱冷藏4小时以上，中途翻动几次',
            '食用前再次拌匀即可享用'
        ],
        tips: '鸡爪一定要冰水浸泡，这样才能Q弹爽口。冷藏时间越长越入味，建议提前一晚制作。不喜欢太酸可以少放醋，不喜欢太辣可以减少小米辣的量。'
    },
    {
        id: 2,
        title: '小米南瓜粥',
        category: '早餐',
        emoji: '🎃',
        description: '暖胃养生的小米南瓜粥，香甜绵软，营养丰富',
        cookTime: '40分钟',
        difficulty: '简单',
        ingredients: [
            '小米 100克',
            '南瓜 300克',
            '红枣 5颗',
            '枸杞 适量',
            '冰糖 适量',
            '清水 适量'
        ],
        steps: [
            '小米淘洗干净，用清水浸泡30分钟',
            '南瓜去皮去籽，切成小块',
            '红枣洗净去核，枸杞洗净备用',
            '锅中加入足量清水，放入小米，大火煮开',
            '转中小火，加入南瓜块，继续煮20分钟',
            '加入红枣，继续煮10分钟',
            '期间要不时搅拌，防止粘锅',
            '待南瓜软烂，小米开花，加入冰糖调味',
            '最后加入枸杞，煮2分钟即可关火',
            '稍微焖一会儿，让粥更加浓稠'
        ],
        tips: '小米要提前浸泡，这样更容易煮烂。南瓜不要切太大块，煮的时候容易软烂。喜欢浓稠口感的可以多煮一会儿，并且多搅拌。冰糖可以根据个人口味调整，也可以不加。'
    },
    {
        id: 3,
        title: '手工烧麦',
        category: '早餐',
        emoji: '🥟',
        description: '皮薄馅大的手工烧麦，鲜香多汁，早餐佳品',
        cookTime: '90分钟',
        difficulty: '困难',
        ingredients: [
            '中筋面粉 300克',
            '开水 180克',
            '猪肉馅 400克',
            '糯米 200克',
            '香菇 5朵',
            '胡萝卜 1根',
            '葱姜 适量',
            '生抽 3勺',
            '蚝油 2勺',
            '香油 1勺',
            '盐 适量',
            '白胡椒粉 适量',
            '料酒 1勺'
        ],
        steps: [
            '糯米提前浸泡2小时，然后蒸熟备用',
            '面粉中慢慢加入开水，边加边搅拌成絮状',
            '揉成光滑的面团，盖上保鲜膜醒30分钟',
            '香菇、胡萝卜切小丁，葱姜切末',
            '猪肉馅中加入葱姜末、生抽、蚝油、料酒、盐、胡椒粉搅拌均匀',
            '加入蒸好的糯米、香菇丁、胡萝卜丁，拌匀成馅料',
            '面团分成小剂子，擀成边缘薄中间厚的圆皮',
            '取适量馅料放在皮中央，用虎口收口成烧麦形状',
            '蒸锅水烧开后，放入烧麦，大火蒸15分钟',
            '蒸好后立即取出，趁热享用'
        ],
        tips: '和面一定要用开水，这样做出的皮更软。面团要充分醒发，擀皮时边缘要薄。包的时候不要收口太紧,要留出褶皱。蒸的时候火力要足，时间不要太长。'
    },
    {
        id: 4,
        title: '大排面',
        category: '主食',
        emoji: '🍜',
        description: '经典上海大排面，酥脆大排配上劲道面条，汤鲜味美',
        cookTime: '50分钟',
        difficulty: '中等',
        ingredients: [
            '猪大排 2块',
            '碱水面 200克',
            '小青菜 2棵',
            '葱姜蒜 适量',
            '生抽 3勺',
            '老抽 1勺',
            '料酒 2勺',
            '白糖 1勺',
            '盐 适量',
            '鸡蛋 1个',
            '面包糠 适量',
            '面粉 适量',
            '高汤或清水 适量'
        ],
        steps: [
            '猪大排用肉锤敲松，两面都要敲',
            '加入料酒、生抽、姜片腌制30分钟',
            '腌好的大排依次裹上面粉、蛋液、面包糠',
            '锅中倒油烧至六成热，放入大排炸至金黄酥脆',
            '捞出沥油备用',
            '另起锅，加入高汤或清水煮开',
            '加入生抽、老抽、盐、白糖调味',
            '下入面条煮熟',
            '青菜焯水备用',
            '面条盛入碗中，放上炸好的大排和青菜',
            '浇上热汤，撒上葱花即可'
        ],
        tips: '大排要用肉锤敲松才能又嫩又大。炸的温度要控制好，太高容易外焦里生。面条要选用碱水面，这样才有上海面的味道。汤底可以用猪骨或鸡骨熬制，更加鲜美。'
    },
    {
        id: 5,
        title: '杂粮饭',
        category: '主食',
        emoji: '🍚',
        description: '营养均衡的杂粮饭，粗细搭配，健康美味',
        cookTime: '60分钟',
        difficulty: '简单',
        ingredients: [
            '大米 100克',
            '糙米 50克',
            '黑米 30克',
            '红豆 30克',
            '薏米 30克',
            '燕麦 20克',
            '玉米粒 适量',
            '清水 适量'
        ],
        steps: [
            '将红豆、薏米、黑米提前浸泡4小时以上',
            '大米、糙米、燕麦淘洗干净',
            '所有食材混合放入电饭煲内',
            '加入适量清水，水量比平时煮饭略多一些',
            '启动杂粮饭模式，如果没有可以用普通煮饭模式',
            '煮好后不要立即打开，焖10-15分钟',
            '开盖后用饭勺轻轻翻拌均匀',
            '盛出即可食用'
        ],
        tips: '红豆、薏米等较硬的杂粮一定要提前浸泡，否则不容易煮熟。杂粮的比例可以根据个人喜好调整。水量要比普通白米饭多一些，因为杂粮吸水性强。煮好后一定要焖一会儿，口感更好。'
    },
    {
        id: 6,
        title: '口水鸡',
        category: '凉拌',
        emoji: '🐔',
        description: '麻辣鲜香的口水鸡，肉质鲜嫩，辣而不燥',
        cookTime: '45分钟',
        difficulty: '中等',
        ingredients: [
            '鸡腿 2个',
            '花生米 适量',
            '白芝麻 适量',
            '小葱 2根',
            '香菜 适量',
            '生姜 3片',
            '大蒜 5瓣',
            '花椒 1勺',
            '辣椒油 3勺',
            '生抽 4勺',
            '香醋 2勺',
            '白糖 1勺',
            '盐 适量',
            '料酒 2勺'
        ],
        steps: [
            '鸡腿洗净，冷水下锅，加入姜片、料酒',
            '大火煮开后转小火煮15分钟，关火焖5分钟',
            '捞出鸡腿立即放入冰水中浸泡',
            '花生米炒香压碎，大蒜切末',
            '调制酱汁：生抽、香醋、辣椒油、蒜末、白糖、盐、花椒粉混合',
            '鸡腿肉撕成条状，摆盘',
            '浇上调好的酱汁',
            '撒上花生碎、芝麻、葱花、香菜',
            '拌匀即可享用'
        ],
        tips: '鸡腿煮的时间不要太长，以免肉质发柴。冰水浸泡可以让鸡肉更紧致。辣椒油一定要够香，建议自己炸制。酱汁要提前调好，让各种味道充分融合。'
    }
];

// DOM elements
const recipesGrid = document.getElementById('recipesGrid');
const navButtons = document.querySelectorAll('.nav-btn');
const modal = document.getElementById('recipeModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Current filter
let currentFilter = 'all';

// Initialize
function init() {
    renderRecipes(recipes);
    setupEventListeners();
}

// Render recipe cards
function renderRecipes(recipesToRender) {
    recipesGrid.innerHTML = '';

    recipesToRender.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipesGrid.appendChild(card);
    });
}

// Create recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => showRecipeDetail(recipe);

    card.innerHTML = `
        <div class="recipe-image">${recipe.emoji}</div>
        <div class="recipe-content">
            <span class="recipe-category">${recipe.category}</span>
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <div class="meta-item">
                    <span class="meta-icon">⏱️</span>
                    <span>${recipe.cookTime}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-icon">📊</span>
                    <span>${recipe.difficulty}</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Show recipe detail in modal
function showRecipeDetail(recipe) {
    const ingredientsList = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    const stepsList = recipe.steps.map((step, index) =>
        `<li data-step="${index + 1}">${step}</li>`
    ).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${recipe.emoji} ${recipe.title}</h2>
            <span class="modal-category">${recipe.category}</span>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">📝 所需食材</h3>
            <ul class="ingredients-list">
                ${ingredientsList}
            </ul>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">👨‍🍳 制作步骤</h3>
            <ol class="steps-list">
                ${stepsList}
            </ol>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">💡 小贴士</h3>
            <div class="tips-box">
                <p>${recipe.tips}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Filter recipes by category
function filterRecipes(category) {
    currentFilter = category;

    // Update active button
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    // Filter and render
    if (category === 'all') {
        renderRecipes(recipes);
    } else {
        const filtered = recipes.filter(recipe => recipe.category === category);
        renderRecipes(filtered);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterRecipes(btn.dataset.category);
        });
    });

    // Modal close button
    modalClose.addEventListener('click', closeModal);

    // Click outside modal to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Start the app
init();
