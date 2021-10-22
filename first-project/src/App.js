import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Detail from "./component/Detail";
import Blog from "./component/Blog";
import Menu from "./component/Menu";
import Product from "./component/Product";
import Contact from "./component/Contact";
import DetailPage from "./component/DetailPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Switch>
                    <Route exact path="/detail/:id" component={DetailPage} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/" component={Blog} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
