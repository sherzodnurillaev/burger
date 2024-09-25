import React from 'react';

const Footer = ({ translate }) => {
  console.log(translate);
  
  return (
    <footer className='bg-[#fff]'>
      <div className="w-[1200px] mx-auto py-[50px] flex gap-[136px]">
        <div className="mr-[100px]">
            <img src="/Loyaut/Footer/logoFooter.png" alt="" className='w-[300px] mb-[50px]' />
            <span className='text-[12px] font-light'>© YouMeal, 2022</span>
            <p className='text-[12px] font-light'>Design: Anastasia Ilina</p>
        </div>

        <div className="">
            <p className='text-[24px] font-light'>{translate.footer.callNumber}</p>
            <div className="flex items-center mt-[25px]">
                <img src="/Loyaut/Footer/Call.png" alt="" />
                <span className='font-light'>+7(930)833-38-11</span>
            </div>
        </div>

        <div className="">
            <h2 className='text-[24px] font-light'>{translate.footer.site}</h2>
            <div className="flex gap-[16px] mt-[22px]">
                <a href="#">
                    <img src="/Loyaut/Footer/vk.png" alt="vk"  className='w-[36px]'/>
                </a>
                <a href="#">
                    <img src="/Loyaut/Footer/telegram.png" alt="telegram"  className='w-[36px]'/>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;