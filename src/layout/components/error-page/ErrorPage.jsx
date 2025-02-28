import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1>404</h1>
                <h2>Сторінку не знайдено</h2>
                <p>Вибачте, сторінка, яку ви шукаєте, не існує.</p>
                <a href="/" className="back-home">На головну</a>
            </div>
        </div>
    );
};

export default ErrorPage;