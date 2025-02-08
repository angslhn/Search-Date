// eslint-disable-next-line react/prop-types
const Label = ({ htmlFor, className, text }) => {
    return (
        <label htmlFor={htmlFor} className={className}>{ text }</label>
    )
}

export default Label