import PropTypes from 'prop-types'
import './Banner.scss'

export default function Banner({ title = '', image = '' }) {
    return (
        <header
            className="banner"
            style={{ '--background-image': `url(${image})` }}
        >
            {title && <h2 className="banner__title">{title}</h2>}
        </header>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}




