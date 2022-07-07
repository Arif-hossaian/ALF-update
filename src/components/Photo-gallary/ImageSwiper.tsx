import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { galleryPhotos } from '../../constants/data';
import Card from '../../shared/Card/Card';

const ImageSwiper: React.FC = () => {
  return (
    <div className="mt-11">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {galleryPhotos.map((item, i) => (
          <SwiperSlide className="" key={i}>
            <Card>
              <img
                src={item.image}
                alt={item.image}
                className="h-full w-full"
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
