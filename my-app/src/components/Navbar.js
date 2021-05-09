import React from "react";
import '../App.css';
import myPhoto from './myphoto.jpg';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import EditQuestions from "./EditQuestions";
import LogDay from "./LogDay";
import ViewData from "./ViewData";

function Navbar() {

  return (
    <Router>
      <div>
        <div className="navbar">
          <h2 className="logo">Day Logger</h2>
          <div className="navlist">
            <Link to="/Logday">Log Day</Link>
            <Link to="/">Edit Questions</Link>
            <Link to="/Data">View Data</Link>
          </div>
          <img className="photo" src={myPhoto} alt="myPhoto" />
        </div>
        <Route path="/Logday" component={LogDay} />
        <Route path='/EditQ' component={EditQuestions} />
        <Route path='/Data' component={ViewData} />
        {/* <Route path='/EditQ' component={a} /> */}

        <Route exact path='/' render={() => (
          <Redirect
            to='/EditQ'
          />
        )} />
      </div>
    </Router>
  );
}

export default Navbar;





// <a href="C:\Users\SAMSUNG\Desktop\CSE 316-web\HW1\HW1 Initial\Log Data.html">Log Data</a>
// <a href="C:\Users\SAMSUNG\Desktop\CSE 316-web\HW1\HW1 Initial\index.html">Edit Questions</a>
// <a href="https://blackboard.stonybrook.edu/webapps/blackboard/content/listContent.jsp?course_id=_1226262_1&content_id=_5827282_1&mode=reset">View Data</a>