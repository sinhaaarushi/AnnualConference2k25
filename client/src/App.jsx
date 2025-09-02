import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./pages/Root.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MainContentPage from "./pages/MainContentPage.jsx";
import CommitteePage from "./pages/CommitteePage.jsx";
import InternationalAdvisoryCommitteePage from "./pages/InternationalAdvisoryCommitteePage.jsx";
import NationalAdvisoryCommitteePage from "./pages/NationalAdvisoryCommitteePage.jsx";
import OrganisingCommitteePage from "./pages/OrganisingCommitteePage.jsx";
import PaperSubmissionPage from "./pages/PaperSubmissionPage.jsx";
import SchedulePage from "./pages/SchedulePage.jsx";
import AdvisoryCommittee from "./pages/AdvisoryCommittee.jsx";
import SubmissionGuidelinesPage from "./pages/SubmissionGuidelines.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import SpecialSession from "./pages/SpecialSession.jsx";
import TimelinePage from "./pages/TimelinePage.jsx";
import KeynoteSpeakersPage from "./pages/KeynoteSpeakersPage.jsx";
import InvitedSpeakersPage from "./pages/InvitedSpeakersPage.jsx";

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
                                path: "committee/international-advisory",
                                element: <InternationalAdvisoryCommitteePage/>
                            }, {
                                path: "committee/national-advisory",
                                element: <NationalAdvisoryCommitteePage/>
                            }, {
                                path: "committee/organising",
                                element: <OrganisingCommitteePage/>
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
                            }, {
                                path: "timeline",
                                element: <TimelinePage/>
                            }, {
                                path: "keynote-speakers",
                                element: <KeynoteSpeakersPage/>
                            }, {
                                path: "invited-speakers",
                                element: <InvitedSpeakersPage/>
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
