"use client"

import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface CarouselProps {
  items: React.ReactNode[]
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination, A11y]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      className="w-full"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="w-3/4 md:w-1/2 lg:w-1/3">
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

