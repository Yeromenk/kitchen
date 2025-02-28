import Welcome from "../welcome/Welcome.jsx";
import AboutUs from "../About-us/About-us.jsx";
import OurWorks from "../Our-works/Our-works.jsx";
import Steps from "../Steps/Steps.jsx";

const Home = () => {
    return (
        <>
            <Welcome/>
            <AboutUs/>
            <OurWorks/>
            <Steps/>
        </>
    );
}

export default Home;