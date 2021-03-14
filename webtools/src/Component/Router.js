import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Router/Home";
import Home from "Router/C1";
import Home from "Router/C2";
import Home from "Router/C3";
import Home from "Router/C4";
import Home from "Router/C5";
import Home from "Router/C6";
import Home from "Router/C7";


export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/C1" exact component={C1} />
            <Route path="/C2" exact component={C2} />
            <Route path="/C3" exact component={C3} />
            <Route path="/C4" exact component={C4} />
            <Route path="/C5" exact component={C5} />
            <Route path="/C6" exact component={C6} />
            <Route path="/C7" exact component={C7} />
        </>
    </Router>
);