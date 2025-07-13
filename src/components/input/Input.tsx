import type { InputHTMLAttributes, ReactNode } from 'react'
import './style.css'

interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
    increaseFunc?: () => void
    decreaseFunc?: () => void
    startAddornment?: ReactNode
}

export default function Input({ className, increaseFunc, decreaseFunc, style, ...props }: InputPropTypes) {
    return (
        <div className='input-container' style={style}>
            {
                props.startAddornment && props.startAddornment
            }
            <input
                {...props}
                className='custom-input'
                name='numberInput'
                id='numberInput'
            ></input>
            {
                props.type === 'number' && <div className='input-button-group-box'>
                    <button className='input-arrow-button' onClick={increaseFunc}>
                        <img src='/arrow-white.svg' style={{ width: 12, height: 6, transform: 'rotate(180deg)' }} />
                    </button>
                    <button className='input-arrow-button' onClick={decreaseFunc}>
                        <img src='/arrow-white.svg' style={{ width: 12, height: 6 }} />
                    </button>
                </div>
            }
        </div>
    )
}