import Footer from "../Footer";
import Header from "../Header";
import ApplyCard from "./ApplyCard";
import Currency from "./Currency";
import DashMenu from "./DashMenu";
import './Dashboard.css';
import chatbox2 from './../images/chatbox2.png'

function Dashboard(){
    return(
      <>
      <Header/>
        <section id="dashboard">
        <DashMenu/>
        <div id="rightContent">
          <ApplyCard/>
          <Currency/>  
        </div>
        </section>
      <Footer/>
      <img id="chatbot" src={chatbox2} alt=""/>
      </>
    )
}
export default Dashboard;