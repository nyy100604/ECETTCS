"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const systemFunctionContent = [
  {
    title: "區塊鏈技術01",
    subject: "透明公開：",
    content: "所有幼兒STEM教師證書資訊都是公開可查的，任何人都可以驗證。",
  },
  {
    title: "區塊鏈技術02",
    subject: "安全可靠：",
    content:
      "幼兒STEM教師證書一旦記錄在區塊鏈上，就無法被篡改或刪除，確保其真實性。",
  },
  {
    title: "區塊鏈技術03",
    subject: "安全可靠：",
    content:
      "幼兒STEM教師證書一旦記錄在區塊鏈上，就無法被篡改或刪除，確保其真實性。",
  },
];

const SystemFunction = () => {
  return (
    <section>
      <Swiper>
        {systemFunctionContent.map((item, index) => {
          return <SwiperSlide key={index}>{item.title}</SwiperSlide>;
        })}
      </Swiper>
    </section>
  );
};

export default SystemFunction;
