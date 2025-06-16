"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[16px] top-1/2 transform translate-y-[-50%] z-10 cursor-pointer text-white/80 hover:text-white text-[36px]"
      onClick={onClick}
    >
      <IoIosArrowDropright />
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[16px] top-1/2 transform translate-y-[-50%] z-10 cursor-pointer text-white/80 hover:text-white text-[36px]"
      onClick={onClick}
    >
      <IoIosArrowDropleft />
    </div>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-full mx-auto relative z-10">
      <Slider {...settings}>
        <div className="px-2">
          <video controls className="rounded-lg w-full md:w-[240px]">
            <source src="videos/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="px-2">
          <video
            width={240}
            height={320}
            controls
            className="rounded-lg w-full md:w-[240px]"
          >
            <source src="videos/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="px-2">
          <video
            width={240}
            height={320}
            controls
            className="rounded-lg w-full md:w-[240px]"
          >
            <source src="videos/video3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="px-2">
          <video
            width={240}
            height={320}
            controls
            className="rounded-lg w-full md:w-[240px]"
          >
            <source src="videos/video4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="px-2">
          <video
            width={240}
            height={320}
            controls
            className="rounded-lg w-full md:w-[240px]"
          >
            <source src="videos/video5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="px-2">
          <video
            width={240}
            height={320}
            controls
            className="rounded-lg w-full md:w-[240px]"
          >
            <source src="videos/video6.mp4" type="video/mp4" />
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
