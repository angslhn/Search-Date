// eslint-disable-next-line react/prop-types
const Text = ({type, className, text}) => {
    const Tag =  type
    return (
        <Tag className={className}>{text}</Tag>
    )
}

export default Text