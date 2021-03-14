import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import C2 from "Routes/C2";
import C3 from "Routes/C3";
import C4 from "Routes/C4";
import C5 from "Routes/C5";
import C6 from "Routes/C6";
import C7 from "Routes/C7";
import C8 from "Routes/C8";


export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/C2" exact component={C2} />
            <Route path="/C3" exact component={C3} />
            <Route path="/C4" exact component={C4} />
            <Route path="/C5" exact component={C5} />
            <Route path="/C6" exact component={C6} />
            <Route path="/C7" exact component={C7} />
            <Route path="/C8" exact component={C8} />
        </>
    </Router>
);