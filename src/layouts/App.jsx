import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { Outlet } from 'react-router-dom'

/**
Le composant de mise en page principal de l'application.
 
@returns {JSX.Element} L'élément JSX pour la mise en page.
 */
export default function App() {
    return (
        <>
            <Header /> {}
            <Outlet /> {/*Permet ainsi de définir une mise en page commune (Header et Footer), tout en permettant aux composants de page de se rendre au bon endroit */}
            <Footer /> {}
        </>
    )
}
