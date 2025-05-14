import React from "react";
import SlideWrapper from "../../ProductsWrapper/SlideWrapper";
import { Link } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function CategoriesBar() {
  const category = [
    {
      title: "English Books",
      subtitles: [
        "Art & Photography",
        "Biographies & Memoirs",
        "Business & Economics",
        "Children's Books",
      ],
    },
    {
      title: "Sách tiếng Việt",
      subtitles: [
        "Sách văn học",
        "Sách kinh tế",
        "Sách thiếu nhi ",
        "Sách Văn Hóa - Địa Lý - Du Lịch",
      ],
    },
    {
      title: "Văn phòng phẩm",
      subtitles: [
        "Dụng Cụ Văn Phòng",
        "Bút - Viết các loại",
        "Thiết Bị Giáo Dục Trường Học",
        "Sản phẩm về giấy",
      ],
    },
  ];

  function toogleActive(element, icon) {
    document.getElementById(element).classList.toggle("block");
    document.getElementById(element).classList.toggle("hidden");
    document.getElementById(icon).classList.toggle("rotate-180");
  }

  return (
    <div className="w-[230px]">
      <SlideWrapper>
        <div>
          <div className="text-sm font-semibold leading-[150%] px-4 py-3 border-gray-200 border-b-1">
            Khám phá theo danh mục
          </div>
          <div>
            {category.map((item, titleIndex) => {
              return (
                <div
                  className="text-gray-900 px-4 py-2 cursor-pointer border-gray-200 border-b-1 text-[12px]"
                  key={titleIndex}
                >
                  <div className="flex justify-between items-center">
                    <Link to={"/"} className="hover:underline hover:text-blue-600 font-medium">
                      {item?.title}
                    </Link>
                    <button>
                      <div
                        id={`arrowDownIcon${titleIndex}`}
                        className="p-1 cursor-pointer rounded-sm hover:bg-gray-200"
                        onClick={() =>
                          toogleActive(`subtitle${titleIndex}`, `arrowDownIcon${titleIndex}`)
                        }
                      >
                        <KeyboardArrowDownRoundedIcon />
                      </div>
                    </button>
                  </div>
                  <div
                    id={`subtitle${titleIndex}`}
                    className="hidden pt-2 pl-4 pr-2 leading-[150%] "
                  >
                    {item?.subtitles.map((item, subtitlesIndex) => {
                      return (
                        <div
                          className="text-gray-800 pb-3 hover:underline hover:text-blue-600 font-normal"
                          key={subtitlesIndex}
                        >
                          <Link to={"/"}>{item}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SlideWrapper>
    </div>
  );
}
