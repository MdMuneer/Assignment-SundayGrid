import React, { useState, useEffect, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
  console.log(children, "child");

  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Pagination = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [card, setCard] = useState([]);


  
    const handlers = useSwipeable({
      onSwipeLeft: () => updateIndex(activeIndex + 1),
      onSwipeRight: () => updateIndex(activeIndex - 1),
    });
 

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div {...handlers} className="carousel">
      <div
        className="pagination__container  flex"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          console.log(child, "ch");
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <MdArrowBackIos
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
        
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <MdArrowForwardIos
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;

