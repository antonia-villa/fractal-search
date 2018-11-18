import React from "react";
import About from "./About.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => <Home />;
const AboutMe = () => <About />;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={HomePage} />
      <Route path="/about/" component={AboutMe} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;
