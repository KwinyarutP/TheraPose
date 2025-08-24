import React from "react";
import { Card, SectionTitle } from "../assets/ui";

export default function Docs() {
  const docs = [
    {
      title: "ผู้สูงอายุทั่วไป",
      desc: "อายุ 60 ปีขึ้นไป ต้องการทำกายภาพที่บ้าน ลดเวลาเดินทางและค่าใช้จ่าย",
    },
    {
      title: "ผู้ป่วยหลังผ่าตัด/บาดเจ็บ",
      desc: "ช่วงอายุ 45–70 ปี ฟื้นฟูหลังการผ่าตัดเปลี่ยนข้อหรืออุบัติเหตุ ต้องการโปรแกรมเฉพาะ",
    },
    {
      title: "สายรักสุขภาพ / นักกีฬา",
      desc: "ช่วงอายุ 40–65 ปี ใช้เทคโนโลยีคล่อง ต้องการวัดผลการเคลื่อนไหว (ROM) และความแข็งแรง",
    },
    
  ];

  return (
    <div className="w-full space-y-6">
      <header className=" w-full">
        <SectionTitle>About Us</SectionTitle>
        <p className="text-gray-700 text-base md:text-lg max-w-3xl">
          TheraPose คือแพลตฟอร์มกายภาพบำบัดที่บ้าน ใช้ AI Pose Estimation เพื่อประเมินท่าทางแบบเรียลไทม์
          สร้างโปรแกรมออกกำลังกายเฉพาะบุคคล ติดตามผล และแชร์รายงานให้แพทย์หรือนักกายภาพได้ทันที
        </p>
      </header>

      <h3 className="text-xl md:text-2xl font-semibold">Target User</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {docs.map((d, i) => (
          <Card key={i} className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold">{d.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{d.desc}</p>
            <a
              href={d.file}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm md:text-base"
            >
              Read more Info
            </a>
          </Card>
        ))}
      </div>
      {/* Value + Segments (text layout) */}
      <section className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">Value Proposition</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5">
            <li>ทำกายภาพที่บ้านได้ ลดค่าใช้จ่าย/เวลาเดินทาง</li>
            <li>AI ให้คำแนะนำท่าทางแบบเรียลไทม์ ปลอดภัยและแม่นยำ</li>
            <li>โปรแกรมเฉพาะบุคคลตามสภาพร่างกายและเป้าหมาย</li>
            <li>ติดตามผลเป็นกราฟ &amp; รายงาน แชร์ให้แพทย์/นักกายภาพ</li>
            <li>Gamification และการแจ้งเตือน เพิ่มแรงจูงใจทำต่อเนื่อง</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">Market Insights (Thailand)</h3>
          <p className="text-gray-700 max-w-3xl">
          ประเทศไทยเข้าสู่สังคมสูงวัยอย่างสมบูรณ์ ผู้ใช้สมาร์ทโฟนเพิ่มขึ้นต่อเนื่อง ทำให้การเข้าถึง Digital Health
          เป็นไปได้จริงในวงกว้าง
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1.5">
            <li>ผู้สูงอายุ ~13M+ (สัดส่วนเกือบ 20%)</li>
            <li>กลุ่มเสี่ยงหกล้ม/ข้อเสื่อมจำนวนมาก ต้องการเฝ้าระวังและฟื้นฟูต่อเนื่อง</li>
            <li>ผู้ใช้สมาร์ทโฟน/อินเทอร์เน็ตในกลุ่มสูงอายุเพิ่มขึ้นทุกปี</li>
            <li>โรงพยาบาล/ประกันมองหาโซลูชันลดต้นทุนการรักษาซ้ำ</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
