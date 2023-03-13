import React from 'react';
import CardImage from './../images/card.PNG';

class ApplyCard extends React.Component {
    
    state = {
        UserName:"User Name",
        
    }

render(){
        return(
<div id="AyCard">
<div>
<h3> Enter your Name </h3>
 <input name="Uname" id="Uname" type="text" maxLength="25" required placeholder="Enter your full Name "  onChange={(e)=>{
                this.setState({UserName:e.target.value})
            }} /><br/>
 <br/>
 <button>Applay Naw </button>
</div>
<div class="cardDisplay"> <img id="cardimage"  src={CardImage} alt=""/>
<h3 class="bottom-left">{this.state.UserName}</h3></div>
</div>
);
}
}

export default ApplyCard;