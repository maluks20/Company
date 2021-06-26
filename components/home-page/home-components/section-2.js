import Link from 'next/link'
import Image from 'next/image'

//* About the company === direct to about us page

 function Section() {
     return (
<section class='h-40 text-white border-red-300 border-2'>
         <div class=' h-full  bg-cover bg-center ' style={{backgroundImage : 'url(/images/Background/1.jpg)'}} > 
          <div class=' pt-24 h-full ' >
              <span class='flex justify-center '>
                 <h1 class=' text-2xl'> Vululwani</h1>
              </span>
              <div class='flex justify-center pt-4 '>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, natus neque! Error at veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quae! </p>
              </div>
              <div class=' flex justify-center pt-10 '>
                   <div class=' w-38 p-2  font-bold  bg-blend-multiply  transition duration-500 ease-in-out border-2  hover:bg-green-800 transform hover:-translate-y-1 hover:scale-110'>
                <div class='flex justify-center '>
                <Link class='' href='/about'>ABOUT THE COMPANY </Link>
                </div>
                  
                   </div>
              </div>
           </div>
         </div>
         </section>
     )
 }

 export default Section;
