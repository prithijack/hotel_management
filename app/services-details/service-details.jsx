import Link from "next/link";
const faqData = {
  faqOne: [
    { id: 'collapseOnePage', class: 'icon page collapsed', class2: 'faq__area-item-body collapse', title: 'Do you pay before or after booking a hotel ?', des: "Confused about payment procedures when booking a hotel? Learn about prepayment options, reservation guarantees, and payment methods to make informed decisions before and after securing your stay with us." },
    { id: 'collapseTwoPage', class: 'icon page', class2: 'faq__area-item-body collapse show', title: 'What documents are needed for hotel booking ?', des: "Discover the essential documents required for hassle-free hotel booking. From IDs to reservation confirmations, ensure a smooth check-in process with our helpful checklist and tips." },
    { id: 'collapseThreePage', class: 'icon page collapsed', class2: 'faq__area-item-body collapse', title: 'Do hotels charge your card before you check ?', des: "Wondering if hotels charge your card before check-in? Get answers and peace of mind with our comprehensive guide to hotel payment policies and what to expect during your stay." },
  ],
}
const { faqOne } = faqData;

const ServicesDetails = () => {
  return (
    <div className="services__details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-4 lg-mb-30">
            <div className="all__sidebar">
              <div className="all__sidebar-item">
                <h5>Category</h5>
                <div className="all__sidebar-item-category">
                  <ul>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Small Suite
                        <span>(06)</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="active" href="/services-details">
                        <i className="far fa-angle-double-right"></i>Luxury Room
                        <span>(08)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Single
                        <span>(05)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Family
                        <span>(09)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Double Room
                        <span>(03)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="all__sidebar-item-help mt-30"
                style={{ backgroundImage: `url('/hotel-9.jpg')` }}
              >
                <div className="all__sidebar-item-help-icon">
                  <i className="fal fa-phone-alt"></i>
                </div>
                <h5> Easy solutions to your home beauty</h5>
                <div className="all__sidebar-item-help-contact">
                  <div className="all__sidebar-item-help-contact-content">
                    <span>Quick Help</span>
                    <h6>
                      <Link href="tel:+125(895)658568">+125 (895) 658 568</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="services__details-left">
              <div className="services__details-left-image mb-30">
                <img src="/luxury-5.jpg" alt="" />
              </div>
              <div className="services__details-left-content">
                <h2 className="mb-30">Luxury Room</h2>
                <p className="mb-0">
                  Indulge in unparalleled comfort and elegance at JackInn. Our luxury rooms are meticulously designed with exquisite furnishings and modern amenities to ensure a truly unforgettable stay for our guests. Immerse yourself in a world of luxury and relaxation, where every detail is crafted to perfection.
                </p>
                <span>
                  Book with confidence knowing that your safety and satisfaction are our top priorities at JackInn. Welcome to luxury redefined.
                </span>
                {/* <p>
                  Vestibulum eget tellus rhoncus, dictum massa a, mattis massa.
                  Cras in leo semper, ultricies ligula nec, ornare tellus.
                  Suspendisse quam risus, semper et ultricies a, commodo eu
                  tortor. Phasellus elementum tincidunt varius. Nam facilisis,
                  ante eget gravida vestibulum, ante nisi feugiat nulla, in
                  dapibus neque turpis et dolor. Vestibulum in urna urna. Nulla
                  at eleifend lorem. Praesent et ex sed metus egestas feugiat.
                  Donec velit libero, feugiat ac dictum vel, dignissim id ante.
                  Praesent hendrerit posuere condimentum.
                </p> */}
                <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-12 xl-mb-30">
                    <img
                      className="img__full"
                      src="/hotel-24.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <h3 className="mb-20">Customer Benefits</h3>
                    <p className="m-30">
                      Enjoy a seamless booking experience with our user-friendly platform.
                      Unlock exclusive deals and discounts tailored just for you.
                      Receive exceptional customer support around the clock for any inquiries or assistance you may need.
                    </p>
                    {/* <div className="services__details-left-content-list">
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Automotive
                        service our clients receive
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Praesent
                        efficitur quam sit amet
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>We use the
                        latest diagnostic equipment
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
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
  );
};

export default ServicesDetails;
