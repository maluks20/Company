import Link from 'next/link'


function ContactLink() {
    return (
        <section class=' text-black bg-gray-300' >
        <div class=' pt-2 md:pt-0   mx-8 md:mx-16 lg:mx-22 md:py-8 '>
            <p class='mx-0 text-center text-base md:text-xl font-bold py-2 bo '> Ready to take your business to the next level? Let's talk...
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
    }

    export default ContactLink;