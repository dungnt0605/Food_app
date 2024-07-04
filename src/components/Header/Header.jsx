import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h3>Order Your favourite food here</h3>
          <p>
            We will create the user authentication system so that anyone can
            create an account and login this food order website. We will create
            the shopping cart functionality so that user can add food items in
            their cart and order food from this app. We will also integrate the
            Stripe payment gateway to place the order and with online payment.
            Then we will create the order status update features also.
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </>
  );
};

export default Header;
