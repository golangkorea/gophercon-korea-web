type Member = {
  ko_name: string;
  en_name: string;
  ko_bio: string;
  en_bio: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  profile_image: string;
};

type Organization = {
  name: string;
  members: Member[];
};

export const ORGANIZATION: Organization[] = [
  {
    name: "Billing Dept.",
    members: [
      {
        ko_name: "한성민",
        en_name: "Sungmin Han",
        ko_bio: `MLOps에 관심이 많고 AI에 제품화에 집중하고 있는 엔지니어입니다.\n또한 Golang Korea 커뮤니티의 일원으로 한국의 고언어 개발자 생태계를 조성하고 정보를 교류할 수 있는 기회를 만들고자 노력하고 있습니다.\n현재 글로벌 시장을 위해 MLOps 파이프라인 구성에 집중하고 있고, 한국과 미국 두군데의 오피스를 왕래하며 여러 국가의 엔지니어와 협력하여 일을 하고 있습니다.`,
        en_bio: `I am an engineer interested in MLOps and focusing on productizing AI.\nI'm also a member of the Golang Korea community, where I'm working to create an ecosystem of high-language developers in Korea and create opportunities for them to exchange information.\nHe is currently focused on configuring MLOps pipelines for the global market and travels between offices in Korea and the US to work with engineers in different countries.`,
        github: "https://github.com/kennethanceyer",
        linkedin: "https://www.linkedin.com/in/sungmin-han-ml/",
        instagram: "https://www.instagram.com/pig.nose/",
        website: "https://www.pigno.se/",
        profile_image: "Sungmin_Han.png",
      },
    ],
  },
  {
    name: "CoC Dept.",
    members: [
      {
        ko_name: "박제창",
        en_name: "Dreamwalker",
        ko_bio: `GDG Golang Korea & Flutter Seoul`,
        en_bio: `GDG Golang Korea & Flutter Seoul`,
        github: "https://github.com/JAICHANGPARK",
        linkedin: "https://www.linkedin.com/in/park-jaichang-40359a154/",
        profile_image: "Dreamwalker.png",
      },
      {
        ko_name: "최예지",
        en_name: "Yejee Choi",
        ko_bio: `Developer Relations`,
        en_bio: `Developer Relations`,
        github: "https://github.com/yechoi42",
        linkedin: "https://www.linkedin.com/in/yeji-choi-224b6b179/",
        website: "https://yechoi.tistory.com/",
        profile_image: "Yejee_Choi.png",
      },
    ],
  },
  {
    name: "Common Dept.",
    members: [
      {
        ko_name: "박진형",
        en_name: "Sigrid Jin",
        ko_bio: `Gopher, Rustcean. undergrad math noob (note: not a girl)`,
        en_bio: `Gopher, Rustcean. undergrad math noob (note: not a girl)`,
        github: "https://github.com/sigridjineth",
        profile_image: "Sigrid_Jin.png",
      },
      {
        ko_name: "호르헤",
        en_name: "Jorge Gimenez",
        ko_bio: `A spanish guy that loves programming as much as kimchi~ `,
        en_bio: `A spanish guy that loves programming as much as kimchi~ `,
        github: "https://github.com/hrh858",
        linkedin: "https://instagram.com/hrh.858?igshid=OGQ5ZDc2ODk2ZA==",
        profile_image: "Jorge_Gimenez.png",
      },
    ],
  },
  {
    name: "Design Dept.",
    members: [
      {
        ko_name: "한성민",
        en_name: "Sungmin Han",
        ko_bio: `MLOps에 관심이 많고 AI에 제품화에 집중하고 있는 엔지니어입니다.\n또한 Golang Korea 커뮤니티의 일원으로 한국의 고언어 개발자 생태계를 조성하고 정보를 교류할 수 있는 기회를 만들고자 노력하고 있습니다.\n현재 글로벌 시장을 위해 MLOps 파이프라인 구성에 집중하고 있고, 한국과 미국 두군데의 오피스를 왕래하며 여러 국가의 엔지니어와 협력하여 일을 하고 있습니다.`,
        en_bio: `I am an engineer interested in MLOps and focusing on productizing AI.\nI'm also a member of the Golang Korea community, where I'm working to create an ecosystem of high-language developers in Korea and create opportunities for them to exchange information.\nHe is currently focused on configuring MLOps pipelines for the global market and travels between offices in Korea and the US to work with engineers in different countries.`,
        github: "https://github.com/kennethanceyer",
        linkedin: "https://www.linkedin.com/in/sungmin-han-ml/",
        instagram: "https://www.instagram.com/pig.nose/",
        website: "https://www.pigno.se/",
        profile_image: "Sungmin_Han.png",
      },
    ],
  },
  {
    name: "Development Dept.",
    members: [
      {
        ko_name: "윤창현",
        en_name: "Changhyeon(Kevin) Yoon",
        ko_bio: `GopherCon Korea 2023에서 홈페이지 개발을 담당하고 있습니다🙂\nDevOps 공부를 하게 되면서 Go에 관심이 생기게 되었고 GopherCon Korea 2023에 참여하게 되었습니다.`,
        en_bio: `I'm in charge of developing the homepage at GopherCon Korea 2023🙂\nWhile studying DevOps, I became interested in Go and participated in GopherCon Korea 2023.`,
        github: "https://github.com/ChanghyeonYoon",
        linkedin: "https://www.linkedin.com/in/yooniversedev",
        instagram: "https://instagram.com/yooniverse.dev",
        website: "https://changhyeon.net",
        profile_image: "Yooniverse.png",
      },
      {
        ko_name: "전소향",
        en_name: "SoHyang Jeon",
        ko_bio: `GopherCon Korea 2023에 준비위원회로 참여하게 되어 기쁩니다!`,
        en_bio: `I'm excited to be a part of the organizing committee for GopherCon Korea 2023!`,
        linkedin: "www.linkedin.com/in/sohyangjeon",
        profile_image: "SoHang_Jeon.png",
      },
      {
        ko_name: "윤서율",
        en_name: "Seoyul Yoon",
        ko_bio: `안녕하세요! Kubernetes를 비롯한 오픈소스 생태계에 관심을 가지고 활동하고 있는 윤서율입니다.\nGopherCon Korea 2023에서 웹 개발과 후원사 관리를 담당하고 있습니다. 🎈`,
        en_bio: `Hi, I'm Seoyul Yoon, and I'm interested in the open source ecosystem, including Kubernetes.\nI'm in charge of web development and sponsor management at GopherCon Korea 2023. 🎈`,
        github: "https://github.com/Seo-yul",
        linkedin: "https://www.linkedin.com/in/yoon-seoyul/",
        website: "https://cloudev.tistory.com/",
        profile_image: "Seoyul_Yoon.png",
      },
      {
        ko_name: "한성민",
        en_name: "Sungmin Han",
        ko_bio: `MLOps에 관심이 많고 AI에 제품화에 집중하고 있는 엔지니어입니다.\n또한 Golang Korea 커뮤니티의 일원으로 한국의 고언어 개발자 생태계를 조성하고 정보를 교류할 수 있는 기회를 만들고자 노력하고 있습니다.\n현재 글로벌 시장을 위해 MLOps 파이프라인 구성에 집중하고 있고, 한국과 미국 두군데의 오피스를 왕래하며 여러 국가의 엔지니어와 협력하여 일을 하고 있습니다.`,
        en_bio: `I am an engineer interested in MLOps and focusing on productizing AI.\nI'm also a member of the Golang Korea community, where I'm working to create an ecosystem of high-language developers in Korea and create opportunities for them to exchange information.\nHe is currently focused on configuring MLOps pipelines for the global market and travels between offices in Korea and the US to work with engineers in different countries.`,
        github: "https://github.com/kennethanceyer",
        linkedin: "https://www.linkedin.com/in/sungmin-han-ml/",
        instagram: "https://www.instagram.com/pig.nose/",
        website: "https://www.pigno.se/",
        profile_image: "Sungmin_Han.png",
      },
      {
        ko_name: "호르헤",
        en_name: "Jorge Gimenez",
        ko_bio: `김치만큼이나 프로그래밍을 사랑하는 스페인 남자~`,
        en_bio: `A spanish guy that loves programming as much as kimchi~ `,
        github: "https://github.com/hrh858",
        linkedin: "https://instagram.com/hrh.858?igshid=OGQ5ZDc2ODk2ZA==",
        profile_image: "Jorge_Gimenez.png",
      },
    ],
  },
  {
    name: "Event Dept.",
    members: [
      {
        ko_name: "이영은",
        en_name: "Youngeun Lee",
        ko_bio: ``,
        en_bio: ``,
        github: "https://github.com/oleveloper",
        linkedin: "https://linkedin.com/in/oleveloper",
        profile_image: "Youngein_Lee.png",
      },
      {
        ko_name: "백경준",
        en_name: "Gyeongjun Paik",
        ko_bio: ``,
        en_bio: ``,
        github: "https://github.com/paikend",
        linkedin: "https://www.linkedin.com/in/경준-백-1a58b7195/",
        instagram: "https://www.instagram.com/_paikend/",
        website: "https://paikend.medium.com",
        profile_image: "Gyeongjun_Paik.png",
      },
      {
        ko_name: "김보겸",
        en_name: "Bokyum Kim",
        ko_bio: `GopherCon Korea 2023에서 후원사 관리, 운영, 이벤트를 담당하고 있습니다 🤓`,
        en_bio: `I'm in charge of sponsor management, operations, and events at GopherCon Korea 2023 🤓.`,
        github: "https://github.com/seedspirit",
        linkedin: "https://www.linkedin.com/in/bo-gyum-kim-725780207/",
        profile_image: "Bokyum_Kim.png",
      },
    ],
  },
  {
    name: "Logistics Dept.",
    members: [
      {
        ko_name: "이종명",
        en_name: "Jongmyung Lee",
        ko_bio: ``,
        en_bio: ``,
        github: "https://github.com/bbb1293",
        linkedin: "https://www.linkedin.com/in/jong-myung-lee-8b11991a3",
        profile_image: "Jongmyung_Lee.png",
      },
      {
        ko_name: "유수지",
        en_name: "Suji Yu",
        ko_bio: `Golang lover로써 첫 GoherCon 개최에 함께하게 되어 영광입니다!\n귀여운 고퍼에 빠져 굿즈파트에서 활동했습니다.`,
        en_bio: `As a Golang lover, I'm honored to be a part of the first Gopher!\nI fell in love with the cute gophers and worked in the merchandise part.`,
        linkedin: "www.linkedin.com/in/suji-yu",
        profile_image: "Suji_Yu.png",
      },
      {
        ko_name: "한성민",
        en_name: "Sungmin Han",
        ko_bio: `MLOps에 관심이 많고 AI에 제품화에 집중하고 있는 엔지니어입니다.\n또한 Golang Korea 커뮤니티의 일원으로 한국의 고언어 개발자 생태계를 조성하고 정보를 교류할 수 있는 기회를 만들고자 노력하고 있습니다.\n현재 글로벌 시장을 위해 MLOps 파이프라인 구성에 집중하고 있고, 한국과 미국 두군데의 오피스를 왕래하며 여러 국가의 엔지니어와 협력하여 일을 하고 있습니다.`,
        en_bio: `I am an engineer interested in MLOps and focusing on productizing AI.\nI'm also a member of the Golang Korea community, where I'm working to create an ecosystem of high-language developers in Korea and create opportunities for them to exchange information.\nHe is currently focused on configuring MLOps pipelines for the global market and travels between offices in Korea and the US to work with engineers in different countries.`,
        github: "https://github.com/kennethanceyer",
        linkedin: "https://www.linkedin.com/in/sungmin-han-ml/",
        instagram: "https://www.instagram.com/pig.nose/",
        website: "https://www.pigno.se/",
        profile_image: "Sungmin_Han.png",
      },
    ],
  },
  {
    name: "Media Dept.",
    members: [
      {
        ko_name: "박현상",
        en_name: "HyunSnag Park",
        ko_bio: `MLOps에 관심이 많고GopherCon Korea 2023에서 미디어팀 리드로서, GopherCon Korea 2023의 사진과 영상을 통해서 다양한 분들의 행복한 모습을 담고 남겼습니다.`,
        en_bio: `As an MLOps enthusiast and media team lead at GopherCon Korea 2023, I captured a lot of happy faces through photos and videos from the event.`,
        github: "https://github.com/dev-hyunsang",
        linkedin: "https://linkedin.com/in/parkhyunsang",
        website: "https://hyunsang.dev",
        profile_image: "HyunSnag_Park.png",
      },
      {
        ko_name: "장범준",
        en_name: "BeomJun Jang",
        ko_bio: `미디어팀에서 온라인 라이브 및 행사장 미디어 엔지니어링을 담당하였습니다.\n커뮤니티를 통해 함께 성장할 수 있다고 믿습니다 :)`,
        en_bio: `In the media team, I was responsible for online live and venue media engineering.\nI believe that through community we can grow together :)`,
        github: "https://github.com/tjtdkr",
        linkedin: "https://www.linkedin.com/in/jangatbeomjundotme/",
        profile_image: "BeomJun_Jang.png",
      },
      {
        ko_name: "이영은",
        en_name: "Youngeun Lee",
        ko_bio: ``,
        en_bio: ``,
        github: "https://github.com/oleveloper",
        linkedin: "https://linkedin.com/in/oleveloper",
        profile_image: "Youngein_Lee.png",
      },
    ],
  },
  {
    name: "Operation Dept.",
    members: [
      {
        ko_name: "최가인",
        en_name: "Ga-in(Olivia) Choi",
        ko_bio: `안녕하세요, 저는 Gopher 캐릭터가 너무 귀여워 Go 생태계에 입덕한 Golang Korea 운영진이고, GopherCon Korea 2023에서 후원사 관리 및 운영팀을 서포트하고 있는 최가인입니다 🌱`,
        en_bio: `Hi, I'm Ga-in(Olivia) Choi, a member of the Golang Korea management team who joined the Go ecosystem because the Gopher character is so cute, and I'm supporting the sponsor management and operations team at GopherCon Korea 2023 🌱 .`,
        github: "https://github.com/Ladygain",
        linkedin: "https://www.linkedin.com/in/ladygain",
        profile_image: "Ga-in(Olivia)_Choi.png",
      },
      {
        ko_name: "정민하",
        en_name: "Minha Jeong",
        ko_bio: `즐거운 사람들과 함께하는 것을 좋아하는 개발자입니다~\n기술을 통해 비즈니스를 구현하는 것과 데이터베이스 등 데이터 솔루션에 많은 관심을 가지고 있습니다.`,
        en_bio: `I'm a developer who loves to be around fun people~\nI'm very interested in enabling business through technology and data solutions such as databases.`,
        github: "https://github.com/PzaThief",
        website: "https://blog.naver.com/vwjdalsgkv",
        profile_image: "Minha_Jeong.png",
      },
      {
        ko_name: "한종우",
        en_name: "Jonwoo Han",
        ko_bio: `GopherCon Korea 2023에서 운영을 담당하고 있습니다🦹🏻‍♂️`,
        en_bio: `I'm running operations at GopherCon Korea 2023🦹🏻‍♂️`,
        github: "https://github.com/jongwooo",
        linkedin: "https://www.linkedin.com/in/jongwooo/",
        website: "https://thearchivelog.dev",
        profile_image: "Jongwoo_Han.png",
      },
      {
        ko_name: "김보겸",
        en_name: "Bokyum Kim",
        ko_bio: `GopherCon Korea 2023에서 후원사 관리, 운영, 이벤트를 담당하고 있습니다 🤓`,
        en_bio: `I'm in charge of sponsor management, operations, and events at GopherCon Korea 2023 🤓`,
        github: "https://github.com/seedspirit",
        linkedin: "https://www.linkedin.com/in/bo-gyum-kim-725780207/",
        profile_image: "Bokyum_Kim.png",
      },
    ],
  },
  {
    name: "Speakers Dept.",
    members: [
      {
        ko_name: "김수빈",
        en_name: "Subin Kim",
        ko_bio: `Go에게 많은 사랑 부탁드립니다 :D`,
        en_bio: `Give Go a lot of love :D`,
        github: "https://github.com/sudosubin",
        linkedin: "https://www.linkedin.com/in/sudosubin",
        instagram: "https://instagram.com/sudosubin",
        profile_image: "Subin_Kim.png",
      },
      {
        ko_name: "박제창",
        en_name: "Dreamwalker",
        ko_bio: `GDG Golang Korea & Flutter Seoul`,
        en_bio: `GDG Golang Korea & Flutter Seoul`,
        github: "https://github.com/JAICHANGPARK",
        linkedin: "https://www.linkedin.com/in/park-jaichang-40359a154/",
        profile_image: "Dreamwalker.png",
      },
      {
        ko_name: "최예지",
        en_name: "Yejee Choi",
        ko_bio: `Developer Relations`,
        en_bio: `Developer Relations`,
        github: "https://github.com/yechoi42",
        linkedin: "https://www.linkedin.com/in/yeji-choi-224b6b179/",
        website: "https://yechoi.tistory.com/",
        profile_image: "Yejee_Choi.png",
      },
    ],
  },
];
