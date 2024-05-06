import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const brandData = {
  brandImage: [
    { image: "/1.png" },
    { image: "/2.png" },
    { image: "/3.png" },
    { image: "/4.png" },
    { image: "/5.png" },
    { image: "/6.png" },
    { image: "/1.png" },
    { image: "/2.png" },
    { image: "/3.png" },
    { image: "/4.png" },
    { image: "/5.png" },
    { image: "/6.png" },
  ],
};

const { brandImage } = brandData;

const Bandarea = () => {
  return (
<div className="band__area">
		<div className="container">
			<div className="row band__area-border">
				<div className="col-xl-12">
      <Swiper
        slidesPerView={6}
        autoplay={{
          delay: 1500,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {brandImage?.map((data, id) => (
        <SwiperSlide className="band__area-item" key={id}>
          <img src={data.image} alt="image" />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Bandarea;
