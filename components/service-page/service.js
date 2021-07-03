
import DetailedServices from './info/detailed'
import ServiceList from './info/serviceList'
import ServiceTop from './info/service-top'
import ScheduleCall from '../clients/client components/callus'

function Service() {
    return (
        <div>
        <ServiceTop/>
        <DetailedServices/>
        <ServiceList/>
        <ScheduleCall/>
        </div>
    )
}

export default Service