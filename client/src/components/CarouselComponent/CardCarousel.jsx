import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import Carousel from "react-multi-carousel";

export default function CardCarousel({ listProduct }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      className="h-full w-full"
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
    >
      {listProduct.map((product, index) => {
        return (
          <div className="card px-1 h-full w-full" key={index}>
            <CardProduct product={product} />
          </div>
        );
      })}
    </Carousel>
  );
}
