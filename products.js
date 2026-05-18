const products = [
    // Anti-aging
    {
        id: 1,
        category: 'anti-aging',
        name: '極緻煥活金箔精華',
        englishName: 'Revitalizing Gold Serum',
        price: 'NT$ 2,800',
        description: '富含 24K 純金箔與多胜肽成分，深層滋養並提升肌膚彈性，重現透亮光澤。',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        category: 'anti-aging',
        name: '永恆之美晚霜',
        englishName: 'Eternal Youth Night Cream',
        price: 'NT$ 3,200',
        description: '在夜間黃金修復期，為肌膚注入源源不絕的再生能量，撫平細紋。',
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        category: 'anti-aging',
        name: '光采賦活眼霜',
        englishName: 'Radiant Eye Lift',
        price: 'NT$ 1,980',
        description: '針對眼周嬌嫩肌膚設計，有效淡化暗沉，緊緻眼周輪廓。',
        image: 'https://images.unsplash.com/photo-1556228578-8c7c2f22bb5f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        category: 'anti-aging',
        name: '不老膠原面膜',
        englishName: 'Ageless Collagen Mask',
        price: 'NT$ 1,200',
        description: '高濃度膠原蛋白精華，15分鐘內讓肌膚恢復水飽滿與彈力。',
        image: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1?auto=format&fit=crop&q=80&w=800'
    },
    // Acne
    {
        id: 5,
        category: 'acne',
        name: '清透淨化潔面露',
        englishName: 'Clear Skin Purifying Gel',
        price: 'NT$ 880',
        description: '溫和去除多餘油脂與雜質，含有茶樹精華，預防痘痘生成。',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 6,
        category: 'acne',
        name: '抗痘調理精華液',
        englishName: 'Blemish Control Spot Treatment',
        price: 'NT$ 1,280',
        description: '精準鎖定瑕疵，迅速舒緩紅腫，不留痕跡。',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 7,
        category: 'acne',
        name: '柳樹皮平衡機能水',
        englishName: 'Balancing Willow Bark Toner',
        price: 'NT$ 950',
        description: '天然水楊酸來源，緊緻毛孔，維持肌膚油水平衡。',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 8,
        category: 'acne',
        name: '無油清爽水凝乳',
        englishName: 'Oil-Free Hydrating Lotion',
        price: 'NT$ 1,100',
        description: '質地輕盈好吸收，給予痘痘肌必要的保濕而不阻塞毛孔。',
        image: 'https://images.unsplash.com/photo-1594418073944-683af99ef296?auto=format&fit=crop&q=80&w=800'
    },
    // Sensitive
    {
        id: 9,
        category: 'sensitive',
        name: '極致溫和淨膚乳',
        englishName: 'Ultra-Gentle Milk Cleanser',
        price: 'NT$ 980',
        description: '無添加化學界面活性劑，洗後柔嫩不乾澀，特別適合泛紅肌膚。',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 10,
        category: 'sensitive',
        name: '玫瑰純露舒緩噴霧',
        englishName: 'Soothing Rosewater Mist',
        price: 'NT$ 750',
        description: '大馬士革玫瑰純露，即刻舒緩肌膚不適，補水醒膚。',
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 11,
        category: 'sensitive',
        name: '神經醯胺修護霜',
        englishName: 'Barrier Repair Ceramides Cream',
        price: 'NT$ 1,850',
        description: '添加三重神經醯胺，由內而外強化肌膚防禦力，阻擋外在威脅。',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 12,
        category: 'sensitive',
        name: '隱形純物理防曬乳',
        englishName: 'Invisible Shield Sunscreen',
        price: 'NT$ 1,200',
        description: '全物理配方，溫和不熏眼，SPF 50+ 高效防護。',
        image: 'https://images.unsplash.com/photo-1556228578-8c7c2f22bb5f?auto=format&fit=crop&q=80&w=800'
    },
    // Dry
    {
        id: 13,
        category: 'dry',
        name: '深層滋養精萃油',
        englishName: 'Deep Hydration Ritual Oil',
        price: 'NT$ 2,200',
        description: '多種植物油黃金比例調配，鎖住肌膚水分，改善乾粗。',
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 14,
        category: 'dry',
        name: '玻尿酸爆水精華',
        englishName: 'Moisture Surge Hyaluronic Serum',
        price: 'NT$ 1,600',
        description: '大小分子玻尿酸，層層滲透，讓肌膚整天像喝飽水。',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 15,
        category: 'dry',
        name: '極致鎖水修護膏',
        englishName: 'Intensive Recovery Balm',
        price: 'NT$ 2,500',
        description: '極乾肌的救星，深層修復乾裂，提供長效保護膜。',
        image: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 16,
        category: 'dry',
        name: '絲滑乳木果潤體霜',
        englishName: 'Silky Shea Body Butter',
        price: 'NT$ 1,350',
        description: '全身肌膚的頂級饗宴，乳木果油與可可脂的完美結合。',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
    },
    // Tools
    {
        id: 17,
        category: 'tools',
        name: '翡翠玉石按摩滾輪',
        englishName: 'Jade Facial Roller',
        price: 'NT$ 850',
        description: '天然翡翠製成，幫助精華液吸收，消腫並提拉肌膚輪廓。',
        image: 'https://images.unsplash.com/photo-1619451422372-9524421e7424?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 18,
        category: 'tools',
        name: '微電流美容導入儀',
        englishName: 'Microcurrent Device',
        price: 'NT$ 5,800',
        description: '專業級居家美容儀，利用微電流激發膠原蛋白再生。',
        image: 'https://images.unsplash.com/photo-1590156221122-c4436b035804?auto=format&fit=crop&q=80&w=800'
    }
];
