import Image from 'next/image'

function ListOfClients() {
    return (
        <section class='bg-white  py-20 mx-auto w-
        sm:bg-white 
        '>
        <div class=' h-full lg:grid lg:gap-4 grid-cols-3  mx-10  sm:grid sm:grid-cols-2 gap-4 sm:mx-16'>

            <div class=' pb-8 flex justify-center lg:place-self-center   '>
                <Image
                 src='/images/Client-logo/Picture1.png'
                 alt={'am'}
                 width={260}
                 height={100}
                 responsive= 'layout'
                />
            </div>
            <div class='py-8 flex justify-center lg:place-self-center'>
                <Image
                 src='/images/Client-logo/Picture2.png'
                 alt={'am'}
                 width={200}
                 height={140}
                 
                />
            </div>
            <div class='py-8 flex justify-center lg:place-self-center' >
                <Image
                 src='/images/Client-logo/Picture3.png'
                 alt={'am'}
                 width={300}
                 height={95}
                 
                />
            </div>
            <div class=' py-8 flex justify-center lg:place-self-center'>
                <Image
                 src='/images/Client-logo/Picture4.png'
                 alt={'am'}
                 width={299}
                 height={60}
                 
                />
            </div>
            <div class='py-8 flex justify-center lg:place-self-center' >
                <Image
                 src='/images/Client-logo/Picture5.png'
                 alt={'am'}
                 width={330}
                 height={110}
                 
                />
            </div>
            <div class='py-8 flex justify-center lg:place-self-center'>
                <Image
                 src='/images/Client-logo/Picture6.png'
                 alt={'am'}
                 width={350}
                 height={80}
                 responsive='layout'
                />
            </div>
            <div class='py-8 flex justify-center lg:place-self-center' >
                <Image
                 src='/images/Client-logo/Picture7.png'
                 alt={'am'}
                 width={300}
                 height={100}
                 responsive='layout'
                />
            </div>
        </div>
        </section>
    )
}
export default ListOfClients