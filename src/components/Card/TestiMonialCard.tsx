import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '../../assets/css/multiSlider.css';
import { Navigation, Pagination } from 'swiper/modules';
import Typography from '../Typography';
import Image from 'next/image';
import useWindowSize from '../../app/hooks/UseWindowSize';
import { useEffect, useState } from 'react';
import TestimonialData from '@/assets/data/TestimonialData';

const TestiMonialCard = () => {
  const { width } = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(3);
  useEffect(() => {
    if (width > 1520) setCurrentSlide(4)
    else if (width > 1024) setCurrentSlide(3)
    else if (width > 768) setCurrentSlide(2)
    else if (width > 500) setCurrentSlide(2)
    else setCurrentSlide(1)
  }, [width])
  return (
    <Swiper
      slidesPerView={currentSlide}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation = {true}
      modules={[Pagination , Navigation]}
      className="mySwiper"
    >
      {
        TestimonialData.map((item, key) => (
          <SwiperSlide className='bg-slate-400 dark:bg-slate-800' key={key}>
            <div className="flex flex-col gap-5 p-10 justify-between h-full overflow-hidden dark:text-white">
              <Typography className="h-[300] overflow-x-auto text-justify text-lg" size="paragraph">{item.content}</Typography>
              <div className="flex justify-between">
                <div className="flex flex-row justify-between overflow-hidden w-full items-center">
                  <div>
                    <Typography className="text-balance" size="paragraph">{item.name}</Typography>
                    <Typography className="text-balance" size="body">{item.role}</Typography>

                  </div>
                  <div className='flex justify-end'>
                    <Image src={item.Img} alt={item.name} width={300} height={300} className='rounded-full max-w-20 max-h-20' />
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>))
      }
    </Swiper>
  )
}

export default TestiMonialCard