import Link from 'next/link'
import Image from 'next/image'



//* intro page=== direct us to contact us page
 function IntroPage() {
    
    


     return (
         <section class=' md:h-screen text-white bg-white'>
         <div class='  h-3/5 md:h-4/5  bg-cover bg-center ' style={{backgroundImage : 'url(/images/Background/P3.jpg)'}} > 
         <div class=' mx-8 md:mx-36'>
          <div class=' pt-20  md:pt-24 h-full ' >
              <span class='flex justify-center '>
                 <h1 class=' md:text-2xl'> Vululwani Consulting</h1>
              </span>
              <div class=' md:text-base text-center sm:text-base text-sm flex justify-center md:pt-4 sm:pt-4 '>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quisquam maxime, obcaecati magnam quas tempora  quidem alias earum minima itaque Lorem ipsum dolor sit,  amet consectetu elit. Harum, perspiciatis! </p>
              </div>
              <div class=' text-sm  pt-5 pb-14 flex justify-center md:pt-10 '>
              <div class=' w-auto h-auto p-2  font-bold  bg-blend-multiply  transition duration-500 ease-in-out border-2  hover:bg-green-800 transform hover:-translate-y-1 hover:scale-110'>
                <div class='flex justify-center text-xs sm:text-base  '>
                  <Link class='' href='/contact'>CAN WE HELP </Link>
              </div>
              </div>
              </div>
           </div>
           </div>
         </div>
         </section>
     )
 }

 export default IntroPage;


