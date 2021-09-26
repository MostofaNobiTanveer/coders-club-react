import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Instructor from "../Instructor/Instructor";
import "./Club.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("cart_list");
  if (list) {
    return JSON.parse(localStorage.getItem("cart_list"));
  } else {
    return [];
  }
};

const Home = () => {
  const [instructors, setInstructors] = useState([]);
  const [cartList, setCartList] = useState(getLocalStorage());

  const getInstructorsData = async () => {
    const response = await fetch("./instructors.JSON");
    const data = await response.json();
    setInstructors(data);
  };

  useEffect(() => {
    getInstructorsData();
  }, []);

  const handleAddToClub = (id) => {
    if (cartList.find((item) => item.id === id)) {
      setCartList([...cartList]);
      return;
    }
    const specificInstructor = instructors.find(
      (instructor) => instructor.id === id
    );
    setCartList([...cartList, specificInstructor]);
  };

  const removeItem = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };

  useEffect(() => {
    localStorage.setItem("cart_list", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      <header className="header">
        <h2>Coders Club</h2>
        <p>
          Coders club is a non nonprofit community to help people learn to code
          for free.
          <br /> We accomplish this by creating thousands of videos, articles,
          and interactive coding lessons.
        </p>
        <h3>Budget: 5 million</h3>
      </header>
      <main>
        <section className="instructors">
          {instructors.map((instructor) => (
            <Instructor
              key={instructor.id}
              instructor={instructor}
              cartList={cartList}
              handleAddToClub={handleAddToClub}
            />
          ))}
        </section>
      </main>
      <section className="cart__container">
        <Cart cartList={cartList} removeItem={removeItem} />
      </section>
    </>
  );
};

export default Home;
