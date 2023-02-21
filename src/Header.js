function Header(){
    return(
<div>
        <img src="logo.PNG" alt="Bank logo" id="banklogo"/>
        <nav>
          
            <a href=""> PERSONAL </a>
            <a href=""> CORPORATE </a>
            <a href=""> TREASURY </a>
            <a href=""> ISLAMIC </a>
          
            
           
        </nav>
        <div> 
          <input type="text"/>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg></button>
        <button onclick="document.location='pages/signup.html'">Open an Account</button>
        </div>
        </div>
    )
}
export default Header;