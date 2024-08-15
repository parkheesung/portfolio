const FooterSection = () => {
    return (
        <footer className="section section-separated py-lg">
        <div className="container">

            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <img src="/images/logo_gray.png" alt="footer logo" className="img-fluid mb-4" />
                    <p className="footer__info--text">SNS를 통해 다양하게 소통하고 대화합니다.</p>

                    <ul className="social__links">
                        <li>
                            <a href="https://www.facebook.com/Roslyn.dev" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/roslyn_dev" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://roslyndev.tistory.com" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-blog"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/roslyndev" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
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
                <p className="copyright__text mb-0"><small>Copyright ©2024. All rights reserved. Parkheesung.github.io</small></p>
            </div>
        </div>
    </footer>
    )
};

export default FooterSection;