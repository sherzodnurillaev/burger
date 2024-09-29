"use client"
import ModalForm from "../../../components/modal/AddModal";
import Custom from "../../../components/Custom";
import React, { useState } from "react";
import Categories from "../../../components/modal/Categories";



const admin = ({params, searchParams: {label}}) => {
    const [act, setAct] = useState(false)
    
    return (
        <>
            { label &&
            (<div className="flex items-center justify-between px-[50px] pt-[20px] w-[100%] h-[70px]">
                <h1 className="text-[36px] text-[#fff] font-bold">{label ? label : ""}</h1>
                
                <button className="add bg-[#FF7020] text-[#fff] px-[15px] py-[5px] rounded-[4px] mt-[10px]"
                onClick={() => setAct(!act)}>Добавить {label}</button>
            </div>)
            }


            

            {act && label == "Menu" ? <ModalForm /> : ""}
            {act && label == "Categories" ? <Categories /> : ""}
            {!label && <Custom />}
        </>
    )
}

export default admin
