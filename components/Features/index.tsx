"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== ویژگی‌ها شروع ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- عنوان بخش شروع --> */}
          <SectionHeader
            headerInfo={{
              title: "ویژگی‌های صفحه فرود",
              subtitle: "ویژگی‌های اصلی",
              description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.`,
            }}
          />
          {/* <!-- عنوان بخش پایان --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- آیتم ویژگی‌ها شروع --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- آیتم ویژگی‌ها پایان --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== ویژگی‌ها پایان ===== --> */}
    </>
  );
};

export default Feature;
