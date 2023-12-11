/* Assets Imports */
import '../globals.css'
import contactBannerPhoto from "public/banners/contact_stock_photo.jpg"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
/* Page Components Imports */
import Banner from '../_components/Banner'
import FormSection from './_pageComponents/FormSection'



export default function ContactPage() {
    return (
        <>
            <Header activePage={ "contact" } />
            <main>
                <Banner image={ contactBannerPhoto } isSmall={ false } position='center' />
                <FormSection />
            </main>
            <Footer />
        </>
    )
}
