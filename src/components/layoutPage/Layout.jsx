import React from 'react'
import {  Outlet } from 'react-router-dom'

import HeaderTW from '../Headers/HeaderTW'
import SearchLine from '../search/SearchLine'
import FooterWithSocialMediaIcons from '../FooterM/FooterWithSocialMediaIcons'

const Layout = () => {
  return (
    <>
    

      <HeaderTW/>
      <hr className="h-1 bg-red-600 hrHome hr-home-first" />
      <SearchLine />
      <hr className="h-1 bg-red-600 hrHome hr-home-first" />
<main className='containerMain'>
  <Outlet/>
  
</main>
      
<div className='h-6'></div>
    <FooterWithSocialMediaIcons/>
       </>
  )
}

export  {Layout}