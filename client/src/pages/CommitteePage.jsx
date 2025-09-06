import React from "react";
import InternationalAdvisoryCommittee from "../components/CommitteePageComponents/InternationalAdvisoryCommittee.jsx";
import NationalAdvisoryCommittee from "../components/CommitteePageComponents/NationalAdvisoryCommittee.jsx";
import OrganisingCommittee from "../components/CommitteePageComponents/OrganisingCommittee.jsx";
import TechnicalCommittee from "../components/CommitteePageComponents/TechnicalCommittee.jsx";

function CommitteePage(){

    return(
        <main className="flex w-full flex-col items-center justify-center align-middle">
            <InternationalAdvisoryCommittee/>
            <NationalAdvisoryCommittee/>
            <OrganisingCommittee/>
            <TechnicalCommittee/>
        </main>
    )
}

export default CommitteePage;