function Section1(){
    return(
        <div>
             <div className="logInForm" > 
              <input id="userID" type="text" required placeholder="User ID"/>
              <br/>
              <input id="Password" type="text" required placeholder="Password"/>
              <br/>
              <input type="checkbox"/> Save User ID<br/>
              <button id="loginbutton">Log In</button><br/>
              <a href="" className ="logInA"> Forgot ID/ Password ? </a><br/>
              <a href="" className ="logInA"> Security & Help  </a>
      
      
            </div>
           <div id="right">
            <div className="child" id="child1">
              <img  src="mbanking.PNG" alt=""/>
              <h3>MOBILE BANKING</h3>
              <p>The updated and better version of our app is how UB Mobile Banking is available.</p>
              <button>Mobile Banking</button>
          </div>
          <div  className="child" id="child2">
              <img  src="phoneb.png" alt=""/>
              <h3> PHONE BANKING</h3>
              <p>IVR (Interactive Voice Response) is a feature of UB Phone Banking.</p>
              <button>Phone Banking</button>
          </div>
          <div  className="child" id="child3">
              <img  src="atm.webp" alt=""/>
              <h3>ATM SERVICES</h3>
              <p>Everywhere in the UAE, you can use our network of ATMs.</p>
              <button>ATM Services</button>
          </div>
          <div  className="child" id="child4">
            <img  src="online1.png" alt=""/>
            <h3>UB ONLINE</h3>
            <p>You can use your smartphone to do smooth internet banking from the convenience of your home or while traveling.</p>
            <button>Online Banking</button>
        </div>
        <div  className="child" id="child5">
          <img  src="shopping1.png" alt=""/><br/>
          <h3>KLIP</h3>
          <p>UAE Central Bank regulates and oversees the management and operation of Emirates Digital Wallet LLC.</p> 
          <button>Klip</button>
        </div>
        <div  className="child" id="child6">
          <img  src="sms1.webp" alt=""/>
          <h3>SMS BANKING</h3>
          <p>Through SMS, UB SMS Banking sends you immediate notifications about your account and credit card transactions.</p>
          <button>SMS Banking</button>
      </div>
    </div>
        </div>
    )
}
export default Section1;