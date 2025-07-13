import type { HTMLAttributes, ReactNode, SelectHTMLAttributes } from 'react'
import './style.css'

interface SelectPropTypes extends HTMLAttributes<HTMLDivElement> {
    startAddorment?: ReactNode,
    arrowIcon?: ReactNode
    children?: ReactNode
    selectedVal?: any,
    onClick?: () => void,
    float?: string
}

export default function Select({ startAddorment=<></>, arrowIcon=<></>, children, selectedVal, onClick, float, ...props }: SelectPropTypes) {
    return (
        <div style={{position: 'relative'}}>
            <div className='select-container' {...props} onClick={onClick} >
                {startAddorment}
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: startAddorment ? '10px' : '0px'}}>
                    {
                        float && <span className='select-float-letter'>{float}</span>
                    }
                    
                    <span className='select-content'>{selectedVal}</span>
                </div>
                <div className='select-arrow-icon'>
                    {arrowIcon}
                </div>
            </div>
            <div style={{position: 'absolute', zIndex: '1000'}}>
                {
                    children
                }
            </div>
        </div>
    )
}