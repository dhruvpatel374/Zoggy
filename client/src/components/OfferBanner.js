import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./OfferBannerArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CDN_URL } from "../utils/constant";

// import "../../Carousel.css";
const OfferBanner = (props) => {
  const { slides, options, data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla1 mb-6">
      <div className="flex justify-between align-middle mx-auto ">
        <h1 className="my-4 font-bold text-xl   ">Deals for you</h1>
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
      <div className="embla__viewport1 cursor-pointer " ref={emblaRef}>
        <div
          className="embla__container1 lg:w-[22rem] w-[18rem]  "
          key={data?.info?.resId}
        >
          {data?.map((index, i) => (
            <div className="embla__slide1  " key={`${index?.info?.resId}-${i}`}>
              <div className="embla__slide__number1  ">
                <div className="flex gap-4 align-middle  justify-start border-gray-300  border-[1px] rounded-2xl p-3 lg:w-60 ">
                  <div>
                    <img
                      className="block w-10 h-10 "
                      src={
                        index?.info?.logoBottom
                          ? CDN_URL + index?.info?.logoBottom
                          : CDN_URL + index?.info?.offerLogo
                      }
                      alt=""
                      key={index?.info?.resId}
                    />
                  </div>
                  <div className="text-xs ">
                    <p className="font-extrabold">{index?.info?.header}</p>
                    <p className="text-xs text-gray-500 font-bold">
                      {index?.info?.couponCode
                        ? index?.info?.couponCode
                        : index?.info?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OfferBanner;
