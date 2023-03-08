import Footer from "../Footer";
import Header from "../Header";
import Section1 from "../Section1";
import Section2 from "../Section2";
import chatbox2 from '../images/chatbox2.png'

function LandingPage(){
    return(
        <>
      <Header/>
      <Section1 />
      <Section2/>
      <Footer/>
<img id="chatbot" src={chatbox2} alt=""/>
        </>
    )
}

export default LandingPage;