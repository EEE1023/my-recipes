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
        price: 38,
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
        price: 12,
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
        price: 18,
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
        price: 28,
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
        price: 5,
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
        price: 45,
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
    },
    {
        id: 7,
        title: '鸡汤',
        category: '汤品',
        emoji: '🍲',
        description: '清香浓郁的鸡汤，滋补养生，鲜美可口',
        cookTime: '90分钟',
        difficulty: '简单',
        price: 68,
        ingredients: [
            '鸡肉 1只（约1.5kg）',
            '生姜 5片',
            '大葱 2根',
            '料酒 2勺',
            '盐 适量',
            '枸杞 适量',
            '红枣 5颗',
            '清水 适量'
        ],
        steps: [
            '鸡肉洗净，斩成大块',
            '冷水下锅，加入姜片、料酒焯水',
            '焯水后捞出，用温水冲洗干净',
            '砂锅中加入足量清水，放入鸡块',
            '加入姜片、葱段，大火烧开',
            '撇去浮沫，转小火慢炖60分钟',
            '加入红枣继续炖20分钟',
            '最后加入枸杞、盐调味',
            '再炖5分钟即可关火'
        ],
        tips: '鸡肉一定要焯水去腥。炖汤要用小火慢炖，这样汤色清澈味道鲜美。盐要最后放，否则会影响鸡肉的鲜嫩。可以根据个人喜好加入香菇、山药等食材。'
    },
    {
        id: 8,
        title: '老母鸡汤',
        category: '汤品',
        emoji: '🐓',
        description: '营养滋补的老母鸡汤，汤浓味醇，适合产后及体弱者',
        cookTime: '150分钟',
        difficulty: '简单',
        price: 128,
        ingredients: [
            '老母鸡 1只（约2kg）',
            '生姜 8片',
            '大葱 3根',
            '料酒 3勺',
            '盐 适量',
            '枸杞 适量',
            '红枣 8颗',
            '党参 2根',
            '黄芪 3片',
            '清水 适量'
        ],
        steps: [
            '老母鸡洗净，去除内脏和鸡油',
            '斩成大块，冷水下锅焯水',
            '加入姜片、料酒，煮出血沫后捞出',
            '用温水冲洗干净鸡块',
            '砂锅中加入足量清水，放入鸡块',
            '加入姜片、葱段、党参、黄芪',
            '大火烧开后撇去浮沫',
            '转小火慢炖2小时',
            '加入红枣继续炖30分钟',
            '最后加入枸杞、盐调味',
            '再炖10分钟即可关火'
        ],
        tips: '老母鸡要选择散养的，营养价值更高。炖煮时间要足够长，这样汤才会浓白鲜美。中途不要频繁开盖，以免影响汤的温度。可以根据需要加入其他药材如当归、红参等。'
    },
    {
        id: 9,
        title: '卤大排',
        category: '卤菜',
        emoji: '🥩',
        description: '色泽红亮的卤大排，香而不腻，酥软入味',
        cookTime: '120分钟',
        difficulty: '中等',
        price: 42,
        ingredients: [
            '猪大排 500克',
            '生抽 4勺',
            '老抽 2勺',
            '冰糖 30克',
            '料酒 3勺',
            '生姜 5片',
            '大葱 2根',
            '八角 3个',
            '桂皮 1块',
            '香叶 3片',
            '花椒 1勺',
            '干辣椒 5个',
            '盐 适量',
            '清水 适量'
        ],
        steps: [
            '猪大排洗净，冷水下锅焯水',
            '加入姜片、料酒，煮出血沫后捞出',
            '用温水冲洗干净',
            '锅中加入清水，放入所有香料',
            '加入生抽、老抽、冰糖、盐',
            '大火烧开后放入大排',
            '转中小火卤制60分钟',
            '期间要翻面，让大排均匀上色',
            '关火后不要立即捞出，让大排在卤汁中浸泡30分钟',
            '捞出切块装盘即可'
        ],
        tips: '大排要选择带点肥肉的，这样口感更好。卤制时火候要掌握好，不要太大以免卤汁收干。卤好后浸泡一会儿更入味。卤汁可以反复使用，越用越香，每次使用后要煮沸消毒。'
    },
    {
        id: 10,
        title: '卤鸡爪',
        category: '卤菜',
        emoji: '🦶',
        description: '软糯入味的卤鸡爪，香辣可口，下酒好菜',
        cookTime: '90分钟',
        difficulty: '中等',
        price: 35,
        ingredients: [
            '鸡爪 500克',
            '生抽 4勺',
            '老抽 2勺',
            '冰糖 30克',
            '料酒 2勺',
            '生姜 5片',
            '大葱 2根',
            '八角 3个',
            '桂皮 1块',
            '香叶 3片',
            '花椒 1勺',
            '干辣椒 8个',
            '盐 适量',
            '清水 适量'
        ],
        steps: [
            '鸡爪洗净，剪去指甲',
            '冷水下锅，加入姜片、料酒焯水',
            '煮出血沫后捞出，用温水冲洗',
            '锅中加入清水，放入所有香料',
            '加入生抽、老抽、冰糖、盐',
            '大火烧开后放入鸡爪',
            '转中小火卤制45分钟',
            '期间要搅拌几次，让鸡爪均匀入味',
            '关火后浸泡30分钟',
            '捞出装盘，撒上芝麻即可'
        ],
        tips: '鸡爪一定要剪掉指甲。卤制时间不要太长，否则会太烂。喜欢软糯口感的可以多卤一会儿。卤好后一定要浸泡，这样更入味。可以冷藏保存，随吃随取。'
    },
    {
        id: 11,
        title: '什锦蛋炒饭',
        category: '炒菜',
        emoji: '🍳',
        description: '色彩缤纷的什锦蛋炒饭，粒粒分明，营养丰富',
        cookTime: '20分钟',
        difficulty: '简单',
        price: 22,
        ingredients: [
            '米饭 300克',
            '鸡蛋 2个',
            '火腿 50克',
            '胡萝卜 半根',
            '豌豆 50克',
            '玉米粒 50克',
            '葱花 适量',
            '盐 适量',
            '生抽 1勺',
            '食用油 适量'
        ],
        steps: [
            '米饭提前蒸好，最好用隔夜饭',
            '火腿、胡萝卜切小丁',
            '鸡蛋打散，加少许盐',
            '锅中倒油，炒香葱花',
            '倒入蛋液，快速炒散成蛋花',
            '加入火腿丁、胡萝卜丁，翻炒',
            '加入豌豆、玉米粒，继续翻炒',
            '倒入米饭，用锅铲压散',
            '加入盐、生抽调味',
            '翻炒至米饭粒粒分明',
            '撒上葱花即可出锅'
        ],
        tips: '一定要用隔夜饭或冷饭，这样炒出来才粒粒分明。火候要大，动作要快。可以根据喜好加入虾仁、香肠等食材。鸡蛋要先炒好盛出，最后再加入，这样蛋花更嫩。'
    },
    {
        id: 12,
        title: '农家小炒肉',
        category: '炒菜',
        emoji: '🥘',
        description: '经典湘菜农家小炒肉，香辣下饭，肉嫩味美',
        cookTime: '25分钟',
        difficulty: '中等',
        price: 32,
        ingredients: [
            '五花肉 300克',
            '青椒 3个',
            '红椒 1个',
            '大蒜 5瓣',
            '生姜 3片',
            '豆豉 1勺',
            '生抽 2勺',
            '老抽 1勺',
            '料酒 1勺',
            '盐 适量',
            '鸡精 适量',
            '食用油 适量'
        ],
        steps: [
            '五花肉切片，青红椒切块',
            '大蒜切片，生姜切丝',
            '锅中不放油，直接下五花肉煸炒',
            '炒至五花肉出油，表面微黄',
            '加入姜丝、蒜片、豆豉爆香',
            '加入料酒、生抽、老抽翻炒',
            '加入青红椒块，大火翻炒',
            '加入盐、鸡精调味',
            '翻炒至青椒断生即可出锅'
        ],
        tips: '五花肉要选择肥瘦相间的，这样炒出来才香。不需要另外加油，五花肉自己会出油。青椒不要炒太久，保持脆嫩口感。豆豉可以增加香味，也可以不加。'
    },
    {
        id: 13,
        title: '土豆牛腩',
        category: '炖菜',
        emoji: '🥔',
        description: '软烂入味的土豆牛腩，汤汁浓郁，营养丰富',
        cookTime: '120分钟',
        difficulty: '中等',
        price: 58,
        ingredients: [
            '牛腩 500克',
            '土豆 2个',
            '胡萝卜 1根',
            '洋葱 1个',
            '生姜 5片',
            '大葱 2根',
            '八角 2个',
            '桂皮 1块',
            '香叶 2片',
            '料酒 3勺',
            '生抽 3勺',
            '老抽 1勺',
            '番茄酱 2勺',
            '盐 适量',
            '冰糖 10克',
            '食用油 适量'
        ],
        steps: [
            '牛腩切块，冷水下锅焯水',
            '加入姜片、料酒，煮出血沫后捞出',
            '用温水冲洗干净',
            '土豆、胡萝卜去皮切块，洋葱切块',
            '锅中倒油，爆香葱姜和香料',
            '放入牛腩翻炒',
            '加入料酒、生抽、老抽、番茄酱翻炒',
            '加入足量开水，没过牛腩',
            '大火烧开后转小火炖60分钟',
            '加入土豆、胡萝卜、洋葱',
            '继续炖30分钟',
            '加入盐、冰糖调味',
            '大火收汁即可出锅'
        ],
        tips: '牛腩要选择带筋的部位，炖出来更香。炖煮时间要足够，这样牛腩才会软烂。土豆不要太早放，否则会炖得太烂。最后收汁时要大火，让汤汁浓稠包裹食材。'
    },
    {
        id: 14,
        title: '白菜炖豆腐',
        category: '炖菜',
        emoji: '🥬',
        description: '清淡营养的白菜炖豆腐，汤鲜菜嫩，家常美味',
        cookTime: '30分钟',
        difficulty: '简单',
        price: 18,
        ingredients: [
            '大白菜 半颗',
            '豆腐 1块',
            '粉条 50克',
            '五花肉 100克',
            '葱姜蒜 适量',
            '生抽 2勺',
            '盐 适量',
            '鸡精 适量',
            '食用油 适量',
            '清水 适量'
        ],
        steps: [
            '白菜洗净切块，豆腐切块',
            '粉条提前泡软，五花肉切片',
            '葱姜蒜切末',
            '锅中倒油，爆香葱姜蒜',
            '加入五花肉片煸炒出油',
            '加入白菜翻炒至软',
            '倒入适量清水',
            '加入豆腐、粉条',
            '加入生抽、盐调味',
            '大火烧开后转中火炖15分钟',
            '加入鸡精，撒上葱花即可出锅'
        ],
        tips: '白菜要炒软后再加水，这样味道更好。豆腐可以提前煎一下，不容易碎。粉条不要泡太久，保持一点韧性。也可以不加肉，做成素菜版本。'
    },
    {
        id: 15,
        title: '农家蒸蛋',
        category: '蒸菜',
        emoji: '🥚',
        description: '嫩滑如豆腐的蒸蛋，口感细腻，老少皆宜',
        cookTime: '15分钟',
        difficulty: '简单',
        price: 15,
        ingredients: [
            '鸡蛋 3个',
            '温水 适量',
            '盐 少许',
            '生抽 1勺',
            '香油 少许',
            '葱花 适量'
        ],
        steps: [
            '鸡蛋打入碗中，加入少许盐',
            '用筷子充分打散',
            '加入1.5倍的温水，搅拌均匀',
            '用滤网过滤蛋液，去除气泡',
            '盖上保鲜膜，用牙签扎几个小孔',
            '冷水上锅，大火烧开',
            '转中小火蒸10分钟',
            '关火后焖2分钟',
            '取出后淋上生抽、香油',
            '撒上葱花即可'
        ],
        tips: '水和蛋的比例是1.5:1，这样蒸出来最嫩滑。一定要用温水，不要用冷水或开水。过滤蛋液可以让表面更光滑。盖保鲜膜可以防止水蒸气滴入。火候要掌握好，过久会有蜂窝。'
    },
    {
        id: 16,
        title: '剁椒鱼头',
        category: '蒸菜',
        emoji: '🐟',
        description: '湘菜经典剁椒鱼头，鲜辣可口，色泽红亮',
        cookTime: '30分钟',
        difficulty: '中等',
        price: 68,
        ingredients: [
            '鱼头 1个（约800克）',
            '剁椒 4勺',
            '生姜 5片',
            '大葱 2根',
            '大蒜 5瓣',
            '料酒 2勺',
            '生抽 2勺',
            '蒸鱼豉油 2勺',
            '白糖 少许',
            '食用油 适量',
            '香菜 适量'
        ],
        steps: [
            '鱼头从中间劈开，洗净沥干',
            '两面抹上料酒和少许盐，腌制10分钟',
            '生姜切丝，大葱切段，大蒜切末',
            '盘子底部铺上葱段和姜片',
            '放上鱼头，鱼肉面朝上',
            '在鱼头上均匀铺上剁椒',
            '撒上蒜末，淋上生抽和少许白糖',
            '冷水上锅，大火烧开',
            '转中火蒸12-15分钟',
            '关火后焖2分钟',
            '取出倒掉多余汤汁',
            '淋上蒸鱼豉油',
            '烧热油浇在鱼头上',
            '撒上香菜即可'
        ],
        tips: '鱼头一定要新鲜，这样肉质才鲜美。剁椒的量可以根据口味调整。蒸的时间根据鱼头大小调整，一般8-15分钟。最后浇热油可以激发剁椒的香味。可以用鲢鱼、胖头鱼等。'
    }
];

