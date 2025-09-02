import React from "react";
import About from "../components/MainPageComponents/AboutConference.jsx";
import TimeLine from "../components/MainPageComponents/TimeLine.jsx";
import Publication from "../components/PaperSubmissionPageComponents/Publication.jsx";
import AboutInstitute from "../components/MainPageComponents/AboutInstitute.jsx";
import StatsSection from "../components/MainPageComponents/StatsSection.jsx";
import CTASection from "../components/MainPageComponents/CTASection.jsx";
import FundingSponsoringAgencies from "../components/MainPageComponents/FundingSponsoringAgencies.jsx";
import AbstractSubmission from "../components/MainPageComponents/AbstractSubmission.jsx";

const MainContentPage = () => {

    return (<main className="flex w-full flex-col items-center justify-center align-middle">
        <About/>
        <StatsSection/>
        <TimeLine/>
        <AboutInstitute/>
        <FundingSponsoringAgencies/>
        <AbstractSubmission/>
        <Publication/>
        <CTASection/>
        {/*<Sponsors/>*/}
    </main>);
};

export default MainContentPage;