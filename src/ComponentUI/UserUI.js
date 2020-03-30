import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome";
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from "./Navbar";



export class UserUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Select City"
    };
  }
  
  render() {
    return (
      <div className="Back">
        <div className="container">
          <div className="row">
           
                <div className="col-lg-12">
                    <BrowserRouter>
                       <div className="App">
                           <Navbar />
                           <Route exact path="/" component={Login} />
                           <Route path="/Register" component={Register} />
                           <Route path="/Welcome" component={Welcome} />
                       </div>
                   </BrowserRouter>
                </div>
              </div>
            </div>
          
        
      </div>
    );
  }
}
export default UserUI;
