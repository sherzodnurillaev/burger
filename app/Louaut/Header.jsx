// components/Header.js
import React from 'react';

const arrey = [
    {
        id: "1",
        img: "/burger/Бургеры.png",
        title: "Бургеры"
    },
    {
        id: "2",
        img: "/burger/Закуски.png",
        title: "Закуски"
    },
    {
        id: "3",
        img: "/burger/Хот-доги.png",
        title: "Хот-доги"
    },
    {
        id: "4",
        img: "/burger/Комбо.png",
        title: "Комбо"
    },
    {
        id: "5",
        img: "/burger/Шаурма.png",
        title: "Шаурма"
    },
    {
        id: "6",
        img: "/burger/Пицца.png",
        title: "Пицца"
    },
    {
        id: "7",
        img: "/burger/Вок.png",
        title: "Вок"
    },
    {
        id: "8",
        img: "/burger/Десерты.png",
        title: "Десерты"
    },
    {
        id: "9",
        img: "/burger/Соусы.png",
        title: "Соусы"
    }
]

const Header = () => {
  return (
    <header className='bg-[#F2F2F3]'>
      <nav className='relative'>
        <div className="w-[100%] h-[400px] bg-[#FFAB08] rounded-b-[50%]">
            <img src="/Loyaut/logo.png" alt="" className='w-[150px] mx-auto pt-[24px]'/>
            <div className="w-[600px] mx-auto mt-[24px] flex items-center">
                <img src="/Loyaut/pic.png" alt="" className='w-[250px]' />
                <div className="leading-[45px]">
                    <h1 className='text-[40px] font-bold text-[#fff]'>Только самые</h1>
                    <h2 className='text-[40px] font-bold text-[#FF5C00] mb-[10px]'>сочные бургеры!</h2>

                    <span className='text-[14px] text-[#fff]'>Бесплатная доставка от 599₽</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-[24px] w-[1200px] mx-auto mt-[40px] cursor-pointer pb-[50px]">
            {
                arrey.map(data => {
                    return (
                    <div className="flex items-center gap-[8px] bg-[#fff] px-[14px] py-[8px] rounded-[50px]">
                        <img src={data.img} alt="" className='w-[24px]' />
                        <p className='text-[14px]'>{data.title}</p>
                    </div>
                    )
                })
            }
        </div>
      </nav>
    </header>
  );
};

export default Header;
