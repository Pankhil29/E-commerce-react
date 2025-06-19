import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css"; // Create for styling

const Cart = () => {
  const { cart, incrementQty, decrementQty, removeFromCart, clearCart } =
    useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="text-center py-5">
        <h3>Your cart is empty</h3>
      </div>
    );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image || item.thumbnail}
                    alt={item.title}
                    width="60"
                    height="60"
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-dark me-2"
                      onClick={() => decrementQty(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-dark ms-2"
                      onClick={() => incrementQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-end">
        <h4>Total: ${total.toFixed(2)}</h4>
        <button className="btn btn-outline-danger mt-2" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
