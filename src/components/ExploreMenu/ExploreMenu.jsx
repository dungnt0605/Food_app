import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      Explore our Menu
      <p className="explore-menu-text">
        We will create the user authentication system so that anyone can create
        an account and login this food order website. We will create the
        shopping cart functionality so that user can add food items in their
        cart and order food from this app. We will also integrate the Stripe
        payment gateway to place the order and with online payment. Then we will
        create the order status update features also.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
