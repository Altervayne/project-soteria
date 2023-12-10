/* Assets Imports */
import './globals.css'
import { Quicksand } from 'next/font/google'
/* Library Imports */
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir"
/* Components Imports */
import ScrollToTop from './_components/ScrollToTop'



const quicksand = Quicksand({ subsets: ['latin'] })



export const metadata = {
    title: `Icon International Security | Agence de télésurveillance`,
    description: `Installateur d'alarmes, de caméras, et agence de télésurveillance | Installation de qualité | Icon Int | +32 (0)2 703 02 03`,
    openGraph: {
        url: `https://www.iconeint.com`,
        siteName: `Icon International Security`,
        title: `Icon International Security, Agence de télésurveillance`,
        description: `Icon International est un installateur d'alarmes, de caméras et de systèmes de sécurité proposant des services de télésurveillance de haute qualité.`
    }    
}



export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
                <html lang="fr">
                    <body className={ quicksand.className }>
                        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
                            { children }
                            <ScrollToTop />
                        </NextAppDirEmotionCacheProvider>
                    </body>
                </html>
    )
}
