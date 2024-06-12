import PropTypes from 'prop-types'
import './Banner.scss'

/**
 * Composant de bannière affichant une image et le titre.
 
 * @param {Object} props - Les props du composant.
 * @param {string} props.title - Le titre à afficher. S'il n'est pas fourni, aucun titre ne sera affiché.
 * @param {string} props.image - L'URL de l'image à afficher.
 * @returns {React.Element} Le composant de bannière rendu.
 */
export default function Banner({ title = '', image = '' }) {
    return (
        <header
            className="banner"
            style={{ '--background-image': `url(${image})` }}
        >
            {title && <h2 className="banner__title">{title}</h2>}
        </header>
    )
}

// PropTypes
Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}

