import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-4 text-3xl font-semibold">Блог</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Пост 1 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Изображение поста"
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">Заголовок поста 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              venenatis neque eu faucibus.
            </p>
            <Link to={''} className="mt-2 text-blue-500 hover:underline">
              Читать далее
            </Link>
          </div>
        </div>

        {/* Пост 2 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Изображение поста"
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">Заголовок поста 2</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              venenatis neque eu faucibus.
            </p>
            <Link to={''} className="mt-2 text-blue-500 hover:underline">
              Читать далее
            </Link>
          </div>
        </div>

        {/* Пост 3 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Изображение поста"
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">Заголовок поста 3</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              venenatis neque eu faucibus.
            </p>
            <Link to={''} className="mt-2 text-blue-500 hover:underline">
              Читать далее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
