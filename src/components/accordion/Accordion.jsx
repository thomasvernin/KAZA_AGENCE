import useAccordion from '@/hooks/useAccordion'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import './Accordion.scss'

export default function Accordion({ title = '', content = '' }) {
    const detailsRef = useRef()
    const summaryRef = useRef()
    const contentRef = useRef()

    useAccordion(detailsRef, summaryRef, contentRef)

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

Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}




