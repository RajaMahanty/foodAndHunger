import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/main/HomePage';
import DDashboard from './pages/donor/DDashboard';
import CustomError from './pages/Error/CustomError';
import RecipientDetail from './pages/recipient/RecipientDetail';
import DonorDetail from './pages/donor/DonorDetail';
import RDashboard from './pages/recipient/RDashboard';
import Login from './pages/Auth/LoginPopUp';
import Register from './pages/Auth/Register';
import About from './pages/main/About';
import JoinUs from './pages/Auth/JoinUs';
import ContactUs from './pages/main/ContactUs';
import VDashboard from './pages/volunteer/VDashboard';
import VolunteerDetail from './pages/volunteer/VolunteerDetail';
import Volunteer from './Components/volunteer/Volunteer';
import AdminLayout from './Components/admin/AdminLayout';
import AdminDashboard from './Components/admin/AdminDashboard';
import ManageRequests from './Components/admin/ManageRequests';
import ManageDonations from './Components/admin/ManageDonations';
import ManageDonors from './Components/admin/ManageDonors.jsx';
import ManageRecipients from './Components/admin/ManageRecipients.jsx';
import ManageUsers from './Components/admin/ManageUsers.jsx';
import ManageVolunteers from './Components/admin/ManageVolunteers';
import Page from './Components/utils/Page.jsx';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        ErrorElement: <CustomError />, // create custom error component and change it
        children: [
            {
                index: true,
                element: <Page title={"Food & Hunger"}>  <Home /> </Page>// check if user logged in if yes, pass the param
            },
            {
                path: "about",
                element: <Page title={"F&H - About Us"}> <About /> </Page>
            },
            {
                path: "volunteer",
                element: <Page title={"F&H - Volunteers"}> <Volunteer /> </Page>
            },
            {
                path: "contact",
                element: <Page title={"F&H - Contact Us"}> <ContactUs /> </Page>
            }
        ]
    },
    {
        path: "/donors",
        element: <App />,
        ErrorElement: <CustomError />,
        // ErrorElement: <Error />, // create custom error component and change it
        children: [
            {
                path: "dashboard",
                element: <Page title={"F&H - Donor Dashboard"}> <DDashboard /> </Page>
            },
            {
                path: "details/:donor_id",
                element: <Page title={"F&H - Donor Details"}> <DonorDetail /> </Page>
            },
        ]
    },
    {
        path: "/recipients",
        element: <App />,
        ErrorElement: <CustomError />, // create custom error component and change it
        children: [
            {
                path: "dashboard",
                element: <Page title={"F&H - Recipient Dashboard"}> <RDashboard /> </Page>
            },
            {
                path: "details/:recipient_id",
                element: <Page title={"F&H - Recipient Details"}> <RecipientDetail /> </Page>
            },
        ]
    },
    {
        path: "/volunteers",
        element: <App />,
        ErrorElement: <CustomError />, // create custom error component and change it
        children: [
            {
                path: "dashboard",
                element: <Page title={"F&H - Volunteer Dashboard"}> <VDashboard /> </Page>
            },
            {
                path: "details/:volunteer_id",
                element: <Page title={"F&H - Volunteer Details"}> <VolunteerDetail /> </Page>
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <Page title={"F&H - Admin Dashboard"}> <AdminDashboard /> </Page>
            },
            {
                path: "requests",
                element: <Page title={"F&H - Manage Requests"}> <ManageRequests /> </Page>
            },
            {
                path: "donations",
                element: <Page title={"F&H - Manage Donations"}> <ManageDonations /> </Page>
            },
            {
                path: "users",
                element: <Page title={"F&H - Manage Users"}> <ManageUsers /> </Page>
            },
            {
                path: "donors",
                element: <Page title={"F&H - Manage Donors"}> <ManageDonors /> </Page>
            },
            {
                path: "recipients",
                element: <Page title={"F&H - Manage Recipients"}> <ManageRecipients /> </Page>
            },
            {
                path: "volunteers",
                element: <Page title={"F&H - Manage Volunteers"}> <ManageVolunteers /> </Page>
            }
        ]
    },
    {
        path: "/auth",
        element: <App />,
        ErrorElement: <CustomError />, // create custom error component and change it
        children: [
            {
                path: "login",
                element: <Page title={"F&H - Login"}> <Login /> </Page>
            },
            {
                path: "recipient/register",
                element: <Page title={"F&H - Recipient Registration"}> <Register /> </Page>
            },
            {
                path: "donor/register",
                element: <Page title={"F&H - Donor Registration"}> <Register /> </Page>
            },
            {
                path: "register",
                element: <Page title={"F&H - Register"}> <Register /> </Page>
            },
            {
                path: "join_us",
                element: <Page title={"F&H - Join Us"}> <JoinUs /> </Page>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
