import { useContext, useState } from 'react';
import { navbarButtons } from '../../utils/constants'
import IconButton from '../buttons/IconButton'
import NavButton from '../buttons/NavButton'
import MobileMenu from '../buttons/MobileMenu'
import './style.css'
import { AppContext } from '../../context/AppContext';

interface HeaderProps {
    isScrolling: boolean
}

export default function Header({ isScrolling = true }: HeaderProps) {

    const { purchasedItems } = useContext(AppContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className='navigation-bar' style={{ borderBottom: isScrolling ? '1px solid #4C6085' : '' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <button className='mobile-menu-button' onClick={toggleMobileMenu}>
                            <div className='hamburger-icon'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>

                        <img src='/chicks-logo-large.svg' className='navbar-logo' alt='logo' />
                    </div>

                    <div className='navbar-button-container desktop-nav'>
                        {
                            navbarButtons.map((button, index) => {
                                return (
                                    <NavButton key={index} content={button.content}></NavButton>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='navbar-button-container desktop-user-actions'>
                    <NavButton content='USD'></NavButton>
                    <IconButton
                        content={`cart (${purchasedItems})`}
                        startAddornmentIcon={<img src='/bucket.svg' alt='bucket' style={{ height: 16 }} />}
                        classes={'nav-custom-icon-button'}
                    ></IconButton>
                    <IconButton
                        content='sign in'
                        sx={{
                            background: '#39E29D',
                            gap: 10
                        }}
                        endAddornmentIcon={<img src='/customer.svg' alt='user' style={{ height: 20 }} />}
                    ></IconButton>
                </div>

                <div className='navbar-button-container mobile-user-actions'>
                    <IconButton
                        content='sign in'
                        sx={{
                            background: '#39E29D',
                            gap: 10
                        }}
                        endAddornmentIcon={<img src='/customer.svg' alt='user' style={{ height: 20 }} />}
                    ></IconButton>
                </div>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                purchasedItems={purchasedItems}
            />
        </>
    )
}