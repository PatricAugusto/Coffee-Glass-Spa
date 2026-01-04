import { useCart } from '@/context/CartContext';
import { QuantitySelector, CartFooter, CartOverlay, CartSidebar, CartHeader } from './Cart.styles';

export default function Cart() {
  const { isCartOpen, closeCart, cartTotal } = useCart();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <CartOverlay $isOpen={isCartOpen} onClick={closeCart} />
      <CartSidebar $isOpen={isCartOpen}>
        <CartHeader>
          <h2>Seu Pedido</h2>
          <button onClick={closeCart}>&times;</button>
        </CartHeader>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cartItems.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>Carrinho vazio...</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={{ 
                marginBottom: '1rem', 
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '0.5rem' 
              }}>
                <h4 style={{ color: '#fff' }}>{item.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d4a373' }}>
                  <span>{item.quantity}x</span>
                  <span>{item.price}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.map((item) => (
      <div key={item.id} style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h4 style={{ color: '#fff' }}>{item.name}</h4>
          <button 
            onClick={() => removeFromCart(item.id)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,0,0,0.6)', cursor: 'pointer' }}
          >
            remover
          </button>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <QuantitySelector>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </QuantitySelector>
          <span style={{ color: '#d4a373', fontWeight: 'bold' }}>{item.price}</span>
        </div>
      </div>
    ))}
      </CartSidebar>
    </>
  );
}