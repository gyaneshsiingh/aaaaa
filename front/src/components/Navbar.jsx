
// import "../style/navbar.css";
// import { useNavigate } from 'react-router-dom';
// const Navbar = () => {
//   const navigate = useNavigate();

//   const navigateToHome = () => {
//     navigate('/');
//   };

//   const navigateToContact = () => {
//     navigate('/contact');
//   };

//   const navigateToAbout = () => {
//     navigate('/about');
//   };
//   return (
//     <div className='Container'>
//         <div className='Logo'>
//             <img src = "./astro.png" alt = "" onClick={navigateToHome}/>
//             </div>
//         <div className='Main'>
//             <p onClick={navigateToHome}>Home</p>
            
//             <p onClick={navigateToContact}>Contact</p>
//             <p onClick={navigateToAbout}>About us</p>
       
//         </div>
//         </div>

//   )
// }

// export default Navbar;
import React, { useState } from 'react';
import "../style/navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateToHome = () => {
    navigate('/');
    setMenuOpen(false);
  };

  const navigateToContact = () => {
    navigate('/contact');
    setMenuOpen(false);
  };

  const navigateToAbout = () => {
    navigate('/about');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Container'>
      <div className='Logo'>
        <img src="./astro.png" alt="" onClick={navigateToHome} />
      </div>
      <div className='Hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`Main ${menuOpen ? 'active' : ''}`}>
        <p onClick={navigateToHome}>Home</p>
        <p onClick={navigateToContact}>Contact</p>
        <p onClick={navigateToAbout}>About us</p>
      </div>
    </div>
  );
}

export default Navbar;
