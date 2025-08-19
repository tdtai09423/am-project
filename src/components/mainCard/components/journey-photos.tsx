import Image from "next/image";
export function JourneyPhotos() {
  return (
    <section className="relative -mt-32 px-4 z-10 min-h-[1000px] md:min-h-[1200px]">
      <div className="max-w-6xl mx-auto relative">
        {/* 2020 Photo - overlapping with main circle on the left */}
        <div
          className="absolute left-8 top-16 flex flex-col items-center space-y-2"
          style={{
            position: "relative",
            zIndex: 100,
            top: "-100px",
            left: "-30%",
          }}
        >
          <div className="relative w-100 h-100 md:w-100 md:h-100 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-children-gifts.png"
              alt="Ấm 2020 - Trẻ em nhận quà Trung thu"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg md:text-xl text-amber-900 font-semibold">
            2020
          </div>
        </div>

        {/* 2022 Photo - positioned on the right */}
        <div
          className="absolute right-8 top-8 flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
            top: "80px",
            right: "-15%",
          }}
        >
          <div className="relative w-100 h-100 md:w-100 md:h-100 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-volunteers-children-mid-autumn.png"
              alt="Ấm 2022 - Tình nguyện viên và trẻ em"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg md:text-xl text-amber-900 font-semibold">
            2022
          </div>
        </div>

        {/* 2023 Photo - positioned bottom left */}
        <div
          className="absolute left-16 bottom-8 flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
            bottom: "-250px",
            left: "-15%",
          }}
        >
          <div className="relative w-100 h-100 md:w-100 md:h-100 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-children-volunteers-2023.png"
              alt="Ấm 2023 - Hoạt động từ thiện"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg text-amber-900 font-semibold">
            2023
          </div>
        </div>

        {/* 2024 Photo - positioned bottom right */}
        <div
          className="absolute right-16 bottom-16 flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
            bottom: "-150px",
            right: "-15%",
          }}
        >
          <div className="relative w-100 h-100 md:w-100 md:h-100 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-charity-2024.png"
              alt="Ấm 2024 - Hoạt động cộng đồng"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg text-amber-900 font-semibold">
            2024
          </div>
        </div>

        <div className="text-center py-24 px-8">
          <h3 className="font-serif text-3xl md:text-4xl text-amber-900 font-bold tracking-wide mb-8">
            HÀNH TRÌNH CỦA ẤM
          </h3>

          <div className="max-w-2xl mx-auto">
            <p className="text-sm md:text-base text-amber-800 leading-relaxed font-sans mb-4">
              Từ những ngày đầu với các mong mong nhỏ của Trung thu đầu tiên,
              chúng tôi đã có thể gây quỹ được nhờ các bạn trẻ khắp Việt Nam.
              &quot;Ấm&quot; đã trở thành hành trình dài hơi bởi THREE
              O&apos;CLOCK bám trụ.
            </p>
            <p className="text-sm md:text-base text-amber-800 leading-relaxed font-sans mb-4">
              Tiếp nối thành công những mùa trước, cùng với mạnh lưới nội bộ
              cộng đồng THREE O&apos;CLOCK, chúng tôi mong muốn lan tỏa thêm
              nhiều yêu thương đến với các em nhỏ có hoàn cảnh khó khăn. Từ đó
              có thể tạo nên những kỷ niệm đẹp trong mùa trăng tròn năm nay.
            </p>
          </div>
        </div>

        <div className="absolute top-32 left-1/4 text-amber-300 text-2xl">
          ✦
        </div>
        <div className="absolute bottom-32 right-1/4 text-amber-300 text-xl">
          ✦
        </div>
        <div className="absolute top-1/2 left-12 text-amber-200 text-lg">✦</div>
        <div className="absolute top-1/3 right-12 text-amber-200 text-lg">
          ✦
        </div>
      </div>
    </section>
  );
}
