import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct({ product }) {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <Link to="/#" className="flex relative overflow-hidden h-full">
          <span className="w-full border-1 border-gray-100 rounded-lg overflow-hidden relative">
            <div className="thumbnail relative">
              <div className="thumbnail__main text-center w-full">
                <div className="image-wrapper ">
                  <img src={product?.image} />
                </div>
              </div>
              <div className="thumbnail__badges"></div>
            </div>
            <div className="card-content flex">
              <div className="info">
                <div>
                  <div className="NameWrapper">
                    <h3>{product?.name}</h3>
                    <div className="ratingScore">{product?.rate} ⭐ ⭐ ⭐</div>
                  </div>
                  <div className="Price">
                    <div className="price-discount">
                      <div className="text-red-500 font-semibold text-base">
                        {(
                          parseInt(product?.price) *
                          (1 - parseInt(product?.discount) / 100).toFixed(2)
                        ).toFixed(0)}
                        <sup>₫</sup>
                        {}
                      </div>
                    </div>
                    <div>
                      <div className="discount">-{product?.discount}%</div>
                      <div className="original-price line-through text-gray-500 text-[12px]">
                        {product?.price} <sup>₫</sup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
}
