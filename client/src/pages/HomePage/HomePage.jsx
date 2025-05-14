import { Link } from "react-router-dom";
import ImageCarousel from "../../components/CarouselComponent/ImageCarousel";
import CardCarousel from "../../components/CarouselComponent/CardCarousel";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export default function HomePage() {
  const category = [
    {
      title: "Nhà Sách Tiki",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp",
    },
    {
      title: "Nhà Cửa - Đời Sống",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp",
    },
    {
      title: "Điện Thoại - Máy Tính Bảng",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp",
    },
    {
      title: "Đồ Chơi - Mẹ & Bé",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp",
    },
    {
      title: "Thiết Bị Số - Phụ Kiện Số",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/78e428fdd90408587181005f5cc3de32.png.webp",
    },
    {
      title: "Điện Gia Dụng",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp",
    },
    {
      title: "Làm Đẹp - Sức Khỏe",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/bf5095601d17f9971d7a08a1ffe98a42.png.webp",
    },
    {
      title: "Ô Tô - Xe Máy - Xe Đạp",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp",
    },
    {
      title: "Thời trang nữ",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp",
    },
    {
      title: "Bách Hóa Online",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp",
    },
    {
      title: "Thể Thao - Dã Ngoại",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp",
    },
    {
      title: "Thời trang nam",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp",
    },
    {
      title: "Cross Border - Hàng Quốc Tế",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp",
    },
    {
      title: "Laptop - Máy Vi Tính - Linh kiện",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp",
    },
    {
      title: "Giày - Dép nam",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp",
    },
    {
      title: "Điện Tử - Điện Lạnh",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp",
    },
    {
      title: "Giày - Dép nữ",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/5a6b58f21fbcad0d201480c987f8defe.png.webp",
    },
    {
      title: "Máy Ảnh - Máy Quay Phim",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp",
    },
    {
      title: "Phụ kiện thời trang",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp",
    },
    {
      title: "Đồng hồ và Trang sức",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp",
    },
    {
      title: "Balo và Vali",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp",
    },
    {
      title: "Voucher - Dịch vụ",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp",
    },
    {
      title: "Túi thời trang nữ",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp",
    },
    {
      title: "Túi thời trang nam",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp",
    },
    {
      title: "Chăm sóc nhà cửa",
      img: "https://salt.tikicdn.com/cache/100x100/ts/product/62/d5/9d/6be83773e4836bcbcdaf99a1750b2a28.png.webp",
    },
  ];
  const extension = [
    {
      title: "Ưu đãi thẻ, ví",
      img: "https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp",
    },
    {
      title: "Đóng tiền, nạp thẻ",
      img: "https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp",
    },
    {
      title: "Mua trước trả sau",
      img: "https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp",
    },
  ];

  const listBanner = [
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/ea/00/71/4d9d743be6ff8efb58a1839f7344ff35.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/f9/0b/61/426f28d1271142f16fc4022f324b2673.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/a9/65/54/411e531fb70952328fda66a94565dca7.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/01/af/cf/862089bf0623c0ede9fb290d2411b453.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/35/8b/b2/b312790a122a155201495f7b1744608c.jpg.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/1e/1a/b4/96ef48a836f0a391f55ad283de1cad60.jpg.webp",
  ];

  const listReccommendSearch = [
    {
      title: "TOP DEAL",
      img: "https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png",
    },
    {
      title: "Tiki Trading",
      img: "https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png",
    },
    {
      title: "Coupon siêu hot",
      img: "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
    },
    {
      title: "Xả kho giảm nửa giá",
      img: "https://salt.tikicdn.com/ts/upload/a5/d8/06/cb6ff520f12973013c81a8b14ad5e5b3.png",
    },
    {
      title: "Rẻ hủy diệt",
      img: "https://salt.tikicdn.com/ts/upload/4d/fc/72/615195e6dd166397251b5bf1baf4f8d6.png",
    },
    {
      title: "Chống nắng toàn diện",
      img: "https://salt.tikicdn.com/ts/upload/c6/9c/4b/b62e8fe17cd7e18e2f2dcda2e1854387.png",
    },
    {
      title: "Top Sách bán chạy",
      img: "https://salt.tikicdn.com/ts/upload/4a/47/32/96cd0a5ab8f34621667f47a05e08d8b0.png",
    },
    {
      title: "Hạ nhiệt thần tốc",
      img: "https://salt.tikicdn.com/ts/upload/bd/b9/47/0851939e66a940edbbd5bea766cf06de.png",
    },
    {
      title: "Quà tặng mẹ",
      img: "https://salt.tikicdn.com/ts/upload/15/9e/de/85cce4e262d09c6b9c0f7cb6c4d9a44f.jpg",
    },
    {
      title: "Dã ngoại cuối tuần",
      img: "https://salt.tikicdn.com/ts/upload/54/cf/ff/65517598944f6dae3ef03e5f08d517ec.png",
    },
  ];

  const listProduct = [
    {
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/79/97/01/d11e5f7c9f177792c65d8a988be5c291.jpg.webp",
      name: "Xe Máy Honda WINNER X 2024 - Phiên Bản Tiêu Chuẩn",
      rating: "37",
      price: "10000000",
      discount: "0",
      deliveryinfo: "Nhận hàng tại cửa hàng",
      onDeal: "1",
      onBrand: "1",
      onFreeship: "1",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/7b/f9/4a/4b800f92958f37c93d5cb959a6c9cc95.jpg.webp",
      name: "Xe Máy Honda WINNER X 2024 - Phiên Bản Tiêu Chuẩn",
      rating: "60",
      price: "10000000",
      discount: "19",
      deliveryinfo: "Giao thứ 3, 20/05",
      onDeal: "1",
      onBrand: "1",
      onFreeship: "1",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/7f/33/33/c082711e8f5a796e43d364437c1bb069.jpg.webp",
      name: "Xe Máy Honda WINNER X 2024 - Phiên Bản Tiêu Chuẩn",
      rating: "74",
      price: "10000000",
      discount: "0",
      deliveryinfo: "Giao siêu tốc 2h",
      onDeal: "1",
      onBrand: "1",
      onFreeship: "1",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/4e/fd/36/216d2930bcbd364f4f02ed751b9db806.jpg.webp",
      name: "Xe Máy Honda WINNER X 2024 - Phiên Bản Tiêu Chuẩn",
      rating: "20",
      price: "10000000",
      discount: "10",
      deliveryinfo: "Giao chủ nhật, 18/05",
      onDeal: "1",
      onBrand: "1",
      onFreeship: "1",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/8d/14/88/cfdaf4bf396100f81c1a602407705c38.jpg.webp",
      name: "Kem dưỡng ẩm sáng da hoa anh đào đảo Jeju innisfree Cherry Blossom Tone Up Cream 50ml",
      rating: "29",
      price: "10000000",
      discount: "21",
      deliveryinfo: "Giao thứ 2, 19/05",
      onDeal: "1",
      onBrand: "1",
      onFreeship: "1",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/ff/56/35/80b0abcaaccada93f3b1fce81a6cf985.jpg.webp",
      name: "Xe Máy Honda WINNER X 2024 - Phiên Bản Tiêu Chuẩn",
      rating: "100",
      price: "10000000",
      discount: "90",
      deliveryinfo: "Nhận hàng tại cửa hàng",
      onDeal: "1",
      onBrand: "1",
      onFreeship: "1",
    },
  ];

  const brandProduct = [
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/ac/95/c5/d1b58a84d3d481565c1e85695480899d.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/86/b3/92/82d5ebdd52116e9935936e3b895105c1.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/da/c0/ac/94825f9124dd02ca68aa749be8dc6c64.jpg.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/0b/66/26/c0c370fd2f6b8c2dcc4a4c2f887c5750.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/52/d1/69/ec77e999e76053f3d344a147feb3f998.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/b8/d0/74/7b5d1da7cb533249ef18577c02362431.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/f3/52/95/e46fbe801a63a992651a71d5454fc232.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/72/d8/1f/5b6d87a851e237c57b128777319268fa.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/46/7a/96/d11e7e15bfa45aecbd10dd7c7a642758.png.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/53/4b/8d/5495aaf35047464d871f582ad1653887.jpg.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/9a/34/28/d929b8b1586a3e1bba0946d734d1394e.jpg.webp",
    },
    {
      image:
        "https://salt.tikicdn.com/cache/w280/ts/tikimsp/95/23/47/c4af8a80e4827c092e5c517c2e56abc9.png.webp",
    },
  ];

  return (
    <main className="bg-gray-100">
      <div className="px-6 mx-auto w-full 2xl:w-[1440px]">
        <div className="pt-4 flex">
          <div className="w-[230px] min-w-[230px] max-h-screen sticky overflow-y-scroll no-scrollbar top-4">
            <div className="py-3 px-2 bg-white rounded-lg mb-4">
              <div className="pl-4 mb-2 font-bold text-sm">Danh mục</div>
              {category.map((item, index) => {
                return (
                  <div key={index}>
                    <div>
                      <Link
                        to="/info"
                        className="flex py-2 px-4 hover:bg-gray-200 duration-300 rounded-lg items-center text-sm"
                      >
                        <div className="flex flex-[0_0_32px] mr-2">
                          <picture>
                            <img src={item?.img}></img>
                          </picture>
                        </div>
                        <div>{item?.title}</div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-3 px-2 bg-white rounded-lg mb-4">
              <div className="pl-4 mb-2 font-bold text-sm">Tiện ích</div>
              {extension.map((item, index) => {
                return (
                  <div key={index}>
                    <div>
                      <Link
                        to="/info"
                        className="flex py-2 px-4 hover:bg-gray-200 duration-300 rounded-lg items-center text-sm"
                      >
                        <div className="flex flex-[0_0_32px] mr-2">
                          <picture>
                            <img src={item?.img}></img>
                          </picture>
                        </div>
                        <div>{item?.title}</div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-3 px-2 bg-white rounded-lg">
              <Link
                to="/info"
                className="flex py-2 px-4 hover:bg-gray-200 duration-300 rounded-lg items-center text-sm"
              >
                <div className="flex flex-[0_0_32px] mr-2">
                  <picture>
                    <img src="https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp"></img>
                  </picture>
                </div>
                <div>Bán hàng cùng Tiki</div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 ml-4 w-full min-w-[880px] justify-center">
            <div className="py-4 px-2 bg-white rounded-lg">
              <ImageCarousel listImage={listBanner} />
            </div>
            <div className="py-4 px-2 bg-white rounded-lg text-sm">
              <div className="flex gap-2 justify-center">
                {listReccommendSearch.map((item, index) => {
                  return (
                    <div className="w-full" key={index}>
                      <Link
                        to="/"
                        className="flex flex-col gap-2 items-center hover:opacity-95"
                      >
                        <div className="w-[36px] h-[36px] lg:w-[44px] lg:h-[44px] rounded-[35%] overflow-hidden box-content">
                          <img className="" src={item?.img}></img>
                        </div>
                        <div className="text-center">{item?.title}</div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-4 px-2 bg-white rounded-lg text-sm">
              <CardCarousel listProduct={listProduct} />
            </div>
            <div className="p-4 bg-white rounded-lg text-sm grid grid-cols-6 gap-3">
              {brandProduct.map((item) => {
                return (
                  <div>
                    <Link to="/#">
                      <img src={item.image} className="rounded-xl" />
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="py-4 px-2 bg-white rounded-lg text-sm">
              <CardCarousel listProduct={listProduct} />
            </div>
            <div className="py-4 px-2 bg-white rounded-lg text-sm">
              <CardCarousel listProduct={listProduct} />
            </div>
            <ButtonComponent title={"Xem thêm"} />
          </div>
        </div>
      </div>
    </main>
  );
}
