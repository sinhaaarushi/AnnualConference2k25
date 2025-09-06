import React from "react";
import {useNavigate, useRouteError} from "react-router-dom";
import {Typography} from "@material-tailwind/react";
import {useDispatch} from "react-redux";
import {clearAll as clearAllUser} from "../redux/userSlice.js";
import {logoutUser} from "../redux/apiCalls/userCalls.js";

const ErrorPage = () => {
    const error = useRouteError();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClearSiteData = async () => {
        dispatch(clearAllUser());
        await logoutUser(dispatch);
        navigate("/login");
    };

    return (<div
        className="p-10 bg-white mx-auto grid place-items-center text-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="flex flex-col items-center justify-center align-middle">
            <Typography
                variant="h1"
                color="blue-gray"
                className="mt-8 !text-3xl !leading-snug md:!text-4xl"
            >
                <section className="flex flex-wrap items-center justify-evenly -p-4">
                    <div className="mt-2 mt-lg-auto">
                        <h1 className="mb-2 bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-6xl font-extrabold text-transparent text-gray-900 custom-link font-hihi sm:text-4xl md:text-5xl lg:text-6xl">
                            {(error && (error.statusText || error.message)) || "Opps!"}
                            <i className="bi-arrow-right ms-2"></i>
                        </h1>
                    </div>
                </section>
                <br/>
                It looks like something went wrong.
            </Typography>
            <Typography className="mx-auto mt-8 mb-14 font-normal text-gray-500 text-[18px] md:max-w-sm">
                Please try refreshing the page or come back later. If problem exists
                please
                <span onClick={handleClearSiteData} className="cursor-pointer text-blue-400 hover:underline"> clear site data </span>
                and login again.
            </Typography>
        </div>
    </div>);
};

export default ErrorPage;
