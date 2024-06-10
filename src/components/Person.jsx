import PropTypes from 'prop-types'
import './Person.scss'

/**
 * Composant Personne
 *
 * @param {Object} props - Props de la personne
 * @param {string} props.name - Le nom de la personne
 * @param {string} props.avatar - L'URL de l'avatar de la personne
 * @returns {JSX.Element} JSX du composant Personne
 */
export default function Person({ name = '', avatar = '' }) {
    return (
        <figure className="person">
            <img
                className="person__avatar"
                src={avatar}
                alt={`Photo de profil de ${name}`}
            />
            <figcaption className="person__name">{name}</figcaption>
        </figure>
    )
}

// Définition des types de props
Person.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
}
