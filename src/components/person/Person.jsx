import PropTypes from 'prop-types'
import './Person.scss'

export default function Person({ name = '', avatar = '' }) {
    return (
        <figure className="person">
            <img
                className="person__avatar"
                src={avatar}
                alt={`Photo de profil de ${name}`}
            />
            <figcaption className="person__name">{name}</figcaption>
        </figure>
    )
}

Person.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
}

