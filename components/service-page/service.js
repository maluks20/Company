import Intro from './info/intro'
import DetailedServices from './info/detailed'
import ServiceList from './info/serviceList'
import ServiceTop from './info/service-top'

function Service() {
    return (
        <div>
        <ServiceTop/>
        <Intro/>
        <DetailedServices/>
        <ServiceList/>
        </div>
    )
}

export default Service