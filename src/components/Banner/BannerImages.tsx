import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

const images = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/arifscloud/image/upload/v1658292778/alf-images/j42irsuitijut4cm7c3g.jpg',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/arifscloud/image/upload/v1657362446/alf-images/A-17_mzr1ou.jpg',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/arifscloud/image/upload/v1657362443/alf-images/A-14_a9a2tq.jpg',
  },
];

const BannerImages: React.FC = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item.src}
              alt="Banner"
              className=" object-cover object-center rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerImages;
