'use client'

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/css/multiSlider.css';
import { Pagination } from 'swiper/modules';
import FeatureData from '@/assets/data/FeatureData';
import Typography from '../Typography';
import Image from 'next/image';
import { useState } from 'react';
import useWindowSize from '../../app/hooks/UseWindowSize';

const FeatureCard = () => {
  const { width } = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(3);
  useEffect(() => {
    if (width > 1520) setCurrentSlide(4)
    else if (width > 1024) setCurrentSlide(3)
    else if (width > 768) setCurrentSlide(2)
    else if (width > 400) setCurrentSlide(1)
  }, [width])
  return (
    <>
      <Swiper
        slidesPerView={currentSlide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          FeatureData.map((item, key) => (
            <SwiperSlide className='bg-slate-400 dark:bg-slate-800 gap-15' key={key}>
              <div className="flex">
                <div className="flex flex-col gap-14 justify-between">
                  <Image src={item.Img} width="500" height="500" alt={item.feature} className='h-[200]' />
                  <div className='min-h-40'>
                    <Typography size='h4'>{item.feature}</Typography>
                    <Typography className='gap-3' size='paragraph'>{item.content}</Typography>
                  </div>
                </div>
              </div>
            </SwiperSlide>))
        }
      </Swiper>
    </>
  )
}

export default FeatureCard