import { Card, SectionTitle } from "../assets/ui";

/* tiny local icon so you don't need a package */
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.2 7.2a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.493-6.493a1 1 0 0 1 1.414 0z" />
    </svg>
  );
}

export default function Docs() {
  const bullets = [
    "ติดตามมุมข้อต่อ ช่วงการเคลื่อนไหว (ROM) และจำนวนครั้ง",
    "ปรับระดับความยากอัตโนมัติให้เหมาะกับความก้าวหน้าของแต่ละคน",
    "แจ้งเตือนนัดฝึก + เกมมิฟิเคชัน เพิ่มแรงจูงใจทำต่อเนื่อง",
    "แดชบอร์ดสำหรับนักกายภาพ เพื่อตรวจงานและปรับโปรแกรม",
  ];

  const chips = [
    { k: "Sessions", v: "Real-time" },
    { k: "Reports", v: "แชร์ทันที" },
    { k: "Safety", v: "คำแนะนำท่าทาง" },
  ];

  return (
    <main className="w-full">
      {/* Header */}
      <header className="text-center space-y-3 mb-8 md:mb-12">
        <SectionTitle>About Us</SectionTitle>
        <p className="mx-auto text-gray-700 text-base md:text-lg max-w-3xl">
          TheraPose คือแพลตฟอร์มกายภาพบำบัดที่บ้าน ใช้ AI Pose Estimation ประเมินท่าทางแบบเรียลไทม์
          สร้างโปรแกรมเฉพาะบุคคล ปลอดภัย มีรายงานความคืบหน้าพร้อมแชร์ให้แพทย์/นักกายภาพได้ทันที
        </p>
      </header>

      {/* About Block */}
      <section className="mx-auto max-w-6xl px-4">
        <Card className="rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden p-0">
          {/* subtle top divider accent */}
          <div className="h-0.5 w-full bg-gradient-to-r from-gray-900/80 via-gray-500/50 to-gray-900/80" />

          <div className="grid md:grid-cols-2">
            {/* Image side */}
            <figure className="relative bg-gray-100">
              <img
                src="/abt.png"
                alt="Therapist assisting patient at home"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </figure>

            {/* Text side */}
            <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">TheraPose คืออะไร?</h3>

              <p className="mt-3 text-gray-700 leading-relaxed">
                เรานำคอมพิวเตอร์วิทัศน์มาช่วย “ดูท่าทาง” ด้วยกล้องของคุณแบบเรียลไทม์
                เพื่อให้คำแนะนำที่ปลอดภัย สร้างแผนเฉพาะบุคคล และติดตามผลลัพธ์ได้จริง—ไม่ใช่แค่เช็กลิสต์
              </p>

              {/* Bullets */}
              <ul className="mt-5 space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800">
                    <span className="mt-1 text-gray-900">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Stats chips */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {chips.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-center shadow-sm"
                  >
                    <div className="text-xs text-gray-500">{c.k}</div>
                    <div className="text-sm font-semibold text-gray-900">{c.v}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
