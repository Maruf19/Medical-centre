import DashBoardLayout from "../../Layout/DashBoardLayout"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor"
import Allusers from "../../Pages/DashBoard/AllUsers/Allusers"
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors"
// import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard"
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment"
import Payment from "../../Pages/DashBoard/Payment/Payment"
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError"
import SignUp from "../../Pages/SignUp/SignUp"
import AdminRoute from "../AdminRoute/AdminRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const { createBrowserRouter } = require("react-router-dom")
const { default: Main } = require("../../Layout/Main")
const { default: Home } = require("../../Pages/Home/Home/Home")
const { default: Login } = require("../../Pages/Login/Login")

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
    },
    {
        path: "/dashboard",
        errorElement: <DisplayError></DisplayError>,
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment></MyAppointment>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: "/dashboard/adddoctor",
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: "/dashboard/managedoctors",
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://doctors-portal-server-ahm-rubayed.vercel.app/booking/${params.id}`)
            }
        ]
    }
])

export default router;