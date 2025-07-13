import './style.css'

interface NavButtonPropTypes {
    content: string
}

export default function NavButton ({content}: NavButtonPropTypes) {
    return (
        <div className="nav-bar-button">
            <span>
                {content}
            </span>
            <img src='/arrow-down.svg' className='nav-button-arrow' alt='arrow'/>
        </div>
    )
}