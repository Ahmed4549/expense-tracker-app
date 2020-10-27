import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import About from "../containers/about";
import Home from '../containers/home'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Router>
        )
    }
}
export default AppRouter;