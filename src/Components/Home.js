import React from 'react';
import About from './About';
import Header from './Header';
import Contact from './Contact';
function Home() {
  return (
    <div >
    <Header></Header>
    <img src="images/intro-page.jpg"   className="img-responsive img-fluid" alt=''/>
    <About></About>
    <Contact></Contact>

  </div>
  )
}

export default Home
