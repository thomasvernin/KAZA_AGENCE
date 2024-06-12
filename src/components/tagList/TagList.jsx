import PropTypes from 'prop-types'
import './TagList.scss'

/**
 * Composant TagList
 *
 * @param {Object} props - Props de TagList
 * @param {string[]} props.tags - Les tags à afficher
 * @param {string} props.className - Le nom de classe à ajouter
 * @returns {JSX.Element} JSX du composant TagList
 */
export default function TagList({ tags, className }) {
    return (
        <ul className={`tagList ${className}`}>
            {tags.map((tag) => (
                <li key={tag}>
                    <span className="tag">{tag}</span>
                </li>
            ))}
        </ul>
    )
}

// Définition des types de props
TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
}
