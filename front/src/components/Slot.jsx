
import "../style/slot.css";


const Slot = () => {
    const phoneNumber = '9721409632';
    const pretext = encodeURIComponent('I hope this message finds you well. I am interested in scheduling an appointment for an astrological consultation through your website. Could you please provide me with information regarding your availability, and suitable time slots for [date or range of dates]?');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${pretext}`;

    const handleBookAppointment = () => {
        window.open(whatsappLink, '_blank', 'noopener noreferrer');
    };

    return (
        <div className='slot-container'>
           
            <div className='description'>
            <div className='slot-image'>
                <img src="./GG.jpeg" alt="Astrologer" />
            </div>
                <h2> Gyanesh Singh</h2>
                <p>With over 20 years of experience, Gyanesh Singh is a renowned expert in Vedic astrology, palmistry, and numerology. His accurate predictions and compassionate guidance offer insights into career, relationships, health, and finances, helping you navigate life's challenges with confidence..</p>
                

                <button onClick={handleBookAppointment}>Book Appointment</button>
            </div>
        </div>
    );
};

export default Slot;
