import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

export default function InlineDropdown({ onCategorySelect }) {
  const [selectedItem, setSelectedItem] = useState('ВО ВСЁМ');

  const handleItemClick = (itemLabel) => {
    setSelectedItem(itemLabel);
    onCategorySelect(itemLabel); // Вызываем функцию обратного вызова и передаем выбранную категорию
  };

  const initialSelectedItem = 'ВО ВСЁМ';
  const handleResetClick = () => {
    setSelectedItem(initialSelectedItem);
   
    onCategorySelect(null); // Сбрасываем выбранную категорию
  };

  return (
    <Dropdown
      inline
      label={selectedItem}
      onClick={handleResetClick}
      
    >
      <Dropdown.Item onClick={() => handleItemClick('Одежда')}>
        <b>Одежда</b>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleItemClick('Посуда')}>
        <b>Посуда</b>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleItemClick('Мебель')}>
        <b>Мебель</b>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleItemClick('Электро-товары')}>
        <b className='text-xs truncate'>Электро-товары</b>
      </Dropdown.Item>
    </Dropdown>
  )
}

