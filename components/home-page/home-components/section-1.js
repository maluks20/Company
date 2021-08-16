import Link from 'next/link'
import Image from 'next/image'



//* intro page=== direct us to contact us page
 function IntroPage() {
    
    


     return (
         <section class=' md:h-screen text-white bg-white'>
         <div class='  h-3/5 md:h-4/5  bg-cover bg-center ' style={{backgroundImage : 'url(/images/Background/P3.jpg)'}} > 
         <div class='mx-10 sm:mx-16 sm:py-4 '>
          <div class=' pt-20  md:pt-24 h-full ' >
              <span class='flex justify-center '>
                 <h1 class=' sm:text-xl  md:text-2xl'> Vululwani Consulting</h1>
              </span>
              <div class=' sm:text-base text-sm flex justify-center md:pt-4 sm:pt-4 '>
                  <p>We are South African privately owned comapany established in 2015. We offer comprehensive and cost effective logistics solution in Southern Africa. Collectively our team has more than 15 years of experience in cost effective logistics.</p>
              </div>
              <div class=' pt-5 pb-14 flex justify-center md:pt-10 '>
              <div class=' sm:w-auto w-38 p-2  font-bold  bg-blend-multiply  transition duration-500 ease-in-out border-2  hover:bg-green-800 transform hover:-translate-y-1 hover:scale-110'>
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


