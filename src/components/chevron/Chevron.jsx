import PropTypes from 'prop-types'
import './Chevron.scss';

export default function Chevron({
    direction,
    color = 'currentColor',
    size = '5rem',
}) {
    return (
        <svg
            className="svg-chevron"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 47 79"
            fill={color}
        >
            {direction === 'left' ? (
                <path
                    d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                    fill={color}
                />
            ) : (
                <path
                    d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                    fill={color}
                />
            )}
        </svg>
    )
}




Chevron.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
}







