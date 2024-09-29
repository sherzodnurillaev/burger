"use client";
import Link from "next/link";
import { useState } from "react";

const Bar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Хранит индекс наведеной кнопки

    const buttons = [
        { id: "1", label: "Menu", icon: "/admin/menu.png", hoverIcon: "/admin/menuE.png" },
        { id: "2", label: "Order", icon: "/admin/order.png", hoverIcon: "/admin/orderE.png" },
        { id: "3", label: "User", icon: "/admin/user.png", hoverIcon: "/admin/userE.png" },
        { id: "4", label: "Cart", icon: "/admin/cart.png", hoverIcon: "/admin/cartE.png" },
        { id: "5", label: "Categories", icon: "/admin/categories.png", hoverIcon: "/admin/categoriesE.png" },
    ];

    return (
        <div className="Bar h-[100vh] bg-[#FF7020] w-[300px] pl-[30px] pt-[50px]">
            <div className="w-[200px] h-[30px] cursor-pointer flex flex-col gap-[20px]">
                {buttons.map((button, index) => (
                    <Link key={button.id} href={`?label=${button.label}`}>
                    <button
                        key={index}
                        className="btn flex items-center gap-[10px] text-[#fff] text-[18px] w-[180px] py-[10px] px-[20px] rounded-[8px]"
                        onMouseEnter={() => setHoveredIndex(index)} // Устанавливаем индекс наведеной кнопки
                        onMouseLeave={() => setHoveredIndex(null)} // Сбрасываем индекс
                    >
                        <img
                            src={hoveredIndex === index ? button.hoverIcon : button.icon} // Меняем иконку в зависимости от состояния
                            alt={button.label}
                            className="w-[24px]"
                        />
                        {button.label}
                    </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Bar;
