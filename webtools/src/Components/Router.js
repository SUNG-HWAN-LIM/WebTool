import React from "react";
import Header from "Components/Header";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";


export default () => (
    <Router>
        <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/TV" exact component={TV} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);