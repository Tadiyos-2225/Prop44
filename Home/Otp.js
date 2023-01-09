import ReactDOM from 'react-dom/client';
import "./Frame.css";
function Otp() {
    const generateOtp =(Otplength)=>{
        let otp="";
        for(let i=0;i<Otplength;i++){
            otp+=  Math.floor(Math.random()*10);
        }
        return Number(otp);
        console.log("generateOtp(Otplength)");
    };
    return (
        <div>
            <div class="Frame9">
                <p class="Enter_title">
                    Enter Phone to continue
                </p>
                <div class="Frame10">
                    <img class="mat" src='Mat.png'></img>
                    <p class="num">+91</p>
                    <div className="Flag_box">
                        <div class="first_line"></div>  
                        <div class="Second_line"></div>
                        <div class="Third_line"></div> 
                    </div>  
                </div>
                
                    <input class="generate_otp" type="radio" id="Generate_otp" name="Generate" value="Generate_OTP">
                    <label class="title_generate">Generate OTP</label></input>
                    <input class="I_have_Password" type="radio" id="I_password" name="I_password" value="I_have_Password">
                    <label class="pass">CSS</label></input>
                <p class="Enter OTP">Enter OTP here</p>
                <p class="9">9</p>
                <p class="3">3</p>
                <p class="4">4</p>
                <p class="2">2</p>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
                <div class="line4"></div>
                <a class="Resend">Resend OTP</a>
                <div class="Frame6">
                    <h2 class="Continue">
                        Continue
                    </h2>
                </div>
                <a class="get updates" href="#">Get Updates on WhatsApp</a>
                <div>
                    <img class="outerwhatsApp" src='outer.png'></img>
                    <img class="outerwhatsApp" src='inner.png'></img>
                </div>
                <p class="continue">
                By  continuing, you agree to our  
                </p>
                <a href='#' class="terms">Terms & Conditions</a>
                <p class="Please">
                For any issue/query please email 
                </p>
            </div>
            <button onClick={generateOtp}>hello</button>
            
        </div>
            
    )
    }
const root = ReactDOM.createRoot(document.getElementById('root'));
export default Otp;