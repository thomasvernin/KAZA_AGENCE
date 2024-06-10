import notFound404 from '@/images/404.svg'
import { Link } from 'react-router-dom'
import './NotFound.scss'

/**
 * Affiche le composant de la page NotFound.
 *
 * @returns {JSX.Element} Le composant NotFound rendu.
 */
export default function NotFound() {
    return (
        <main className="notFound container">
            <img src={notFound404} alt="" />
            <h1>Oups! La page que vous demandez n&apos;existe pas.</h1>
            <p>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </p>
        </main>
    )
}
