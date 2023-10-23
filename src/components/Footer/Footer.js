import "./Footer.css";
export const Footer = (props) => {
  return (
    <div className="footer-container">
      <button type="button" className="button" onClick={() => props.onSwitchPage('MenuPage')}>
        <i className="fa-solid fa-bowl-food"></i>
        <h1>Food</h1>
      </button>
      <button type="button" className="button" onClick={() => props.onSwitchPage('OrderPage')}>
        <i className="fa-solid fa-cart-shopping"></i>
        <h1>Order</h1>
      </button>
      <button type="button" className="button" onClick={() => props.onSwitchPage('LoginPage')}>
        <i className="fa-solid fa-user"></i>
        <h1>Profile</h1>
      </button>
    </div>
  );
};
