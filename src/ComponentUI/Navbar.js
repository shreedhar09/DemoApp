import React from 'react';
import {Link,withRouter} from 'react-router-dom'
function Navbar (props){
  return (
     <nav>
         
        <div className="nav-wrapper" style={{background:"red"}}>
        <a href="#" className="brand-logo">Demo App</a>
        <ul id="nav-mobile" className="right">
            <ul><Link to="/">Login</Link></ul>
            <ul><Link to="/Register">Register</Link></ul>
        </ul>
        </div>
  </nav>
  )
}

export default withRouter(Navbar);