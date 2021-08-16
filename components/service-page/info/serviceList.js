import Image from 'next/image'


function ServiceList() {
    return (
    <section class='bg-white  text-sm '>
     <div class='md:mx-28 mx-10 md:py-10 '>
        
        
        <div class=''>
             <div class='pb-4 sm:pb-6'>
            <p class='font-bold '>
                Vululwani Consulting specilized services
            </p>
          </div>
        </div>



        <div class='  md:grid md:gap-5 md:grid-cols-2'>

         <card class='  border-3 border border-red-100 md:h-70'>
            <div class='border-3 p-4  shadow-md py-4 sm:pl-6 md:min-h-full '>
             <div class=''>
                 <Image
                 src='/images/Services/Picture8.png'
                 width='90'
                 height='90'
                 alt='amu1'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 lg:text-base '>
                 <h1>Abnormal Loads (domestic and cross border</h1>
             </div>
             <div class=''>
                 <p>We offer low beds truck for abnormal loadswith South Africa and also cross border
                 </p>
             </div>
            </div>
         </card>


         <card class='  border-4 border-gray-50 md:h-70 '>
          <div class='p-2 shadow-md sm:py-10  sm:pl-6  md:h-full'>       
             <div>
                 <Image
                 src='/images/Services/Picture9.png'
                 width='80'
                 height='99'
                 alt='amu2'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 md:text-base'>
                 <h1>In-House Operator</h1>
             </div>
             <div>
                 <p>We offer inhouse operator for
                packaging and preparation of cargo for dispatch.
                 </p>
             </div>
             </div>
         </card>

         <card class=' md:shadow-md border-3  border-gray-100 md:h-70 border-2'>
             <div class='p-2 md:p-2 shadow-md sm:py-10 sm:pl-6 md:h-full border-yellow-300 border-2'>
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
                 <p>Air freight globally and domestic.
                 </p>
             </div>
             </div>
         </card>


         <card class=' border-3 border-gray-100 md:h-70 border-2 '>
             <div class='md:min-h-full h-70 p-2 md:p-2 shadow-md sm:py-10 sm:pl-6'>
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
                 <p>We offer road freight solution
                   to, from and within southern africa
                 </p>
             </div>
             </div>
         </card>

         <card class='  border-3 border-white md:h-70'>
             <div class='p-2 md:p-2 shadow-md sm:py-10 sm:pl-6 md:h-full'>
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
                 <p>We offer road freight of different
                  sizes of trucks within South Africa
                 </p>
             </div>
             </div>
         </card>

         <card class='lg:shadow-md  border-4 border-white md:h-70 '>
             <div class='p-2 md:p-2 shadow-md sm:py-10 sm:pl-6 md:h-full'>
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
                 <h1>Containerized Cargo</h1>
             </div>
             <div>
                 <p>We do container loads (full container
             loads (FCL) and Less than container loads(LCL))
                 </p>
             </div>
             </div>
         </card>
        </div>
        </div>
        </section>
    )
}

export default ServiceList;