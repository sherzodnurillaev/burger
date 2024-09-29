'use client';

import Link from "next/link";

// import { arrey } from "./page";

export const arrey = [
    {
        id: "1",
        img: "/burger/Бургеры.png",
        title: { ru: "Бургеры", en: "Burgers" },
        categoryes:"burgers"
    },
    {
        id: "2",
        img: "/burger/Закуски.png",
        title: { ru: "Закуски", en: "Appetizers" }
    },
    {
        id: "3",
        img: "/burger/Хот-доги.png",
        title: { ru: "Хот-доги", en: "Hot-dogs" }
    },
    {
        id: "4",
        img: "/burger/Комбо.png",
        title: { ru: "Комбо", en: "Combo" }
    },
    {
        id: "5",
        img: "/burger/Шаурма.png",
        title: { ru: "Шаурма", en: "Shawarma" }
    },
    {
        id: "6",
        img: "/burger/Пицца.png",
        title: { ru: "Пицца", en: "Pizza" }
    },
    {
        id: "7",
        img: "/burger/Вок.png",
        title: { ru: "Вок", en: "Wok" }
    },
    {
        id: "8",
        img: "/burger/Десерты.png",
        title: { ru: "Десерты", en: "Desserts" }
    },
    {
        id: "9",
        img: "/burger/Соусы.png",
        title: { ru: "Соусы", en: "Sauces" }
    }
]

const Menu = ({ translate, data, lang }) => {
  

  
  
  return (
    <div className="bg-[#F2F2F3]">
      <div className="flex items-center gap-[24px] w-[1200px] mx-auto pt-[40px] pb-[50px]">
      {arrey.map((item) => {
        return (
          <Link
          key={item.id}
            href={`/?category=${item.categoryes}`}
            className="flex items-center gap-[8px] bg-[#fff] px-[14px] py-[8px] rounded-[50px] cursor-pointer"
          >
            <img src={item.img} alt="" className="w-[24px]" />
            <p className="text-[14px]">{item.title[lang]}</p>
          </Link>
        );
      })} 
      </div>
    </div>
  );
};

export default Menu;
