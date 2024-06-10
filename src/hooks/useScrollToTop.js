import { useEffect } from 'react'

/**
 * Un hook personnalisé qui fait défiler la fenêtre vers le haut chaque fois qu'un composant est monté.
 *
 * Utilisez ce hook dans vos composants de page pour vous assurer que la fenêtre est toujours défilée vers le haut lorsque l'utilisateur navigue vers une nouvelle page.
 */
export function useScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
}
