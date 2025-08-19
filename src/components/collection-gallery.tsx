export function CollectionGallery() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-100 relative">
      {/* Decorative stars */}
      <div className="absolute top-8 left-8 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-12 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-16 text-amber-300 text-xs">✦</div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-sans">
          BỘ SƯU TẬP
        </h2>

        {/* Photo grid layout matching the reference */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* Top left - Group photo */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/mid-autumn-festival-vietnam.png"
              alt="Nhóm tình nguyện viên và trẻ em tại lễ hội Trung thu"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Top right - Paper cranes in boxes */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/colorful-origami-donation.png"
              alt="Hạc giấy đầy màu sắc trong hộp từ thiện"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Bottom left - ẤM branded boxes */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/am-3-mid-autumn-packages.png"
              alt="Hộp quà ẤM 3 cho chương trình từ thiện"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Bottom right - More colorful items */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/vietnamese-mid-autumn-crafts.png"
              alt="Đồ thủ công giấy đầy màu sắc cho Trung thu"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
