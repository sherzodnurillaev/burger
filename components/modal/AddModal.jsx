import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ModalForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [act, setAct] = useState(true);

  async function onSubmit(data) {
    
    console.log(data);
    setAct(!act);

    const res = await fetch('http://localhost:3000/api/menu', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })

    console.log(res);

    const wowo = res.json()

    console.log(wowo);
    
    
  }

  if (!act) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl mb-4 text-center">Заполните поле</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Поля для title */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title (RU)</label>
              <input
                {...register('title.ru', { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.title?.ru ? 'border-red-500' : ''}`}
                placeholder="RU"
              />
              {errors.title?.ru && <span className="text-red-500 text-sm">Это поле обязательно</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title (EN)</label>
              <input
                {...register('title.en', { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.title?.en ? 'border-red-500' : ''}`}
                placeholder="EN"
              />
              {errors.title?.en && <span className="text-red-500 text-sm">Это поле обязательно</span>}
            </div>
          </div>

          {/* Поля для description */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Description (RU)</label>
              <input
                {...register('description.ru', { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.description?.ru ? 'border-red-500' : ''}`}
                placeholder="RU"
              />
              {errors.description?.ru && <span className="text-red-500 text-sm">Это поле обязательно</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description (EN)</label>
              <input
                {...register('description.en', { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.description?.en ? 'border-red-500' : ''}`}
                placeholder="EN"
              />
              {errors.description?.en && <span className="text-red-500 text-sm">Это поле обязательно</span>}
            </div>
          </div>

          {/* Поля для остальных данных */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              {...register('price', { required: true })}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.price ? 'border-red-500' : ''}`}
              type="number"
            />
            {errors.price && <span className="text-red-500 text-sm">Это поле обязательно</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Width</label>
            <input
              {...register('width', { required: true })}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.width ? 'border-red-500' : ''}`}
            />
            {errors.width && <span className="text-red-500 text-sm">Это поле обязательно</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              {...register('category', { required: true })}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.category ? 'border-red-500' : ''}`}
            />
            {errors.category && <span className="text-red-500 text-sm">Это поле обязательно</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Images (comma-separated)</label>
            <input
              {...register('images')}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="image1.jpg,image2.jpg"
            />
          </div>

          {/* Поля для composition */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Composition (RU)</label>
              <input
                {...register('composition.ru', { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.composition?.ru ? 'border-red-500' : ''}`}
              />
              {errors.composition?.ru && <span className="text-red-500 text-sm">Это поле обязательно</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Composition (EN)</label>
              <input
                {...register('composition.en', { required: true })}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${errors.composition?.en ? 'border-red-500' : ''}`}
              />
              {errors.composition?.en && <span className="text-red-500 text-sm">Это поле обязательно</span>}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Сохранить
            </button>
            <button
              type="button"
              onClick={() => setAct(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
