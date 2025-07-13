import Footer from './components/footer/Footer'
import PaymentBar from './components/paymentbar/PaymentBar'
import './index.css'
import MasterLayout from './layout/MasterLayout'
import Home from './pages/home'

function App() {

  return (
    <>
      <MasterLayout>
        <Home></Home>
        <PaymentBar />
        <Footer />
      </MasterLayout>
    </>
  )
}

export default App
