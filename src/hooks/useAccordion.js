import { useEffect } from 'react'

// Définir des constantes pour la durée de l'animation et l'interpolation
const DURATION = 250
const EASING = 'ease-out'

/**
 * Hook personnalisé pour gérer l'ouverture et la fermeture de l'accordéon
 * @param {React.RefObject} detailsRef - Référence vers l'élément details
 * @param {React.RefObject} summaryRef - Référence vers l'élément summary
 * @param {React.RefObject} contentRef - Référence vers l'élément content
 */
export default function useAccordion(detailsRef, summaryRef, contentRef) {
    useEffect(() => {
        // Obtenir les valeurs actuelles des références
        const details = detailsRef.current
        const summary = summaryRef.current
        const content = contentRef.current

        // Initialiser la variable pour l'animation
        let animation = null

        /**
         * Gérer les événements de clic sur l'élément summary
         * @param {Event} e - Événement de clic
         */
        const onClick = (e) => {
            e.preventDefault()
            details.style.overflow = 'hidden'

            // Si l'accordéon est ouvert, le fermer
            if (details.open) {
                shrink()
                // Si l'accordéon est fermé, l'ouvrir
            } else {
                open()
            }
        }

        /**
         * Fermer l'accordéon
         */
        const shrink = () => {
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Animer la hauteur de l'élément details de startHeight à endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            )
            animation.onfinish = () => onAnimationFinish(false)
        }

        /**
         * Ouvrir l'accordéon
         */
        const open = () => {
            details.style.height = `${details.offsetHeight}px`
            details.open = true
            window.requestAnimationFrame(expand)
        }

        /**
         * Développer l'accordéon
         */
        const expand = () => {
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight + content.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Animer la hauteur de l'élément details de startHeight à endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            )
            animation.onfinish = () => onAnimationFinish(true)
        }

        /**
         * Nettoyer après la fin de l'animation
         * @param {boolean} open - Si l'accordéon est ouvert ou non
         */
        const onAnimationFinish = (open) => {
            animation = null
            details.open = open
            details.style.height = details.style.overflow = ''
            details.removeAttribute('style')
        }

        // Ajouter le gestionnaire d'événements de clic à l'élément summary
        summary.addEventListener('click', onClick)

        // Supprimer le gestionnaire d'événements lorsque le composant est démonté
        return () => {
            summary.removeEventListener('click', onClick)
        }
    }, [detailsRef, summaryRef, contentRef])
}
