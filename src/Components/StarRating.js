import React, { useState } from "react";
import {AiFillStar} from 'react-icons/ai';
import "./StartRating.css";

const StarRating = ({rating:star, filter}) => {
  const [rating, setRating] = useState(star);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => filter && setRating(index) }
            onMouseEnter={() => filter && setHover(index)}
            onMouseLeave={() => filter && setHover(rating)}
          >
            <span className="star"><AiFillStar/></span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;