// DOM elements
const recipesGrid = document.getElementById('recipesGrid');
const navButtons = document.querySelectorAll('.nav-btn');
const modal = document.getElementById('recipeModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Cart state
let cart = [];
let orderHistory = [];
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const historyItems = document.getElementById('historyItems');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const tabButtons = document.querySelectorAll('.tab-btn');

// Current filter
let currentFilter = 'all';

// Audio Context for sound effects
let audioContext;
let sounds = {
    click: null,
    addToCart: null,
    checkout: null,
    delete: null
};

// Initialize audio
function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        createSounds();
    } catch (e) {
        console.log('Web Audio API not supported');
    }
}

// Create synthesized sounds
function createSounds() {
    // Click sound - short beep
    sounds.click = () => playTone(800, 0.05, 'sine', 0.1);

    // Add to cart - ascending notes
    sounds.addToCart = () => {
        playTone(440, 0.1, 'sine', 0.15);
        setTimeout(() => playTone(554, 0.1, 'sine', 0.15), 50);
        setTimeout(() => playTone(659, 0.15, 'sine', 0.2), 100);
    };

    // Checkout - success melody
    sounds.checkout = () => {
        playTone(523, 0.15, 'sine', 0.2);
        setTimeout(() => playTone(659, 0.15, 'sine', 0.2), 150);
        setTimeout(() => playTone(784, 0.3, 'sine', 0.25), 300);
    };

    // Delete - descending tone
    sounds.delete = () => {
        playTone(400, 0.1, 'sine', 0.15);
        setTimeout(() => playTone(300, 0.15, 'sine', 0.15), 100);
    };
}

