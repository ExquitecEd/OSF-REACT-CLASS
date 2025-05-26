import { Link } from "react-router-dom";

export default function Header({ image }){
    return (<>
        <header>
        <div className="logotop">
            <img src={image} />
        </div>
        <div className="brand">
            Osf Production <br />
        </div>
        <div className="social_icon">
            <Link to="#"><img src="#" alt="img1"/></Link>
            <Link to="#"><img src="#" alt="img2"/></Link>
            <Link to="#"><img src="#" alt="img3"/></Link>
        </div>
        <div className="topmenu">
            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/dashboard">dashboard</Link></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our team</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </header>
        </>);
}