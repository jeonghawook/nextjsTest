import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// @ts-ignore
const FlippingCard = ({ cards }) => {
  const [flipped, setFlipped] = useState(false);


  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FlippingCard;
