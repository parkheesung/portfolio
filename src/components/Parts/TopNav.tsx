const TopNavPart = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="https://shadowroslyn.blogspot.com/" target="_blank">My Blog</a>
                </li>
            </ul>
        </div>
    </nav>
    )
};

export default TopNavPart;