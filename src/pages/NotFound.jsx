import notFound404 from '@/images/404.svg'
import { Link } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
    return (
        <main className="notFound container">
            <img src={notFound404} alt="" />
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </p>
        </main>
    )
}

