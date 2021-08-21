

function ServiceTop() {

     const Header = (
        <section class='bg-gray-200 '>
        <div class=' text-center py-6  md:mx-16 lg:mx-36'>
            <h2 class='text-xl'>Our Company</h2>
        </div>
        </section>
    )

    const serviceInfo = (
        <section>
            <div class='bg-white '>
            <article class=' md:py-4 pb-4 mx-10 md:ml-28 md:pt-8 '>
                <p class='py-4 text-sm md:text-base font-bold'>Vululwani Consulting</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet blanditiis mollitia non explicabo nihil magnam dolorem facilis odio nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamusa?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aut. Aperiam nihil amet ex recusandae.
                 </p>
            </article>
        </div>
        </section>
    )

     return (
        <section class='bg-gray-200 '>
         {Header}
         {serviceInfo}
        </section>
    )
 }

 export default ServiceTop;