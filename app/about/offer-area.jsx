"use client";
import Image from "next/image";
// import Offers from "@/public/offers.jpg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Company Offers</span>
                <h2>Book now and save up to 35% On hotel rooms</h2>
                <p>
                Introducing our exclusive Company Offers! Book now and unlock unparalleled savings of up to 35% on hotel rooms worldwide. We understand the importance of a budget-friendly yet luxurious travel experience, which is why we're thrilled to offer this incredible discount to our valued customers. Whether you're planning a weekend getaway, a family vacation, or a business trip, our extensive selection of hotels ensures that you'll find the perfect accommodation tailored to your needs. With our Company Offers, you can indulge in premium amenities, impeccable service, and unforgettable experiences without breaking the bank. Don't miss out on this limited-time opportunity to elevate your travel adventures while saving big. Book now and embark on your next journey with confidence and convenience!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src='/offers.jpg'/>
                {/* <Image alt="" layout="responsive" src='/offers.jpg' width={1200} height={800} /> */}
                {/* <Image alt="" layout="responsive" src={Offers} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