// Play a tone
function playTone(frequency, duration, type = 'sine', volume = 0.3) {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Initialize
function init() {
    initAudio();
    loadOrderHistory();
    renderRecipes(recipes);
    setupEventListeners();
    addRippleEffect();
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
                    <span class="meta-icon">💰</span>
                    <span>¥${recipe.price}</span>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${recipe.id}, event)">
                加入菜单 +
            </button>
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

        <div class="modal-footer">
            <div class="price-tag">¥${recipe.price}</div>
            <button class="modal-add-btn" onclick="addToCart(${recipe.id}, event); closeModal()">加入菜单</button>
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
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) closeModal();
            if (cartModal.classList.contains('active')) toggleCart();
        }
    });

    // Cart event listeners
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', checkout);
    clearHistoryBtn.addEventListener('click', clearHistory);

    // Tab switching
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
}

// Cart Functions
function addToCart(recipeId, event) {
    const recipe = recipes.find(r => r.id === recipeId);
    const existingItem = cart.find(item => item.id === recipeId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...recipe,
            quantity: 1
        });
    }

    // Play sound
    if (sounds.addToCart) sounds.addToCart();

    updateCartUI();
    showToast(`已将 ${recipe.title} 加入菜单`);

    // Flying to cart animation
    if (event && event.target) {
        flyToCart(event.target);
    }
}

