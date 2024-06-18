import useAccordion from '@/hooks/useAccordion'
import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import './Accordion.scss'

export default function Accordion({ title = '', content = '' }) {
    const detailsRef = useRef()
    const summaryRef = useRef()
    const contentRef = useRef()
    const [isOpen, setIsOpen] = useState(false)

    useAccordion(detailsRef, summaryRef, contentRef)

    const toggleCollapse = () => {
        const content = contentRef.current;
        setIsOpen(!isOpen); 

        if (isOpen) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

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
        <details className={`accordion ${isOpen ? 'open' : ''}`} ref={detailsRef}>
            <summary className="accordion__title" ref={summaryRef} onClick={toggleCollapse}>
                {title}
                <span className={`accordion__icon ${isOpen ? 'open' : ''}`}></span> {/* Ajout de l'icône ici */}
            </summary>
            <div className="accordion__content" ref={contentRef}>
                {processedContent}
            </div>
        </details>
    )
}

Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
}










