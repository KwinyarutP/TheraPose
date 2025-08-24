import React from "react";
import { Card, SectionTitle } from "../assets/ui";

export default function TargetUsers() {
  const groups = [
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
      <SectionTitle>Target Users</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {groups.map((g, i) => (
          <Card key={i} className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold">{g.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{g.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
