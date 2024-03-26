import React from "react";

const Footer = props => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center logo my-2">AKL</h1>
                        
                        <ul className="d-flex justify-content-center list-unstyled">
                            <li><a className="text-light mx-2" target="_blank" href="https://www.facebook.com/profile.php?id=100004919776009"><i className="fa-brands fa-square-facebook" target="_blank"></i></a></li>
                            <li><a className="text-light mx-2" target="_blank" href="https://www.instagram.com/amaanlaghari/"><i className="fa-brands fa-square-instagram"></i></a></li>
                            <li><a className="text-light mx-2" target="_blank" href="https://github.com/AmaanLaghari1"><i className="fa-brands fa-square-github"></i></a></li>
                            <li><a className="text-light mx-2" target="_blank" href="https://www.linkedin.com/in/akl007/"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>

                        <div className="text-light text-center small my-2">copyrights &copy; AKL Portfolio 2024 &reg; </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer