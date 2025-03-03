import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "خانه",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "ویژگیها",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "بلاگ",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "مستندات",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "صفحات",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "وبلاگ شبکه ای",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "ورود",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "ثبت نام",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "مدارک",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "پشتیبانی",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "پشتیبانی",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
