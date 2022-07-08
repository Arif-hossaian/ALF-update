import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { galleryPhotos } from '../../constants/data';
import Card from '../../shared/Card/Card';

const ImageSwiper: React.FC = () => {
  return (
    <div className="mt-11">
      <div className="grid md:grid-cols-2 gap-10 xs:grid-cols-1 ">
        <img
          src="https://i.ibb.co/zFgVPBM/Pic-Abdul-Alaim-a.jpg"
          alt="LatestMusics"
          className="block w-full h-full object-cover rounded-md overflow-hidden border-double border-4 border-gray-300 transform transition-all hover:scale-105 "
        />

        <img
          src="https://i.ibb.co/tsMZ0YW/A-8.jpg"
          alt="LatestMusics"
          className="block w-full h-full object-cover rounded-md overflow-hidden border-double border-4 border-gray-300 transform transition-all hover:scale-105"
        />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        {galleryPhotos.map((item, i) => (
          <SwiperSlide className="" key={i}>
            <Card>
              <img
                src={item.image}
                alt={item.image}
                className="rounded-md overflow-hidden transform transition-all hover:scale-110"
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
