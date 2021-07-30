import HeaderClients from "./client components/header-section"
import ListOfClients from "./client components/client-details"
import ScheduleCall from "./client components/callus"

function OurClients() {
    return(
        <section>
        <HeaderClients/>
        <ListOfClients/>
        <ScheduleCall/>
        </section>
    )
}

export default OurClients