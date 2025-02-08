// eslint-disable-next-line react/prop-types
const Input = ({ name, className, onChange, onInput, value, min, max, maxLength, placeholder, type, autoComplete }) => {
    return (
        <input name={name} onChange={onChange} className={className} onInput={onInput} value={value} min={min} max={max} maxLength={maxLength} placeholder={placeholder} type={type} autoComplete={autoComplete}></input>
    )
}

export default Input