import React from 'react';
import PropTypes from 'prop-types';

/**
Rend un composant Chevron.

@param {Object} props - Les props du composant.
@param {string} props.direction - La direction du chevron ('left' ou 'right').
@param {string} [props.color='currentColor'] - La couleur du chevron.
@param {string} [props.size='5rem'] - La taille du chevron.
@returns {JSX.Element} Le composant Chevron rendu.
*/
export default function Chevron({
    direction,
    color = 'currentColor',
    size = '5rem',
}) {
    // Chemin SVG pour le chevron pointant vers la gauche
    const leftChevronPath = "M10 15l-6-6 6-6";
    // Chemin SVG pour le chevron pointant vers la droite
    const rightChevronPath = "M6 15l6-6-6-6";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill={color}
        >
            <path
                d={direction === 'left' ? leftChevronPath : rightChevronPath}
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    );
}

// Définition des types de props
Chevron.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
};





