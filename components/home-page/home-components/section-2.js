import Link from 'next/link'
import Image from 'next/image'


 function HomeSection() {

    const AboutTheCompany = (
       <section class='bg-gray-100 text-black'>
        <div class=' mx-10 md:mx-30 md:py-10 py-6'>
        <div class='md::px-72'>
        <p class=' text-sm text-center font-bold md:text-xl'>Vululwani Consulting is a South African privately owned company established in 2015. <br/> We offer comprehensive and cost effective logistics solutions in Southern Africa,<br/> Collectively our team has more than 15 years of experience in <br/> cost effective logistics.</p>
        </div>

        <div class='flex justify-center text-xs sm:text-base px-2 py-4'>
           <div class='text-gray-50 border-2 border-gray-100 bg-green-800 sm:w-auto w-auto h-auto p-2  font-bold bg-blend-multiply  transition duration-500 ease-in-out hover:bg-white hover:border-green-800  hover:text-green-800 hover:border-2  '>
                <Link class='' href='/about'>About Our Company </Link>
            </div>
       </div>
    </div>
       </section>
    )

    const SomeOfOurClients = (
        <section class='text-black '>
        <div class='   md:px-6 md:mx-16 lg:mx-28  py-10'>
          <p class='text-base md:text-base lg:text-xl text-center font-bold pt-2'> Client that  we have work with</p>
            <div class='   mx-8   md:py-8 md:pt-8  md:gap-8 md:flex md:justify-center'>
            <div class='md:flex col-3 md:gap-8'>
               
               <div class=' flex justify-center '>
                <div class='  w-auto  md:place-self-center py-6 '>
                <Image
                 src='/images/Client-logo/Picture2.png'
                 alt={'am'}
                 width={200}
                 height={150}
                 responsive= 'layout'
                />
                </div>
                </div>

             <div class='flex justify-center'>
             <div class=' w-auto  md:place-self-center py-6  '>
                <Image
                 src='/images/Client-logo/Picture1.png'
                 alt={'am'}
                 width={280}
                 height={110}
                 
                />
             </div>
             </div>
              
              <div class='flex justify-center'>
             <div class=' w-auto  md:place-self-center py-6  md:w-auto' >
                <Image
                 src='/images/Client-logo/Picture5.png'
                 alt={'am'}
                 width={280}
                 height={110}
                 
                />
             </div>
             </div>

             </div>
            </div>
        </div> 
        </section>
    )

     const ContactLink = (
        <section class=' text-black bg-gray-300' >
        <div class=' mx-8 md:mx-16 lg:mx-22 md:py-8 '>
            <p class='text-center text-base md:text-xl font-bold py-2'>
                Ready to take your business to the next level? Let's talk...
            </p>
            <p class='text-center text-sm pb-4 md:pb-0'>
              We are standing by, ready to assist you and  help you to <br /> determine which logistics solutions will be the <br /> best fit for your needs.
              </p>
            <div class=' text-sm flex justify-center md:pt-6 md: pb-6 '>
            <div class='text-gray-50 h-auto w-auto p-2 border-gray-300 border-2 bg-green-800  font-bold bg-blend-multiply transition duration-500 ease-in-out hover:bg-white hover:border-green-800 hover:border-2 hover:text-green-800'>
                <Link class='' href='/contact'> CONTACT US </Link>
            </div>
            </div>
        </div>
        </section>
    )

    
     return (
        <section class='  text-white bg-white'>
          {AboutTheCompany}
          {SomeOfOurClients}
          {ContactLink}
         </section>
     )
 }

 export default HomeSection;
