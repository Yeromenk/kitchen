import './About-us.css'
import { FaAward, FaUsers, FaGem} from 'react-icons/fa'

const AboutUs = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <h2 className="about-title">Про Kitchen Masters</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Kitchen Masters – це експерти у створенні сучасних та функціональних кухонь.
                            Ми об&#39;єднуємо традиційне ремесло з останніми тенденціями дизайну, щоб створити
                            унікальні простори для приготування смачних страв.
                        </p>
                        <p>
                            Наші кухні – це поєднання естетики та зручності, де кожна деталь має значення.
                            Використовуючи високоякісні матеріали та сучасні технології, ми гарантуємо,
                            що кожна кухня стане справжнім витвором мистецтва та функціональним майданчиком для творчості.
                        </p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaGem className="feature-icon" />
                            <h3>Висока Якість</h3>
                            <p>Тільки кращі матеріали для ідеального результату</p>
                        </div>
                        <div className="feature-card">
                            <FaAward className="feature-icon" />
                            <h3>Інновації</h3>
                            <p>Сучасні технології та дизайн для вашої кухні</p>
                        </div>
                        <div className="feature-card">
                            <FaUsers className="feature-icon" />
                            <h3>Професіоналізм</h3>
                            <p>Досвідчені фахівці, що втілюють ваші мрії в життя</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs