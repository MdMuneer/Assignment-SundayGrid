import React, { useState, useEffect, useRef } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Pagination, {CarouselItem} from "./pagination";


const items = function displayUsers(cardData) {
  console.log('hello')
  return (
    <CarouselItem>
      <div
        className="pagination__card flex"
        key={cardData.id}
        data-value={cardData.id}
      >
        <h3>{cardData.message}</h3>
        <div className="pagination__card-content flex">
          <img src={cardData.avatar} alt="pic" />
          <div className="pagination__card-content--details flex">
            <h4>{cardData.name}</h4>
            <p>{cardData.designation}</p>
          </div>
        </div>
        </div>
      </CarouselItem>
  );
};

const PaginationCard = () => {
  const [card, setCard] = useState([]);



  const url =
    "https://naseers819.editorx.io/website-18/_functions/webpageTestimonials";

  useEffect(() => {
    const fetchData = () => {
      fetch(url, {
        method: "GET",
        // mode:'no-cors'
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          setCard(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return [
      <section className="pagination flex">
      <h2>Testimonials</h2>
        <Pagination>
        {card.map(items)}
      </Pagination>
    </section>
  ];
};

export default PaginationCard;


























{
  /* 
  <h2>Testimonials</h2>
  </div>
  <div className="pagination__container flex">{card.map(items)}</div>
  import React, { useState, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const Pagination = ({setChildren}) => {
  const [card, setCard] = useState([]);
  console.log(setChildren)
  const url =
    "https://naseers819.editorx.io/website-18/_functions/webpageTestimonials";

  useEffect(() => {
    const fetchData = () => {
      fetch(url, {
        method: "GET",
        // mode:'no-cors'
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          setCard(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  console.log(card);

  const item = function displayUsers(cardData) {
    console.log(cardData, "sup");
    return (
      <div className="pagination__card flex" key={cardData.id} data-value={cardData.id}>
        <h3>{cardData.message}</h3>
        <div className="pagination__card-content flex">
          <img src={cardData.avatar} alt="pic"></img>
          <div className="pagination__card-content--details flex">
            <h4>{cardData.name}</h4>
            <p>{cardData.designation}</p>
          </div>
        </div>
      </div>
    );
  }


  const items = function displayUsers(cardData) {
    return (
      <div className="pagination__card flex" key={cardData.id} data-value={cardData.id}>
        <h3>{cardData.message}</h3>
        <div className="pagination__card-content flex">
          <img src={cardData.avatar} alt="pic"></img>
          <div className="pagination__card-content--details flex">
            <h4>{cardData.name}</h4>
            <p>{cardData.designation}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pagination flex">
      <h2>Testimonials</h2>
      <div className="pagination__container flex">{card.map(items)}</div>
    </div>
  );
};

*/
}