export interface Session {
  id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  speaker: {
    name: { en: string; ko: string };
    company: { en: string; ko: string };
    intro: { en: string; ko: string };
    image: string;
    sns?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      facebook?: string;
      instagram?: string;
      youtube?: string;
      blog?: string;
    };
  };
  difficulty: { en: "Beginner" | "Intermediate" | "Advanced"; ko: "초급" | "중급" | "고급" };
  category: { en: string; ko: string };
  time: string;
  track: { en: string; ko: string };
}

export interface ScheduleItem {
  time: string;
  type: "session" | "break";
  title: { en: string; ko: string };
  sessionId?: string;
}

export const sessions: Session[] = [
  {
    id: "session-1",
    title: {
      en: "AI Stock Recommendation and Auto-Trading System in Go",
      ko: "Go 로 만든 AI 주식 추천 및 자동매매 시스템",
    },
    description: {
      en: "Introducing the process and demo of creating a personal AI stock recommendation and auto-trading system with Go. Learn how to efficiently write RestAPI clients, validate logic by generating mock data using interfaces, and utilize LLMs in your project.",
      ko: "개인용 AI 주식 추천 및 자동매매 시스템을 Go 로 만들면서 겪은 과정과 데모를 소개합니다. RestAPI 클라이언트를 효율적으로 작성하는 법, 인터페이스를 활용하여 mock 데이터를 생성해 로직을 검증하는 법, LLM을 프로젝트에 활용한 내용을 다룹니다.",
    },
    speaker: {
      name: { en: "Homin Lee", ko: "이호민" },
      company: { en: "Homin Lee", ko: "이호민" },
      intro: {
        en: "An ordinary office worker with over 20 years of experience developing with Go.",
        ko: "Go 언어로 개발하는 20년차 넘은 평범한 직장인.",
      },
      image: "ff4500",
    },
    difficulty: { en: "Intermediate", ko: "중급" },
    category: { en: "General", ko: "일반" },
    time: "11:00 - 11:35",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
  {
    id: "session-2",
    title: {
      en: "Creating a Simultaneous Interpretation System with Go - Real-time AI Inference, WebRTC",
      ko: "동시통역 Go로 만들기 - 실시간 AI 인퍼런스, WebRTC",
    },
    description: {
      en: "This session introduces a simultaneous interpretation system using real-time AI inference based on Go and LiveKit (WebRTC). The speaker's English audio is processed through an STT, translation, and TTS pipeline and broadcast to a Korean channel, allowing participants to listen in their preferred language with low latency.",
      ko: "Go 언어와 LiveKit(WebRTC)을 기반으로, 실시간 AI 인퍼런스를 활용한 동시통역 시스템을 소개한다. 연사의 영어 음성을 STT·번역·TTS 파이프라인으로 처리해 한국어 채널로 송출하며, 참가자는 원하는 언어 채널을 선택해 저지연 환경에서 청취할 수 있다.",
    },
    speaker: {
      name: { en: "JaeGyu Lee", ko: "이재규" },
      company: { en: "GDG Golang Korea Organizer", ko: "GDG Golang Korea Organizer" },
      intro: {
        en: "I have 9 years of development experience and have been building and operating a WebRTC cluster with Go for about 3 years. I am an organizer for Golang Korea.",
        ko: "개발 경력 9년, go로 webrtc 클러스터를 구축한지 3년정도되어 운영중입니다. golang korea organizer 입니다.",
      },
      image: "jqyulee",
    },
    difficulty: { en: "Intermediate", ko: "중급" },
    category: { en: "Communication", ko: "통신" },
    time: "11:35 - 12:10",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
  {
    id: "session-3",
    title: {
      en: "To Framework, or Not to Framework: That is the net/http Question",
      ko: "프레임워크냐, 아니냐: 그것이 net/http로다",
    },
    description: {
      en: "Inspired by the GopherCon 2025 example, I decided to prepare and present on this topic. I will compare the internal code of popular Go server frameworks like Gin, Fiber, and Echo with Go's native http/net package, discuss their implementations, and use various statistics to see which is more widely used. I'm presenting this because fellow Go developers were curious. If it overlaps with other talks, I plan to switch to my next topic: implementing http/1.1 to http/3 in Go.",
      ko: "고퍼콘 2025 예시를 보고 궁금해서 실제로 저 내용으로 준비해서 발표하려고 합니다. Go에서 많이 쓰이는 서버 framework인 Gin, Fiber, Echo와 Go 자체 패키지인 http/net을 내부 코드를 비교하고 어떻게 구현되었는지 다양한 통계자료를 가져와서 어떤 걸 많이 쓰는 지 비교하려고 합니다. 주위 go개발자분이 궁금해하여서 발표해봅니다. 혹시..라도 다른 분들과 겹친다면 다음 주제로 변경하려고 합니다. go언어로 http1.1~http3 구현하는 법",
    },
    speaker: {
      name: { en: "Hyungsub Kim", ko: "김형섭" },
      company: { en: "Dalbitsoft", ko: "달빛소프트" },
      intro: {
        en: "I'm a Software Engineer approaching my 2nd year, developing servers and apps, mainly using Go and Flutter. I have presented at GDG Konkuk Univ. and Google I/O Extended Incheon 2025. Recently, I've been contributing to an open-source project called Project Discovery and have a great interest in networking.",
        ko: "서버 및 앱을 개발하고 있는 2년차를 향해 달려가는 Software Engineer 입니다. 주로 Go 및 Flutter를 사용합니다. 건대 GDG 및 구글 인천 IO 2025에서 발표를 한 경험이 있습니다. 최근 Project Discovery라는 오픈소스 기여를 하고 있습니다. 네트워크에 아주 큰 관심이 있습니다.",
      },
      image: "hyungsubkim03",
    },
    difficulty: { en: "Beginner", ko: "초급" },
    category: { en: "Framework", ko: "프레임워크" },
    time: "13:30 - 14:05",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
  {
    id: "session-4",
    title: {
      en: "Effect-ive Go: Functional Programming in true Go style",
      ko: "Effect-ive Go: 완전히 Go 다운 함수형 프로그래밍",
    },
    description: {
      en: "Effect-ive Go (github.com/on-the-ground/effect_ive_go) is the first attempt to implement Algebraic Effect Handlers, a modern functional programming technique and an alternative to Monads, in a completely Go-like style. Learn how to isolate various effects encountered in practical Go code using only goroutines, channels, and contexts.",
      ko: "Effect-ive Go (github.com/on-the-ground/effect_ive_go) 는 Monad의 대안인 현대적 함수형 프로그래밍 기법인 Algebraic Effect Handler를 완전한 Go 스타일로 구현한 첫번째 시도입니다. 실전 Go 코드에서 만나는 다양한 효과를 고루틴, 채널, 컨텍스트만으로 격리하는 방법을 알아봅니다.",
    },
    speaker: {
      name: { en: "Joohyung Park", ko: "박주형" },
      company: { en: "OnTheGround", ko: "온더그라운드" },
      intro: {
        en: "I researched the OS I/O stack, and after graduating, I developed a distributed platform shared by all services at Naver using Go. At a startup, I developed complex electronic medical records. I have finished rewriting 'Domain Modeling Made Functional' by Scott Wlaschin, which is scheduled for publication in early October. I run OnTheGround, developing open-source libraries and products in Go, TypeScript, Kotlin, Elixir, etc. I write about development on Medium and have presented on effect handlers written in Go to Naver developers.",
        ko: "OS I/O 스택을 연구하고 졸업 후 네이버에서 Go로 전 서비스가 공유하는 분산플랫폼을 스타트업에서는 도메인이 복잡한 전자의무기록을 개발했습니다. Domain Modeling Made Functional - Scott Wlaschin rewrite를 마치고 10월 초 출간 예정입니다. OnTheGround를 운영하며 Go, TypeScript, Kotlin, Elixir 등으로 오픈 소스 라이브러리 및 제품 개발 중입니다. 미디엄에 개발 관련 글을 쓰고 있습니다. 네이버 개발자 대상 go로 작성한 이펙트 핸들러 발표를 했습니다.",
      },
      image: "joohyungpark",
      sns: {
        github: "https://github.com/on-the-ground",
        blog: "https://joohyung-park.on-the-ground.org/",
      },
    },
    difficulty: { en: "Intermediate", ko: "중급" },
    category: { en: "General", ko: "일반" },
    time: "14:05 - 14:40",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
  {
    id: "session-5",
    title: {
      en: "Test Reality Not Mocks: Reliable Go Tests in the AI Era",
      ko: "Test Reality Not Mocks: Reliable Go Tests in the AI Era",
    },
    description: {
      en: "In the era of AI agent coding, reliable tests are more important than ever. This talk shares the problems with mock tests, how to test actual application behavior, and practical tips and examples for writing better tests with AI agents. We will share concrete and practical workflows and techniques for writing Go tests that both humans and AI can trust, including TDD prompting, TestMain, TestContainer, and test lint configuration, with real-world examples.",
      ko: "AI agent coding 시대에 신뢰할 수 있는 테스트가 더욱 중요해졌습니다. mock 테스트의 문제점과 실제 애플리케이션 동작을 테스트하는 방법, 그리고 AI Agent 와 함께 더 좋은 테스트를 작성할 수 있는 실용적인 팁과 사례들을 공유합니다. TDD prompting, TestMain, TestContainer, test lint configuration 등 사람과 AI 모두가 신뢰할 수 있는 Go 테스트를 작성하는 구체적이고 실용적인 워크플로우와 기법들을 실제 사례를 포함해 공유하려고 합니다.",
    },
    speaker: {
      name: { en: "Raecheol Park", ko: "박래철" },
      company: { en: "Karrot", ko: "당근" },
      intro: {
        en: "I am a backend developer on Karrot's search platform team. I have developed and operated various services in Go. I gave a talk titled 'Building Minimalistic Backend Microservice in Go' at the last GopherCon Korea 2024, and as promised, I registered the project on awesome-go. I am also interested in open-source activities and have contributed a new linter to the golangci-lint project. Although I have experience with various languages like C++, Java, Kotlin, and Python, Go is still my favorite, and I applied to speak to share its advantages.",
        ko: "당근의 검색플랫폼팀에서 백엔드 개발을 하고 있습니다. 실무에서 다양한 서비스를 Go 로 개발하고 운영해왔습니다. 지난 Gophercon Korea 2024 에서 'Building Minimalistic Backend Microservice in Go' 라는 제목의 발표를 했었고, 이후 발표에서 약속했던 것처럼 프로젝트를 awesome-go 에 등록했습니다. 오픈소스 활동에도 관심이 많아서 golangci-lint 프로젝트에 새로운 linter 를 개발해 기여한 경험이 있습니다. C++, Java, Kotlin, Python 등 다양한 언어를 경험했지만 Go 가 여전히 저희 최애 언어이고 Go 의 좋은점을 사람들에게 알리고 싶어 발표를 지원하게 됐습니다.",
      },
      image: "raeperd117",
      sns: {
        linkedin: "https://www.linkedin.com/in/raeperd",
        github: "https://github.com/raeperd",
      },
    },
    difficulty: { en: "Intermediate", ko: "중급" },
    category: { en: "Testing", ko: "테스팅" },
    time: "14:50 - 15:25",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
  {
    id: "session-6",
    title: {
      en: "Dev in Go way",
      ko: "Dev in Go way (Go스러움)",
    },
    description: {
      en: "1. Small Interface 2. 'Accept interfaces, return structs' 3. Options pattern",
      ko: "1. Small Interface\n2. \"Accept interfaces, return structs\"\n3. Options pattern",
    },
    speaker: {
      name: { en: "Jaeseung Bae (TechGopher)", ko: "배재승 (테크고퍼)" },
      company: { en: "LINE Plus", ko: "LINE Plus" },
      intro: {
        en: "I started as a developer at LG Electronics in 2013, moved to Hyundai Motor Company, and am now developing the backend system for advertising at LINE Plus. I have experience presenting at internal studies and to clients at international motor shows, but I have no experience presenting at a developer conference.",
        ko: "2013년 LG전자에서 개발자로 시작해서, 현대자동차를 거쳐 현재는 LINE Plus 광고 백엔드 시스템을 개발하고 있습니다. 발표경험은 사내의 스터디나, 해외 모터쇼 같은 곳에서 동료 및 고객사 상대 발표한 경험이 있고, 개발 컨퍼런스에서 발표한 경험은 없습니다.",
      },
      image: "scottbae37",
    },
    difficulty: { en: "Intermediate", ko: "중급" },
    category: { en: "General", ko: "일반" },
    time: "15:25 - 16:00",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
  {
    id: "session-7",
    title: {
      en: "Building a P2P Blockchain Network from Scratch with Go",
      ko: "Go로 밑바닥부터 맨 땅에 헤딩하듯 만드는 P2P 블록체인 네트워크",
    },
    description: {
      en: "This talk shares the experience of building a P2P blockchain network from the ground up using Go's powerful concurrency model. It delves into the challenges and solutions encountered, from application-level TCP handshakes and dynamic peer management to implementing the PBFT consensus algorithm.",
      ko: "Go 언어의 강력한 동시성 모델을 활용하여 밑바닥부터 P2P 블록체인 네트워크를 구축한 경험을 공유합니다. 어플리케이션 수준에서의 TCP 핸드셰이크부터 동적인 피어 관리, 나아가 PBFT 합의 알고리즘을 구현하여 마주쳤던 문제들과 그 해결 과정을 깊이 있게 다룹니다.",
    },
    speaker: {
      name: { en: "Qbean Jeon", ko: "전규빈" },
      company: { en: "", ko: "" },
      intro: {
        en: "I am a Gopher in my final semester of university. I am the team lead for a blockchain-based electronic voting graduation project. Although the project is based on a single-node blockchain, it sparked my interest in implementing a modular PBFT distributed blockchain as a personal project. I also have experience presenting as the team lead for a blockchain mainnet solution at the Dankook University Startup Hackathon.",
        ko: "대학교 마지막 학기를 다니는 Gopher입니다. 졸업프로젝트로 블록체인 기반 전자투표 팀장을 맡고 있으며 단일 노드 블록체인을 기반으로 하는 프로젝트지만, 이 프로젝트를 계기로 개인 프로젝트로 모듈형 PBFT 분산 블록체인을 구현 중인 Golang을 좋아하는 Gopher입니다. 또한, 단국대 창업해커톤 대회에 블록체인 메인넷 솔루션 제작 팀장으로 발표 경험이 있습니다.",
      },
      image: "kyubin2892",
    },
    difficulty: { en: "Advanced", ko: "고급" },
    category: { en: "Concurrency", ko: "동시성" },
    time: "16:10 - 16:45",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
  {
    id: "session-8",
    title: {
      en: "Creating Powerful Buffering with the sync Package: A Practical Look at Simple Concurrency Programming in Go",
      ko: "sync 패키지를 활용해서 강력한 버퍼링 만들기 / 부제: 실제 사례로 살펴보는 Go의 간편한 동시성 프로그래밍",
    },
    description: {
      en: "We had to solve a performance bottleneck that occurred during the process of handling blockchain data. We optimized the data processing flow by utilizing Go's sync package and buffering techniques. As a result, we were able to significantly improve processing speed and enhance resource usage efficiency.",
      ko: "블록체인 데이터를 처리하는 과정에서 발생한 성능 병목 문제를 해결해야 했습니다. Go의 sync 패키지와 버퍼링 기법을 활용해 데이터 처리 흐름을 최적화했습니다. 그 결과, 처리 속도를 크게 향상시키고 자원 사용 효율도 개선할 수 있었습니다.",
    },
    speaker: {
      name: { en: "Taeho Lim", ko: "임태호" },
      company: { en: "Lambda256", ko: "Lambda256" },
      intro: {
        en: "Hello, I'm Taeho Lim, a Go developer at Lambda256. I have been working as a developer for about 4 years and am currently implementing and operating tasks related to blockchain data in Go. I have no experience presenting outside of school or work. However, I enjoy sharing my problem-solving experiences and analyses through writing. I plan to present the content I've only written about to an audience at this opportunity. I'm nervous, but having attended GopherCon Korea 2023 and 2024 as an audience member, participating as a speaker in 2025 would be a very meaningful experience for me.",
        ko: "안녕하세요 Lambda256 에서 Go 언어로 개발하고 있는 임태호입니다. 저는 약 4년 정도 개발자로서 일하고 있으며 현재 블록체인 데이터를 다루는 업무를 Go 언어로 구현하고 운영하고 있습니다. 학교 혹은 회사를 제외한 곳에서 발표한 경험은 없습니다. 하지만 글로서 제가 경험했던 문제 해결 경험이나 분석한 내용을 공유하는 것을 좋아합니다. 이번 기회에 글로만 작성했던 내용을 청중들 앞에서 발표해 보려고 합니다. 긴장되지만 고퍼콘 코리아 2023, 24 모두 청중으로서 참여했는데 2025 에 발표자로 참여한다면 저에게 매우 뜻깊은 경험이 될 것 같습니다.",
      },
      image: "lth9036",
      sns: {
        blog: "https://bbaktaeho-95.tistory.com/",
      },
    },
    difficulty: { en: "Intermediate", ko: "중급" },
    category: { en: "Concurrency", ko: "동시성" },
    time: "16:45 - 17:20",
    track: { en: "Main Hall", ko: "메인 홀" },
  },
];

export const schedule: ScheduleItem[] = [
  {
    time: "10:00 - 10:30",
    type: "break",
    title: { en: "Check-in", ko: "체크인" },
  },
  {
    time: "10:30 - 11:00",
    type: "break",
    title: { en: "Opening", ko: "오프닝" },
  },
  {
    time: "11:00 - 11:35",
    type: "session",
    title: {
      en: "AI Stock Recommendation and Auto-Trading System in Go",
      ko: "Go 로 만든 AI 주식 추천 및 자동매매 시스템",
    },
    sessionId: "session-1",
  },
  {
    time: "11:35 - 12:10",
    type: "session",
    title: {
      en: "Creating a Simultaneous Interpretation System with Go - Real-time AI Inference, WebRTC",
      ko: "동시통역 Go로 만들기 - 실시간 AI 인퍼런스, WebRTC",
    },
    sessionId: "session-2",
  },
  {
    time: "12:10 - 13:30",
    type: "break",
    title: { en: "Lunch", ko: "점심" },
  },
  {
    time: "13:30 - 14:05",
    type: "session",
    title: {
      en: "To Framework, or Not to Framework: That is the net/http Question",
      ko: "프레임워크냐, 아니냐: 그것이 net/http로다",
    },
    sessionId: "session-3",
  },
  {
    time: "14:05 - 14:40",
    type: "session",
    title: {
      en: "Effect-ive Go: Functional Programming in true Go style",
      ko: "Effect-ive Go: 완전히 Go 다운 함수형 프로그래밍",
    },
    sessionId: "session-4",
  },
  {
    time: "14:40 - 14:50",
    type: "break",
    title: { en: "Break", ko: "휴식" },
  },
  {
    time: "14:50 - 15:25",
    type: "session",
    title: {
      en: "Test Reality Not Mocks: Reliable Go Tests in the AI Era",
      ko: "Test Reality Not Mocks: Reliable Go Tests in the AI Era",
    },
    sessionId: "session-5",
  },
  {
    time: "15:25 - 16:00",
    type: "session",
    title: {
      en: "Dev in Go way",
      ko: "Dev in Go way (Go스러움)",
    },
    sessionId: "session-6",
  },
  {
    time: "16:00 - 16:10",
    type: "break",
    title: { en: "Break", ko: "휴식" },
  },
  {
    time: "16:10 - 16:45",
    type: "session",
    title: {
      en: "Building a P2P Blockchain Network from Scratch with Go",
      ko: "Go로 밑바닥부터 맨 땅에 헤딩하듯 만드는 P2P 블록체인 네트워크",
    },
    sessionId: "session-7",
  },
  {
    time: "16:45 - 17:20",
    type: "session",
    title: {
      en: "Creating Powerful Buffering with the sync Package: A Practical Look at Simple Concurrency Programming in Go",
      ko: "sync 패키지를 활용해서 강력한 버퍼링 만들기 / 부제: 실제 사례로 살펴보는 Go의 간편한 동시성 프로그래밍",
    },
    sessionId: "session-8",
  },
  {
    time: "17:20 - 18:00",
    type: "break",
    title: { en: "Event & Closing", ko: "이벤트 및 클로징" },
  },
];
