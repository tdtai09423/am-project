export function CircularHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 overflow-hidden">
      <div className="relative w-[120vw] h-[120vw] max-w-none aspect-square">
        {/* Golden arc border at top */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-80 h-40 border-t-4 border-l-4 border-r-4 border-orange-400 rounded-t-full opacity-70"></div>

        {/* Main circular container with smooth gradient transition */}
        <div
          className="absolute inset-0 rounded-full shadow-2xl"
          style={{
            background:
              "radial-gradient(circle at center, #fef3e2 0%, #fed7aa 25%, #fdba74 45%, rgba(253, 186, 116, 0.8) 70%, rgba(253, 186, 116, 0.4) 85%, transparent 100%)",
            boxShadow:
              "inset 0 0 120px rgba(251, 191, 36, 0.15), 0 20px 60px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Decorative stars scattered around */}
          <div className="absolute top-20 left-20 text-orange-400 text-xs">
            ✦
          </div>
          <div className="absolute top-32 right-24 text-orange-400 text-xs">
            ✦
          </div>
          <div className="absolute bottom-40 left-16 text-orange-400 text-xs">
            ✦
          </div>
          <div className="absolute bottom-24 right-20 text-orange-400 text-xs">
            ✦
          </div>

          {/* Inner content container */}
          <div className="absolute inset-12 flex flex-col items-center justify-center text-center space-y-8">
            <div className="mb-6">
              <h1
                className="font-serif text-5xl md:text-6xl text-amber-900 font-light tracking-wider"
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontStyle: "italic",
                }}
              >
                Ấm
              </h1>
            </div>

            <div className="space-y-1">
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 leading-tight font-light tracking-wide"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                }}
              >
                Câu Chuyện
              </h2>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 leading-tight font-light tracking-wide"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                }}
              >
                Mùa Trăng
              </h2>
            </div>

            <p
              className="font-serif text-lg md:text-xl text-amber-800 italic font-light max-w-md tracking-wide"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Một ly trà thơm, thêm mùa trăng... ấm
            </p>

            <div className="max-w-2xl space-y-5 text-sm md:text-base text-amber-900 leading-relaxed font-sans">
              <p className="text-justify">
                Trong mùa thu tháng chín gió nhẹ, ánh trăng đầm ấm tâm hồn, mọi
                con kí tình với cuộc sống bình yên, của ký danh là ra sao vậy.
                Tô bước đầu may mắn tìm về là bước đầu cho những tháng tháng
                khác với hạp, để tất trăng thu ra hành gia điểm vào trăng lặng
                trong ký có của mỗi người.
              </p>

              <p className="text-justify">
                Chiến dịch <strong>&quot;Ấm&quot;</strong> là chiến dịch thiện
                nguyện thường niên của <strong>THREE O&apos;CLOCK</strong> phát
                động gây quỹ cho Tết Trung thu nhằm gây quỹ để tặng quà cho các
                em có hoàn cảnh khó khăn. Từ năm 2020 đến nay, chiến dịch đã thu
                hút được sự quan tâm, ủng hộ gây quỹ từ hàng nghìn bạn trẻ và
                những tấm lòng hảo tâm với số tiền lên đến hàng trăm triệu đồng.
              </p>

              <p className="text-justify">
                Trong hành trình <strong>&quot;Ấm 5&quot;</strong> năm nay,
                chúng tôi hy vọng điều tốt lành chúng con mơi tâm lòng, có tình
                mơi ngữ, ứng của chuyện về những lòng của khác gọi khích, học
                quyên để gọp hơn mơi mùa trăng có đây, hạn yêu yêu thương cho
                các em.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
