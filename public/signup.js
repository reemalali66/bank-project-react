import current from "../src/images/mbanking.PNG"

allAccounts = [
    {
        id: 1,
        name: "Current Account",
        accounttype: "It's the account that's as flexible as you need it to be.",
        image: "current.webp"
       
    },
    {
        id: 2,
        name: "Saving Account",
        accounttype:"It's the savings account you can open, operate and manage from the comfort of home.",
        image: "saving.webp"
       
    },
    {
        id: 3,
        name: "Minor Account",
        accounttype:"Simple, fun and designed for tomorrow, open a Minor account for your child today.",
        image: "minor.webp"
    }
];

content = ``;

allAccounts.forEach(account => {
    account = `<div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style="background-image: url('${account.image}');">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${account.name}</h3>
                            <p>  ${account.accounttype}</p>
                            <p id="p_${account.id}"></p>
                            <button id="lmore" > Learn More</button>
                           
                          
                           
                            
                        </div>
                    </div>
            </div>`;
    content += account;
});

document.getElementById("accountList").innerHTML = content;

allButtons = document.querySelectorAll("button");
 function checkDate(){ 
    console.log("Test");
    let birthDate = new Date(document.getElementById("DOB").value);
    console.log(birthDate);
        let today=new Date();
        if (
            today.getFullYear() - birthDate.getFullYear() < 18 
        )
        {
            document.getElementById("DateError").innerText = "To open an account your age shoud be 18 or above"
        }

 }








