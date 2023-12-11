'use client'
/* Assets Imports */
import alarmeImage from 'public/accueil/alarmes.jpg'
import cameraImage from 'public/accueil/video-surveillance.jpg'
import accessImage from 'public/accueil/controle-acces.png'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { SectionTitle } from '../_components/SectionTitle'
import Image from 'next/image'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            paddingTop: theme.spacing(10),

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            alignItems: "center",

            boxSizing: "border-box",

            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
                width: "90%",
            },
            [theme.breakpoints.up('md')]: {
                justifyContent: "space-evenly",
                width: "100%",
            },
        },
        imageContainer: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            border: "2px solid",
            borderColor: "rgba(200, 4, 4, 1)",

            [theme.breakpoints.down('md')]: {
                visibility: "hidden",
            },
            [theme.breakpoints.up('md')]: {
                height: "160px",
                width: "160px",
            },
            [theme.breakpoints.up('lg')]: {
                height: "200px",
                width: "200px",
            },
        },
        imageSubContainer: {
            position: "absolute",
            
            boxSizing: "border-box",

            [theme.breakpoints.up('md')]: {
                width: "154px",
                height: "154px",
            },
            [theme.breakpoints.up('lg')]: {
                width: "194px",
                height: "194px",
            },
        },
        imageContainerWide: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            border: "2px solid",
            borderColor: "rgba(200, 4, 4, 1)",

            [theme.breakpoints.down('md')]: {
                marginTop: theme.spacing(4),


                width: "80vw",
                height: "32vw",
            },
            [theme.breakpoints.up('md')]: {
                marginTop: theme.spacing(8),


                height: "220px",
                width: "545px",
            },
        },
        imageSubContainerWide: {
            position: "absolute",
            
            boxSizing: "border-box",

            [theme.breakpoints.down('md')]: {
                width: "79vw",
                height: "31vw",
            },
            [theme.breakpoints.up('md')]: {
                width: "539px",
                height: "214px",
            },
        },
        mainArticle: {
            [theme.breakpoints.down('md')]: {
                maxWidth: "100%",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('md')]: {
                width: "50vw",
                maxWidth: "864px",
            },
        },
        textParagraph: {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
    
            color: "rgba(41, 41, 41, 1)",
        },
    }
})



export default function AboutSection() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <aside className={ classes.imageContainer }>
                    <div className={ classes.imageSubContainer }>
                        <Image src={ accessImage } alt={ "Installation de systèmes d'alarmes automatiques" } fill={ true } style={{ objectFit: "cover" }} />
                    </div>
                </aside>
                <article className={ classes.mainArticle }>
                    <SectionTitle text={ "Icon International, À propos" } />

                    <p className={ classes.textParagraph }>
                        { `Vous souhaitez surveiller de manière optimale votre entreprise, sécuriser votre maison, vous protéger ainsi qu’assurer la protection de votre famille et de vos biens ? Ou cherchez-vous ` }
                        <strong>{ `LA` }</strong>
                        { ` solution de sécurité, avec ` }
                        <strong>{ `DES CONSEILS JUDICIEUX ET PERSONNALISES` }</strong>
                        { ` qui pourront vous guider dans le choix de l’équipement approprié ? ` }
                        <strong>{ `ICON INTERNATIONAL` }</strong>
                        { ` est l’ ` }
                        <strong>{ `INTERLOCUTEUR DE CONFIANCE` }</strong>
                        { ` dont ` }
                        <strong>{ `VOUS` }</strong>
                        { ` avez besoin afin que Votre sécurité soit adaptée à votre risque réel !` }
                    </p>
                    <p className={ classes.textParagraph }>
                        { `Notre équipe professionnelle se met à votre service afin d’établir un audit sécurité complet et vous proposera ` }
                        <strong>{ `LES SOLUTIONS ADEQUATES` }</strong>
                        { ` qui feront face aux lacunes et manquements d’un système trop souvent obsolète et inadapté au risque, mais surtout rarement avec les services réellement optimaux !`}
                    </p>
                    <p className={ classes.textParagraph }>
                        <em>{ `« Imaginez le tout dernier Smartphone, avec uniquement les appels et les sms ! »` }</em>
                    </p>
                </article>
                <aside className={ classes.imageContainer }>
                    <div className={ classes.imageSubContainer }>
                        <Image src={ alarmeImage } alt={ "Installation de systèmes d'alarmes automatiques" } fill={ true } style={{ objectFit: "cover" }} />
                    </div>
                </aside>
            </div>

            <aside className={ classes.imageContainerWide }>
                <div className={ classes.imageSubContainerWide }>
                    <Image src={ cameraImage } alt={ "Installation de systèmes d'alarmes automatiques" } fill={ true } style={{ objectFit: "cover" }} />
                </div>
            </aside>
        </section>
    )
}
