import { navbarButtons } from '../../utils/constants';
import NavButton from '../buttons/NavButton';
import IconButton from '../buttons/IconButton';
import './mobileMenu.css';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    purchasedItems: number;
}

export default function MobileMenu({ isOpen, onClose, purchasedItems }: MobileMenuProps) {
    return (
        <>
            {/* Overlay */}
            <div 
                className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} 
                onClick={onClose}
            />
            
            {/* Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="mobile-menu-title">Menu</span>
                    <button className="mobile-menu-close" onClick={onClose}>
                        <img src="/arrow-white.svg" alt="close" style={{ transform: 'rotate(45deg)' }} />
                    </button>
                </div>
                
                <div className="mobile-menu-content">
                    {/* Navigation Buttons */}
                    <div className="mobile-menu-section">
                        <span className="mobile-menu-section-title">Navigation</span>
                        {navbarButtons.map((button, index) => (
                            <div key={index} className="mobile-menu-item">
                                <NavButton content={button.content} />
                            </div>
                        ))}
                    </div>
                    
                    {/* User Actions */}
                    <div className="mobile-menu-section">
                        <span className="mobile-menu-section-title">Account</span>
                        <div className="mobile-menu-item">
                            <NavButton content='USD' />
                        </div>
                        <div className="mobile-menu-item">
                            <IconButton 
                                content={`cart (${purchasedItems})`} 
                                startAddornmentIcon={<img src='/bucket.svg' alt='bucket' style={{height: 16}} />}
                                classes={'nav-custom-icon-button'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 