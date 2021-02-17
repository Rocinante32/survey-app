import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Survey from "./survey";

export default function Welcome() {
    return (
        <BrowserRouter forceRefresh={true}>
            <div>
                <h1>Welcome to Survate</h1>
                <h5>
                    The easy way to create a survey! Create a survey and share
                    the link with the participants. Once you survey has been
                    completed you can view the results via a private link.
                </h5>

                <Link to="/survey">Create Survey!</Link>
            </div>
        </BrowserRouter>
    );
}
