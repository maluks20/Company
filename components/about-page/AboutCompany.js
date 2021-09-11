 

 function AboutTheCompany() {



    const Header = (
        <section class='bg-gray-200 '>
        <div class=' text-center py-6  md:mx-16 lg:mx-36'>
            <h2 class='text-xl'>About The Company </h2>
        </div>
        </section>
    )

const mainBody = (
        <section>
            <div >
            <div>
                <h2 class='text-green-800 md:text-xl'></h2>
                <h1 class='md:py-2  py-4 font-bold'>Mission</h1>
               <p class=''>To diligently service our clients with pride, honour and    dignity.
                 Delivering efficient and cost effective services that meets our client's expectations.  To create employment, while encouraging skills transfer within different hierarchy of our employees through training and workshops
               </p>
            </div>
            <div>
               <h1 class='md:py-2 py-4 font-bold'>Vision</h1>
               <p>To be globally recognised as a leading serviceprovider of logistics and supply <br /> chain solutions.
             </p>
            </div>
            <div>
               <h2 class='md:py-2 py-4 font-bold '>Objectives</h2>
            <ul class='list-disc ml-6'>
               <li>To give all clients better service means improving works systems, being more   responsive in attending to client’s needs, delivering quality every time, and  eliminating waste. </li>
               <li>To create pockets of excellence.</li> 
               <li> Reduce overall cost of service delivery. </li>
               <li>Capacity and ability to compete. </li>
               <li>To comply with Service Level Agreement.</li>
             </ul>
            </div>
            <div>
                <h1 class='md:py-2 py-4 font-bold '>Social Responsibility</h1>
                <p>As the company we will ensure that we play a meaningful role in providing and transforming the social landscape of our communities. This entails giving them necessities that will benefit communities in the form of donations. Our direct  involvement in the social welfare will ensure that future South Africa becomes a  better nation. Our involvement on social projects will assist us in uprooting social  skills within our communities in our endeavor to correct the wrongs and live in a  crime free society.</p>
            </div>
            </div>
        </section>
    )

    const Body = (
        <section class='bg-white'>
            <div class='  text-opacity-25 md:mx-16 lg:mx-53 py-10 flex justify-center text-justify'>
                <div class=' mx-8  md:p-26 text-left md:w-1/2 '>
                <h2 class='text-base pb-4 font-bold  md:py-4 md:text-xl  text-green-800'>Vululwani Consulting</h2>
                <p font-bold>
                Vululwani Consulting is a South African privately owned company, established  in 2015. it offer comprehensive and cost effective logistic solutions in the  Southern Africa region. Collectively our team has more than 15+ years of experience in cost effective logistics.
                </p>

                <p class='py-2 font-bold text-red-600'> <q> Vululwani is a Shangaan word which encompasses growth and maturity </q></p>
                <p>
                 Vululwani is a combination of Innovation, Entrepreneurship and experience  in our leadership ensures stability whilst the youth of our team provides a  great deal of innovation.
                 </p>
                 {mainBody}
            </div>
            </div>
        </section>
    )

    return (
        <section class='bg-white' >
        {Header}
        {Body}
        </section>
    )
 }

 export default AboutTheCompany;