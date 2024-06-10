import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
