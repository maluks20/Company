import HeaderClients from "./client components/header-section"
import ListOfClients from "./client components/client-details"
function OurClients() {
    return(
        <section class='text-sm md:text-base'>
        <HeaderClients/>
        <ListOfClients/>
        </section>
    )
}

export default OurClients