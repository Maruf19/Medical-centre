import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import SignUp from "../../Pages/SignUp/SignUp"

const { createBrowserRouter } = require("react-router-dom")
const { default: Main } = require("../../Layout/Main")
const { default: Home } = require("../../Pages/Home/Home/Home")
const { default: Login } = require("../../Pages/Login/Login")

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default router;