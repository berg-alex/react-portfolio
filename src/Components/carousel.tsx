import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "../Components/carouselcss.css";
import homeimg from "../assets/wordpress-home.png"


{/* <img src="https://i.ibb.co/KLQfP00/wordpress-cart.png" alt="wordpress-cart" border="0"></a>
<img src="https://i.ibb.co/DDJQS8g/wordpress-checkout.png" alt="wordpress-checkout" border="0"></a>
<img src="https://i.ibb.co/Ltvhs9B/wordpress-home.png" alt="wordpress-home" border="0"></a>
<img src="https://i.ibb.co/7JtrWs6/wordpress-shop.png" alt="wordpress-shop" border="0"></a> */}

const items = [
  {
    src: "https://i.ibb.co/Ltvhs9B/wordpress-home.png",
    altText: 'Slide 1',
    caption: ''
  },
  {
    src: 'https://i.ibb.co/7JtrWs6/wordpress-shop.png',
    altText: 'Slide 2',
    caption: ''
  },
  {
    src: 'https://i.ibb.co/KLQfP00/wordpress-cart.png',
    altText: 'Slide 3',
    caption: ''
  },
  {
    src: 'https://i.ibb.co/DDJQS8g/wordpress-checkout.png',
    altText: 'Slide 4',
    caption: ''
  }

];

const CarouselTest = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width: "40%"}}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselTest;