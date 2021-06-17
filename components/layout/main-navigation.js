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
    return(
        <header class='bg-pink-900 text-white h-full pb-8 '>
            <div class='flex items-center  justify inbetween w-full '>
                <div class=' w-62 ml-8'>
                    <div class='  mt-12 ml-20 w-1/2 '>
                       <Link href='/' >
                           <a > 
                            <Logo/>
                          </a>
                       </Link>
                    </div>
                    <div class='ml-20  w-1/2'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum blanditiis molestiasassumenda? Rem, iusto dicta?
                        </p>
                    </div>
                </div>
                 <nav class=' w-1/3  flex justify-between'>
                <ul class=' flex '>
                    <li class=' m-2 bg-black hover:bg-red-100 rounded-lg w' >
                        <Link href='/'>Home</Link>
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
            </div>
        </header>
    )
}
export default MainNavigation