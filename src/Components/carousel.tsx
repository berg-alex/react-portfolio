import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "../Components/carouselcss.css";


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
        <div className="image-hover-image"><a className="carlink" href="https://wordpress.project.alexberg.app/"><img className="carlink" src={item.src} alt={item.altText} style={{width: "40%"}}/></a>
        <div className="image-hover-text">
        <a className="carlink" href="https://wordpress.project.alexberg.app/">
            <div className="image-hover-text-bubble">
                <span className="image-hover-text-title">Click</span>
                View Live Demo
            </div>
            </a>
        </div>
  </div>
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