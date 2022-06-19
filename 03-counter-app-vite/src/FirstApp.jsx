import PropTypes from "prop-types";

const getName = (name) => {
    return `Mi nombre es: ${name}`;
}

export const FirstApp = ({title, subtitle}) => {
    
    return (
    <>
    <h1 className="prueba">{getName(title)}</h1>
        <p>{subtitle}</p>
    </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps= {
    name: 'Santiago Baron',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
}