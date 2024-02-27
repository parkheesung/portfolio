const MiddleSection = () => {
    return (
        <section className="section feature-highlight small-img">
        <div className="container">
            <div className="section-title mini-title">
                <h3>핵심역량</h3>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/core_Csharp.png" alt="C#" className="featured-item-icon" />
                        <h4 className="featured-item-title">C#</h4>
                        <p className="text-sm">
                            C#은 트렌디하고 안정적이며 정교한 언어이며, 다양한 분야에서 활용되고 있습니다.
                            특히 기기와 연결이 많은 스마트팩토리 분야 등에서 그 활용성이 더욱 빛나며
                            산업표준인 OPC-UA에 표준 언어로써 자리매김했습니다.
                            Unity를 활용한 앱개발에도 활용되어 범용성이 뛰어납니다.
                            가장 오랜시간 다뤄왔던 언어로 가장 친숙하며, 가장 많은 분야에서 활용해본 언어입니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/NestJs.png" alt="nest.js" className="featured-item-icon" />
                        <h4 className="featured-item-title">Nest.js</h4>
                        <p className="text-sm">
                        Nest.js는 TypeScript를 사용하여 구축된 확장 가능하고 모듈화된 서버 사이드 애플리케이션을 빌드하기 위한 프레임워크입니다.
                        특히 Node.js 기반에 TypeScript를 이용한 백엔드 프레임워크로 TypeORM과의 궁합이 좋고, 손쉽게 개발할 수 있는 CLI 기능을 제공하고 있어서
                        최근에 특히 주류로 활용하고 있는 기술입니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/core_typescript.png" alt="typescript" className="featured-item-icon" />
                        <h4 className="featured-item-title">TypeScript</h4>
                        <p className="text-sm">
                            이제는 프론트엔드 개발에서 빼놓을 수 없는 타입스크립트는, 자바스크립트의 부족한 부분을 채워주는
                            역할로 확실하게 자리매김하여, 거의 모든 회사들이 선호하는 언어가 되어가고 있습니다.
                            최근에 진행했던 거의 모든 프론트엔드 프로젝트에서 타입스크립트를 적용해 진행했습니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/core_node.png" alt="node.js" className="featured-item-icon" />
                        <h4 className="featured-item-title">Node.js</h4>
                        <p className="text-sm">
                            작고 빠른 백엔드 앱에서 이제는 그 영역을 넓혀 스타트업들이 선호하는 기술로 자리잡은 Node.js는
                            Javascript로 백엔드를 다룸으로써 단일 언어로 프론트와 백엔드를 아우룰 수 있는 기술로 선호되고 있습니다.
                            최근에 개발했던 많은 프로젝트에서 주로 Node.js 위주로 개발을 많이 해왔습니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/entityframework.png" alt="Entityframework" className="featured-item-icon" />
                        <h4 className="featured-item-title">EntityFramework</h4>
                        <p className="text-sm">
                        닷넷 기술을 보다 강력하게 만들어주는 대표적인 ORM인 EntityFramework는, 처음 만났던 2014년도에도 그 철학에 사료되었던 기술입니다.
                        EntityFramework와 Linq, Lambda의 만남은 C#의 코드를 더욱 아름답게 만들어주며, 이는 코드를 직관적으로 유지하는데 탁월한 역량을 발휘합니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/typeorm.png" alt="typeorm" className="featured-item-icon" />
                        <h4 className="featured-item-title">TypeORM, Sequelize</h4>
                        <p className="text-sm">
                        닷넷에 EntityFramework가 있다면, Node.js 에는 TypeORM과 Sequelize가 있다고 할 수 있습니다. 둘 다 EntityFramework와 유사한 철학적 구조를 가지고 있으며
                        Sequelize는 JavaScript기반의 Node.js에서, TypeORM은 TypeScript 기반의 Nest.js에서 주로 활용하고 있습니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/core_aspnet.png" alt="asp.net mvc" className="featured-item-icon" />
                        <h4 className="featured-item-title">ASP.NET MVC</h4>
                        <p className="text-sm">
                            퍼포먼스가 중요한 곳에서 ASP.NET Core의 성능은 이미 업계에서 유명한 이슈가 되었습니다.
                            자바 갈라파고스인 한국시장에서, 특히나 웹의 영역에서는 ASP.NET이 그 자리를 잃어가고 있지만,
                            산업분야에서는 여전히 C#과 함께 범용적으로 활용되고 있는, 우수한 성능과 안정성을 자랑합니다.
                            최근 백엔드 API에서 규모가 큰 프로젝트는 ASP.NET을 활용하고 있습니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/core_react.png" alt="react.js" className="featured-item-icon" />
                        <h4 className="featured-item-title">React.js</h4>
                        <p className="text-sm">
                            현재 한국에서 가장 인기있는 Frontend 기술로써, 모듈화된 개발 방식으로 단순했던 프론트엔드 시장을 뜨겁게 달군 핫이슈이기에
                            저 역시도 React.js 를 시작으로 프론트엔드를 시작했습니다.
                            프론트엔드에서 개발의 재미를 느끼게 해주어, 개발의 재미가 솔솔합니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/vuejs.png" alt="vuejs" className="featured-item-icon" />
                        <h4 className="featured-item-title">Vue.js</h4>
                        <p className="text-sm">
                            최근에는 React.js보다 Vue.js를 더 선호하는 방향으로 선회되고 있는데, 이는 유지보수가 편하다는 장점때문입니다.
                            대기업과 관공서 위주의 프로젝트에서는 거의 Vue.js가 주류가 되어 가고 있는 추세속에서, 타입스크립트와 매끄럽게 연결되는 점도 장점입니다.
                            앞으도 시장의 한축을 담당할 것이 자명한 프론트엔드 기술로써, 최근에는 주로 Vue.js를 이용해서 작업하고 있습니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/unity.jpg" alt="Unity" className="featured-item-icon" />
                        <h4 className="featured-item-title">Unity 3D</h4>
                        <p className="text-sm">
                            유니티를 활용하여 VR 영상 플레이어를 개발해 납품을 완료한 경험이 있습니다.
                            평소에도 관심이 있었던 터에 처음으로 접해본 유니티로 VR 앱을 개발하는 것은 남다른 경험이었으며,
                            이를 통해 유니티를 이해하는데 큰 도움이 되었습니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/python.png" alt="Python" className="featured-item-icon" style={{width:'60px'}} />
                        <h4 className="featured-item-title">Python 3</h4>
                        <p className="text-sm">
                            Tenserflow기반 Keras 모델을 이용한 LSTM 언어학습 모델을 활용하여 개인별 맞춤 학습 시스템을 구축하여
                            카카오벤처스와 투자미팅까지 진행했었던 경험이 있습니다.
                            제2의 언어로 Python을 활용하고자 하는 욕심이 있어, 기회만 된다면 인공지능 개발에 참여하고자 합니다.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feature-item">
                        <img src="/images/mssql.png" style={{width:'70px'}} alt="Database" className="featured-item-icon" />
                        <h4 className="featured-item-title">Database</h4>
                        <p className="text-sm">
                            MS-SQL을 필두로, MySQL, MariaDB, Sqlite, Oracle에 이르기까지 다양한 관계형 데이터베이스를 다루어 왔으며
                            MongoDB, Redis 등 다양한 DB를 접해왔습니다.
                            또한 EntityFramework, MyBatis, Sequelize 등 다양한 ORM도 함께 다뤄왔습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default MiddleSection;