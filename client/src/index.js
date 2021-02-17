import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./welcome";
import Survey from "./survey";

export default function Index() {
    return (
        <BrowserRouter forceRefresh={true}>
            <div>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/survey" component={Survey} />
            </div>
        </BrowserRouter>
    );
}
