import React from "react";
// import ProfilePic from "../Assets/me2.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Discover the raving reviews from our delighted customers. Join the chorus of satisfied patrons who have made us their go-to destination for exceptional food and service.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* <img src={ProfilePic} alt="" width={80} height={80}/> */}
        <p>
        "Consistently impressed with the mouthwatering dishes and lightning-fast delivery. TasteVilla has become my top choice for a hassle-free and delicious dining experience."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Vedansh Varshney</h2>
      </div>
    </div>
  );
};

export default Testimonial;
