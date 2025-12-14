export const mockOrders = [
  {
    id: "KFC001",
    items: [
      { productId: 1, name: "Gà Giòn Khổng Lồ", price: 129000, quantity: 1 },
      { productId: 4, name: "Pepsi Lon", price: 20000, quantity: 2 }
    ],
    total: 169000,
    status: "delivered",
    date: "2024-01-15",
    customer: {
      name: "Nguyễn Văn A",
      phone: "0123456789",
      address: "123 Đường ABC, Quận 1, TP.HCM"
    }
  },
  {
    id: "KFC002",
    items: [
      { productId: 2, name: "Burger Zinger", price: 59000, quantity: 2 },
      { productId: 11, name: "Khoai Tây Chiên", price: 29000, quantity: 1 }
    ],
    total: 147000,
    status: "shipping",
    date: "2024-01-16",
    customer: {
      name: "Trần Thị B",
      phone: "0987654321",
      address: "456 Đường XYZ, Quận 3, TP.HCM"
    }
  },
  {
    id: "KFC003",
    items: [
      { productId: 5, name: "Combo Gia Đình", price: 199000, quantity: 1 }
    ],
    total: 199000,
    status: "confirmed",
    date: "2024-01-17",
    customer: {
      name: "Lê Văn C",
      phone: "0912345678",
      address: "789 Đường DEF, Quận 5, TP.HCM"
    }
  }
];