import aboutBanner from '@/images/about-banner.jpg'
import Accordion from '@/components/accordion/Accordion'
import Banner from '@/components/banner/Banner'
import Loader from '@/components/loader/Loader'
import aboutData from '@/data/about.json'
import { useFetchData } from '@/hooks/useFetchData'
import './About.scss'

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
                        <Accordion
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








