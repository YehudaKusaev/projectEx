"use client";

import { Carousel } from "flowbite-react";

export default function SlideAsAnything() {
  return (
    <Carousel className="h-full ">
      <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
          src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
          src="https://images.unsplash.com/photo-1683803142077-e6afa3cb00cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
          src="https://images.unsplash.com/photo-1558769132-92e717d613cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
    </Carousel>
  );
}
