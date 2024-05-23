'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FlipCard from '@/app/ui/flashcard/flip';


const slideData = [
  {
    id: 1,
    front: 'front Slide 1 content...',
    back:  "back Slide 1 content..."
  },
  {
    id: 2,
    front: 'front Slide 2 content...',
    back:  "back Slide 2 content..."
  },
  // Add more slides as needed
];
export default function Flashcard({ params }: {
  params: {
    categoryId: number
  }
}) {
  return (
    <div className="flex items-center justify-center h-full ">
    <Swiper
      className="w-4/6 h-3/6"
      slidesPerView={1}
      spaceBetween={200}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slideData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <FlipCard frontContent={slide.front} backContent={slide.back} />
          </SwiperSlide>
      ))}
    </Swiper>
    </div>);
};
