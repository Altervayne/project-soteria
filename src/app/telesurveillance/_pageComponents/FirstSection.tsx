'use client'
/* Assets Imports */
import telesurveillanceBanner from "/public/telesurveillance/banner-telesurveillance.jpg"
import telesurveillanceOne from "/public/telesurveillance/telesurveillance-one.jpg"
import telesurveillanceTwo from "/public/telesurveillance/telesurveillance-two.jpg"
import telesurveillanceThree from "/public/telesurveillance/telesurveillance-three.jpg"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { TechSheetBanner, TechSheetText } from '@/app/_components/TechSheet'
import { IconButton } from "@/app/_components/Button"



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",



            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(16),
            },
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            

            [theme.breakpoints.down('lg')]: {
                width: "1100px",
                maxWidth: "90%",
            },
            [theme.breakpoints.up('lg')]: {
                width: "100%",
                maxWidth: "1100px",
            },
        },



        contactUsRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "100%",
            height: "auto",
            marginTop: "20px",
            marginBottom: "-40px",

            overflow: "hidden",

            backgroundColor: "rgba(20, 20, 20, 1)",
        },
        contactUsSubRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

            boxSizing: "border-box",
            
            width: "100%",
            height: "100%",
            maxWidth: "1100px",

            paddingBottom: theme.spacing(6),
        },
        contactUsText: {
            position: "relative",

            boxSizing: "border-box",

            padding: theme.spacing(6),
            paddingLeft: "0",
            margin: 0,

            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(4),
                paddingTop: theme.spacing(6),
            },
        },
        contactUsTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "rgba(252, 105, 105, 1)",

            [theme.breakpoints.down('sm')]: {
                paddingBottom: theme.spacing(4),
                fontSize: theme.typography.pxToRem(26),
            },
        },
        contactUsSubTitle: {
            fontWeight: 500,

            color: "#F5F5F5",

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(16),
            },
        }
    }
})



export default function FirstSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ telesurveillanceBanner }
                                alt={ "Image d'un centre de télésurveillance" }
                                isTop={ true }
                                tag={ "" }
                                boldTitle={ "Nous gardons" }
                                regularTitle={ " le fort pour vous" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Icon International propose des services de télésurveillance pour vous garantir la sérénité."
                                    }
                                ] }
                                transparent={ false }
            />
            
            <div className={ classes.subRoot }>
                <TechSheetText 
                            image={ telesurveillanceOne }
                            alt={ "Caméra de Surveillance" }
                            isLeft={ false }
                            boldTitle={ "Nous surveillons" }
                            regularTitle={ " vos locaux" }
                            text={ [
                                {
                                    type: "bold",
                                    text: "Faites appel à Icon International pour garder un oeil à tout moment sur vos locaus"
                                },
                                {
                                    type: "regular",
                                    text: "Les avantages de la télésurveillance sont multiples. Nous installons et utilisons vos systèmes de vidéosurveillance afin de garder un oeil constant sur vos locaux et d'en garantir la sécurité."
                                },
                            ] }
                />
                <TechSheetText 
                            image={ telesurveillanceTwo }
                            alt={ "Système d'alarme" }
                            isLeft={ true }
                            boldTitle={ "Nous sommes" }
                            regularTitle={ " à l'écoute" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Nous écoutons à tout instant votre système d'alarme installé par nos soins afin de prévenir toute effraction."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ telesurveillanceThree }
                            alt={ "Casque-microphone pour la communication" }
                            isLeft={ false }
                            boldTitle={ "Nous réagissons" }
                            regularTitle={ " à toutes les situations" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "En cas d'activité suspecte sur les caméras de surveillance, ou  du déclenchement d'une alarme, nous vous contactons immédiatement."
                                },
                                {
                                    type: "regular",
                                    text: "Dans le cas ou l'activité ne provient pas de vous ou d'une personne de confiance, nous contactons immediatement les autorités pour vous."
                                }
                            ] }
                />
            </div>

            <div className={ classes.contactUsRoot }>
                <div className={ classes.contactUsSubRoot }>
                    <div className={ classes.contactUsText }>
                        <h3 className={ classes.contactUsTitle }>
                            { `Les services de télésurveillance proposés par Icon International vous intéressent ?` }
                        </h3>
                        <p className={ classes.contactUsSubTitle }>
                            { `Icon International est à votre disposition pour vous conseiller et vous transmettre une estimation des coûts gratuite !` }
                        </p>
                    </div>

                    <IconButton icon={ "invoice" } text={ `Devis 100% gratuit` } link={ "/contact" } description={ `Contactez-nous pour obtenir un devis 100% gratuit` } isOutside={ false }/>
                </div>
            </div>
        </section>
    )
}