function removeFromCart(recipeId) {
    if (sounds.delete) sounds.delete();
    cart = cart.filter(item => item.id !== recipeId);
    updateCartUI();
}

function updateQuantity(recipeId, change) {
    const item = cart.find(item => item.id === recipeId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(recipeId);
        } else {
            updateCartUI();
        }
    }
}

function toggleCart() {
    cartModal.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('active') ? 'hidden' : 'auto';
}

function updateCartUI() {
    // Update count badge
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    cartCount.style.display = totalCount > 0 ? 'flex' : 'none';

    // Update cart items list
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.emoji} ${item.title}</div>
                <div class="cart-item-price">¥${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="qty-num">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');

    // Update total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `¥${total}`;

    // Show empty state if needed
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">菜单还是空的，快去点菜吧！</div>';
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('请先选择菜品');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalQuantity = cart.reduce((s, i) => s + i.quantity, 0);

    // Save order to history
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString('zh-CN'),
        items: cart.map(item => ({
            id: item.id,
            title: item.title,
            emoji: item.emoji,
            price: item.price,
            quantity: item.quantity
        })),
        total: total,
        totalQuantity: totalQuantity
    };

    orderHistory.unshift(order); // Add to beginning of array
    saveOrderHistory();
    renderOrderHistory();

    // Play success sound and show effects
    if (sounds.checkout) sounds.checkout();
    createParticleExplosion();

    alert(`下单成功！\n共 ${totalQuantity} 道菜\n总计：¥${total}\n\n美味马上就来！`);
    cart = [];
    updateCartUI();

    // Switch to history tab to show the new order
    setTimeout(() => {
        switchTab('history');
    }, 300);
}

