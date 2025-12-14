export const mockProducts = [
  {
    id: 1,
    name: "Gà Giòn Khổng Lồ",
    category: "fried-chicken",
    price: 129000,
    description: "Gà rán giòn với lớp vỏ vàng ươm, thơm ngon",
    longDescription: "Gà Giòn Khổng Lồ với miếng gà được tẩm ướp gia vị đặc biệt, chiên giòn rụm. Thích hợp cho 2-3 người ăn.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
    comboOptions: [
      { id: 1, name: "Combo 1 Miếng Gà + Khoai Tây", price: 89000 },
      { id: 2, name: "Combo 2 Miếng Gà + Khoai Tây + Pepsi", price: 119000 }
    ]
  },
  {
    id: 2,
    name: "Burger Zinger",
    category: "burger",
    price: 59000,
    description: "Burger với miếng gà giòn tan, rau tươi",
    longDescription: "Burger Zinger với miếng gà phi lê nguyên chất, kết hợp cùng sốt đặc biệt và rau tươi.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    comboOptions: [
      { id: 1, name: "Combo Burger + Khoai Tây", price: 79000 },
      { id: 2, name: "Combo Burger + Khoai Tây + Pepsi", price: 89000 }
    ]
  },
  {
    id: 3,
    name: "Cơm Gà Giòn",
    category: "rice",
    price: 45000,
    description: "Cơm trắng thơm ngon cùng gà giòn",
    longDescription: "Cơm Gà Giòn - bữa ăn hoàn hảo với cơm trắng thơm ngon và miếng gà giòn rụm.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    comboOptions: []
  },
  {
    id: 4,
    name: "Pepsi Lon",
    category: "drinks",
    price: 20000,
    description: "Pepsi lon 320ml",
    longDescription: "Pepsi lon 320ml - thức uống có gas thơm ngon.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",
    comboOptions: []
  },
  {
    id: 5,
    name: "Combo Gia Đình",
    category: "combo",
    price: 199000,
    description: "Combo hoàn hảo cho gia đình",
    longDescription: "Combo Gia Đình bao gồm 4 miếng gà, 2 burger, 2 khoai tây chiên và 2 pepsi.",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop",
    comboOptions: []
  },
  {
    id: 6,
    name: "Gà Sốt Cay",
    category: "fried-chicken",
    price: 49000,
    description: "Gà sốt cay Hàn Quốc",
    longDescription: "Gà sốt cay với hương vị Hàn Quốc đặc trưng, cay nồng đậm đà.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    comboOptions: [
      { id: 1, name: "Combo 2 Gà Sốt Cay + Khoai Tây", price: 99000 }
    ]
  },
  {
    id: 7,
    name: "Burger Tôm",
    category: "burger",
    price: 69000,
    description: "Burger tôm tươi ngon",
    longDescription: "Burger Tôm với những con tôm tươi ngon, kết hợp cùng sốt đặc biệt.",
    image: "data:image/jpeg;base64,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",
    comboOptions: []
  },
  {
    id: 8,
    name: "Cơm Gà Sốt Cay",
    category: "rice",
    price: 55000,
    description: "Cơm gà sốt cay hấp dẫn",
    longDescription: "Cơm gà sốt cay - sự kết hợp hoàn hảo giữa cơm trắng và gà sốt cay.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    comboOptions: []
  },
  {
    id: 9,
    name: "7Up Lon",
    category: "drinks",
    price: 20000,
    description: "7Up lon 320ml",
    longDescription: "7Up lon 320ml - thức uống có gas thơm mát.",
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=300&fit=crop",
    comboOptions: []
  },
  {
    id: 10,
    name: "Combo Vui Vẻ",
    category: "combo",
    price: 129000,
    description: "Combo cho nhóm bạn",
    longDescription: "Combo Vui Vẻ bao gồm 2 miếng gà, 1 burger, 2 khoai tây và 2 nước ngọt.",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop",
    comboOptions: []
  },
  {
    id: 11,
    name: "Khoai Tây Chiên",
    category: "side",
    price: 29000,
    description: "Khoai tây chiên giòn",
    longDescription: "Khoai tây chiên vàng giòn, thơm ngon.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    comboOptions: []
  },
  {
    id: 12,
    name: "Salad Gà",
    category: "side",
    price: 35000,
    description: "Salad gà tươi ngon",
    longDescription: "Salad gà với rau tươi và sốt đặc biệt.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    comboOptions: []
  }
];

export const categories = [
  { id: 'all', name: 'Tất Cả' },
  { id: 'fried-chicken', name: 'Gà Rán' },
  { id: 'burger', name: 'Burger' },
  { id: 'rice', name: 'Cơm' },
  { id: 'drinks', name: 'Thức Uống' },
  { id: 'combo', name: 'Combo' },
  { id: 'side', name: 'Món Phụ' }
];