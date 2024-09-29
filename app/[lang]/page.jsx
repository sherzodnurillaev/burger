import Burger from "../../components/Burger";
import CustomPage from '../../components/CustomPage';

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

  const res = await fetch('http://localhost:3000/api/menu', {cache: "no-cache"})

  
  const {data} = await res.json()
  
  // console.log(data);

  

  const dfilteData = data.filter(item => {
    const itemCategory = item.category ? item.category.toLowerCase() : '';
    const searchCategory = searchParams.category ? searchParams.category.toLowerCase() : '';

    // console.log(item.category);
    // console.log(searchParams.category + 'frfrfr');
    
    

    return itemCategory === searchCategory;
});

console.log(dfilteData[0]);


  return (
    <>
      <div className="px-[30px] bg-[#F2F2F3] w-[100%]">
        <h1 className="text-[40px] text-left mb-[20px]">
          {dfilteData.length > 0 ? lang === "ru" ? "Бургерс" : "Burgers" : ""}
        </h1>

        <div className="grid grid-cols-3 gap-[30px] pb-[100px]">
          {dfilteData.length > 0 ? (
            dfilteData.map(item => (
              <Burger key={item.id} menu={item} lang={lang} />
            ))
          ) : (
            <CustomPage />
          )}
        </div>
      </div>
    </>
  );
}
