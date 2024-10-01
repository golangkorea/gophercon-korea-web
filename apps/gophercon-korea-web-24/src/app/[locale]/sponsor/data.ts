export type GradeEn = "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "COMMUNITY" | "PUBLISHERS";
export type GradeKo = "플래티넘" | "골드" | "실버" | "브론즈" | "커뮤니티" | "출판사";

interface GradeProps {
  ko: GradeKo;
  en: GradeEn;
}

interface LocaleProps {
  ko: string;
  en: string;
}

export interface SponsorProps {
  imgSrc: string;
  grade: GradeProps;
  desc: LocaleProps;
  name: LocaleProps;
  link: string;
}

export type GradeColor = {
  startColor: string;
  endColor: string;
};

type GradeObject = {
  [key in GradeEn]: GradeColor;
};

const sponsorColor: GradeObject = {
  PLATINUM: {
    startColor: "#006AFF",
    endColor: "#AE00FF",
  },
  GOLD: {
    startColor: "#FFE500",
    endColor: "#FF9900",
  },
  SILVER: {
    startColor: "#E8E8E8",
    endColor: "#ACACAC",
  },
  BRONZE: {
    startColor: "#D8B182",
    endColor: "#B15536",
  },
  COMMUNITY: {
    startColor: "#C3FFD0",
    endColor: "#C3FFD0",
  },
  PUBLISHERS: {
    startColor: "#AFE0F6",
    endColor: "#0097DC",
  },
};

const PLATINUM_GRADE: GradeProps = {
  ko: "플래티넘",
  en: "PLATINUM",
};

const GOLD_GRADE: GradeProps = {
  ko: "골드",
  en: "GOLD",
};

const SILVER_GRADE: GradeProps = {
  ko: "실버",
  en: "SILVER",
};

const BRONZE_GRADE: GradeProps = {
  ko: "브론즈",
  en: "BRONZE",
};

const COMMUNITY_GRADE: GradeProps = {
  ko: "커뮤니티",
  en: "COMMUNITY",
};

const PUBLISHER_GRADE: GradeProps = {
  ko: "출판사",
  en: "PUBLISHERS",
};

