import { TopNav } from "../allparts";

const TopSection = () => {
    return (
        <>
            <TopNav />
            <div className="site-header  d-flex flex-column align-items-center justify-content-between">
                <div className="hero">
                    <h1>Web<span className="highlight">Backend</span> Developer</h1>
                    <p className="lead mt-3 mx-auto">
                    가장 오랜시간 가장 많은 프로젝트를 다뤄온 분야는 웹분야이며, 주로 백엔드 개발 위주로 작업해 왔습니다.
                    </p>
                    <p className="lead mt-3 mx-auto">
                    하지만 거기에 머물러 있지 않고, 프론트엔드 영역(React.js, Vue.js)과 더불어 모바일앱(Android, Xamarin),
                    크롤링(Window service), 인공지능(Tenserflow, Keras, Python) 등 다양한 분야를 다루어 왔습니다.
                    </p>
                </div>
            </div>
        </>
    )
};

export default TopSection;