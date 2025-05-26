import { Fragment } from "react";
const Content = ({index}) => (<Fragment >
<div className={`row${index}`}>
    <h2>Place your price</h2>
    <p id="row12">We are the best you can ever meet in the world. <br/>
        We provide solutions for business and update existing business plan. <br />
        Try us today and see what we can do. <br/>
    </p>
</div>
<div className={`row${index}`}>
    <h2>Place your price</h2>
    <p>We are the best you can ever meet in the world. <br/>
        We provide solutions for business and update existing business plan. <br />
        Try us today and see what we can do. <br/>
    </p>
</div>
<div className={`row${index}`}>
    <h2>Place your price</h2>
    <p>We are the best you can ever meet in the world. <br/>
        We provide solutions for business and update existing business plan. <br />
        Try us today and see what we can do. <br/>
    </p>
</div>
</Fragment>);

export default Content