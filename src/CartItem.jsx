import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.cost.substring(1)) * item.quantity; // Multiply cost by quantity for each item and add to total
    });
    return total.toFixed(2); // Return total amount formatted to 2 decimal places;
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(); // Call the onContinueShopping function passed as a prop to navigate back to the product listing page
  };
  
  const handleCheckoutShopping = (e) => {
    alert('Checkout functionality is not implemented yet.'); // Placeholder for checkout functionality
  }

  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1; // Increment the quantity by 1
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity })); // Dispatch the updateQuantity action with the item's name and the new quantity as the payload
  };

  const handleDecrement = (item) => {
    const newQuantity = item.quantity - 1; // Decrement the quantity by 1
    if (newQuantity >= 1) { // Ensure that the quantity does not go below 1
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity })); // Dispatch the updateQuantity action with the item's name and the new quantity as the payload
    } else {
      dispatch(removeItem(item.name)); // If the new quantity is less than 1, remove the item from the cart by dispatching the removeItem action with the item's name as the payload
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name)); // Dispatch the removeItem action with the item's name as the payload
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1)); // Extract the numeric value from the cost string (removing the '$' symbol)
    return (cost * item.quantity).toFixed(2); // Multiply the cost by the quantity and return the total cost formatted to 2 decimal places
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


