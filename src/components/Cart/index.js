'use client';
import { useCart } from '@/context/CartContext';
import { 
  CartSidebar, 
  CartOverlay, 
  CartHeader, 
  CartItemContainer, 
  CartFooter, 
  QuantitySelector,
  CheckoutButton 
} from './Cart.styles';

export default function Cart() {
  const { isCartOpen, closeCart, cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  const formatSubtotal = (priceStr, qty) => {
    const value = parseFloat(priceStr.replace('R$', '').replace(',', '.').trim());
    return (value * qty).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <>
      <CartOverlay $isOpen={isCartOpen} onClick={closeCart} />
      <CartSidebar $isOpen={isCartOpen}>
        <CartHeader>
          <h2>Seu Pedido</h2>
          <button onClick={closeCart}>&times;</button>
        </CartHeader>
        
        <CartItemContainer>
          {cartItems.length === 0 ? (
            <p className="empty">Seu carrinho está vazio</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-main">
                  <h4>{item.name}</h4>
                  <button onClick={() => removeFromCart(item.id)}>remover</button>
                </div>
                
                <div className="item-details">
                  <QuantitySelector>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </QuantitySelector>
                  <span className="subtotal">
                    {(parseFloat(item.price.replace('R$', '').replace(',', '.').trim()) * item.quantity)
                      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
                </div>
              </div>
            ))
          )}
        </CartItemContainer>

        {cartItems.length > 0 && (
          <CartFooter>
            <div className="total-info">
              <span>Total</span>
              <strong>{cartTotal}</strong>
            </div>
            <CheckoutButton>FINALIZAR PEDIDO</CheckoutButton>
          </CartFooter>
        )}
      </CartSidebar>
    </>
  );
}