import './Footer.css'
import {FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3><FaMapMarkerAlt/> Локація</h3>
                    <p>вулиця Івана Франка, 58</p>
                    <p>Ужгород, Закарпатська область, Україна</p>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.3263858394944!2d22.272485776930235!3d48.62743121693135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184b1c3854ab%3A0x9db958fa192246bc!2zVklMTEEgR1JBTkRFINCh0YLRg9C00ZbRjyDQtNC40LfQsNC50L3RgyDRltC90YLQtdGAJ9GU0YDRltCy!5e1!3m2!1sru!2scz!4v1740323910970!5m2!1sru!2scz"
                            width="100%"
                            height="200"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                </div>

                <div className="footer-section">
                    <h3><FaClock/> Часи роботи</h3>
                    <ul className="hours-list">
                        <li><span>Понеділок - П&#39;ятниця:</span> 10:00 - 19:00</li>
                        <li><span>Субота:</span> 10:00 - 16:00</li>
                        <li><span>Неділя:</span> Зачинено</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3><FaEnvelope/>Контакти</h3>
                    <p>
                        <a href="tel:+380995256783" className="contact-link">
                            <FaPhone size={20}/> +380 995 256 783
                        </a>
                    </p>
                    <p>
                        <a href="mailto:villagrande.uz@gmail.com" className="contact-link">
                            <FaEnvelope size={20}/> villagrande.uz@gmail.com
                        </a>
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/villagrande1?locale=ru_RU" target="_blank" rel="noopener noreferrer">
                            <FaFacebook/>
                        </a>
                        <a href="https://www.instagram.com/villa_grande1?igsh=YzJmZzJwaW1yZjIy" target="_blank" rel="noopener noreferrer">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer