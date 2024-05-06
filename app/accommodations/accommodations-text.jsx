import Link from "next/link";

const Accommodationstext = () => {
  return (
    <div className="col-xl-5 col-lg-6 lg-mb-50">
      <div className="accommodations__area-title">
        <span className="subtitle__one">Accommodations</span>
        <h2>Welcome Our Hotels And Resorts</h2>
        <p>
        Welcome to JackInn, where luxury meets comfort. Explore our handpicked selection of hotels and resorts.
        </p>
        <Link className="theme-btn" href="/about">
          Read More <i className="fal fa-long-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Accommodationstext;
