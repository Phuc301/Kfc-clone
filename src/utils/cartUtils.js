export const getCartFromStorage = () => {
  try {
    const cart = localStorage.getItem('kfc-cart');
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const saveCartToStorage = (cart) => {
  localStorage.setItem('kfc-cart', JSON.stringify(cart));
};

export const addToCart = (product, quantity = 1, comboOption = null) => {
  const cart = getCartFromStorage();
  const existingItemIndex = cart.findIndex(item => 
    item.product.id === product.id && item.comboOption?.id === comboOption?.id
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      product,
      quantity,
      comboOption,
      id: Date.now().toString()
    });
  }

  saveCartToStorage(cart);
  return cart;
};

export const updateCartItemQuantity = (itemId, quantity) => {
  const cart = getCartFromStorage();
  const itemIndex = cart.findIndex(item => item.id === itemId);
  
  if (itemIndex > -1) {
    if (quantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = quantity;
    }
    saveCartToStorage(cart);
  }
  
  return cart;
};

export const removeFromCart = (itemId) => {
  const cart = getCartFromStorage();
  const updatedCart = cart.filter(item => item.id !== itemId);
  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const getCartTotal = (cart) => {
  return cart.reduce((total, item) => {
    const price = item.comboOption ? item.comboOption.price : item.product.price;
    return total + (price * item.quantity);
  }, 0);
};

export const getCartItemsCount = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};