import Chevron from '@/components/Chevron'
import PropTypes from 'prop-types'
import { useState } from 'react'
import './Carousel.scss'

/**
 * Composant Carousel. Affiche un carrousel d'images.
 *
 * @param {Array} pictures - Un tableau d'URL d'images.
 * @returns {JSX.Element} Le composant Carousel rendu.
 */
export default function Carousel({ pictures }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
        )
    }

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
        )
    }

    return (
        <div className="carousel">
            {pictures.map((picture, index) => (
                <img
                    key={index}
                    className={`carousel__image ${
                        index === currentImageIndex ? 'visible' : ''
                    }`}
                    src={picture}
                    alt={`Slide ${index + 1}`}
                />
            ))}

            {pictures.length > 1 && (
                <div className="carousel__nav">
                    <div className="carousel__pagination">
                        {currentImageIndex + 1} / {pictures.length}
                    </div>
                    <button
                        className="carousel__nav-prev"
                        onClick={handlePrevClick}
                        aria-label="Précédent"
                    >
                        <Chevron direction="left" />
                    </button>
                    <button
                        className="carousel__nav-next"
                        onClick={handleNextClick}
                        aria-label="Suivant"
                    >
                        <Chevron direction="right" />
                    </button>
                </div>
            )}
        </div>
    )
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
