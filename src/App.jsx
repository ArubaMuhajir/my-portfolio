import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks, } from './components';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

const App = () => {
   return (
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar/>
              <Hero/>
          </div>
          <About/>
          <Certificates/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
            <Footer/>
          </div>
        </div>
    </BrowserRouter>
    )
  }

export default App
