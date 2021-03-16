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
import Detail from "Routes/Detail";


export default () => (
    <Router>
        <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/TV" exact component={TV} />
            <Route path ="/movie/ : id" component={Detail}/>
            <Route path ="/show/ : id" component={Detail}/>
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);