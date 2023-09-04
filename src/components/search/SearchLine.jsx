import React, { useState } from "react";
import DropListLang from "../lang/DropListLang";

import { FaBookOpen } from 'react-icons/fa';
import'flowbite-react'
import "./searchLine.css"
import SlideAsAnything from "../carouselApp/SlideAsAnything";
import InlineDropdown from "../../usedComponents/InlineDropdown";

import { itemCatalog } from "../NowProductUse/catalog";
import { useNavigate } from "react-router-dom";

function SearchLine() {


  const [selected, setSelected] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  
  // Добавим состояние для хранения выбранной категории
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const navigate = useNavigate();

  console.log(searchButtonClicked)
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
console.log(searchTerm)
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory)

  // Пример фильтрации продуктов в компоненте SlideAsAnything
  const filteredProducts = itemCatalog.filter((product) => {
    console.log(itemCatalog)
    const includesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.categorate === selectedCategory : true;
    return includesSearchTerm && matchesCategory;
  });
  
  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    
    navigate('/catalog', {
      
      state: {
        searchResults: filteredProducts,
        searchButtonClicked: true,
      },
    });
  }

  console.log(filteredProducts)

  return (
    <div className="grid-cols-2 grid-rows-1 search-and-use ">
          <div className="logo-use ">
              <img
               src="./images/Orange And Green Modern Online Shop Logo.png"
                alt="logopush"
               />
             </div>
            <div className="relative flex flex-col justify-between w-full two-content ">
             <div className="flex justify-around search-lang-hello ">
                   <div className="flex content-center justify-between w-8/12 justify-items-center search-use">
                    <span className="absolute flex items-center flex-1 top-4 left-8"><FaBookOpen/></span>
                           <span className="flex items-center bg-indigo-200 span-search justify-evenly h-9 w-96">
                           <label className="flex italic font-medium tracking-wide uppercase" htmlFor="search"> что искать</label>
                        <input type="search" 
                        name="search"
                        placeholder="Поиск продуктов"
                        value={searchTerm}
                        onChange={handleSearch}
                          />
                        <b><InlineDropdown
                         selected={selected}
                         setSelected={setSelected}
                         onCategorySelect={handleCategorySelect}
                        /></b>
                        
                        </span>
                           <button type="button" 
                           className="bg-yellow-400 btn-search w-60 rounded-r-xl"
                           onClick={handleSearchButtonClick}
                           >ПОИСК</button>
                  </div>
                   <div className="flex flex-wrap items-baseline content-center justify-around w-3/12 gap-2 lang-and-hi">
                      <div className="lang-use">
                          <DropListLang selected={selected} setSelected={setSelected} />
                      </div>
                        <div className="name-hello">
                           <h2>
                             Привет: <span>Гость</span>
                              </h2>
                       </div>
                   </div>
              </div>
          <div className="h-full slider-use">

            <SlideAsAnything/>



          </div>
      </div>
    </div>
  );
}

export default SearchLine;


// 
    // <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    //      {/* <!-- Item 1 --> */}
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <img src="./images/angelo-abear-IO8XRikqJU4-unsplash.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 2 --> */}
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <img src="./images/vladimir-gladkov-Y7i_LU1L-Jo-unsplash.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 3 --> */}
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <img src="./images/angelo-abear-IO8XRikqJU4-unsplash.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 4 --> */}
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <img src="./images/angelo-abear-IO8XRikqJU4-unsplash.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    //     {/* <!-- Item 5 --> */}
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //         <img src="./images/vladimir-gladkov-Y7i_LU1L-Jo-unsplash.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //     </div>
    // </div>
    // {/* <!-- Slider indicators --> */}
    // <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    //     <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    // </div>
    // {/* <!-- Slider controls --> */}
    // <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //         <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeLidth="2" d="M5 1 1 5l4 4"/>
    //         </svg>
    //         <span className="sr-only">Previous</span>
    //     </span>
    // </button>
    // <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //         <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
    //         </svg>
    //         <span className="sr-only">Next</span>
    //     </span>
    // </button>
// </div> */}