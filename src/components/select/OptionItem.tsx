import './style.css'

interface OptionItemPropTypes {
    content: string
    value: string
    onSelect: (value: string) => void
    setShow: (show: boolean) => void
    show: boolean
}

export default function OptionItem({ content, value, onSelect, setShow, show }: OptionItemPropTypes) {
    const handleClick = () => {
        onSelect(value)
        setShow(!show)
    }

    return (
        <div className='option-item-container' onClick={handleClick}>
            {content}
        </div>
    )
}