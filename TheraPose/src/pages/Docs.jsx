import { SectionTitle } from "../assets/ui";

export default function Docs() {
  return (
    <main className="w-full bg-white relative overflow-hidden">
      {/* subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_1.5px)] [background-size:18px_18px]" />
      </div>

      {/* HERO STRIP */}
      <header className="relative mb-14 md:mb-16">
        <div className=" flex justify-center text-white">
          <div className=" justify-center mx-auto max-w-6xl px-6 md:px-8 py-10 md:py-12">
            <SectionTitle className=" justify-center text-4xl md:text-5xl font-extrabold tracking-tight">
              About Us
            </SectionTitle>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        {/* corner accents */}
        <span className="pointer-events-none absolute -bottom-2 left-6 h-8 w-8 rounded-full border border-gray-200" />
        <span className="pointer-events-none absolute -bottom-3 left-12 h-5 w-20 border-t border-gray-200" />
      </header>

      {/* CONTENT */}
      <section className="relative mx-auto max-w-6xl px-10 md:px-1">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-11 items-center">
          {/* IMAGE */}
          <figure className="relative order-1 overflow-hidden rounded-3xl border border-gray-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] bg-gray-100">
            <img
              src="/abt.png"
              alt="Therapist assisting patient at home"
              className="w-full h-full object-cover grayscale contrast-110 transition-[filter,transform] duration-700 ease-out will-change-transform hover:grayscale-0 hover:scale-[1.03]"
              loading="eager"
              decoding="async"
            />
            {/* soft vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </figure>

          {/* TEXT */}
          <div className="relative order-2">
            {/* glass card */}
            <div className="rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-md shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] p-6 md:p-8 lg:p-10">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed antialiased">
                TheraPose คือแพลตฟอร์มกายภาพบำบัดที่บ้าน ใช้{" "}
                <span className="font-semibold text-gray-900">AI Pose Estimation</span>{" "}
                ประเมินท่าทางแบบเรียลไทม์ ปรับโปรแกรมตามอาการเฉพาะบุคคล
                พร้อมรายงานความคืบหน้าที่แชร์กับแพทย์/นักกายภาพได้ทันที
                ทำให้ผู้ป่วยมั่นใจ ปลอดภัย และมีแรงจูงใจในการฟื้นฟูอย่างต่อเนื่อง
              </p>

              <ul className="mt-8 space-y-4 text-gray-800 text-base md:text-lg">
                <li className="group flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-[11px] text-gray-700 transition group-hover:bg-gray-900 group-hover:text-white">
                    ✓
                  </span>
                  <span className="leading-relaxed">
                    ประเมินท่าทางอัตโนมัติ ลด Human Error
                  </span>
                </li>
                <li className="group flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-[11px] text-gray-700 transition group-hover:bg-gray-900 group-hover:text-white">
                    ✓
                  </span>
                  <span className="leading-relaxed">
                    ติดตามผลและแชร์รายงานกับแพทย์/นักกายภาพ
                  </span>
                </li>
              </ul>

              <div className="mt-8 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
              {/* tiny version tag spot (empty—style only) */}
              <div className="mt-4 flex justify-end">
                <span className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-500">
                  {/* v0.1 */}
                </span>
              </div>
            </div>

            {/* side accent line */}
            <div className="pointer-events-none absolute -left-6 top-6 bottom-6 hidden md:block w-px bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300" />
          </div>
        </div>

        {/* bottom breathing room */}
        <div className="pb-14" />
      </section>
    </main>
  );
}
