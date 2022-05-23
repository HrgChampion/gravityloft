
import './App.css'
import Connect from './Components/Connect/Connect'
import Experts from './Components/Experts/Experts'
import Faq from './Components/Faq/Faq'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Connect/>
      <Experts/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
