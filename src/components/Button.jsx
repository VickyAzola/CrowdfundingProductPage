import PropTypes from 'prop-types'

function Button(props) {

    const classBase = {
        base: 'bg-ModerateCyan text-white rounded-full text-sm font-semibold hover:bg-DarkCyan',
        disabled: 'bg-gray-300 text-white rounded-full text-sm font-semibold'
    }

    const buttonWidth = {
        widest:  'py-4 px-12',
        narrow: 'py-3 px-7'
    }

    return (
        <>
        <button
        onClick={props.handleClick} 
        className={`${buttonWidth[props.variant]} ${classBase[props.baseStyle]}`}>
            {props.textButton}
        </button>
        </>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    textButton: PropTypes.string,
    variant: PropTypes.string,
    baseStyle: PropTypes.string,
}

export default Button
