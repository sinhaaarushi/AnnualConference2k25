import React from "react";
import TimeLine from "../components/MainPageComponents/TimeLine.jsx";
import KeynoteSpeakers from "../components/MainPageComponents/KeynoteSpeakers.jsx";
import InvitedSpeakers from "../components/MainPageComponents/InvitedSpeakers.jsx";

function SchedulePage() {

    return (<main className="flex w-full flex-col items-center justify-center align-middle">
        <TimeLine/>
        <KeynoteSpeakers/>
        <InvitedSpeakers/>
    </main>)
}

export default SchedulePage;