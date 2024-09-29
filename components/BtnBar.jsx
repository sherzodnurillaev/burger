"use client"

import { useState } from "react"
import Modal from "./Zakaz"

const BtnBar = () => {
    const [mod, setMod] = useState(false)

    return (
        <>
                <button className='bg-[#FF7020] rounded-[12px] text-[#fff] text-[18px] mt-[20px] w-[100%] h-[40px] ' onClick={() => {
                    setMod(!mod)
                }}>Оформить заказ</button>

                {mod && <Modal mod={mod} onClose={() => setMod(false)} />}
        </>
    )
}

export default BtnBar
