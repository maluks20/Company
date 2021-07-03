import Image from 'next/image'


function ServiceList() {
    return (
        <section class='bg-white md:py-20 '>
        <div class=' mx-10  lg:mx-36  border-red-500 lg:grid lg:gap-5 lg:grid-cols-2'>
          <div class='pb-4'>
            <p class='font-bold '>
                Vululwani Consulting specilized services
            </p>
          </div>
         <card class=' lg:p-8  border-3 border-white'>
            <div class='border-3 p-4 shadow-md border-green-700 py-4'>
             <div class=''>
                 <Image
                 src='/images/Services/Picture8.png'
                 width='90'
                 height='90'
                 alt='amu1'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 lg:text-2xl '>
                 <h1>Abnormal Loads</h1>
             </div>
             <div class=''>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
            </div>
         </card>


         <card class='lg:py-6  lg:shadow-md  lg:p-8'>
          <div class='py-4 p-4 shadow-md'>
            
             <div>
                 <Image
                 src='/images/Services/Picture9.png'
                 width='80'
                 height='99'
                 alt='amu2'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 lg:text-2xl'>
                 <h1>In-House Operator</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
             </div>
         </card>

         <card class='lg:shadow-md  border-3 border-gray-100 p-8'>
             <div class='p-2 shadow-md'>
             <div>
                 <Image
                 src='/images/Services/Picture10.png'
                 width='150'
                 height='100'
                 alt='amu3'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 lg:text-2xl'>
                 <h1>Air Freight</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
             </div>
         </card>


         <card class='lg:shadow-md  border-3 border-gray-100 p-8'>
             <div class='p-2 shadow-md'>
             <div>
                 <Image
                 src='/images/Services/Picture11.png'
                 width='90'
                 height='90'
                 alt='amu4'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 lg:text-2xl'>
                 <h1>Cross Border Road Freight</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
             </div>
         </card>

         <card class='lg:shadow-md  border-3 border-gray-100 p-8'>
             <div class='p-2 shadow-md'>
             <div>
                 <Image
                 src='/images/Services/Picture12.png'
                 width='110'
                 height='80'
                 alt='amu5'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 lg:text-2xl'>
                 <h1>Domestic Road Freight</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
             </div>
         </card>

         <card class='pt-22 lg:shadow-md  border-4 border-white lg:p-8'>
             <div class='p-2 shadow-md'>
             <div>
                 <Image
                 src='/images/Services/Picture13.png'
                 width='99'
                 height='90'
                 alt='amu6'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 lg:text-2xl '>
                 <h1>Container Loads</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
             </div>
         </card>
        </div>
        </section>
    )
}

export default ServiceList;