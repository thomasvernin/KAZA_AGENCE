import aboutBanner from '@/images/about-banner.jpg'
import Collapes from '@/components/Collapes'
import Banner from '@/components/Banner'
import Loader from '@/components/Loader'
import aboutData from '@/data/about.json'
import { useFetchData } from '@/hooks/useFetchData'
import './About.scss'

/** 
@returns {JSX.Element} 
**/
export default function About() {
    const { isLoading, data } = useFetchData(aboutData)

    return (
        <main className="container">
            <Banner title="À propos" image={aboutBanner} />

            <section className="about-sections">
                {isLoading ? (
                    <Loader />
                ) : !data ? (
                    <div>Pas de données disponibles</div>
                ) : (
                    data.map((section, index) => (
                        <Collapes
                            key={index}
                            title={section.title}
                            content={section.content}
                        />
                    ))
                )}
            </section>
        </main>
    )
}







