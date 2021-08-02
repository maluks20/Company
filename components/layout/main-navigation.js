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
    <section class='bg-gray-100  '>
      <div class='w-full mx-8'>
        <nav class=' text-black  w-full '  >
          <div class='flex w-full '>
                    <ul class='flex-col font-semibold  text-black text-xs w-full'>
                    <li class='m-2'>
                        <Link href='/about'>
                         <p class=' w-full my-4 hover:opacity-25'>About</p>
                        </Link>
                    </li> <hr />
                    <li class='m-2' >
                        <Link href='/services'>
                             <p class='hover:opacity-25 w-full my-4'>Services</p>
                        </Link>
                    </li> <hr />
                    <li class='m-2'>
                        <Link href='/clients'>
                             <p class='hover:opacity-25 w-full my-4'>Clients</p>
                        </Link>
                    </li> <hr />
                    <li class='m-2'>
                        <Link href='/contact'>
                         <p class=' hover:opacity-25 w-full my-4'>Contact</p>
                        </Link>
                    </li> <hr />
                </ul>
              </div>
        </nav>
      </div>
    </section>
      )

      const  MobileButton = (
        <div class='flex justify-end pt-4 md:hidden mx-8'>
          <button class='flex border-white'onClick={mobileMenuHandler} > 
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"stroke-width="2"d="M4 6h16M4 12h16M4 18h16" />
           </svg>
         </button>
        </div>
      )


    return (
    <header class='bg-white text-black h-full  border-2 border-white'>
        <div class='md:mx-8'>
         {MobileButton}
        <div class='w-1/3 mt-2 mx-8 '>
         <Link href='/' >
          <a > 
          <Logo/>
          </a>
         </Link>
         </div>
         <div class=' text-sm mx-8' >
             <p>Lorem ipsum dolor sit amet consectetur.</p>
         </div>
         {openMenu && MobileButtonMenu}
         </div>
        <nav class=' hidden   md:flex mx-14 mb-6' >
            <div class=' flex justify-end w-full '>
                <ul class=' flex  text-sm '>
                    <li class=' m-2 no-underline hover:underline '>
                        <Link href='/about'>About us</Link>
                    </li>
                    <li class='m-2 no-underline hover:underline' >
                        <Link href='services'>Services</Link>
                    </li>
                    <li class='m-2 no-underline hover:underline'>
                        <Link href='/clients'>Our clients</Link>
                    </li>
                    <li class='m-2 no-underline hover:underline'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
                </div>
          </nav>
          
        </header>
    )
}

export default MainNavigation