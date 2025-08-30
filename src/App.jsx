import Charecters from "./components/Charecters"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Arena from "./components/Arena"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Charecters/>
      <Arena/>
      <Footer/>
    </div>
  )
}

export default App