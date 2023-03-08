import cardicon from "./images/cardicon.png"
import vat from "./images/vat.png"
import computer from "./images/computer.png"
function Section2(){
    return(
      <section id="section2">
       
             <div> 
              <img className="imgicon" id="icon1" src={cardicon} alt=""/> 
              <h3 className="h3s2"> IBAN and Swift</h3>
            </div>
            <div> 
              <img  className="imgicon" id="icon2" src={vat} alt=""/>
               <h3 className="h3s2"> VAT</h3>
            </div>
            <div> 
              <img  className="imgicon" id="icon3" src={computer} alt=""/> 
              <h3 className="h3s2"> Digital Banking</h3>
            </div>
          
      
        </section>
    )
}
export default Section2;