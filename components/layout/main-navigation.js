import Link from 'next/link'
import Logo from './logo'
import React, { useState } from 'react'

function MainNavigation() {
    
    const [ openMenu, setIsOpenMenu]= useState(false)

    const mobileMenuHandler = () => {
    if(openMenu === false) {
       setIsOpenMenu(true)
      } else {
       setIsOpenMenu(false)
      }
     } 


    const MobileButtonMenu = (
      <div>
        <nav class=' text-black bg-grey-50 border-2 '  >
          <div class='flex justify-center '>
                    <ul class='flex-col text-sm text-center text-black'>
                    <li class=' m-2'>
                        <Link href='/about'>About us</Link>
                    </li>
                    <li class='m-2' >
                        <Link href='services'>Services</Link>
                    </li>
                    <li class='m-2'>
                        <Link href='/clients'>Our Clients</Link>
                    </li>
                    <li class='m-2'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
              </div>
        </nav>
      </div>
      )

      const  MobileButton = (
        <div class='flex justify-end pt-4 md:hidden'>
          <button onClick={mobileMenuHandler} >
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"stroke-width="2"d="M4 6h16M4 12h16M4 18h16" />
           </svg>
         </button>
        </div>
      )


    return (
    <header class='bg-white text-black border-red-500 border-2 h-full '>
        <div class='mx-8'>
         {MobileButton}
         
        <div class='w-1/3 '>
         <Link href='/' >
          <a > 
          <Logo/>
          </a>
         </Link>
         </div>
         <div class=' text-sm' >
             <p>Lorem ipsum dolor sit amet consectetur.</p>
         </div>
         {openMenu && MobileButtonMenu}
         </div>
        <nav class=' hidden border-2 border-green-500 w-1/3  md:flex md:item-left' >
                <ul class=' border-2 border-pink-500 flex '>
                    <li class=' m-2'>
                        <Link href='/about'>About Us</Link>
                    </li>
                    <li class='m-2' >
                        <Link href='services'>Services</Link>
                    </li>
                    <li class='m-2'>
                        <Link href='/clients'>Our Clients</Link>
                    </li>
                    <li class='m-2'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
          </nav>
          
        </header>
    )
}

export default MainNavigation