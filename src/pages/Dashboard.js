import Footer from "../Footer";
import Header from "../Header";
import ApplyCard from "./ApplyCard";
import Currency from "./Currency";
import DashMenu from "./DashMenu";
import './Dashboard.css';

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
      </>
    )
}
export default Dashboard;