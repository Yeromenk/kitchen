import './Steps.css'
import {FaClipboardList, FaTools, FaRegHandshake, FaRegSmile, FaPencilRuler, FaTruck} from 'react-icons/fa'

const Steps = () => {
    const steps = [
        {
            icon: <FaClipboardList/>,
            title: "Консультація",
            description: "Обговорюємо ваші потреби, побажання та бюджет для створення індивідуального плану."
        },
        {
            icon: <FaPencilRuler/>,
            title: "Проектування",
            description: "Розробляємо детальний дизайн-проект з урахуванням усіх ваших побажань."
        },
        {
            icon: <FaTools/>,
            title: "Розрахунок",
            description: "Підбираємо матеріали та комплектуючі, робимо точний розрахунок вартості."
        },
        {
            icon: <FaTruck/>,
            title: "Виробництво",
            description: "Виготовляємо меблі на власному виробництві з якісних матеріалів."
        },
        {
            icon: <FaRegHandshake/>,
            title: "Монтаж",
            description: "Професійна команда виконує установку меблів за всіма стандартами."
        },
        {
            icon: <FaRegSmile/>,
            title: "Фінальна перевірка",
            description: "Ми гарантуємо, що все відповідає нашим стандартам якості та ваше повне задоволення."
        }
    ];

    return (
        <section className="steps-section" id="steps">
            <div className="steps-container">
                <h2 className="steps-title"> Як ми працюємо</h2>
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div className="step-card" key={index}>
                            <div className="step-number">{index + 1}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;