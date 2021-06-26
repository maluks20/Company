import Link from 'next/link'
import Rights from './rights'

function FooterSection() {
    return (
        <section class=' bg-black py-12 flex justify-center' >
            <div class='flex justify-items-stretch  justify-evenly text-white ml-28 mr-28 border-2 border-white w-4/6'>
                <div>
                    <div >
                        <p>388 OKAPI CLOSE <br /> DAWN PARK  EXT 7 <br />BOKSBURG <br />1459</p>
                    </div>
                </div>
                <div class='ml-8 mr-10 divide-y-2 divide-fuchsia-300'>
                    <h2 class='pb-2 text-lg'>Services</h2>
                    <p class='pt-2'>Air Freight <br />
                    Abnormal Loads <br /> Cross Border Road Freight <br />  Container Loads <br /> Domestic Road Freight <br />In-House Operator</p>
                </div>
                <div class='  mr-10 divide-y-2 divide-fuchsia-300'>
                 <div class=' pb-2'>
                     <h1 class='text-lg'>Links</h1>
                 </div>
                 <nav class='pt-2 '>
                    <ul class=' '>
                    <li class="no-underline hover:underline ..." >
                        <Link href='/'>Home</Link>
                    </li>
                    <li class="no-underline hover:underline ..." >
                        <Link  
                        href='services'>Services</Link>
                    </li>
                    <li class="no-underline hover:underline ...">
                        <Link  href='/clients'>Our Clients </Link>
                    </li>
                    <li class="no-underline hover:underline">
                        <Link 
                         href='/contact'>Contact</Link>
                    </li>
                    </ul>
                  </nav>
                 </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default FooterSection;