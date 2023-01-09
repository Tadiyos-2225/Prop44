import "./about.css";
import { useState} from "react";





const About = (props) => {
    const[count,setCount] = useState(0);

    const handleClick = () => {
        setCount(count => count + 1)
    }

    return(
      <div>

            <h1>{count}</h1>
             <button onClick={handleClick}>add</button>
      </div>

        
    )
}
export default About;