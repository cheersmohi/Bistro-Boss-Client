import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import {Swiper, SwiperSlide} from 'swiper/react';
import '@smastrom/react-rating/style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {useEffect, useState} from 'react';
import {Rating} from '@smastrom/react-rating';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://bistro-boss-server-rust-six.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-12 mt">
      <SectionTitle
        subHeading="---What Our Client Say---"
        heading="Testimonials"
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center my-16 mx-24">
              <Rating style={{maxWidth: 180}} value={review.rating} readOnly />{' '}
              <p className="py-8">{review.details}</p>
              <h3 className="text-3xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
