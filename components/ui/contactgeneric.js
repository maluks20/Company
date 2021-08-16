import Link from 'next/link'


function ContactLink() {
    return (
        <section class=' text-black bg-gray-300' >
        <div class='md:mx-16 lg:mx-22 md:py-8 '>
            <p class='text-center text-xl font-bold py-2'>
                Ready to take your business to the next level? Let's talk...
            </p>
            <p class='text-center'>
              We are standing by, ready to assist you and  help you to <br /> determine which logistics solutions will be the <br /> best fit for your needs.
              </p>
            <div class='flex justify-center md:pt-6 md: pb-6 '>
            <div class='text-gray-50 border-gray-300 border-2 bg-green-800 sm:w-auto w-32 p-2  font-bold bg-blend-multiply  transition duration-500 ease-in-out hover:bg-white hover:border-green-800 hover:border-2 hover:text-green-800'>
                <Link class='' href='/contact'> CONTACT US </Link>
            </div>
            </div>
        </div>
        </section>
    )
    }

    export default ContactLink;