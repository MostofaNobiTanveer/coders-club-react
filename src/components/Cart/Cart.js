import React, { useState } from "react";
import { BsFillPersonCheckFill, BsBackspaceReverse, BsX } from "react-icons/bs";
import "./Cart.css";

const Cart = ({ cartList, removeItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="cart__btn" onClick={() => setIsOpen(true)}>
        <BsFillPersonCheckFill />
        {cartList.length > 0 && (
          <span>
            {cartList.length < 10 ? `0${cartList.length}` : cartList.length}
          </span>
        )}
      </button>
      <div className={`cart__content ${isOpen ? "open" : ""}`}>
        <header className="cart__header">
          {cartList.length > 0 ? (
            <span>
              <BsFillPersonCheckFill /> {cartList.length} {cartList.length === 1 ? 'instructor' : 'instructors'}
            </span>
          ) : (
            <span>No instructor added</span>
          )}
          <button className="btn__close" onClick={() => setIsOpen(false)}>
            <BsBackspaceReverse />
          </button>
        </header>
        {cartList.length > 0 && (
          <div className="cart__cost">
            <h3>
              Total cost: ${" "}
              {cartList.reduce((acc, curr) => acc + curr.salary, 0)}
            </h3>
          </div>
        )}
        <main className="cart__body">
          <ul>
            {cartList.map(({ id, name, img, salary }) => {
              return (
                <li key={id} className="cart__item">
                  <div className="item__info">
                    <img src={img} alt={name} className="item__img" />
                    <p>
                      {name}
                      <br />
                      <span style={{ color: "#49a6e9" }}>${salary}</span>
                    </p>
                  </div>
                  <button
                    className="item__remove"
                    onClick={() => removeItem(id)}
                  >
                    <BsX />
                  </button>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Cart;
