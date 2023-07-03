import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher",
      icon: require("../../assets/undraw_home_run_acyh.svg"),
    },
    {
      title: "Fun together",
      description:
        "Having fun together is one of the best moments to enjoy together. kites festival is one of the occasion when you can enjoy to your fullest as being together with your loved once makes this festival even more exciting.",
      icon: require("../../assets/undraw_fun_moments_2vha.svg"),
    },
    {
      title: "Weights",
      description:
        "weightlifting generally refets to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: require("../../assets/undraw_healthy_habit_kwe6.svg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex)
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`,
        }}
      >
        {items?.map((item) => {
          return <CarouselItem item={item} key={item.title} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                key={index}
                className="indicator-buttons"
                onClick={() => updateIndex(index)}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
