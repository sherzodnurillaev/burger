import React from 'react';
import { arrey } from '../page';
const SideBar = () => {
    const basket = arrey.slice(0, 3)
    
  return (
    <footer className='w-[450px] pb-[30px] bg-[#F2F2F3]'>
      <div className="w-[300px] rounded-[18px] px-[16px] mt-[20px] py-[26px] mx-auto bg-[#fff] h-[400px] sticky top-[30px]">
            <div className="flex items-center justify-between mb-[12px]">
                <h1 className='text-[24px] '>Корзина</h1>
                <span className='px-[16px] py-[2px] text-[12px] bg-[#F2F2F3] rounded-[6px]'>4</span>
            </div>
            <hr />

            <div className="">
                    {
                        basket.map((data) => {
                            data.count = 1
                            
                            return (
                                
                                <div className="mt-[14px] ">
                                    <div className="flex gap-[6px] relative ">
                                        <img src={data.img} alt="" className='w-[70px]' />
                                        <div className="">
                                            <h2 className='text-[12px] font-light'>{data.title}</h2>
                                            <p className='text-[#B1B1B1] text-[12px] '>{data.weight}</p>
                                            <span className='font-light text-[12px]'>{data.price}₽</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-[#F2F2F3] absolute right-0 top-[10px] rounded-[12px]  w-[80px] px-[12px] h-[40px]">
                                            <p className='cursor-pointer'>+</p>
                                            <span>{data.count}</span>
                                            <p className='cursor-pointer'>-</p>
                                        </div>
                                    </div>
                                    <hr className='mt-[14px]' />

                                </div>
                            )
                        })
                    }
                    
            </div>
      </div>
    </footer>
  );
};

export default SideBar;