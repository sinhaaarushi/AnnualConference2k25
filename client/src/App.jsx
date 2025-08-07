import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./pages/Root.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MainContentPage from "./pages/MainContentPage.jsx";
import CommitteePage from "./pages/CommitteePage.jsx";
import PaperSubmissionPage from "./pages/PaperSubmissionPage.jsx";
import SchedulePage from "./pages/SchedulePage.jsx";
import AdvisoryCommittee from "./pages/AdvisoryCommittee.jsx";
import SubmissionGuidelinesPage from "./pages/SubmissionGuidelines.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import SpecialSession from "./pages/SpecialSession.jsx";

function App() {
    const router = createBrowserRouter([
            {
                path: "/",
                element: <Root/>,
                errorElement: <ErrorPage/>,
                children: [
                    {
                        path: "",
                        element: <HomePage/>,
                        children: [
                            {
                                path: "",
                                element: <MainContentPage/>
                            }, {
                                path: "committee",
                                element: <CommitteePage/>
                            }, {
                                path: "paperSubmission",
                                element: <PaperSubmissionPage/>
                            }, {
                                path: "schedule",
                                element: <SchedulePage/>
                            }, {
                                path: "advisoryCommittee",
                                element: <AdvisoryCommittee/>
                            }, {
                                path: "submissionGuidelines",
                                element: <SubmissionGuidelinesPage/>
                            }, {
                                path: "registration",
                                element: <RegistrationPage/>
                            }, {
                            path: "specialSession",
                                element: <SpecialSession/>
                            }
                        ]
                    }
                ],
            },
        ]);

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                closeOnClick={true}
                transition={Zoom}
                draggable={true}
            />
            <div className="relative">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
