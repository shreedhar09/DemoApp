import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { anotherData } from "../Redux/Action";
class Register extends React.Component {
constructor(props){
  super(props);
  this.state={
    fname:'',
    lname:'',
    email:'',
  password:'',
  address:'',
  redirect:false
  }
 }
 
 handleClick(event){
    event.preventDefault();
    let usrdata={};
    console.log("values : ",this.state.fname,this.state.lname,this.state.email,this.state.password,this.state.address);
    usrdata={
        fname:this.state.fname,
        lname:this.state.lname,
        email:this.state.email,
        password:this.state.password,
         address:this.state.address,
    }
  //  localStorage.setItem('formData', JSON.stringify(usrdata));
     this.props.getResultByAction(usrdata);

    this.setState({ redirect: true });
 }
render() {
    if (this.state.redirect) {
        return <Redirect to='/'/>;
      }
 
    return (
      <div>

          <h1>Register</h1>
          <form>
             <label>
              First Name:
             <input type="text" name="fname" value={this.state.fname}
             onChange={(e) => this.setState({fname:e.target.value})} />
             </label>
             <br/>
             <label>
              Last Name:
             <input type="text" name="lname" value={this.state.lname}
             onChange={(e) => this.setState({lname:e.target.value})}/>
             </label>
             <br/>
             <label>
              Email:
              <input type="text" name="email" value={this.state.email}
             onChange={(e) => this.setState({email:e.target.value})}/>
             </label>
             <br/>
             <label>
              Password:
              <input type="password" name="password" value={this.state.password}
             onChange={(e) => this.setState({password:e.target.value})}/>
             </label>
             <br/>
             <label>
              Address:
              <input type="text" name="address" value={this.state.address}
             onChange={(e) => this.setState({address:e.target.value})}/>
             </label>
             <br/>
             <input type="submit" value="Submit" onClick={(event) => this.handleClick(event)}/>
             </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  
    console.log(state);
    return {
      WeatherDataBind: state.UserData
    };
  };
  const mapDispatchToProps = (dispatch) =>{
      return{
        getResultByAction:(udata)=>{
            dispatch(anotherData(udata))
        }
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps )(
    Register
  );
