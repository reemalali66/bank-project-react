import { Link } from "react-router-dom"
function DashMenu(){
    return(
        <div id="leftMenu">
        <button class="btn" id="btn1"> Applay for card </button><br/><br/>
        <button class="btn" id="btn2"> currency  </button><br/><br/>
        <Link to ='/'><button class="btn" id="btn3"> LogOut </button></Link><br/><br/>
    </div>
    );
}
export default DashMenu;