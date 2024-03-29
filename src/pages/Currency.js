import React from 'react';

class Currency extends React.Component{
    state={
        amount:'',
        convertFrom:'AED',
        convertTo:'AED',
        conAmount:'',
    }

    Currency = ()=> {
        if(this.state.convertFrom=="AED" && this.state.convertTo=="AED"){
            this.setState({
                conAmount: this.state.amount
            });
        }
        else if (this.state.convertFrom=="AED" && this.state.convertTo=="USD"){
            this.setState({
                conAmount: this.state.amount / 3.67
            });
        }
        else if (this.state.convertFrom=="AED" && this.state.convertTo=="INR"){
                this.setState({
                    conAmount: this.state.amount * 22.5
                });  
       }
       else if (this.state.convertFrom=="USD" && this.state.convertTo=="USD"){
        this.setState({
            conAmount: this.state.amount 
        });  
        }
        else if (this.state.convertFrom=="USD" && this.state.convertTo=="AED"){
            this.setState({
                conAmount: this.state.amount * 3.67
            });  
            }
        else if (this.state.convertFrom=="USD" && this.state.convertTo=="INR"){
                this.setState({
                    conAmount: this.state.amount * 82.7
             });  
             }


        else if (this.state.convertFrom=="INR" && this.state.convertTo=="INR"){
            this.setState({
                conAmount: this.state.amount 
            });  
            }
         else if (this.state.convertFrom=="INR" && this.state.convertTo=="AED"){
                this.setState({
                    conAmount: this.state.amount / 22.5 
                });  
                }
         else if (this.state.convertFrom=="INR" && this.state.convertTo=="USD"){
                    this.setState({
                        conAmount: this.state.amount / 82.7
                    });  
                    }
    }
render(){
    return(
<div id="Camount">
                    <div id="currencyLeft">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h3>Foreign Exchange currency Converter</h3>
                        <label for="currency">Enter Amount </label>
                        <br/>
                        <input id="currency" name="currency" type="text"  placeholder='Enter value in AED' onChange={(e)=>{this.setState({amount:e.target.value})}} required/> 
                        <br/>
                        <br/><br/>
                        <label>From </label><br/>
                        <select onChange={(e)=>{this.setState({convertFrom:e.target.value})}}>
                                <option value="AED">AED</option>
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                        </select>
                        <br/><br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        <br/><br/>
                        <label>To </label><br/>
                        <select onChange={(e)=>{this.setState({convertTo:e.target.value})}}>
                                <option value="AED">AED</option>
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                        </select>
                        <br/><br/><br/>
                        <button  onClick={this.Currency}> Convert </button>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div > 
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <h2 id="currAmount"> {this.state.conAmount}</h2>
                    </div>


                </div>
    );
}
}
export default Currency;