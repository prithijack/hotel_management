"use client";

import Sidebar from "./sidebar";

const faqData = {
  faqOne: [
    { id: 'collapseOnePage', class: 'icon page collapsed', class2: 'faq__area-item-body collapse', title: 'Do you pay before or after booking a hotel ?', des: "Confused about payment procedures when booking a hotel? Learn about prepayment options, reservation guarantees, and payment methods to make informed decisions before and after securing your stay with us." },
    { id: 'collapseTwoPage', class: 'icon page', class2: 'faq__area-item-body collapse show', title: 'What documents are needed for hotel booking ?', des: "Discover the essential documents required for hassle-free hotel booking. From IDs to reservation confirmations, ensure a smooth check-in process with our helpful checklist and tips." },
    { id: 'collapseThreePage', class: 'icon page collapsed', class2: 'faq__area-item-body collapse', title: 'Do hotels charge your card before you check ?', des: "Wondering if hotels charge your card before check-in? Get answers and peace of mind with our comprehensive guide to hotel payment policies and what to expect during your stay." },
  ],
}
const { faqOne } = faqData;

const Roomdetailscontainer = () => {
  return (
    <>
      <div className="room__details section-padding">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-xl-9 col-lg-8">
              <div className="room__details-right">
                <div className="room__details-right-content">
                  <h3 className="mb-25">
                    Luxury Room is the best online room for luxury hotels
                  </h3>
                  <p className="mb-25">
                  Welcome to JackInn, your premier destination for luxury hotel bookings. Experience unparalleled comfort and elegance with our carefully curated selection of luxury rooms. Whether you're traveling for business or leisure, our online platform offers seamless booking experiences to ensure your stay is nothing short of exceptional. From lavish amenities to impeccable service, our luxury rooms promise an unforgettable stay, tailored to your preferences and desires. Explore our collection today and indulge in the finest accommodations, guaranteed to elevate your travel experience to new heights.
                  </p>
                  {/* <p className="m-0">
                    id molestie ex ornare. Aliquam id arcu vel sem pretium
                    porttitor non maximus diam. Quisque urna turpis, euismod sed
                    elementum vel, pellentesque eu eros. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus musc.
                  </p> */}
                  <div className="row mt-35 mb-35">
                    <div className="col-sm-6 sm-mb-30">
                      <img
                        className="img__full"
                        src="/img/hotel/hotel-24.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-sm-6">
                      <img
                        className="img__full"
                        src="/img/hotel/hotel-25.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <h3 className="mb-25">Special check-in instructions</h3>
                  <p className="mb-25">
                  At JackInn, we understand that every traveler is unique, which is why we offer special check-in instructions to ensure a smooth and personalized experience. Whether you're arriving late at night, require additional assistance, or have specific preferences, our special check-in instructions cater to your individual needs. From key pickup details to parking instructions, we provide clear and concise guidance to streamline your check-in process. Our goal is to make your arrival as hassle-free as possible, allowing you to focus on enjoying your stay from the moment you step through our doors. Trust JackInn for a seamless and stress-free travel experience.
                  </p>
                  {/* <p className="m-0">
                    id molestie ex ornare. Aliquam id arcu vel sem pretium
                    porttitor non maximus diam. Quisque urna turpis, euismod sed
                    elementum vel, pellentesque eu eros. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus musc.
                  </p> */}
                </div>
                <div className="room__details-right-list">
                  <h3>Amenities</h3>
                  <div className="row mt-35">
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-1.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Room Cleaning</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-2.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Car Parking</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-3.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Swimming pool</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-4.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Pick Up & Drop</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-5.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Spa Center</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-6.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Smart Key</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-7.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Home Wifi</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-8.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Beakfast</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-9.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Fitness Gym</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room__details-right-faq mt-50">
                  <div id="accordionExamplePage">
                    {faqOne?.map((data, id) => (
                      <div className="faq__area-item" key={id}>
                        <h5
                          className={data.class}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${data.id}`}
                        >
                          {data.title}
                        </h5>
                        <div
                          id={data.id}
                          className={data.class2}
                          data-bs-parent="#accordionExamplePage"
                        >
                          <p>{data.des}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomdetailscontainer;
