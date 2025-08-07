import React from "react";
import InternationalAdvisoryCommittee from "../components/CommitteePageComponents/InternationalAdvisoryCommittee.jsx";
import NationalAdvisoryCommittee from "../components/CommitteePageComponents/NationalAdvisoryCommittee.jsx";

function AdvisoryCommittee() {

    return (
        <main className="flex w-full flex-col items-center justify-center align-middle">
            <InternationalAdvisoryCommittee/>
            <NationalAdvisoryCommittee/>
        </main>);
}

export default AdvisoryCommittee;