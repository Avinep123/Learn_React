import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import Courses from './pages/Courses';
import Coursedetail from './pages/Coursedetail';

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<NotFound />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<Coursedetail />} />


      </Routes>

      <Footer />

    </div>
  )
}

export default App