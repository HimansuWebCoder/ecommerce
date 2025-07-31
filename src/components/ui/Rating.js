import React from 'react';

const StarRating = ({ countStar = 5, isShowStar }) => {
  return (
    <div className="flex ">
    { isShowStar ? (
      <>
      {Array.from({ length: countStar }).map((_, index) => (
        <div>
        <span key={index}>⭐</span>
        </div>
      ))}
        <span>{`(${countStar})`}</span>
        </>
      ) : null
      }
    </div>
  );
};

export default StarRating;
