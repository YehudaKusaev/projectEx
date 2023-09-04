import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./HeaderTW.css";
import ItemsOnSale from "../packSale/ItemsOnSale";
import CountOnSale from "../packSale/CountOnSale";
import { useCart } from "../../context/useCart";
// import ItemTable from "../packSale/ItemTable";

const navigation = [
  { name: "Главная", href: "/", current: false },
  { name: "Каталог", href: "/catalog", current: false },

  { name: "Контакты", href: "/contacts", current: false },
  { name: "О нас", href: "/about", current: false },
  { name: "Блог", href: "/blog", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderTW(zero) {
  const [navItems, setNavItems] = useState(navigation);

  const { cartItems } = useCart();

  const [cartOpen, setCartOpen] = useState(false); // Состояние для открытия/закрытия корзины

  const handleNavItemClick = (index) => {
    const updatedNavItems = navItems.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavItems(updatedNavItems);
  };
  console.log(navItems);
  console.log(cartItems);
  return (
    <Disclosure as="nav" className="bg-green-100">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="w-auto h-8"
                    src="./Social-ico/weather_simplicity_cloudscape_sun_cloud_icon_251470.ico"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.name}
                        to={{pathname: item.href,
                          // state: { searchResults: filteredProducts }
                        }}
                        onClick={() => handleNavItemClick(index)}
                        className={classNames(
                          item.current
                            ? "bg-purple-700 text-green-50 shadow-sm"
                            : "text-fuchsia-800 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link >
                  <span className="flex bg-green-400"></span>
                  <button
                   onClick={() => setCartOpen(!cartOpen)} // Изменяем состояние cartOpen по клику
                    type="button"
                    className=" relative p-1 mr-1.5 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <CountOnSale  cartItems={cartItems}/>
                    
                    <span className="absolute -inset-1.5" />
                    <span className="w-6 h-6 bg-green-400 sr-only">
                      View notifications
                    </span>
                    <ShoppingCartIcon
                      className="flex w-6 h-6"
                      aria-hidden="true"
                    />
                  </button>
                </Link>
                
                <button
                  type="button"
                  className="relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                {cartOpen && <ItemsOnSale cartOpen={cartOpen} />} 
                {/* Profile dropdown  */}
                
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex text-sm bg-yellow-100 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only ">Open user menu</span>
                      {/* <img
                        className="w-8 h-8 rounded-full"
                        src=""
                        alt="P"
                      /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Профиль
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Войти
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}