import "./Frame.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Frame() {
  const [name, setName] = useState("");

  return (
    
    <div class="Frame1">
        <nav>
            <ul>
                <p class="Rental">
                    Rental Agreement
                </p>
                <p class="PostAD">
                    Post AD
                </p>
                <div class="Frame7">
                    <a class="Login_btn" href="#">
                        LOGIN
                    </a>
                </div>
            </ul>
        </nav>
        <div class="Frame3">
            <h1 class="title_select">
                 Select Package
            </h1>
            
           <div class="Frame4">
                <h2 class="Renew_Title">Renew Agreement</h2>
                <a href="#" class="New_page">Click here to renew any existing Agreement</a>
                <img src="Vector.png" class="direction_image"></img>
            </div> 

            <div class="Frame5">
                    <h2 class="E_stamp">
                        E - stamped Agreement
                    </h2>
                        <div class="off">
                            <p class="off_text">
                            Flat 30% off
                            </p>
                        </div>
            </div>
                    <div class="Frame51">
                        <ul class="lis">
                            <li >
                            Completely online process! 
                            </li>
                            <li >
                            Lowest prices guaranteed, sitting at your home
                            </li>
                        </ul>
                        <img src="Vector.png" class="direction_image2"></img>
                    </div>  
            <div class="price_box">
                <button class="button_price" href="#">Check Prices</button>
            </div> 
            
                 
        </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default Frame;