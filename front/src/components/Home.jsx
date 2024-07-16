import React from 'react'
 import "../style/home.css";
 import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const NavigateContact = () => {
    navigate('/contact');
  }
  return (
    <div className='Body'>
        <div className='Banner'>
             <img src = "./banner.png" alt = ""/> 
        </div>
        <div className = "box-container">
            <h1>India's Best Astrologer</h1>
            <div className='grid'>
              <div className='grid-item' onClick={NavigateContact}>
                <img src = "./talk1.png" alt = ""/>
                <p >Talk</p>
              </div>
              <div className='grid-item' onClick={NavigateContact}>
              <img src = "./chat1.png" alt = ""/>
              <p >Chat</p>
              </div>
            </div>
            </div>
            <div className='box-container services-container'>
              <h1>Services</h1>
            <div className='services-grid'>
            <div className='services-grid-item'>
                <img src = "./horoscope1.png" alt = ""/>
                <p>Vedic Astrology</p>
              </div>
              <div className='services-grid-item'>
              <img src = "./love.png" alt = ""/>
              <p>Numerology</p>
              </div>
              <div className='services-grid-item'>
              <img src = "./Life.png" alt = ""/>
              <p>Muhurta</p>
              </div>
              <div className='services-grid-item'>
              <img src = "./saturn.png" alt = ""/>
              <p>Vastu </p>
         

              </div>
              </div>
           
            </div>


            <div className='box-container'>
              <h1>Expertises</h1>
            <div className='Expertise-grid'>
            <div className='Expertise-grid-item'>
                <img src = "./heart.png" alt = ""/>
                <p>Love And Relationship</p>
              </div>
              <div className='Expertise-grid-item'>
              <img src = "./finance1.png" alt = ""/>
              <p>Financial Stability</p>
              </div>
              <div className='Expertise-grid-item'>
              <img src = "./marriage2.png" alt = ""/>
              <p>Married Life Problem</p>
              </div>
              <div className='Expertise-grid-item'>
              <img src = "./office.png" alt = ""/>
              <p>Career And Job</p>
              </div>
              
            </div>
    </div>

     <div className='description-home'>
      <h1>Why Visit Us?</h1>
      <p>Explore profound astrological wisdom, receive personalized guidance, and unlock your true potential with our expert consultations.</p>
     </div>


     
 </div>
  )
}

export default Home