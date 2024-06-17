import Accordion from '@/components/accordion/Accordion'
import Loader from '@/components/loader/Loader'
import Person from '@/components/person/Person'
import Rating from '@/components/rating/Rating'
import TagList from '@/components/taglist/TagList'
import logementsData from '@/data/logements.json'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'
import { useFetchData } from '../hooks/useFetchData'
import './Accommodation.scss'

const useAccommodation = (url) => {
    const { isLoading, data: accommodations } = useFetchData(url)
    const { id } = useParams()
    const accommodation = Array.isArray(accommodations)
        ? accommodations.find((acc) => acc.id === id)
        : null

    return { isLoading, accommodation }
}

export default function Accommodation() {
    useScrollToTop()
    const navigate = useNavigate()
    const { isLoading, accommodation } = useAccommodation(logementsData)

    useEffect(() => {
        if (!accommodation && !isLoading) {
            navigate('/404') // Redirige vers la page NotFound
        }
    }, [accommodation, isLoading, navigate])

    if (isLoading) {
        return <Loader />
    }

    if (!accommodation) {
        return null
    }

    const {
        cover,
        title,
        location,
        host,
        rating,
        tags,
        description,
        equipments,
        pictures,
    } = accommodation

    return (
        <main className="accommodation container">
            {pictures ? (
                <Carousel key={pictures} pictures={pictures} />
            ) : (
                <img src={cover} alt="Image de couverture" />
            )}
            <section className="accommodation__summary">
                <hgroup className="accommodation__heading">
                    <h1 className="accommodation__title">{title}</h1>
                    {location && (
                        <p className="accommodation__location">{location}</p>
                    )}
                    <TagList className={`accommodation__tags`} tags={tags} />
                </hgroup>
                {host && (
                    <aside className="accommodation__infos">
                        <Rating score={rating} activeColor="#ff6060" />
                        <Person name={host.name} avatar={host.picture} />
                    </aside>
                )}
            </section>
            <section className="accommodation__details">
                <Accordion title="Description" content={description} />
                <Accordion title="Équipements" content={equipments} />
            </section>
        </main>
    )
}





