import './Form.css';


function Form(){
    return (
      //setInterval(()=>{
        <>
            <div class="div1">
            <form name="form">
                <h2>Name</h2>
                <input type="text" placeholder='Enter your Name'></input>
                <br></br>
                <h2>NickName</h2>
                <input type="text" placeholder='Enter your NickName'></input>
                <br></br>
                <h2>Address</h2>
                <input type="text"placeholder='Enter your Address'></input>
                <br></br>
                <h2>About YourSelf</h2>
                <input type="text" class="div2" placeholder='Enter About Yourself'></input>
                <br></br>
                <h2>Gender</h2>
                <div class="div3">
                <label>
                <input type="radio"  value="Male" name="gender"></input>Male</label>
                <label>
                <input type="radio"  value="Female" name="gender"></input>Female</label></div>
                <h2>Fav Actions</h2>
                <div class="div5">
                <label>
                <input type="checkbox" value="Fav"></input>Playing</label>
                <label>
                <input type="checkbox" value="Fav"></input>Swimming</label>
                <label>
                <input type="checkbox" value="Fav"></input>Reading</label></div>
                <h2>School</h2>
                <select class="div4">
                      <option value="--None--">--None--</option>
                      <option value="Ideal">Ideal</option>
                      <option value="Kec">KEC</option>
                      <option value="Vellalar">Vellalar</option>
                </select>
                <div class="butt">
                <button type="sumbit" value="submit">Submit</button>
                <button class="butt1" type="reset" value="reset">Reset</button></div>
                
            </form>
          </div>
           </>

        //},2000)
      )
}

export default Form;