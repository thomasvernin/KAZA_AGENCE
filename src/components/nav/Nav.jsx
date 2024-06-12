import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

/**
 * Rend le composant de navigation.
 * 
 * @param {JSON} links - Un tableau d'objets de lien.
 * @param {string} links.to - L'URL du lien.
 * @param {string} links.label - Le libellé du lien.
 * @param {string} links.ariaLabel - L'aria-label du lien.
 * @returns {JSX.Element} Le composant de navigation rendu.
 */

export default function Nav({ links }) {
    if (!links || Object.keys(links).length === 0) {
        return null
    }

    return (
        <nav aria-label="Menu principal">
            <ul className="nav">
                {Object.values(links).map((link, index) => (
                    <li className="nav__item" key={index}>
                        <NavLink
                            className="nav__link"
                            to={link.to}
                            aria-label={link.ariaLabel}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// Définition des types de props

Nav.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}
