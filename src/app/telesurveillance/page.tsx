/* Assets Imports */
import '../globals.css'
import cameraBannerPhoto from "public/banners/camera_stock_photo.jpg"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Banner from '../_components/Banner'
/* Page Components Imports */
import FirstSection from "./_pageComponents/FirstSection"



export default function AlarmPage() {
    return (
        <>
            <Header activePage={ "telesurveillance" } />
            <main>
                <FirstSection />
            </main>
            <Footer />
        </>
    )
}
