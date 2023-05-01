import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Category from "../pages/home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/news/news/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Terms from "../pages/shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]

    },
    {
        path: "/category",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
]);

export default router;