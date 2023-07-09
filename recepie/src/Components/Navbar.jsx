import { useState } from "react";
import "./Navbar.css";
import { RxCross2 } from "react-icons/rx"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <div className="navbar">
                <div><Link to="/" >logo</Link></div>
                <ul className={toggle ? "link_mobile" : "links"}>
                    <li className="about"><Link to="/home" >HOME</Link></li>
                    <li className="about"><Link to="/about" >ABOUT</Link></li>
                    <li className="projectt"><Link to="/project" >PROJECT</Link></li>
                    <li className="skill"><Link to="/skill" >SKILLS</Link></li>
                </ul>
                <button className="mobile_icon" onClick={handleToggle}>{toggle ? <RxCross2 /> : <AiOutlineMenu />}</button>
            </div>
        </div>
    );
}
export default Navbar;
