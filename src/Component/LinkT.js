import React  from "react";
import { Link } from "react-router-dom";

function LinkT(){
    return(
        <div className="head">
          <Link to='/' className="home">Home</Link>
          <Link to='/student' className="student">Student</Link>
          <Link to='/contact' className="contact">Contactus</Link>
          
        </div>
    )
}
export default LinkT