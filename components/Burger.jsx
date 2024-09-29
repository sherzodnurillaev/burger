"use client"

const Burger = ({ menu, lang }) => {
  
    return (
            <div className="bg-[#fff] rounded-[18px] w-[280px]">
                <div className="px-[12px] mx-auto mt-[12px]">
                  <div className="w-[]270px h-[200px] rounded-[12px] hover:rounded-b-[4px] overflow-hidden">
                    <img src={menu.images == [] ? menu.images[0] : menu.images} alt="menu" className="w-max-[270px] mb-[16px]" />
                  </div>
                  <span className="text-[20px] font-light">{menu.price}₽</span>
                  <p className="font-light mb-[20px]">{menu.title[lang]}</p>
                  <span className="text-[#B1B1B1] font-light text-[14px]">{menu.width}</span> <br />
                  <button className="w-[100%] bg-[#F2F2F3] font-light mb-[12px] py-[10px] rounded-[12px] mt-[8px]"
                  onClick={() => {
                    console.log(menu);
                    
                  }}>Добавить</button>
                </div>
            </div>
    )
}

export default Burger
