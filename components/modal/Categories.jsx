"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Categories = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [act, setAct] = useState(true);

    async function onSubmit(data) {
        // Форматируем данные для title
        const formattedData = {
            ...data,
            title: {
                ru: data.titleRu,
                en: data.titleEn,
            }
        };

        console.log(formattedData);
        setAct(false);

        const res = await fetch('http://localhost:3000/api/categories', {
            method: "POST",
            body: JSON.stringify(formattedData), // Используйте formattedData
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await res.json(); // Исправлено на result
        console.log(result);
    }

    if (!act) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-xl mb-4">Добавить данные</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2">Изображение URL:</label>
                        <input
                            type="text"
                            {...register('img', { required: 'Обязательно' })}
                            className={`border p-2 w-full ${errors.img ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.img && <p className="text-red-500">{errors.img.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Title (RU):</label>
                        <input
                            type="text"
                            {...register('titleRu', { required: 'Обязательно' })}
                            className={`border p-2 w-full ${errors.titleRu ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.titleRu && <p className="text-red-500">{errors.titleRu.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Title (EN):</label>
                        <input
                            type="text"
                            {...register('titleEn', { required: 'Обязательно' })}
                            className={`border p-2 w-full ${errors.titleEn ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.titleEn && <p className="text-red-500">{errors.titleEn.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Категории:</label>
                        <input
                            type="text"
                            {...register('categories', { required: 'Обязательно' })}
                            className={`border p-2 w-full ${errors.categories ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.categories && <p className="text-red-500">{errors.categories.message}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={() => setAct(false)} className="mr-2 w-[100%] bg-gray-300 px-4 py-2 rounded">Закрыть</button>
                        <button type="submit" className="bg-blue-500 w-[100%] text-white px-4 py-2 rounded">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Categories;



// const App = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleModal = () => setIsOpen(!isOpen);

//     return (
//         <div className="p-4">
//             <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded">Открыть модалку</button>
//             <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//         </div>
//     );
// };

// export default Order;
