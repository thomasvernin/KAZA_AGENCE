import homeBanner from '@/images/home-banner.jpg' 
import Banner from '@/components/banner/Banner' 
import Gallery from '@/components/gallery/Gallery' 
import Loader from '@/components/loader/Loader'
import accommodationsData from '@/data/logements.json' 
import { useFetchData } from '@/hooks/useFetchData' 
import './Home.scss' 

/**
 * Rend le composant de la page d'accueil.
 *
 * @returns {JSX.Element} Le composant de la page d'accueil.
 */
export default function Home() {
    const { isLoading, data } = useFetchData(accommodationsData) // Utilise le hook useFetchData pour récupérer les données des logements
    return (
        <main className="content container">
            <Banner title="Chez vous, partout et ailleurs" image={homeBanner} /> {/* Affiche la bannière avec le titre */}
            <section className="logements">
                <h2 className="sr-only">Liste de logements</h2> {/* Titre pour l'accessibilité */}
                {isLoading ? ( // Si les données sont en cours de chargement
                    <Loader /> // Affiche le composant Loader
                ) : !data ? ( // Si aucune donnée n'est disponible
                    <div>Pas de données disponibles</div> // Affiche un message indiquant l'absence de données
                ) : (
                    <Gallery accommodations={data} /> // Affiche la galerie de logements avec les données récupérées
                )}
            </section>
        </main>
    )
}



