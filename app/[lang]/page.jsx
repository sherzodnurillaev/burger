import { getDictionary } from './dictionaries'
import Burger from "@/components/Burger";

export const arrey = [
  {
    id: 1,
    img: "/photo.png",
    price: 689, 
    title: "Мясная бомба",
    weight: "520г",
	category:"burger"
  },
  {
    id: 2,
    img: "/photo.png",
    price: 550,
    title: "Супер сырный",
    weight: "512г",
	category:"shaurma"
  },
  {
    id: 3,
    img: "/photo.png",
    price: 639,
    title: "Сытный",
    weight: "580г",
  },
  {
    id: 4,
    img: "/photo.png",
    price: 480,
    title: "Тяжелый удар",
    weight: "470г",
  },
  {
    id: 5,
    img: "/photo.png",
    price: 450,
    title: "Вечная классика",
    weight: "450г",
  },
  {
    id: 6,
    img: "/photo.png",
    price: 560,
    title: "Итальянский",
    weight: "510г",
  },
];

export default async function Home({params, searchParams}) {
  const {lang} = params
  console.log(lang);

	const dfilteData = arrey.filter(item => {
		if (item.category === searchParams.category) {
			return item
		}
	})

  return (
    <>
      <div className=" px-[30px] bg-[#F2F2F3] w-[100%]">
        <h1 className="text-[40px] text-left mb-[20px]">{lang == "ru" ? "Бургерс" : "Burgers"}</h1>

        <div className="grid grid-cols-3 gap-[30px] pb-[100px]">
          {dfilteData.map((item) => (
            <Burger key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
