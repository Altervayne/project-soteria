'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import Link from 'next/link'
import { GoToButton } from '../_components/Button'
import ShiftingBackground from '../_components/ShiftingBackground'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            height: "90vh",

            background: "linear-gradient(150deg, rgba(3,0,0,1) 0%, rgba(69,16,16,1) 37%, rgba(126,85,85,1) 75%, rgba(154,143,143,1) 100%)",

            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(4),
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: "0",
            },
        },
        banner: {
            display: "flex",
            alignItems: "center",

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(2,2,2,0.4) 0%, rgba(5,5,5,0.75) 100%)",
            backdropFilter: "blur(12px)",

            padding: theme.spacing(4),

            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                borderRadius: "0",
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: "row",
                borderRadius: theme.spacing(0.75),  
            },
        },
        bannerTitleRoot: {
            [theme.breakpoints.up('sm')]: {
                maxWidth: "none",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "50vw",
            },
            [theme.breakpoints.up('md')]: {
                maxWidth: "550px",
            },
        },
        bannerTitle: {
            margin: "0",

            color: "#F5F5F5",
            

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(26),
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(40),  
            },
        },
        bannerSubTitle: {
            color: "#F5F5F5",

            fontWeight: 500,
            

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(18),
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.pxToRem(22),
            },
        },
        bannerSubText: {
            marginTop: 0,

            fontSize: theme.typography.pxToRem(18),
        },
        buttonsContainer: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        
            minWidth: "200px",
            
            [theme.breakpoints.down('sm')]: {
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                
                

                width: "100%",
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: "column",
                justifyContent: "space-evenly",

                width: "65%",
                maxWidth: "80px",
            },
            [theme.breakpoints.up('lg')]: {
                justifyContent: "space-evenly",

                width: "40%",
                maxWidth: "80px",

                marginLeft: theme.spacing(6),
            },
        },
        buttonsSubContainer: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",

            margin: theme.spacing(1),
        },
    }
})

const bannerVariants: Variants = {
    rest: {
        opacity: 0,
        transform: "translateY(100px)",
    },
    loaded: {
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
            type: "spring",
            duration: 0.8,
            opacity: {
                duration: 0.9,
            }
        }
    },
}



export default function HomeBanner() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <ShiftingBackground />
            
            <motion.div className={ classes.banner } variants={ bannerVariants } initial="rest" animate="loaded">

                <div className={ classes.bannerTitleRoot }>
                    <h1 className={ classes.bannerTitle }>
                        { `Icon International Security` }
                    </h1>
                    <h2 className={ classes.bannerSubTitle }>
                        { `Agence d'installation de systèmes de sécurité et de télésurveillance` }
                    </h2>
                </div>

                <div className={ classes.buttonsContainer }>
                    <div className={ classes.buttonsSubContainer }>
                        <GoToButton text={"Alarmes"} link={"/installation-alarme"} description={"Renseignez-vous sur les installations d'alarme par Icon International"} isOutside={ false }/>
                    </div>
                    <div className={ classes.buttonsSubContainer }>
                        <GoToButton text={"Caméras"} link={"/installation-camera"} description={"Renseignez-vous sur les installations de caméras par Icon International"} isOutside={ false }/>
                    </div>
                    <div className={ classes.buttonsSubContainer }>
                        <GoToButton text={"Contrôle d'Accès"} link={"/controle-acces"} description={"Renseignez-vous sur les installations de systèmes de contrôle d'accès par Icon International"} isOutside={ false }/>
                    </div>
                    <div className={ classes.buttonsSubContainer }>
                        <GoToButton text={"Télésurveillance"} link={"/telesurveillance"} description={"Renseignez-vous sur les services de télésurveillance par Icon International"} isOutside={ false }/>
                    </div>

                </div>

            </motion.div>
        </section>
    )
}
