import Link from 'next/link'
import Image from 'next/image'

//* About the company === direct to about us page

 function Section() {
     return (
         <section class=' md:h-screen text-white bg-white'>
         <div class=' h-3/5 md:h-4/5  bg-cover bg-center ' style={{backgroundImage : 'url(/images/Background/P3.jpg)'}} > 
         <div class='mx-10 '>
          <div class=' pt-20  md:pt-24 h-full ' >
              <span class='flex justify-center '>
                 <h1 class=' md:text-2xl'> Vululwani Consuting</h1>
              </span>
              <div class=' text-sm flex justify-center md:pt-4 '>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, natus neque! Error at veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quae! </p>
              </div>
              <div class=' pt-5 pb-14 flex justify-center md:pt-10 '>
                   <div class=' w-38 p-2  font-bold  bg-blend-multiply  transition duration-500 ease-in-out border-2  hover:bg-green-800 transform hover:-translate-y-1 hover:scale-110'>
                <div class='flex justify-center text-xs  '>
                <Link class='' href='/about'>ABOUT THE COMPANY </Link>
                </div>
                  
                   </div>
              </div>
           </div>
           </div>
         </div>
         </section>
     )
 }

 export default Section;
