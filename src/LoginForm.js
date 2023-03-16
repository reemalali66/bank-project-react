import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from "react-router-dom";


class LoginForm extends React.Component{

    constructor(){
        super();
        this.state={
            users:[],
            userName:"",
            errorMessageU:"",
            userPassword:"",
            errorMessageP:"",
            accountMessage:""
        }
    }

    validateUser = (e) => {
        this.setState({userName:e.target.value});
        if(e.target.value.length<10){
            this.setState({
                errorMessageU:"At least 10 characters needed"
            });
        } else{
            this.setState({
                errorMessageU:""
            });
        }
    }


    componentDidMount(){
        axios.get('https://crudcrud.com/api/a6d087ea01ba4b9682e19885fa018749/users')
        .then(
            res=> {
                let tempData = res.data;
                this.setState({ users:tempData});
            }
        );
    }
    authenticateUser = (e)=>{
        e.preventDefault();
        
        let flag=0;
        this.state.users.forEach(user => {
            if(user.userEmail==this.state.userName && user.Telephone==this.state.userPassword){
                flag=1;
            }
        });
        if(flag==1){
            this.setState({accountMessage:"Valid details"});
            window.location.href = '/dashboard';
            }
        else{
            this.setState({accountMessage:"Invalid details"});
            }   
    }

    // validatePassword = (e) => {
    //     this.setState({userPassword:e.target.value});
    //     if(e.target.value.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")){
    //         this.setState({
    //             errorMessageU:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    //         });
    //     } else{
    //         this.setState({
    //             errorMessageU:""
    //         });
    //     }
    // }
    render(){
        // <form action="" method="get" class="form-example" >
        //     <div class="logInForm" > 
        //       <input id="userID" type="text" required placeholder="User ID"/>
        //       <br/>
        //       <input id="Password" type="password" required placeholder="Password" onChange={(e)=>{
        //                 this.setState({userpassword:e.target.value})
        //             }}/>
        //       <br/>
        //       <input type="checkbox"/> Save User ID<br/>
        //       <button id="loginbutton">Log In</button><br/>
        //       <a href="" class ="logInA"> Forgot ID/ Password ? </a><br/>
        //       <a href="" class ="logInA"> Security & Help  </a>
        //     </div>
        //   </form>
        return(
            <div class="logInForm" > 
            <form onSubmit={this.authenticateUser} action="#" class="form-example">
            <input id="userID" type="text" required placeholder="User ID" onChange={this.validateUser}/>
                <p>{this.state.errorMessageU}</p>
                <input id="Password" type="password" required placeholder="Password" onChange={this.validatePassword}/>
                <p>{this.state.errorMessageU}</p>
                <input type="checkbox"/> Save User ID<br/>
                <input id="loginbutton" type="submit" value="Login"/>
                <p>{this.state.accountMessage}</p>
            </form>
            <a href="" class ="logInA"> Forgot ID/ Password ? </a><br/>
               <a href="" class ="logInA"> Security & Help  </a>
            </div>
        );
    }
}

export default LoginForm;