import Footer from './components/footer/Footer'
import PaymentBar from './components/paymentbar/PaymentBar'
import AppContextProvider from './context/AppContext'
import './index.css'
import MasterLayout from './layout/MasterLayout'
import Home from './pages/home'

function App() {

  return (
    <>
      <AppContextProvider>
        <MasterLayout>
          <Home></Home>
          <PaymentBar />
          <Footer />
        </MasterLayout>
      </AppContextProvider>
    </>
  )
}

export default App
