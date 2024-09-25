

const Burger = ({ data }) => {
    return (
            <div className="bg-[#fff] rounded-[18px] w-[280px]">
                <div className="px-[12px] mx-auto mt-[12px]">
                  <img src={data.img} alt="" className="w-max-[270px] mb-[16px]" />
                  <span className="text-[20px] font-light">{data.price}₽</span>
                  <p className="font-light mb-[20px]">{data.title}</p>
                  <span className="text-[#B1B1B1] font-light text-[14px]">{data.weight}</span> <br />
                  <button className="w-[100%] bg-[#F2F2F3] font-light mb-[12px] py-[10px] rounded-[12px] mt-[8px]">Добавить</button>
                </div>
            </div>
    )
}

export default Burger
