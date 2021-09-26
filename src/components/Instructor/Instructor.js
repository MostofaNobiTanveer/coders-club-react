import React from "react";
import {
  BsFillStarFill,
  BsPersonPlusFill,
  BsFillPeopleFill,
  BsTrophy,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import "./Instructor.css";

const Instructor = ({ instructor, handleAddToClub, cartList }) => {
  const {
    name,
    id,
    img,
    designation,
    students,
    courses,
    reviews,
    rating,
    salary,
  } = instructor;
  return (
    <article className="instructor">
      <div className="instructor__title">
        <h3 className="instructor__name">{name}</h3>
        <p>{designation}</p>
      </div>
      <div className="instructor__info">
        <div className="instructor__img">
          <img src={img} alt={name} />
        </div>
        <div className="instructor__particulars">
          <p>
            <BsTrophy className="icon" /> {rating}&nbsp;&nbsp;Rating
          </p>
          <p>
            <BsFillPeopleFill className="icon" /> {students}&nbsp;&nbsp;Students
          </p>
          <p>
            <BsFillStarFill className="icon" /> {reviews}&nbsp;&nbsp;Reviews
          </p>
          <p>
            <AiFillDollarCircle className="icon" /> ${salary}&nbsp;&nbsp;Salary
          </p>
        </div>
      </div>
      <div className="instructor__courses">
        <p>Popular courses: </p>
        {courses.map((course, index) => (
          <li key={index}>
            <a href="/">{course}</a>
          </li>
        ))}
      </div>
      <button className="btn__add-to-club" onClick={() => handleAddToClub(id)}>
        {cartList.find((item) => item.id === id) ? (
          <span>
            Added <BsFillPersonCheckFill />
          </span>
        ) : (
          <span>
            Add to club <BsPersonPlusFill />
          </span>
        )}
      </button>
    </article>
  );
};

export default Instructor;
