import React from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import Delimiter from "../../usedComponents/delimiters/Delimiter";
// import Layout from "./Layout"; // Подразумевается, что у вас есть компонент Layout для общей структуры страницы

const Contacts = () => {

  
  return (
    <div>
      <Delimiter />
      <div className="container p-8 mx-auto">
        <h1 className="mb-4 text-3xl font-semibold">Контакты</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Свяжитесь с нами</h2>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2" />
              <span>+972 050-934-27-73</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              <a href="yehuda91@inter.net.il">yehuda91@inter.net.il</a>
            </div>
            <div className="flex items-center">
              <FaMapMarker className="mr-2" />
              <span>Habatsir 21, Ofaqim</span>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Отправьте нам сообщение</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
