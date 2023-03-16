import React from "react";
import './SignupPage.css';
import './signup.js';
import Header from './../Header';
import Footer from './../Footer';
import Accounts from './signup.js';
import chatbox2 from './../images/chatbox2.png'
import axios from "axios";
import { Link } from "react-router-dom";

class SignupPage extends React.Component{
  state={
    accountType:'',
    gender:'',
    firstName:'',
    lastName:'',
    Telephone:'',
    userEmail:'',
    Date:'',
    cityO:'',
    country:'',
    country2:'',
    canvasS:''
  }

  storeUserData = (e)=>{
    e.preventDefault();

    let newUser = {
      accountType:this.state.accountType,
      gender:this.state.gender,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      Telephone:this.state.Telephone,
      userEmail:this.state.userEmail,
      Date:this.state.Date,
      cityO:this.state.cityO,
      country:this.state.country,
      country2:this.state.country2,
      canvasS:this.state.canvasS
    }

    console.log(newUser);

    
    axios.post('https://crudcrud.com/api/a6d087ea01ba4b9682e19885fa018749/users', {newUser})
        .then(
            res=>{
              console.log(res);
                console.log(res.data);
                window.location.href='/';
            }    
        );
  }

render(){
  
    return (
      <>
      <Header/>
      <section id="s1">
        <h3> Choose from our wide range of  Current,
          Savings and Minor Accounts</h3>
        <br /> <br />

        <button type="button" id="openBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Open Now</button>

        <br />
      </section>
      <section id="s2">
          <div class="container px-4 py-5" id="custom-cards">
            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" id="accountList"></div>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">APPLY NOW</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action="#" method="POST" name="loginForm" onSubmit={this.storeUserData}>
                    <h3> Account Type</h3>
                    <label for="accType">Account Type : </label>
                    <br />
                    <select name="accountType" onChange={(e)=>{this.setState({accountType:e.target.value})}}>
                      <option>Current Account</option>
                      <option>Saving Account</option>
                      <option>Minor Account</option>
                    </select><br />
                    <br />
                    <hr />
                    <h3>Personal Information</h3>
                    <p> The information given in this section is considered as the information of the primary account owner information.</p>


                    <label for="userGender">Gender: </label><br />
                    <input type="radio" id="M" name="gender" value="Male" checked onSelect={(e)=>{this.setState({gender:e.target.value})}}/> Male
                    <input type="radio" id="F" name="gender" value="Female" onSelect={(e)=>{this.setState({gender:e.target.value})}} /> Female  <br />

                    <br />
                    <label for="username">Name : </label>
                    <br />
                    <div id="uName">
                      <input name="firstName" id="firstname" type="text" minlength="3" required placeholder="First Name " onChange={(e)=>{this.setState({firstName:e.target.value})}} /><br />
                      <p id="firstNameError"></p>
                      <input name="lastName" id="lastname" type="text" required placeholder="Last Name" onChange={(e)=>{this.setState({lastName:e.target.value})}}/><br />
                      <p id="lastNameError"></p>
                    </div>
                    <br />
                    <label for="userPhone">Phone number : </label>
                    <br />
                    <input name="Telephone" type="tel" pattern="[0-9]{12}" minlength="12" maxlength="12" placeholder="(971xxxxxxxxxx)" required onChange={(e)=>{this.setState({Telephone:e.target.value})}} /><br />
                    <p id="userPhoneError"></p>
                    <br />
                    <label for="useremail">Email : </label>
                    <br />
                    <input name="userEmail" id="userEmail" type="email" required placeholder="Email" onChange={(e)=>{this.setState({userEmail:e.target.value})}}/><br />
                    <p id="userEmailError"></p>
                    <br />
                    <label for="DOB">Date of Birth : </label>
                    <br/>
                    <input id="DOB" name="Date" onchange="checkDate()" type="date" required onChange={(e)=>{this.setState({Date:e.target.value})}} /><br />
                    <p id="DateError"></p>
                    <br/>
                      <label for="userCity">City : </label>
                      <br/>
                        <select name="cityO" onChange={(e)=>{this.setState({cityO:e.target.value})}}>
                          <option>Abu Dhabi</option>
                          <option>Dubai</option>
                          <option>Sharjah</option>
                          <option>Ajman</option>
                          <option>Umm AlQuwain</option>
                          <option>Ras Al Khaimah</option>
                          <option>Fujairah</option>
                        </select><br/>
                        <br/>

                          <label for="userCoun">Nationality : </label><br/>
                            <input type="radio" id="1" name="country" value="UAE" checked onSelect={(e)=>{this.setState({gender:e.target.value})}} /> UAE National
                            <input type="radio" id="2" name="country" value="Other" onSelect={(e)=>{this.setState({gender:e.target.value})}}/> Other <br />

                            <input name="country2" id="country" type="text" required placeholder="Enter your country " onChange={(e)=>{this.setState({country2:e.target.value})}} /><br />      
                             <br/>
                             <div>
                                <canvas name="canvasS" id="mycanvas" width="400px" height="400px" onChange={(e)=>{this.setState({canvasS:e.target.value})}}></canvas>
                                <br/>
                                  <input class="input" id="download" type="submit" value="SAVE AS IMAGE" />
                                  <input class="input" id="clear" type="submit" value="CLEAR PAD" />
                                 </div>
                              <br/>

                                <img id="hdwrite-image"></img>
                                <a id="link"></a>

                                <input type="checkbox" name="checkbox" value="check" required /> I agree to terms <br/><br/>


                                
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">SUBMIT</button>
                                  </div>
                              
                                </form>
                              </div>
                            </div>
                            </div>
                            </div>
                        </section>
                        <Accounts/>       
                        <Footer/>
                        <img id="chatbot" src={chatbox2} alt=""/>
                        </>
                        );
                        }
                      }
                        export default SignupPage;