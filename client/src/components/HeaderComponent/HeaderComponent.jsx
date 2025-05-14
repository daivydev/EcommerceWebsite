import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
// Import Icon
import CancelIcon from "@mui/icons-material/Cancel";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import { headerBanner } from "../../assets";

export default function HeaderComponent() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 300);

  const onSearch = () => {
    if (debouncedSearch == "") return;
    console.log("Message:" + debouncedSearch + " Searching...");
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   const data = await fetch("API").then((res) => res.json());
    // };
    console.log(debouncedSearch);
  }, [debouncedSearch]);

  // Auto change input placeholder
  const listMessage = [
    "Freeship đơn từ 45k",
    "100% hàng thật",
    "Hoàn 200% nếu hàng giả",
    "30 ngày đổi trả",
    "Giao nhanh 2h",
    "Giá siêu rẻ",
  ];
  const [counter, setCounter] = useState(0);
  const [placeHolder, setPlaceHolder] = useState(listMessage[0]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter == listMessage.length - 1) {
        setCounter(0);
        setPlaceHolder(listMessage[counter]);
      } else {
        setCounter((prev) => prev + 1);
        setPlaceHolder(listMessage[counter]);
      }
    }, 4000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <header>
      <div className="z-[999]">
        <Link to="/promotion">
          <div className="bg-green-50 flex justify-center items-center px-4 py-3">
            <div className="text-[12px] font-medium text-green-600">
              Freeship đơn từ 45k, giảm nhiều hơn cùng
            </div>
            <picture>
              <img src={headerBanner} className="w-[79px] ml-1" />
            </picture>
          </div>
        </Link>
      </div>
      <div className="h-[88px] mx-auto px-6 flex items-center w-full 2xl:w-[1440px] ">
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-blue-400 text-center flex flex-col justify-center"
          >
            TYKY
            <span className="text-blue-900 font-bold text-sm mx-auto">Tốt & Nhanh</span>
          </Link>
        </div>
        <div className="flex flex-auto ml-12">
          <div className="flex w-full">
            <div className="flex flex-auto">
              <div className="w-full min-w-[330px] flex items-center relative border-1 rounded-lg border-gray-300">
                <div className="pl-3 pr-2">
                  <SearchIcon className="text-gray-400" />
                </div>
                <input
                  className="pr-8 outline-none border-gray-300 flex flex-auto text-sm"
                  placeholder={placeHolder}
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <div
                  onClick={onSearch}
                  className="relative p-2 text-blue-600 cursor-pointer flex justify-center items-center rounded-e-lg hover:bg-blue-200 duration-150"
                >
                  <span className="select-none text-sm">Tìm kiếm</span>
                  <div className="absolute left-[-22%] w-[1px] h-[20px] bg-gray-300 mx-4"></div>
                </div>
                {!!searchValue && (
                  <button
                    className="absolute right-19 cursor-pointer hover:bg-gray-200 rounded-full flex items-center"
                    onClick={() => setSearchValue("")}
                  >
                    <CancelIcon className=" text-gray-400 p-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="ml-12 flex min-w-[300px] text-sm">
            <Link
              to="/"
              className="w-full px-3 text-center flex items-center gap-1 justify-center text-blue-600 hover:bg-gray-200 cursor-pointer rounded-lg"
            >
              <CottageRoundedIcon />
              <span>Trang chủ</span>
            </Link>
            <div className="w-full px-3 text-center flex items-center gap-1 justify-center text-gray-500 hover:bg-gray-200 cursor-pointer rounded-lg">
              <SentimentVerySatisfiedRoundedIcon />
              <span>Tài khoản</span>
            </div>
            <div className=" w-fit px-3 text-center flex items-center justify-center text-blue-600 hover:bg-gray-200 cursor-pointer rounded-lg">
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[46px] border-y-1 border-gray-200 flex items-center ">
        <div className="w-full mx-auto px-6 2xl:w-[1440px]">
          <Link to="/info" className="flex gap-12 w-full items-center whitespace-nowrap">
            <span className="text-blue-900 font-medium text-sm">Cam kết</span>
            <div className="flex items-center">
              <div className="text-[12px] font-medium flex items-center">
                <VerifiedRoundedIcon className="text-blue-600 p-[2px] mr-1 " />
                <span>100% hàng thật</span>
              </div>
              <div className="w-[1px] h-[20px] bg-gray-200 mx-4"></div>
              <div className="text-[12px] font-medium flex items-center">
                <DeliveryDiningRoundedIcon className="text-blue-600 p-[2px] mr-1" />
                <span>Freeship mọi đơn</span>
              </div>
              <div className="w-[1px] h-[20px] bg-gray-200 mx-4"></div>
              <div className="text-[12px] font-medium flex items-center">
                <CurrencyExchangeRoundedIcon className="text-blue-600 p-[2px] mr-1" />
                <span>Hoàn 200% nếu hàng giả</span>
              </div>
              <div className="w-[1px] h-[20px] bg-gray-200 mx-4"></div>
              <div className="text-[12px] font-medium flex items-center">
                <ViewInArRoundedIcon className="text-blue-600 p-[2px] mr-1" />
                <span>30 ngày đổi trả</span>
              </div>
              <div className="w-[1px] h-[20px] bg-gray-200 mx-4"></div>
              <div className="text-[12px] font-medium flex items-center">
                <RocketLaunchRoundedIcon className="text-blue-600 p-[2px] mr-1" />
                <span>Giao nhanh 2h</span>
              </div>
              <div className="w-[1px] h-[20px] bg-gray-200 mx-4"></div>
              <div className="text-[12px] font-medium flex items-center">
                <LoyaltyRoundedIcon className="text-blue-600 p-[2px] mr-1" />
                <span>Giá siêu rẻ</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
