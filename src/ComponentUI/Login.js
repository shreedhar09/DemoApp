import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
    reEmail:'',
    rePassword:'',
    loginFlag:false
  }
 }
//  componentDidMount(){
//    // let retrievedObject = JSON.parse(localStorage.getItem('formData'));
     
//      this.setState({ reEmail: retrievedObject.email,
//         rePassword: retrievedObject.password
//       })
//  }
 handleClick(event){
     debugger
     event.preventDefault();
 if(this.state.email === this.props.UserDataBind.email && this.state.password === this.props.UserDataBind.password)
 {
     this.setState({
        loginFlag:true
     })
 }
 else{
     alert("Please check credential");
 }
}
render() {
    if (this.state.loginFlag) {
        return <Redirect to='/welcome'/>;
      }
    return (
      <div>
         <h1> Login </h1>
         <form>
             <label>
              Email:
             <input type="text" name="email" value={this.state.email}
             onChange={(e) => this.setState({email:e.target.value})} />
             </label>
             <br/>
             <label>
              Password:
             <input type="password" name="password" value={this.state.password}
             onChange={(e) => this.setState({password:e.target.value})}/>
             </label>
             <br/>
             <input type="submit" value="Submit" onClick={(event) => this.handleClick(event)}/>
             </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  
    console.log("Login page : ",state);
    return {
      UserDataBind: state.UserData.userData
    };
  };
  export default connect(mapStateToProps)(
    Login
  );
