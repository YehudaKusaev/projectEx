import React from "react";
import "./dropdownList.css";
import { useState } from "react";
import { FlagIcon } from "@heroicons/react/24/outline";

function DropListLang({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["русский", "english", "עברית"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span>
        {" "}
       
        <button
          type="button"
          className="relative p-1 text-gray-200 bg-blue-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5" />
          
          <FlagIcon className="w-6 h-6" aria-hidden="true" />
        </button>
      </span>
       
      </div>
      {isActive && (
        <div className="z-50 bg-yellow-100 rounded-sm dropdown-content">
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="m-1 text-center bg-blue-200 rounded dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropListLang;

