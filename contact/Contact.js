import "./Contact.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Contact() {
  const [name, setName] = useState("");

  return (
    <div class="container">
        <form>
            <div>
                <label>Agreement Duration(In months)</label>
            </div>
            <div>
                {/* <select> */}
                
                    <button type="button" value="6 month">6 month</button>
                    <button type="button" value="11 month">11 month</button>
                    <button  type="button" value="12 month">12 month</button>
                        <select>
                            <option  disabled selected value>Other</option>
                            <option  value="1 year">1 Year</option>
                            <option  value="2 year">2 Year</option>
                            <option  value=" year">3 Year</option>
                        </select>
                
                    {/* <input type="button" option value="6 month">6 month</input>
                    <input type="button" value="11 month">11 month</input>
                    <input type="button" value="12 month">12 month</input>
                    <input type="button" value="Other">Other</input> */}
                {/* </select> */}
                
            </div>
            <div>
                <label>Agreement Start Date</label>
            </div>
            <div>
                <input type="date" value="date" onclick="msg()"></input>
                <input type="date" value="date" onclick="msg()"></input>
                
            </div>

        </form>
        </div>
  )
}
         {/* /* <form action="/action_page.php">
            <div class="row">
                <div class="col-25">
                    <label for="fname">First Name</label>
                </div>
            <div class="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
                </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Country</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Subject</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    </div>
  </div>
  <br>
  <div class="row">
    <input type="submit" value="Submit">
  </div> */}



const root = ReactDOM.createRoot(document.getElementById('root'));
export default Contact;