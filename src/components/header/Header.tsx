import { useState } from 'react';
import { navbarButtons } from '../../utils/constants'
import IconButton from '../buttons/IconButton'
import NavButton from '../buttons/NavButton'
import './style.css'

interface HeaderProps {
    isScrolling: boolean
}

export default function Header({isScrolling = true}: HeaderProps) {

    const [purchasedItems, setPurchasedItems] = useState(0);

    return (
        <div className='navigation-bar' style={{borderBottom: isScrolling ? '1px solid #4C6085' : ''}}>
            <img src='/chicks-logo-large.svg' className='navbar-logo' alt='logo' />
            <div className='navbar-button-container'>
                {
                    navbarButtons.map((button, index) => {
                        return (
                            <NavButton key={index} content={button.content}></NavButton>
                        )
                    })
                }
            </div>
            <div className='navbar-button-container'>
                <NavButton content='USD'></NavButton>
                <IconButton 
                    content={`cart (${purchasedItems})`} 
                    startAddornmentIcon={<img src='/bucket.svg' alt='bucket' style={{height: 16}} />}
                    classes={'nav-custom-icon-button'}
                ></IconButton>
                <IconButton
                    content='sign in'
                    sx={{
                        background: '#39E29D',
                        gap: 10
                    }}
                    endAddornmentIcon={<img src='/customer.svg' alt='user' style={{height: 20}} />}
                ></IconButton>
            </div>
        </div>
    )
}