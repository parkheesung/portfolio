const FooterSection = () => {
    return (
        <footer className="section section-separated py-lg">
        <div className="container">

            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <img src="/images/logo_gray.png" alt="footer logo" className="img-fluid mb-4" />
                    <p className="footer__info--text">A variety of topics, we'd like to explore,
                    Sharing thoughts and ideas, forever more,
                    So come, let us chat and connect,
                    And make our bond, truly perfect.</p>

                    <ul className="social__links">
                        <li>
                            <a href="https://www.facebook.com/JO.roslyn.dev" target="_blank">
                                <img src="/images/facebook-icon.svg" alt="fb" className="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/parkheesung97" target="_blank">
                                <img src="/images/twitter-icon.svg" alt="tw" className="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/parkheesung/" target="_blank">
                                <img src="/images/linked-in-icon.svg" alt="in" className="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/parkheesung" target="_blank">
                                <img src="/images/github-icon.svg" alt="gh" className="img-fluid" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                    <p className="footer-col__head">Contact Us</p>

                    <div className="contact__address">
                        <p> Email: yunlang97@naver.com</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <p className="copyright__text mb-0"><small>Copyright ©2023. All rights reserved. Parkheesung.github.io</small></p>
            </div>
        </div>
    </footer>
    )
};

export default FooterSection;