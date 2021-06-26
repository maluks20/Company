import Image from 'next/image'

function ListOfClients() {
    return (
        <section class='bg-white flex justify-center py-20 w-full'>
        <div class=' h-full grid gap-4 grid-cols-3  pt-16  '>
            <div class='place-self-center'>
                <Image
                 src='/images/Client-logo/Picture1.png'
                 alt={'am'}
                 width={280}
                 height={110}
                 responsive= 'layout'
                />
            </div>
            <div class='place-self-center'>
                <Image
                 src='/images/Client-logo/Picture2.png'
                 alt={'am'}
                 width={200}
                 height={150}
                 
                />
            </div>
            <div class='place-self-center' >
                <Image
                 src='/images/Client-logo/Picture3.png'
                 alt={'am'}
                 width={300}
                 height={95}
                 
                />
            </div>
            <div class='place-self-center'>
                <Image
                 src='/images/Client-logo/Picture4.png'
                 alt={'am'}
                 width={299}
                 height={60}
                 
                />
            </div>
            <div class='place-self-center' >
                <Image
                 src='/images/Client-logo/Picture5.png'
                 alt={'am'}
                 width={330}
                 height={110}
                 
                />
            </div>
            <div class='place-self-center'>
                <Image
                 src='/images/Client-logo/Picture6.png'
                 alt={'am'}
                 width={350}
                 height={80}
                 responsive='layout'
                />
            </div>
            <div class='place-self-center' >
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