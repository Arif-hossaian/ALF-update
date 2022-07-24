import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { galleryPhotos } from '../../constants/data';
import Card from '../../shared/Card/Card';
import NcImage from '../../shared/NcImage/NcImage';

const ImageSwiper: React.FC = () => {
  return (
    <div className="mt-11">
      <div className="flex justify-between items-center space-x-8">
        <NcImage
          src="https://res.cloudinary.com/arifscloud/image/upload/v1657362448/alf-images/Pic-Abdul-Alaim_a_fxju2u.jpg"
          alt="Gallery"
          className="block w-full h-full object-cover rounded-md overflow-hidden border-double border-4 border-gray-300 transform transition-all hover:scale-105"
        />

        <NcImage
          src="https://res.cloudinary.com/arifscloud/image/upload/v1657362442/alf-images/A-8_vjljkw.jpg"
          alt="Gallery"
          className="block w-full h-full object-cover rounded-md overflow-hidden border-double border-4 border-gray-300 transform transition-all hover:scale-105"
        />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper mt-10 xs:hidden"
      >
        {galleryPhotos.map((item, i) => (
          <SwiperSlide className="" key={i}>
            <Card>
              <NcImage
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
