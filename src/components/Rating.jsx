import PropTypes from 'prop-types'

/**
 * Composant Star
 *
 * @param {Object} props - Props de l'étoile
 * @param {string} props.fill - La couleur de remplissage de l'étoile
 * @returns {JSX.Element} JSX du composant Star
 */
function Star({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            width="24px"
            height="24px"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    )
}

/**
 * Composant Rating
 * @param {Object} props - Props de la note
 * @param {number} props.score - La note à afficher
 * @param {string} props.activeColor - La couleur des étoiles actives
 * @param {string} props.mutedColor - La couleur des étoiles inactives
 * @returns {JSX.Element} JSX du composant Rating
 */
export default function Rating({
    score,
    activeColor = '#000',
    mutedColor = '#E3E3E3',
}) {
    return (
        <div className="rating" aria-label={`Note de ${score} sur 5`}>
            {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < score ? activeColor : mutedColor} />
            ))}
        </div>
    )
}

// Définition des types de props
Star.propTypes = {
    fill: PropTypes.string.isRequired,
}

Rating.propTypes = {
    score: PropTypes.number.isRequired,
    activeColor: PropTypes.string,
    mutedColor: PropTypes.string,
}
