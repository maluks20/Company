import Link from 'next/link'
import Logo from './logo'

// function MainNavigation() {
//     return (
//     <header class='bg-black text-white border-red-500 border-2 h-full ' >
//         <div class='border-blue-500 border-2  mt-12 ml-20 w-1/3 '>
//          <Link href='/' >
//           <a > 
//           <Logo/>
//           </a>
//          </Link>
//          </div>
//          <div class='ml-20 border-grey-300 border-2 w-1/4' >
//              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolore.</p>
//          </div>
//         <nav class='border-2 border-green-500 w-1/3  justify-end' >
//                 <ul class=' border-2 border-pink-500 flex '>
//                     <li class=' m-2'>
//                         <Link href='/about'>About Us</Link>
//                     </li>
//                     <li class='m-2' >
//                         <Link href='services'>Services</Link>
//                     </li>
//                     <li class='m-2'>
//                         <Link href='/clients'>Our Clients</Link>
//                     </li>
//                     <li class='m-2'>
//                         <Link href='/contact'>Contact</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }


function MainNavigation() {
    return (
        <header>
                                                
            <nav class="bg-gray-100">
              <div class="max-w-6xl mx-auto px-4">
               <div class="flex justify-between">

                  <div class="flex space-x-4">
                      {/* <!-- logo --> */}
                 <div>
          <a href="/" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span class="font-bold">Better Dev</span>
          </a>
         </div>

        {/* <!-- primary nav --> */}
         <div class="hidden md:flex items-center space-x-1">
          <a href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a>
          <a href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
        </div>
        </div>

      {/* <!-- secondary nav --> */}
      <div class="hidden md:flex items-center space-x-1">
        <a href="/" class="py-5 px-3">Login</a>
        <a href="/" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
      </div>

      {/* <!-- mobile button goes here --> */}
      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  {/* <!-- mobile menu --> */}
  <div class="mobile-menu hidden md:hidden text-black">
    <a href="/service" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
    <a href="/About" class="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
  </div>
</nav>

{/* <!-- content goes here --> */}
<div class="py-32 text-center">
  <h2 class="font-extrabold text-4xl">Navbars in Tailwind!</h2>
</div>
        </header>
    )
}
export default MainNavigation