// Order History Functions
function saveOrderHistory() {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

function loadOrderHistory() {
    const saved = localStorage.getItem('orderHistory');
    if (saved) {
        orderHistory = JSON.parse(saved);
        renderOrderHistory();
    }
}

function renderOrderHistory() {
    if (orderHistory.length === 0) {
        historyItems.innerHTML = '<div class="empty-history">暂无历史订单</div>';
        return;
    }

    historyItems.innerHTML = orderHistory.map(order => `
        <div class="history-order">
            <div class="order-header" onclick="toggleOrderDetails(${order.id})">
                <div class="order-info">
                    <div class="order-date">📅 ${order.date}</div>
                    <div class="order-summary">${order.totalQuantity} 道菜 · ¥${order.total}</div>
                </div>
                <button class="expand-btn" id="expand-${order.id}">▼</button>
            </div>
            <div class="order-details" id="details-${order.id}">
                ${order.items.map(item => `
                    <div class="history-item">
                        <span>${item.emoji} ${item.title}</span>
                        <span>x${item.quantity}</span>
                        <span class="item-price">¥${item.price * item.quantity}</span>
                    </div>
                `).join('')}
                <div class="order-actions">
                    <button class="delete-order-btn" onclick="deleteOrder(${order.id})">
                        🗑️ 删除此订单
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleOrderDetails(orderId) {
    const details = document.getElementById(`details-${orderId}`);
    const expandBtn = document.getElementById(`expand-${orderId}`);

    details.classList.toggle('active');
    expandBtn.textContent = details.classList.contains('active') ? '▲' : '▼';
}

function deleteOrder(orderId) {
    if (confirm('确定要删除这个订单吗？')) {
        if (sounds.delete) sounds.delete();
        orderHistory = orderHistory.filter(order => order.id !== orderId);
        saveOrderHistory();
        renderOrderHistory();
        showToast('订单已删除');
    }
}

function clearHistory() {
    if (orderHistory.length === 0) {
        showToast('暂无历史订单');
        return;
    }

    if (confirm('确定要清空所有历史订单吗？此操作不可恢复！')) {
        orderHistory = [];
        saveOrderHistory();
        renderOrderHistory();
        showToast('历史订单已清空');
    }
}

// Tab switching
function switchTab(tabName) {
    // Update tab buttons
    tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update tab content
    document.getElementById('currentTab').classList.toggle('active', tabName === 'current');
    document.getElementById('historyTab').classList.toggle('active', tabName === 'history');
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// Ripple Effect
function addRippleEffect() {
    document.addEventListener('click', function (e) {
        const target = e.target;
        if (target.tagName === 'BUTTON' || target.classList.contains('recipe-card')) {
            if (sounds.click) sounds.click();
            createRipple(e, target);
        }
    });
}

function createRipple(event, element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Flying to Cart Animation
function flyToCart(element) {
    const rect = element.getBoundingClientRect();
    const cartBtn = document.getElementById('cartBtn');
    const cartRect = cartBtn.getBoundingClientRect();

    const flyingElement = document.createElement('div');
    flyingElement.className = 'flying-item';
    flyingElement.textContent = '🍽️';
    flyingElement.style.left = rect.left + rect.width / 2 + 'px';
    flyingElement.style.top = rect.top + rect.height / 2 + 'px';

    document.body.appendChild(flyingElement);

    setTimeout(() => {
        flyingElement.style.left = cartRect.left + cartRect.width / 2 + 'px';
        flyingElement.style.top = cartRect.top + cartRect.height / 2 + 'px';
        flyingElement.style.opacity = '0';
        flyingElement.style.transform = 'scale(0.3)';
    }, 10);

    setTimeout(() => {
        flyingElement.remove();
        // Shake cart button
        cartBtn.classList.add('shake');

        // Remove shake class after animation completes
        const handleAnimationEnd = () => {
            cartBtn.classList.remove('shake');
            cartBtn.removeEventListener('animationend', handleAnimationEnd);
        };
        cartBtn.addEventListener('animationend', handleAnimationEnd);

        // Fallback timeout in case event doesn't fire
        setTimeout(() => {
            cartBtn.classList.remove('shake');
        }, 600);
    }, 800);
}

// Particle Explosion Effect
function createParticleExplosion() {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 150 + Math.random() * 100;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
}

// Start the app
init();
