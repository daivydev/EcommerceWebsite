import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "../ProductRating/ProductRating";

export default function CardProduct({ product }) {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <Link to="/#" className="flex relative overflow-hidden h-full">
          <span className="w-full border-1 border-gray-100 rounded-lg overflow-hidden relative pb-10">
            <div className="thumbnail relative">
              <div className="thumbnail__main text-center w-full">
                <div className="image-wrapper ">
                  <img src={product?.image} />
                </div>
              </div>
              <div className="thumbnail__badges"></div>
            </div>
            <div className="card-content p-2 flex flex-col">
              <div className="info">
                <div>
                  <div className="NameWrapper">
                    <h3 className="overflow-hidden line-clamp-2 text-[12px]">
                      {product?.name}
                    </h3>
                    <div className="ratingScore">
                      <ProductRating rating={product?.rating} />
                    </div>
                  </div>
                  <div className="Price">
                    <div className="price-discount">
                      <div
                        className={
                          "text-base " + (product?.discount !== "0" ? "text-red-400" : "")
                        }
                      >
                        {Intl.NumberFormat("vi-VN").format(
                          (
                            parseInt(product?.price) *
                            (1 - parseInt(product?.discount) / 100).toFixed(2)
                          ).toFixed(0)
                        )}
                        <sup>₫</sup>
                      </div>
                    </div>
                    <div className="flex">
                      {product?.discount !== "0" && (
                        <>
                          <div className="discount px-1 leading-[150%] rounded-lg bg-gray-100 text-[12px]">
                            -{product?.discount}%
                          </div>
                          <div className="original-price line-through text-gray-500 text-[12px]">
                            {Intl.NumberFormat("vi-VN").format(product?.price)}
                            <sup>₫</sup>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="delivery-info absolute left-0 bottom-2 text-[10px] text-gray-500 w-full px-2 ">
                <div className="w-full border-t-gray-200 border-t-1">
                  <div className="pt-2">
                    <span>{product?.deliveryinfo}</span>
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
