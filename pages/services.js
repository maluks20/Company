import { Fragment } from "react";
import Service from '../components/service-page/service'
import Footer from '../components/foot-page/footer'
import ContactLink from "../components/ui/contactgeneric";

function ServicePage() {
    return (
        <Fragment>
        <Service/>
        <ContactLink/>
        <Footer/>
        </Fragment>
    )
}

export default ServicePage;