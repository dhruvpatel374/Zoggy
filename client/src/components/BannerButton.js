import React, { useCallback, useEffect, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ disabled, children, ...restProps }) => {
  return (
    <button
      className={`embla__button embla__button--prev rounded-md ${
        disabled ? "bg-gray-300  cursor-not-allowed" : "bg-gray-100 "
      }`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <ArrowLongLeftIcon className="embla__button__svg" />
      {children}
    </button>
  );
};

export const NextButton = ({ disabled, children, ...restProps }) => {
  return (
    <button
      className={`embla__button embla__button--next rounded-md ${
        disabled ? "bg-gray-300  cursor-not-allowed" : "bg-gray-100 "
      }`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <ArrowLongRightIcon className="embla__button__svg" />
      {children}
    </button>
  );
};
