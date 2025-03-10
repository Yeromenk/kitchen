import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Root from "./layout/root/Root.jsx";
import ErrorPage from "./layout/components/error-page/ErrorPage.jsx";
import Footer from "./layout/components/footer/Footer.jsx";
import Home from "./layout/components/Home/Home.jsx";
import ScrollToTop from "./layout/components/Scroll-to-top/Scroll-to-top.jsx";

const App = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

const Layout = () => {
    return (
        <>
            <Root/>
            <Outlet/>
            <ScrollToTop />
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,

        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])

export default App