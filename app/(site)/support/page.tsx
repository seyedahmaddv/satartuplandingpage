import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه پشتیبانی - طراحی سایت با نکست جی اس",

  // other metadata
  description: "این یک صفحه پشتیبانی برای وب سایت نمونه است"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
