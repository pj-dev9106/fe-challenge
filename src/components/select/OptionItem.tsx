import type { Dispatch, SetStateAction } from "react"

interface OptionPropTypes {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    onSelect: (value: string) => void
    content: string
    value: string
}

export default function OptionItem ({content, value, onSelect, show, setShow}: OptionPropTypes) {

    const handleClick = () => {
        console.log('caled!')
        setShow(false);
        onSelect(value);
    }

    return (
        <div className="option-item-container" onClick={handleClick}>
            {
                content
            }
        </div>
    )
}