import Image from 'next/image'

function TopContacts() {
    return (
        <section class=' text-white bg-cover ' style={{backgroundImage :'url(/images/Background/P3.jpg)'}}>
            <div class=' text-xs h-auto justify-center flex-grow-0 flex-shrink-0
            
            lg:h-10 mx-28 lg:justify-items-stretch lg:justify-end '>
                <p class=' font-bold flex flex-row py-2 mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                <a class='ml-2'href="mailto:info@Vululwaniconsulting.co.za">info@Vululwaniconsulting.co.za</a>
                </p>

            </div>
        </section>
    )
}

export default TopContacts