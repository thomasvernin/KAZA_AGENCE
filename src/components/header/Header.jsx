import links from '@/data/mainNav.json'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'

/**
 * Représente le composant de l'en-tête de l'application.
 *
 * @param {Object[]} links - Les liens à afficher dans l'en-tête.
 * @returns {JSX.Element} Le composant de l'en-tête.
 */
export default function Header() {
    return (
        <header className="header container">
            <NavLink
                className="header__logo"
                to="/"
                aria-label="Revenir à l'accueil"
            >
                <Logo label="Logo Kasa" />
            </NavLink>
            <Nav links={links} />
        </header>
    )
}

// Définition des types de props
Header.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}



