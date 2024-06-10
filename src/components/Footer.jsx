import './Footer.scss'
import Logo from './Logo'

/**
 * Composant Footer.
 *
 * @returns {JSX.Element} Le composant Footer rendu.
 */
export default function Footer() {
    return (
        <footer className="footer">
            <Logo color="currentColor" />
            <p className="footer__credit">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}