const sponsorList: SponsorProps[] = [
  {
    name: {
      ko: "구글 Go",
      en: "Google Go",
    },
    imgSrc: "logo_GoogleGo.png",
    grade: PLATINUM_GRADE,
    desc: {
      ko: "Google Go 팀은 현대 소프트웨어 개발의 복잡성을 줄이고, 효율적인 성능을 제공하기 위해 Google에서 개발한 프로그래밍 언어인 Go(또는 Golang)를 설계 및 관리하는 팀입니다. 우리의 목표는 개발자들이 더욱 빠르고 효율적으로 소프트웨어를 구축할 수 있도록 돕는 것입니다.",
      en: "The Google Go Team is responsible for designing and maintaining the Go (also known as Golang) programming language, which was developed by Google to reduce the complexity of modern software development and provide efficient performance. Our mission is to empower developers to build software faster and more efficiently.",
    },
    link: "https://go.dev/",
  },
  {
    name: {
      ko: "트웰브랩스",
      en: "Twelve Labs",
    },
    imgSrc: "logo_TwelveLabs.png",
    grade: GOLD_GRADE,
    desc: {
      ko: "트웰브랩스는 최첨단 영상이해 AI 솔루션을 제공하는 기업입니다. 영상 콘텐츠를 사람처럼 이해하는 독자적인 멀티모달 파운데이션 모델을 개발해, 영성 검색, 요약, Q&A, 분석 솔루션을 쉽게 통합 가능한 API의 형태로 제공하고 있습니다. 다양한 기업들과 개발자들이 방대한 영상 자산에서 필요한 순간들을 검색하고, 인사이트를 추출하면서 영상 자산을 최대치로 활용할 수 있게 돕고 있습니다.",
      en: "Twelve Labs provides cutting-edge AI solutions for video understanding. Our proprietary multimodal foundation models enable human-like comprehension of video content, powering semantic search, summarization, video Q&A and analysis through easy-to-integrate APIs. We empower enterprises and developers by making previously inaccessible video assets searchable, with seamless integration into existing workflows. Enterprises across industries extract insights and streamline workflows with Twelve Labs.",
    },
    link: "https://www.twelvelabs.io",
  },
  {
    name: {
      ko: "화이트큐브",
      en: "whitecube",
    },
    imgSrc: "logo_Challengers.png",
    grade: GOLD_GRADE,
    link: "https://biz-challengers.com/",
    desc: {
      ko: "화이트큐브는 대한민국 1등 습관앱으로 시작하여 뷰티득템앱으로, 고객의 명확한 니즈를 기반으로 끊임없이 혁신하고 있습니다.\nver.2 챌린저스에서는, 앱 유저들에게는 돈 걱정 없이 자기 관리를 할 수 있는 뷰티 득템앱으로, 동시에 기업 고객에게는 브랜드 성장 과정에서의 어려움을 함께 해결하며, ROAS 200%와 같은 확실한 성과를 보장하는 브랜딩 서포터로서의 '대체 불가의 가치'를 제공하고 있습니다.\nPMF를 찾으며, 2023년 연간 흑자 전환과 2024년 상반기 작년 연매출 초과 달성(YoY 100%) 등 성장의 가속을 이루어내고 있습니다. 또한 글로벌 확장과 신사업 재투자를 통해 또 한 번의 도약을 준비하고 있습니다. 저희의 비전은, 세상을 더 나은 방향으로 업그레이드하는 것입니다.",
      en: "Whitecube started as Korea’s top habit app and has continually innovated based on clear customer needs to evolve into a beauty rewards app.\nIn its ver.2 iteration, Challengers offers users a platform to manage themselves and explore beauty products without financial concerns, while also providing brands with an unbeatable value as a branding supporter. We help overcome challenges in brand growth and guarantee results such as ROAS 200%.\nAchieving product-market fit, we have seen accelerated growth with a transition to profitability in 2023 and exceeding last year's annual revenue in the first half of 2024 (YoY 100%). We are also preparing for another leap with global expansion and reinvestment in new businesses. Our vision is to upgrade the world to a better direction.",
    },
  },
  {
    name: {
      ko: "테스트뱅크",
      en: "Testbank",
    },
    imgSrc: "logo_Testbank.png",
    grade: SILVER_GRADE,
    link: "https://www.testbank.ai",
    desc: {
      ko: "테스트뱅크팀은 진짜 디지털 참고서를 만들어 제공하고 학습 환경을 디지털로 옮겨 학생들의 삶의 질을 실질적으로 개선하기 위해 문제풀이 전용 노트 앱, 쏠브를 만들고 있습니다. 쏠브앱을 통해 물리적 서책으로 출판되어 일방향으로만 제공되던 학습 컨텐츠를 디지털화하여 풀이 기록을 수집하고 각종 교육기관에서 교수 과정의 시공간적 제약을 없애도록 돕고 있습니다.",
      en: "Solve is a tablet note-app designed primarily for test-takers, transforming static PDFs into interactive formats using machine learning and overcoming the security and interactivity limitations of traditional PDFs. This approach turns educational materials into dynamic, interactive learning experiences while keeping the original content intact, making Solve an invaluable tool for various learning purposes.",
    },
  },
  {
    name: {
      ko: "메가존소프트",
      en: "MegazoneSoft",
    },
    imgSrc: "logo_MegazoneSoft.png",
    grade: SILVER_GRADE,
    link: "https://www.megazonesoft.com/",
    desc: {
      ko: "DX를 뛰어넘어 새로운 Next Gen-AI 시대를 메가존소프트와 함께하세요.\n메가존소프트는 2009년부터 Google Cloud의 국내 첫 번째 프리미어 파트너로서, 아시아 1위의 클라우드 서비스 관리부터 최신 Gen-AI 트렌드까지 선도하고 있습니다.\n고객의 Google Cloud 여정은 메가존소프트가 책임지겠습니다.",
      en: "Go beyond DX and step into the Next Gen-AI era with MegazoneSoft.\nAs Google Cloud’s first Premier Partner in Korea since 2009, MegazoneSoft leads cloud service management across Asia, and now spearheads the latest Gen-AI trends.\nFrom cloud infrastructure to cutting-edge AI innovations, MegazoneSoft ensures your Google Cloud journey is expertly guided every step of the way.a",
    },
  },
  {
    name: {
      ko: "당근",
      en: "Daagng",
    },
    imgSrc: "logo_Daangn.png",
    grade: BRONZE_GRADE,
    link: "https://www.daangn.com/",
    desc: {
      ko: "세상에 없던 지역생활 커뮤니티 당근. 월평균 사용자 수 1,900만 명, 누적 가입자 수 3,600만 명을 달성하며 캐나다, 일본 등 글로벌 460여 개 지역에도 진출하고 있어요. 가까운 이웃과의 중고거래를 시작으로, 동네 가치에 주목하는 다양한 서비스들을 통해 하이퍼로컬의 새로운 길을 만들고 있어요. 우리 가족과 친구, 이웃이 매일 사용하는 서비스로 당근 팀은 누구나 동네에서 즐겁고 따뜻한 연결을 경험할 수 있도록 노력해요. GopherCon Korea 2024와 함께 하는 모든 분을 환영해요!",
      en: "The Unprecedented Local Community Platform, Daangn. With 19 million monthly active users and over 36 million registered users, Daangn is expanding to more than 460 regions worldwide, including Canada and Japan. Starting with local second-hand transactions between neighbors, we are paving the way for a new hyperlocal experience through various services that focus on local community values. The Daangn team is committed to ensuring that everyone—family, friends, and neighbors—can enjoy warm and joyful connections in their local communities every day. We welcome everyone joining us at GopherCon Korea 2024!",
    },
  },
  {
    name: {
      ko: "오픈업",
      en: "Open Up",
    },
    imgSrc: "logo_OpenUp.png",
    grade: BRONZE_GRADE,
    desc: {
      ko: "OpenUP, 오픈소스 소프트웨어 통합 지원 센터는 정보통신산업진흥원(NIPA) 소속의 오픈소스 지원 및 진흥을 담당하는 조직 입니다.\n오픈소스 소프트웨어를 개발, 공유, 활용하기를 원하는 개발자, 기업, 정부 등을 체계정으로 지원하고, 수요(기업, 공공기관) 및 공급(개발자, 기업)의 선순환 구조를 이루어, 오픈소스 소프트웨어 활성화의 허브 역할을 수행하는 기관입니다.",
      en: "OpenUP, the Open Source Software Integrated Support Center, is an organization under the National IT Industry Promotion Agency (NIPA) that is responsible for supporting and promoting open source software.\nIt systematically supports developers, companies, and government entities that wish to develop, share, and utilize open source software. By creating a virtuous cycle between demand (enterprises, public institutions) and supply (developers, companies), it serves as a hub for the activation and advancement of open source software.",
    },
    link: "https://www.oss.kr/open_up_intro",
  },
  {
    name: {
      ko: "우분투 한국 커뮤니티",
      en: "Ubuntu Korea",
    },
    imgSrc: "logo_UbuntuKorea.png",
    grade: COMMUNITY_GRADE,
    link: "https://ubuntu-kr.org/",
    desc: {
      ko: "우분투 한국 커뮤니티는 2005년에 설립되어 Ubuntu Community Council에서 인증한 공식 한국 커뮤니티입니다.\n우분투를 사용하는 사람, 개발하는 사람, 기여하는 사람 및 우분투에 관심이 있는 모두를 위한 열린 커뮤니티입니다.\n온라인 커뮤니티 및 문서 서비스 제공, 각종 세미나와 컨퍼런스 개최, 우분투 및 관련 오픈소스 기술에 대한 그룹 스터디와 연구/개발 및 프로젝트 등 다양한 활동을 하고 있습니다.",
      en: "Ubuntu Korea Community was founded in 2005 and is the official Korean community certificated by the Ubuntu Community Countil.\nIt is an open community for people who use, develop, contribute to, and are interested in Ubuntu.",
    },
  },
  {
    name: {
      ko: "AWS 한국사용자모임",
      en: "AWSKRUG",
    },
    imgSrc: "logo_AWSKRUG.png",
    grade: COMMUNITY_GRADE,
    link: "https://awskrug.github.io/",
    desc: {
      ko: "AWSKRUG(Amazon Web Services Korea User Group)은 AWS를 사용하는 개발자와 클라우드에 관심 있는 사람들을 위한 한국의 대표적인 커뮤니티입니다. AWSKRUG는 다양한 실무 경험을 공유하고, 클라우드 기술을 함께 배우며 성장할 수 있는 장을 제공합니다. 정기적으로 열리는 밋업과 스터디, 해커톤을 통해 최신 AWS 기술 트렌드를 배우고, 전문가들과 네트워킹할 기회도 얻을 수 있습니다. 초보자부터 숙련된 엔지니어까지 누구나 참여할 수 있으며, AWS 자격증 준비에도 큰 도움을 줄 수 있는 다양한 자원을 제공하는 커뮤니티입니다.",
      en: "AWSKRUG(Amazon Web Services Korea User Group) is a leading community in Korea for developers who use AWS and those interested in cloud technology. AWSKRUG provides a platform for sharing practical experiences, learning cloud technologies, and growing together. Through regular meetups, study groups, and hackathons, members can learn about the latest AWS technology trends and have opportunities to network with experts. The community is open to everyone, from beginners to experienced engineers, and offers various resources that can help with AWS certification preparation.",
    },
  },
  {
    name: {
      ko: "파이콘 한국",
      en: "Pycon Korea",
    },
    imgSrc: "logo_PyConKorea.png",
    grade: COMMUNITY_GRADE,
    desc: {
      ko: "2014년, 한국에서 첫 파이콘이 열린 이후로 파이써니스타들은 파이콘이라는 만남의 장에 파이썬이라는 하나의 공통점으로 뭉쳐 각자의 순간들을 나누고, 새로운 순간들을 함께 만들어왔습니다.\n여러분의 소중한 순간이 모여 파이콘은 점점 성장해올 수 있었고, 어느덧 10번째 파이콘 한국을 앞두고 있습니다.\n파이썬과 행복했던 순간들, 파이썬이기에 가능했던 순간들, 여러분이 소중한 순간순간들을 가지고 모여 함께 새로운 순간들을 만들어 내길 바랍니다.",
      en: "Since the first PyCon was held in Korea in 2014, we've grown from strength to strength, and we're now approaching our 10th event. We hope you'll gather with all your favorite moments with Python, made possible by Python, and create new ones together.",
    },
    link: "https://2024.pycon.kr/",
  },
  {
    name: {
      ko: "한빛미디어",
      en: "Hanbit Media",
    },
    imgSrc: "logo_Hanbit.png",
    grade: PUBLISHER_GRADE,
    desc: {
      ko: "한빛미디어(주)는 책으로 여는 IT 세상을 만들고 있습니다.\n우리 시대의 주역들을 위한 프로그래밍, 컴퓨터 공학, IT 에세이는 물론 일반 사용자를 위한 IT 활용서와 실용서까지 다양한 분야의 책으로 IT 세상을 만들어 가고 있습니다.\nIT 전문가와 미래의 전문가를 꿈꾸는 이의 동반자로 30년 한 길을 걸어온 한빛미디어(주)는 앞으로도 여러분과 함께 그려가는 멋진 미래를 꿈꾸며  '책으로 여는 IT 세상'을 만들어 가겠습니다.",
      en: "Hanbit Media is dedicated to shaping the IT world with books. Our publications cover a wide range of topics, including programming, computer science, and IT essays for professionals, as well as practical guides for general users.",
    },
    link: "https://www.hanbit.co.kr/publisher/",
  },
  {
    name: {
      ko: "이지스퍼블리싱",
      en: "EasysPublishing",
    },
    imgSrc: "logo_EasysPublish.png",
    grade: PUBLISHER_GRADE,
    desc: {
      ko: "이지스퍼블리싱은 IT와 교육 출판 분야에서 혁신적인 비전을 가진 회사로, 지식을 쉽게 전달하는 것을 목표로 하고 있습니다. 주로 IT 입문서와 교육 교재를 출간하며, 다양한 독자층이 쉽게 학습할 수 있도록 돕고 있습니다. 이지스퍼블리싱은 'Do It' 시리즈 등을 통해 실용적이고 실천 가능한 학습 콘텐츠를 제공하고 있으며, 교육 출판을 통해 미래 인재 양성에 기여하고자 합니다. 이번 행사를 통해 이지스퍼블리싱은 더 많은 사람들에게 지식을 전파하고 교육 기회를 넓히는 데 동참할 것입니다.",
      en: "EasysPublishing is a company with an innovative vision in the field of IT and educational publishing, aiming to make knowledge easily accessible. The company primarily publishes introductory IT books and educational materials to help a diverse range of readers learn effectively. Through its 'Do It' series and other publications, easypublishing provides practical and actionable learning content, contributing to the development of future talents in education publishing. By participating in this event, easypublishing aims to disseminate knowledge to a broader audience and expand educational opportunities.",
    },
    link: "https://www.easyspub.co.kr/",
  },
];

export { sponsorColor, sponsorList };
