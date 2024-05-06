"use client";
import Image from "next/image";
// import CarParking from "@/public/img/icon/car-parking.png";
// import Locaion1 from "@/public/img/icon/location-1.png";
// import SwimmingPool from "@/public/img/icon/swimming-pool.png";

const Servicestwo = () => {
  return (
    <>
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src="../../public/img/icon/location-1.png" />
                </div>
                <div className="services__two-item-content">
                  <h4>Room Cleaning</h4>
                  <p>
                  Experience impeccable cleanliness and hygiene with our thorough room cleaning services, ensuring a comfortable and safe stay.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src='../../public/img/icon/car-parking.png' />
                </div>
                <div className="services__two-item-content">
                  <h4>Car Parking</h4>
                  <p>
                  Enjoy hassle-free parking with our convenient and secure car parking facilities, providing peace of mind during your visit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src='../../public/img/icon/swimming-pool.png' />
                </div>
                <div className="services__two-item-content">
                  <h4>Swimming pool</h4>
                  <p>
                  Dive into relaxation and refreshment in our luxurious swimming pool, offering a tranquil oasis for guests to unwind and rejuvenate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src='../../public/img/icon/location-1.png' />
                </div>
                <div className="services__two-item-content">
                  <h4>PickUp & Drop</h4>
                  <p>
                  Seamlessly transition to and from your destination with our reliable pick-up and drop-off services, making transportation a breeze throughout your stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicestwo;
