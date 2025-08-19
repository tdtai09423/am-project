import Image from "next/image";
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Background moon gradient - hidden on mobile for performance */}
      <div className="absolute inset-0 hidden lg:block">
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            background:
              "linear-gradient(180deg, #FDE323 24.04%, #FFC965 52.88%, #FFFAD2 79.33%)",
            borderRadius: "50%",
            transform: "scale(1.2)",
          }}
        />
      </div>

      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-7 h-7 bg-white rounded-full blur-sm top-20 left-32 animate-pulse" />
        <div className="absolute w-10 h-10 bg-white rounded-full blur-sm top-40 right-48 animate-pulse delay-300" />
        <div className="absolute w-5 h-5 bg-white rounded-full blur-sm bottom-32 left-1/4 animate-pulse delay-700" />
        <div className="absolute w-8 h-8 bg-white rounded-full blur-sm bottom-20 right-1/3 animate-pulse delay-500" />
      </div>

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-4xl md:text-5xl font-bold text-amber-900">
            Ấm
          </span>
        </div>
      </div>

      {/* Main image placeholder */}
      <div className="relative z-10 mb-8 w-full max-w-2xl h-auto">
        <Image
          src="/vietnamese-mid-autumn-charity.png"
          alt="Ấm Campaign Illustration"
          width={1024}
          height={640}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Main heading */}
      <h1 className="relative z-10 text-2xl md:text-4xl font-bold text-center text-black mb-6 max-w-4xl italic">
        Một ly trà thơm, thêm mùa trăng Ấm
      </h1>

      {/* Divider line */}
      <div className="w-full max-w-lg h-px bg-black mb-8" />

      {/* Main description */}
      <div className="relative z-10 max-w-4xl text-center text-black text-base md:text-lg leading-relaxed space-y-4">
        <p>
          Trăng mùa thu không chỉ gợi nhắc về những đêm rằm ấm áp, mà còn là
          hình ảnh của niềm vui trọn vẹn, của sự đoàn tụ và sum vầy. Từ bao đời
          nay, trăng tròn vẫn là biểu tượng cho những khoảnh khắc sum họp, để
          Tết Trung thu trở thành dịp đoàn viên thiêng liêng trong ký ức của mỗi
          người.
        </p>
        <p>
          Chiến dịch &quot;ẤM&quot; là chiến dịch thiện nguyện thường niên của
          THREE O&apos;CLOCK phát động vào mỗi dịp Tết Trung thu nhằm gây quỹ để
          trao tặng quà cho trẻ em có hoàn cảnh khó khăn. Trong vòng 3 năm trở
          lại đây, THREE O&apos;CLOCK đã phát động cũng như góp một phần nào đó
          để giúp đỡ cho cộng đồng và mong muốn ở các năm tiếp theo sẽ tiếp tục
          lan truyền thông điệp ý nghĩa này đến với tất cả mọi người.
        </p>
        <p>
          Trong hành trình &quot;Ấm 5&quot; năm nay, ánh trăng trở thành điểm
          hẹn chung của mọi tấm lòng, nơi từng món quà, từng câu chuyện và những
          tiếng cười được góp nhặt, hòa quyện để tạo nên một mùa trăng đủ đầy,
          trọn vẹn yêu thương cho các em.
        </p>
      </div>
    </section>
  );
}
