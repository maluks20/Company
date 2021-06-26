import Image from 'next/image'


function ServiceList() {
    return (
        <section class='bg-gray-100 py-20 '>
        <div class='mx-36  border-red-500 grid gap-5 grid-cols-2'>
         <card class=' p-8 shadow-md border-3 border-gray-100'>
             <div>
                 <Image
                 src='/images/Services/Picture8.png'
                 width='90'
                 height='90'
                 alt='amu1'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 text-2xl '>
                 <h1>Abnormal Loads</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
         </card>
         <card class='shadow-md border-3 border-gray-100 p-8'>
             <div>
                 <Image
                 src='/images/Services/Picture9.png'
                 width='80'
                 height='99'
                 alt='amu2'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 text-2xl'>
                 <h1>In-House Operator</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
         </card>
         <card class='shadow-md  border-3 border-gray-100 p-8'>
             <div>
                 <Image
                 src='/images/Services/Picture10.png'
                 width='150'
                 height='100'
                 alt='amu3'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 text-2xl'>
                 <h1>Air Freight</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
         </card>
         <card class='shadow-md  border-3 border-gray-100 p-8'>
             <div>
                 <Image
                 src='/images/Services/Picture11.png'
                 width='90'
                 height='90'
                 alt='amu4'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 text-2xl'>
                 <h1>Cross Border Road Freight</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
         </card>
         <card class='shadow-md  border-3 border-gray-100 p-8'>
             <div>
                 <Image
                 src='/images/Services/Picture12.png'
                 width='110'
                 height='80'
                 alt='amu5'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 text-2xl'>
                 <h1>Domestic Road Freight</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
         </card>
         <card class='shadow-md  border-3 border-gray-100 p-8'>
             <div>
                 <Image
                 src='/images/Services/Picture13.png'
                 width='99'
                 height='90'
                 alt='amu6'
                 responsive='layout'
                 />
             </div>
             <div class='font-bold py-4 text-2xl'>
                 <h1>Container Loads</h1>
             </div>
             <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?
                 </p>
             </div>
         </card>
        </div>
        </section>
    )
}

export default ServiceList;