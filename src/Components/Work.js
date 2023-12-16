import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Explore our menu filled with mouthwatering options. From appetizers to desserts, we've got your cravings covered",
    },
    {
      image: ChooseMeals,
      title: "Track Your Order",
      text: "Since your order is confirmed, use our real-time tracking feature to monitor the progress of your delivery",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Kick back and relax as our efficient delivery team brings the flavors of TasteVilla straight to your doorstep",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Embark on a seamless culinary journey with TasteVilla. Simply explore our menu, place your order effortlessly, and experience the magic of swift delivery. Indulge in the convenience of exceptional service, making every dining moment a delightful experience.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
