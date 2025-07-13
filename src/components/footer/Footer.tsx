import { footerHyperLinks } from '../../utils/constants';
import Accordion from '../accordion/Accordion';
import './style.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="social-icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                <img src="/twitter-2012-positive-seeklogo.png" alt="Twitter" />
                <img src="/discord-seeklogo.png" alt="Discord" />
            </div>

            <div className='company-link-group'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img src='/chicks-logo-large.svg' alt="logo" />
                    <span className='company-email-typo'>support@chicksgold.com</span>
                </div>

                <div className="desktop-link-groups">
                    {
                        footerHyperLinks.map((group, index) => {
                            return (
                                <div key={index} className='company-link-group-container'>
                                    <span className='company-link-group-title'>{group.title}</span>
                                    {
                                        group.links.map((link, idx) => {
                                            return (
                                                <div key={idx}>
                                                    <span className='company-link-title'>{link.title}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <div className="mobile-accordion">
                    <Accordion items={footerHyperLinks} />
                </div>

                <div >
                    <div className='company-reputation-container'>
                        <div className='company-reputation-star-container'>
                            {
                                new Array(5).fill(<div className='reputation-star'>
                                    <img src='/star_full.svg' alt="star" />
                                </div>)
                            }
                        </div>
                        <span className='reputation-review'>
                            Trustpilot Reviews
                        </span>
                    </div>
                </div>
            </div>

            <div className='copy-right'>
                <span>© 2017 - 2020 ChicksGold.com. All Rights Reserved</span>
            </div>
        </div>
    )
}