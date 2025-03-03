import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Docs page for Solid Pro"
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>به مستندات استارتاپ خوش آمدید</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                این سند به عنوان یک الگوی ساده برای نمایش یک طرح 
                و قالب نمونه عمل می کند. این فقط برای اهداف نمایشی ایجاد شده است 
                و برای هیچ گونه استفاده رسمی در نظر گرفته نشده است.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  لطفا دنبال کنید:{" "}
                  <b>
                    <a href="https://zil.ink/seyedahmaddev">
                    zil.ink/seyedahmaddev
                    </a>
                  </b>{" "}
                  تا روشهای ارتباط با طراح و سفارش طراحی سایت را
                  پیدا کنید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
