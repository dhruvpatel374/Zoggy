import React from "react";

import { PrevButton, NextButton, usePrevNextButtons } from "./BannerButton";

import useEmblaCarousel from "embla-carousel-react";
import { CDN_URL } from "../utils/constant";
import { isDesktop } from "react-device-detect";
import "../../index.css";
const Banner = (props) => {
  const { slides, options, data } = props;
  console.log(props);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return isDesktop ? (
    <section className="embla mt-8 mb-12">
      <div className="flex justify-between align-middle mx-auto">
        <h1 className="my-4 font-bold text-3xl pl-5  ">What's on your mind?</h1>
        <div className="embla__controls1 flex items-center">
          <div className="embla__buttons1 flex items-center">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container w-[40rem]">
          {data?.map((item) => (
            <div className="embla__slide" key={item?.id}>
              <div className="embla__slide__number ">
                <img
                  className="block w-24 h-24 cursor-pointer"
                  src={CDN_URL + item?.imageId}
                  alt=""
                  key={item?.id}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null; // Fallback UI or loading indicator
};

export default Banner;
