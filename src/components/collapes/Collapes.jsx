import useAccordion from '@/hooks/useAccordion'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import './Collapes.scss'

/**
 * Composant Accordion
 *
 * @param {Object} props - Props de l'Accordion
 * @param {string} props.title - Le titre de l'accordéon
 * @param {string | array} props.content - Le contenu de l'accordéon
 * @returns {JSX.Element} JSX du composant Accordion
 */
export default function Accordion({ title = '', content = '' }) {
    // Créer des références pour les éléments details, summary et content
    const detailsRef = useRef()
    const summaryRef = useRef()
    const contentRef = useRef()

    // Utiliser le hook personnalisé pour gérer l'ouverture et la fermeture de l'accordéon
    useAccordion(detailsRef, summaryRef, contentRef)

    // Traiter le contenu pour rendre une liste ou un paragraphe en fonction du type reçu
    const processedContent = Array.isArray(content) ? (
        <ul className="list">
            {content.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    ) : (
        <p>{content}</p>
    )

    return (
        <details className="accordion" ref={detailsRef}>
            <summary className="accordion__title" ref={summaryRef}>
                {title}
            </summary>
            <div className="accordion__content" ref={contentRef}>
                {processedContent}
            </div>
        </details>
    )
}

// Définition des types de props
Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

