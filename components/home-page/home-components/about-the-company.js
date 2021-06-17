import Link from 'next/link'
import Image from 'next/image'

//* About the company === direct to about us page

 function Section() {
     return (
         <section class='h-96 border-2 border-red-500'>
          <div class='pt-16'>
              <div class='flex justify-center '>
                 <h1 class=' text-2xl'>jfjfjfj</h1>
              </div>
              <div class='flex justify-center pt-4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, natus neque! Error at veritatis corrupti.</p>
              </div>
              <div class=' flex justify-center '>
                   <div class=' w-42 p-2  font-bold   bg-green-100 hover:bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'>
                <div class='flex justify-center'>
                <Link class='' href='/services'> About Our Company</Link>
                </div>
                   </div>
              </div>
           </div>
         </section>
     )
 }

 export default Section;
