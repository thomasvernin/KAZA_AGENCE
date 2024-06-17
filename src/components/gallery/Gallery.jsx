import PropTypes from 'prop-types'
import Card from '../cards/Card'
import './Gallery.scss'

export default function Gallery({ accommodations }) {
    return (
        <ul className="gallery">
            {accommodations.map((accommodation) => (
                <Card key={accommodation.id} accommodation={accommodation} />
            ))}
        </ul>
    )
}

Gallery.propTypes = {
    accommodations: PropTypes.arrayOf(PropTypes.object).isRequired,
}

