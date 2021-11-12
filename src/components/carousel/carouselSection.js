import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "./card";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="carousel__card flex" data-value="1">
    <h3>Label</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
  <div className="carousel__card flex" data-value="2">
    <h3>Label 2</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
  <div className="carousel__card flex" data-value="1">
    <h3>Label 3</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
  <div className="carousel__card flex" data-value="4">
    <h3>Label 4</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
  <div className="carousel__card flex" data-value="5">
    <h3>Label</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
  <div className="carousel__card flex" data-value="5">
    <h3>Label</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
  <div className="carousel__card flex" data-value="5">
    <h3>Label</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
  <div className="carousel__card flex" data-value="5">
    <h3>Label</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur, praesentius repudiandae quasi
      pariatur fuga, iste soluta laudantium molestiae, minus consequatur maiores
      eligendi.
    </p>
    <h5>Experienced Team</h5>
  </div>,
];
const onInitialized = (e) => {
  console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
  console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
  console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
  console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      className="thumb"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      {item}
    </div>
  ));
};

const CarouselSection = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );
  const slideNext = () => {
    if (thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
      console.log("next");
    }
  };

  const slidePrev = () => {
    if (thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
    console.log("previous");
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  return [
    <section className="carousel">
      <div className="carousel__container">
        <h4>Design Concept</h4>
        <h2>The best design for your studio website</h2>
      </div>
      <div className="carousel__card-container carousel-1">
        <AliceCarousel
          activeIndex={thumbIndex}
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          onInitialized={onInitialized}
          onResized={onResized}
          onSlideChange={syncMainBeforeChange}
          onSlideChanged={syncMainAfterChange}
        />
      </div>
      <div className="carousel__buttons">
        <GrLinkPrevious onClick={slidePrev} />
        <GrLinkNext onClick={slideNext} />
      </div>
    </section>,
  ];
};

export default CarouselSection;

{
  /*

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Card onDragStart={handleDragStart} role="presentation"/>,
  
<Card onDragStart={handleDragStart} role="presentation"/>,
  <Card onDragStart={handleDragStart} role="presentation"/>
  
];

const Paginate = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

onSlideChange={onSlideChange}
                        onSlideChanged={onSlideChanged}
             


  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );
  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
      console.log('next')
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
    console.log('previous')
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

 
  return [
    <section className="carousel">
      <div className="carousel__container">
        <h4>Design Concept</h4>
        <h2>The best design for your studio website</h2>
      </div>
      <div className="carousel__card-container">
        <AliceCarousel
          activeIndex={thumbIndex}
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          onInitialized={onInitialized}
          onResized={onResized}
          onSlideChange={syncMainBeforeChange}
          onSlideChanged={syncMainAfterChange}
        />
      </div>
      <div className="carousel__buttons">
        <GrLinkPrevious onClick={slidePrev} />
        <GrLinkNext onClick={slideNext} />
      </div>
    </section>,
  ];
};     

*/
}
