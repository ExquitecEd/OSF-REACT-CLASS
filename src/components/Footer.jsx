export default function Footer({ image }){
    return (<footer>
        <div className="foot1">
            <img src={image} />
        </div>
        <div className="foot2">
            <address>
                24, Ijebu-Ode <br />
                Igbeba, Ogun state.
            </address>
        </div>
        <div className="foot3">
            &copy; copyright2024 <br/>
            <a href="#"><img src="#" alt="img1"/></a>
            <a href="#"><img src="#" alt="img2"/></a>
            <a href="#"><img src="#" alt="img3"/></a>
        </div>
    </footer>)
}