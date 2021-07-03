import Link from 'next/link'

 function ScheduleCall() {
     return (
         <section class='py-8 bg-gray-50 '>
          <div class=' text-white lg:pt-16  lg:mx-28 rounded-xl bg-blue-900'>
              <div class='flex justify-center '>
                 <h1 class=' text-base'>Ready to take your business to the next level?</h1>
              </div>
              <div class=' flex justify-center  py-8'>
                   <div class=' w-42 p-2  font-bold   rounded-lg transition duration-500 ease-in-out border bg-red-900 hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 '>
                <div class='flex justify-center text-sm'>
                <Link class='' href='/contact'> SCHEDULE A CALL WITH US</Link>
                </div>
                   </div>
              </div>
           </div>
         </section>
     )
 }


 export default ScheduleCall