import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
    <SectionTitle heading={"Order Online"} subHeading={"From 11:00 am to 10:00 pm"}/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24">
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-3xl text-center text-white  uppercase -mt-16"> salad </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-3xl text-center text-white  uppercase -mt-16"> Pizza </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-3xl text-center text-white  uppercase -mt-16"> Soup </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-3xl text-center text-white  uppercase -mt-16"> desserts </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-3xl text-center text-white  uppercase -mt-16"> Fruite Salad </h3>
        </SwiperSlide>
      </Swiper>

    </section>
  );
};

export default Category;
