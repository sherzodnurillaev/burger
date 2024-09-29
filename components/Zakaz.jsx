import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({mod, onClose}) => {
  const { register, handleSubmit } = useForm();
  const [isPickup, setIsPickup] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePickupChange = () => {
    setIsPickup((prev) => !prev);
  };

  if(!mod) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex">

      <div className="w-[300px]  flex items-center justify-center bg-[#FFAB08] rounded-l-[12px]">
        <img src="/bublik.png" alt="" />
      </div>

      <div className="bg-white p-6 rounded-r-[12px] shadow-lg w-96">
        <div className="relative">
            <h2 className="text-xl font-semibold mb-4">Доставка</h2>
            <button className="bg-gray-500 px-[8px] rounded-[12px] text-[#fff] pb-[3px] absolute top-[0] right-0"
            onClick={onClose}>x</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">
              Имя:
              <input
                id="name"
                {...register('name')}
                placeholder='Alex'
                required
                className="border rounded-md p-2 w-full"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="phone">
              Телефон:
              <input
                id="phone"
                {...register('phone')}
                placeholder='+998(**)***'
                required
                className="border rounded-md p-2 w-full"
              />
            </label>
          </div>
          <div className="mb-4">
              {!isPickup ?
            (<label className="block mb-1" htmlFor="address">
                Адрес:
                <input
                  id="address"
                  {...register('address')}
                  placeholder='Urgut**'
                  required
                  className="border rounded-md p-2 w-full"
                />
            </label>) : (
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.239248106704!2d66.95354617549725!3d39.644329871574186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19bc28e251a3%3A0x6ff24c4d9b60d822!2zRVZPUyDQkdGD0LvRjNCy0LDRgA!5e0!3m2!1sru!2s!4v1727468163498!5m2!1sru!2s" width="100%" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            )
              }
          </div>
          <div className="mb-4 flex items-center gap-1 hover:text-[#FF7020]">
            <input
              type="checkbox"
              {...register('pickup')}
              className="mr cursor-pointer"
              onChange={handlePickupChange}
            />
            <label className=''>Самовывоз</label>
          </div>
          <button
            type="submit"
            className="bg-[#FF7020] text-white px-4 py-2 w-[100%] rounded-md hover:bg-[#FFAB08]"
          >
            Оформить
          </button>
        </form>
        </div>
      </div>
    </div>

  );
};

export default Modal;
