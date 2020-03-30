import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";
import { anotherData } from "../Redux/Action";
class Welcome extends React.Component {
constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
    reEmail:'',
    rePassword:'',
    loginFlag:false,
    editflag:false
  }
 }
 logoutHandler(){
    this.props.history.push("/");
 }
 editBtnClick(event){
    this.setState({ editflag: true,
        fname:this.props.UserDataBind.fname,
        lname:this.props.UserDataBind.lname,
        email:this.props.UserDataBind.email,
        password:this.props.UserDataBind.password,
        address:this.props.UserDataBind.address });
 }

 editClick(event){
    event.preventDefault();
    let usrdata={};
    usrdata={
        fname:this.state.fname,
        lname:this.state.lname,
        email:this.state.email,
        password:this.state.password,
         address:this.state.address,
    }
   // localStorage.setItem('formData', JSON.stringify(usrdata));
     this.props.getResultByAction(usrdata);


 }

render() {
    
    return (
    
          <div className="container">
              <div className="row">
            <div className="col-lg-4 "></div>
            <div className="col-lg-4 "></div>
            <div className="col-lg-4 "><button onClick={() => this.logoutHandler()}>Logout</button></div>
            </div>
          <div className="row">
            <div className="col-lg-12 ">
         <h1> Welcome </h1>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Address</th>
       <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
    <td>{this.props.UserDataBind.fname}</td>
      <td>{this.props.UserDataBind.lname}</td>
      <td>{this.props.UserDataBind.email}</td>
      <td>{this.props.UserDataBind.password}</td>
      <td>{this.props.UserDataBind.address}</td>
      <td><input type="submit" value="Edit" onClick={(event) => this.editBtnClick(event)}/></td>
    </tr>
   
  </tbody>
</Table>
</div>
</div>
<div className="row">
            <div className="col-lg-4"></div>
            {!this.state.editflag ? null : (
              <div className="col-lg-4 ">
                <div
                  className="card bg-transparent mt-5 border-0"
                  style={{ width: "20rem" }}
                >
                  <div className="card-body">
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
             <input type="submit" value="Submit" onClick={(event) => this.editClick(event)}/>
             </form>
                  </div>
                </div>
              </div>
            )}

            <div className="col-lg-4"></div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
    console.log("welcome page : ",state);
    return {
        UserDataBind: state.UserData.userData
        
    };
  };
  const mapDispatchToProps = (dispatch) =>{
    return{
      getResultByAction:(udata)=>{
          dispatch(anotherData(udata))
      }
    }
}
  export default connect(mapStateToProps,mapDispatchToProps)(
    Welcome
  );
