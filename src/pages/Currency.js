function Currency(){
    return(
<div id="Camount">
                    <div id="currencyLeft">
                        <h3>Foreign Exchange currency Converter</h3>
                        <label for="currency">Enter Amount </label>
                        <br/>
                        <input id="currency" name="currency" type="text"  placeholder="Amount" required/> 
                        <br/>
                        <br/><br/>
                        <label>From </label><br/>
                        <select>
                                <option>AED</option>
                                <option>USD</option>
                                <option>INR</option>
                        </select>
                        <br/><br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                          </svg>
                        <br/><br/>
                        <label>To </label><br/>
                        <select>
                                <option>AED</option>
                                <option>USD</option>
                                <option>INR</option>
                        </select>
                        <br/><br/><br/>
                        <button> Convert </button>
                        <br/>
                        <br/>
                    </div>
                    <div > 
                        <h2 id="h2Currency"></h2>
                    </div>


                </div>
    );
}
export default Currency;