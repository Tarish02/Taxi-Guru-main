import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './slider.css';
import ServiceData from '../data/ServiceData';
export default function Slider() {
  const images = ServiceData['slider']['slider_images'];
  return (
    <div className="container lg:w-[50%]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
     
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`slide_${index}`} />
        </SwiperSlide>
      ))}
       
        <div className="slider-controller">
        
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
