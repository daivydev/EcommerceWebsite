import { Navigate, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="px-[15px] mx-auto w-full">
      <div className="flex flex-col items-center justify-center py-20">
        <div className="icon mb-6">
          <img
            height={200}
            width={200}
            src="https://salt.tikicdn.com/ts/brickv2og/3c/7c/9b/1d101c4757843340d812828590283374.png"
          />
        </div>
        <div className="text-gray-500 leading-6">Trang bạn đang tìm kiếm không tồn tại</div>
        <ButtonComponent
          title={"Tiếp Tục Mua Sắm"}
          callback={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}
