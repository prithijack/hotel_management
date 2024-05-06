// app/HomePage.js
import React from 'react';
import RoomBookingFormClient from './RoomBookingForm';

import Accommodations from "../accommodations/accommodations";
import Banner from "../banner/banner";
import Deluxe from "../deluxe/deluxe";
import Feature from "../feature/feature";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Services from "../services/services";
import Testimonial from "../testimonial/testimonial";
import Videoarea from "../videoarea/videoarea";
import SEO from "@/components/seo";

export default function HomePage() {
  return (
    <>
      <SEO pageTitle="Room Booking" />
      <HeaderOne />
      <Banner />
      {/* <Accommodations /> */}
      <RoomBookingFormClient />
      {/* <Videoarea />
      <Services />
      <Feature /> */}
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
