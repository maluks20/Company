import Link from 'next/link'
import Image from 'next/image'


//* intro page=== direct us to contact us page
 function IntroPage() {
    
     return (
         <section class='h-screen
         border-2 border-green-900 bg-center bg-contain    ' style={{backgroundImage : 'url(/images/HeroOne.jpg)'}} > 
          <div class='pt-16 h-full text-gray-300' >
              <div class='flex justify-center '>
                 <h1 class=' text-2xl'>jfjfjfj</h1>
              </div>
              <div class='flex justify-center pt-4 text-white'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, natus neque! Error at veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quae! </p>
              </div>
              <div class=' flex justify-center pt-10 '>
                   <div class=' w-32 p-2  font-bold   bg-green-100 hover:bg-red-50  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-50 focus:ring-opacity-50'>
                <div class='flex justify-center text-gray-50'>
                <Link class='' href='/contact'> Contact Us</Link>
                </div>
                  
                   </div>
              </div>
           </div>
         </section>
     )
 }

 export default IntroPage;


