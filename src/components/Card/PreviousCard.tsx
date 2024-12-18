'use client'
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '../../assets/css/multiSlider.css';
import { Navigation, Pagination } from 'swiper/modules';
import { previous_items } from '@/assets/data/previous_data';
import Typography from '../Typography';
import Image from 'next/image';
import { useState } from 'react';
import useWindowSize from '../../app/hooks/UseWindowSize';
import Link from 'next/link';

const PreviousCard = () => {
  const { width } = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(3);
  useEffect(() => {
    if (width > 1520) setCurrentSlide(5)
    else if (width > 1024) setCurrentSlide(4)
    else if (width > 768) setCurrentSlide(3)
    else if (width > 500) setCurrentSlide(2)
    else setCurrentSlide(1)
  }, [width])
  return (
    <>

      <Swiper
        slidesPerView={currentSlide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation = {true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          previous_items.map((item, key) => (
            <SwiperSlide className='bg-slate-400 dark:bg-slate-800 gap-15' key={key}>
              <div className="flex h-full">
                <div className="flex flex-col gap-10 ">
                    <div className='h-[200px]'>
                        <Link href={item.url} target='_blank'>
                            <Image src={item.Img} width={500} height={500} alt={item.title} className='h-[500px] w-[500px]' />
                        </Link>
                    </div>
                  <div>
                    <Link href={item.url} target='_blank'>
                      <Typography size='h4' className='hover:cursor-pointer'>{item.title}</Typography>
                    </Link>
                    <Typography>{item.content}</Typography>
                  </div>
                </div>
              </div>
            </SwiperSlide>))
        }
      </Swiper>
    </>
  )
}

export default PreviousCard