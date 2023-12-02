import { TopNav } from "../allparts";

const TopSection = () => {
    return (
        <>
            <TopNav />
            <div className="site-header  d-flex flex-column align-items-center justify-content-between">
                <div className="hero">
                    <h1>Web<span className="highlight">Backend</span> Developer</h1>
                    <p className="lead mt-3 mx-auto">
                    A web weaver of code,
                    Seventeen years I have bestowed,
                    ASP.NET my trusty abode,
                    Recently venturing to Node.
                    </p>
                    <p className="lead mt-3 mx-auto">
                    React and Unity, Python too,
                    TensorFlow, crawling, Android and Xamarin,
                    Backend development my focus,
                    Endless possibilities to spin.
                    </p>
                </div>
            </div>
        </>
    )
};

export default TopSection;