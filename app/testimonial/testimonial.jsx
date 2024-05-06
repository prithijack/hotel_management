"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const testimonialData = [
    { image: "/img/avatar/testimonial-1.jpg", name: 'David Beckham', position: '', des: "Booking through StayEase was a breeze! The website's intuitive interface made finding the perfect hotel effortless. Confirming our reservation was quick, and our stay was fantastic. I highly recommend StayEase for hassle-free hotel bookings!" },
    { image: "/img/avatar/testimonial-2.jpg", name: 'Sarah Fincher', position: '', des: "I was amazed by the ease of booking on StayEase. The extensive options, detailed descriptions, and reviews helped me choose the ideal hotel. Our stay exceeded expectations, and I'll definitely be returning to StayEase for future trips." },
    { image: "/img/avatar/testimonial-3.jpg", name: 'Ridley Scott', position: '', des: "Thanks to StayEase's outstanding customer service, our trip was a breeze. Their support team promptly addressed my questions, ensuring a smooth reservation process. Our stay was fantastic, and I'll be recommending StayEase to all my friends!" },
]

const Testimonial = () => {
  return (
    <>
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4500,
                  }}
                  loop={true}
                  modules={[Autoplay, Pagination]}
                >
                  {testimonialData?.map((data, id) => (
                    <SwiperSlide key={id}>
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src={data.image}
                            alt="image"
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>{data.name}</h4>
                          <span>{data.position}</span>
                          <p>{data.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
