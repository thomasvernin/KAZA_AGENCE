import PropTypes from 'prop-types'
import Card from "../cards/Cards"
import './Gallery.scss'

/**
 * Composant Gallery qui affiche une liste de logements.
 *
 * @param {Object[]} props.accommodations - Les logements à afficher.
 * @returns {React.Element} Le composant Gallery rendu.
 */
export default function Gallery({ accommodations }) {
    return (
        <ul className="gallery">
            {accommodations.map((accommodation) => (
                <Card key={accommodation.id} accommodation={accommodation} />
            ))}
        </ul>
    )
}

// PropTypes
Gallery.propTypes = {
    accommodations: PropTypes.arrayOf(PropTypes.object).isRequired,
}
