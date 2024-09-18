import Image from "next/image";
import Burger from "./Burger.jsx";

export const arrey = [
  {
    id: 1,
    img: "/photo.png",
    price: 689,
    title: "Мясная бомба",
    weight: "520г"
  },
  {
    id: 2,
    img: "/photo.png",
    price: 550,
    title: "Супер сырный",
    weight: "512г"
  },
  {
    id: 3,
    img: "/photo.png",
    price: 639,
    title: "Сытный",
    weight: "580г"
  },
  {
    id: 4,
    img: "/photo.png",
    price: 480,
    title: "Тяжелый удар",
    weight: "470г"
  },
  {
    id: 5,
    img: "/photo.png",
    price: 450,
    title: "Вечная классика",
    weight: "450г"
  },
  {
    id: 6,
    img: "/photo.png",
    price: 560,
    title: "Итальянский",
    weight: "510г"
  }
]

export default function Home() {
  return (
    <>
      <div className=" px-[30px] bg-[#F2F2F3] w-[100%]">
        <h1 className="text-[40px] text-left mb-[20px]">Бургеры</h1>

        <div className="grid grid-cols-3 gap-[30px] pb-[100px]">
          {
            arrey.map(data => ( 
              <Burger key={data.id} data={ data } />
            ))
          }
        </div>
      </div>
    </>
  );
}
