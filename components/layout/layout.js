import {Fragment} from  'react'
import MainNavigation from './main-navigation'
import TopContacts from './top-contacts'

function Layout(props) {
    return (
        <Fragment>
            <TopContacts/>
            <MainNavigation/>
            <main>{props.children}</main>
        </Fragment>
    )

}
export default Layout