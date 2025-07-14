import './style.css'

export default function PaymentBar() {
    return (
        <div className="payment-bar-container">
            <div className='payment-icons'>
                <img src="visa-logo.png" alt="Visa" />
                <img src="mastercard.png" alt="Mastercard" />
                <img src="amex.png" alt="American Express" />
                <img src="skrill.png" alt="Skrill" />
                <img src="crypto-logo.png" alt="Bitcoin" />
                <span className="more">and 50+ more</span>
            </div>
        </div>
    )
}