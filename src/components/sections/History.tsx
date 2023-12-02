const HistorySection = () => {
    const fnPopup = (e:any) => {
        let pop = document.getElementById("popupLayer");
        if (pop !== null && pop !== undefined) {
            pop.remove();
        } else {
            let target = e.target as HTMLElement;
            if (target.tagName === "I") {
                target = target.parentNode as HTMLElement;
            }
            let src = target.getAttribute("data-value");
            if (src !== null && src !== undefined)
            {
                let wrap = document.getElementById("wrap") as HTMLElement;
                let div = document.createElement("div") as HTMLElement;
                let in_div = document.createElement("div") as HTMLElement;
                let img = document.createElement("img") as HTMLImageElement;
                let btn = document.createElement("button") as HTMLButtonElement;
                let icon = document.createElement("i") as HTMLElement;
                icon.className = "fa fa-close";
                btn.appendChild(icon);
                btn.onclick = () => {
                    pop = document.getElementById("popupLayer");
                    if (pop !== null && pop !== undefined) {
                        pop.remove();
                    }
                }
                img.src = src;
                in_div.appendChild(img);
                div.appendChild(in_div);
                div.appendChild(btn);
                div.id = "popupLayer";
                wrap.appendChild(div);
            }
        }
    };

    return (
        <section className="section">
        <div id="wrap" className="container">


            <div className="section-title max-title">
                <h3>My History</h3>
            </div>
            <p className="lead p-3 centered-text text-center mx-auto">
            It ran without stopping in the middle.
            I wanted to work for a long time, but small and medium-sized companies didn't have a long lifespan.
            </p>

            <section className="cd-timeline js-cd-timeline">
                <div className="cd-timeline__container">
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2022.3</div>
                            <h4>Eyemcast Inc</h4>
                            <p><a href="http://deepinspection.ai" target="_blank">DeepInspection</a> Backend API - <code>Node.js</code></p>
                            <p><a href="http://www.drcmedia.co.kr" target="_blank">Drcmedia</a> VR media Player - <code>Unity3D</code>
                            <button type="button" className="popup" data-value="/images/portfolio/Group 26.png" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="https://diveroid.com" target="_blank">Diveroid</a> Backend API - <code>Node.js</code></p>
                            <p><a href="https://diveroid.com" target="_blank">Diveroid</a> Manager System - <code>React.js</code></p>
                            <p><a href="https://diveroid.com" target="_blank">Diveroid</a> Custom Chart - <code>D3.js</code> 
                            <button type="button" className="popup" data-value="/images/portfolio/screen_chart_diveroid.png" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="https://lomin.ai" target="_blank">Lomin</a> Document Control UI - <code>JQuery</code></p>
                            <p><a href="https://www.lifesensor.co.kr/" target="_blank">LifeSensor</a> Back API - <code>ASP.NET, Socket.io</code></p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2019.12</div>
                            <h4>Exmaru</h4>
                            <p><a href="https://www.merrytoktok.com">MerryTokTok</a> Total Community - <code>ASP.NET, SignalR, Crawling</code></p>
                            <p><a href="https://www.myhomelauncher.com">HomeLauncher</a> Home Page - <code>React.js</code></p>
                            <p><a href="#">Muse</a> WebService - <code>ASP.NET, SignalR</code></p>
                            <p><a href="#">Muse</a> Background Service - <code>C#</code></p>
                            <p><a href="#">Muse</a> AI Keras LSTM - <code>Python, Tensorflow</code></p>
                            <p><a href="#">SmartFactory</a> Remote Monitoring - <code>C#</code></p>
                            <p><a href="#">Golfbox</a> Mobile App - <code>Xamarin</code>
                            <button type="button" className="popup" data-value="/images/portfolio/golfbox_01.png" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="#">서울대병원</a> 심박수측정웹서비스 - <code>Node.js, JQuery</code>
                            <button type="button" className="popup" data-value="/images/portfolio/SeoulHospital.png" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="#">Various agencies</a> Custom Homepage - <code>React.js, Node.js</code></p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2017.4</div>
                            <h4>UVC Inc</h4>
                            <p><a href="http://www.sgcenergy.co.kr" target="_blank">SGC Energy</a> 원격검침 - <code>ASP.NET, SignalR</code> 
                            <button type="button" className="popup" data-value="/images/portfolio/RMMS_01.png" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="http://www.sgcenergy.co.kr" target="_blank">SGC Energy</a> Transport vehicle weighing - <code>C#, WPF</code> 
                            <button type="button" className="popup" data-value="/images/portfolio/wpf.jpg" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="http://www.sgcenergy.co.kr" target="_blank">SGC Energy</a> 52시간 근태관리 - <code>ASP.NET</code></p>
                            <p><a href="#">SmartFactory</a> 스마트팩토리 구축사업 - <code>C#</code></p>
                            <p><a href="#">SmartFactory</a> OPC-UA R&D - <code>C#</code></p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2016.7</div>
                            <h4>이야기마루</h4>
                            <p><a href="#">제주대산학연</a> Education Android App - <code>Android, ActionScript</code></p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2014.12</div>
                            <h4>Longtukorea Inc (inet-school)</h4>
                            <p><a href="http://www.dreamson.co.kr" target="_blank">DreamsOn Edu</a> 영어인강서비스 - <code>ASP.NET</code> 
                            <button type="button" className="popup" data-value="/images/portfolio/Dreamson_01.png" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="https://www.g2b.go.kr/index.jsp" target="_blank">나라장터</a> Crawling - <code>C#</code></p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2012.4</div>
                            <h4 className="m-0">Netdiver Inc</h4>
                            <p><a href="#">미래선도과제</a> 미래부 R&D 과제(2년) - <code>ASP.NET, Android</code></p>
                            <p><a href="#">삼성/LG등 대기업</a> Facebook App - <code>ASP.NET</code> 
                            <button type="button" className="popup" data-value="/images/portfolio/Facebook.png" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2011.3</div>
                            <h4>inet-school Inc</h4>
                            <p><a href="#">Studymap</a> 자기주도학습 - <code>ASP.NET</code></p>
                            <p><a href="#">Selfgong.com</a> 조선일보 자기주도학습 - <code>ASP.NET</code> 
                            <button type="button" className="popup" data-value="/images/portfolio/selfgong_02.gif" onClick={fnPopup}><i className="fa fa-search"></i></button>
                            </p>
                            <p><a href="#">학습진단검사</a> 학습진단 테스트 - <code>ASP.NET</code></p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2006.12</div>
                            <h4 className="m-0">Short-term contract</h4>
                            <p><a href="#">링크빌</a> 전자세금계산서 <code>ASP, Soap</code></p>
                            <p><a href="#">(주)화미</a> SCM대량 수발주 시스템 - <code>ASP</code></p>
                            <p><a href="#">Weltizen</a> 다이어트 솔루션 - <code>ASP</code></p>
                            <p><a href="#">Weltizen</a> Blog, Diary - <code>ASP</code></p>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block">
                        <div className="cd-timeline__milestone"> </div>
                        <div className="cd-timeline__content js-cd-content">
                            <div className="cd-timeline__date">2004.10</div>
                            <h4>Read-bank Inc</h4>
                            <p><a href="#">Boobank</a> 도서쇼핑몰 - <code>ASP</code></p>
                            <p><a href="#">cosmoi.co.kr</a> 독서논술서비스 - <code>ASP</code></p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    </section>
    )
};

export default HistorySection;