import React from 'react';
class LoginForm extends React.Component{

    constructor(){
        super();
        this.state={
            userName:"",
            errorMessageU:"",
            userPassword:"",
            errorMessageP:"",
        }
    }

    validateUser = (e) => {
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

    render(){
        return(
            <form>
                <input type="text" placeholder="Your name here" name="userName" onChange={this.validateUser}/>
                <p>{this.state.errorMessage}</p>
                <input type="submit"/>
            </form>
        );
    }

    validatePassword = (e) => {
        if(e.target.value.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")){
            this.setState({
                errorMessageU:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            });
        } else{
            this.setState({
                errorMessageU:""
            });
        }
    }
    render(){
        return(
            <form>
                <input type="text" placeholder="Your password here" name="userPassword" onChange={this.validatePassword}/>
                <p>{this.state.errorMessageU}</p>
                <input type="submit"/>
            </form>
        );
    }
}

export default LoginForm;