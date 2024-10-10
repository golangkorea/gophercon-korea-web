export type TargetDay = "DAY 1" | "DAY 2";

export interface DiffProps {
  en: "Beginner" | "Intermediate" | "Advanced";
  ko: "초급" | "중급" | "고급";
}

export interface TimeTableProps {
  day: TargetDay;
  time: string;
  title: {
    en: string;
    ko: string;
  };
  desc?: {
    en: string;
    ko: string;
  };
  diff?: DiffProps;
  speaker?: {
    name: {
      ko: string;
      en: string;
    };
    company: {
      ko: string;
      en: string;
    };
    intro?: {
      ko: string;
      en: string;
    };
    avatar?: string;
  };
  isSponsor?: boolean;
}

const diff_beginner: DiffProps = {
  ko: "초급",
  en: "Beginner",
};

const diff_intermediate: DiffProps = {
  ko: "중급",
  en: "Intermediate",
};

const diff_advanced: DiffProps = {
  ko: "고급",
  en: "Advanced",
};

const timetableList: TimeTableProps[] = [
  {
    day: "DAY 1",
    time: "10:00 - 11:00",
    title: {
      ko: "체크인",
      en: "Check-In",
    },
  },
  {
    day: "DAY 1",
    time: "11:00 - 11:30",
    title: {
      ko: "오프닝",
      en: "Opening",
    },
  },
  {
    day: "DAY 1",
    time: "11:30 - 12:00",
    title: {
      ko: "Go언어 프로젝트 가이드 A-Z",
      en: "Go Project Guide A-Z",
    },
    desc: {
      ko: `- 다양한 규모와 요구 사항에 맞는 최적의 Go 프로젝트 구조를 탐구합니다.
- 코드 구성, 기능 단위, 배포 관련 고려사항에 대한 인사이트를 공유합니다.
- Go 프로젝트의 복잡성을 자신 있게 해결할 수 있도록 돕는 실무 경험을 전달합니다.`,
      en: `- Exploring optimal Go project structures for various scales and needs.
- Sharing insights on code organization, functional units, and deployment considerations.
- Distilling practical experiences to help developers confidently navigate Go project complexities.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "변규현", en: "Kyuhyun Byun" },
      company: {
        ko: "당근",
        en: "Karrot",
      },
      intro: {
        ko: `- 당근마켓에서 채팅 조직을 이끌고 있습니다.
- Go 프로그래밍 분야에서 5년간 쌓은 전문 지식을 활용합니다.
- AWS 서버리스 히어로로 활동하며, 클라우드 컴퓨팅 지식을 다양한 사람들과 공유합니다.
- 복잡한 서버리스 기술을 커뮤니티에서 쉽게 이해할 수 있도록 돕고 있습니다.`,
        en: `- Lead the chat organization at Karrotmarket, with five years of expertise in Go programming.
- An AWS Serverless Hero, dedicated to cutting-edge software development.
- Passionate about sharing cloud computing knowledge and making serverless technologies accessible to the tech community.`,
      },
      avatar: "연사자_변규현.webp",
    },
  },
  {
    day: "DAY 1",
    time: "12:00 - 12:30",
    title: {
      ko: "Golang으로 4일 만에 Image 서버 성능 72% 개선",
      en: "Improving Image Server Performance in 4 Days with Golang",
    },
    desc: {
      ko: `- PHP에서 Golang으로 마이그레이션한 경험을 공유합니다.
- 마이그레이션 배경과 개선 사항을 다루며, 얻은 교훈을 반영합니다.
- Golang 이미지 리사이징 라이브러리 생태계를 살펴보고, 벤치마크 결과를 공유합니다.
- Golang의 CPU 설정을 최적화하는 방법도 다룹니다.`,
      en: `- Sharing the experience of migrating from PHP to Golang.
- Covers the background of the migration and improvements made, with lessons learned.
- Explores the ecosystem of Golang image resizing libraries and shares benchmark results.
- Discusses optimizing CPU settings for Golang in containerized environments.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "백경준", en: "Gyeongjun Paik" },
      company: {
        ko: "백패커(아이디어스, 텀블벅)",
        en: "Backpackr(idus, Tumblbug) / Golang Korea Organizer",
      },
      intro: {
        ko: `- 백패커에서 데브옵스 및 데이터 엔지니어로 일하고 있습니다.
- 백엔드 개발과 인프라 자동화, 데이터 워크플로우 관리 경험을 바탕으로 더 나은 서비스를 제공하려고 노력합니다.
- Golang Korea 주최자로 활동하며 개발 커뮤니티의 성장을 도모하고 있습니다.`,
        en: `- DevOps engineer at Backpackr, overseeing Tumblbug and Idus platforms.
- Experience in backend development, infrastructure automation, and data workflow management.
- Actively fostering growth in the developer community as an organizer of Golang Korea.`,
      },
      avatar: "연사자_백경준.webp",
    },
  },
  {
    day: "DAY 1",
    time: "12:30 - 13:30",
    title: {
      ko: "점심 식사",
      en: "Lunch Time",
    },
  },
  {
    day: "DAY 1",
    time: "13:50 - 14:20",
    title: {
      ko: "차량 업데이트 파일의 안전한 관리",
      en: "Safe Management of Vehicle Update Files",
    },
    desc: {
      ko: `- Go 언어로 보안이 강화된 파일 암호화 API 서버를 구축하는 방법을 배웁니다.
- Docker를 통해 환경을 설정하고, Svelte를 사용한 웹 프론트엔드 개발 시 CORS 문제를 해결하는 방법을 다룹니다.
- Go 언어의 강력한 내장 기능과 AI 도구를 결합하여 안전하고 사용자 친화적인 웹 애플리케이션을 개발하는 방법을 탐구합니다.`,
      en: `- Learn how to build a secure and file-encrypted API server using the Go language.
- Covers setting up the environment with Docker and solving CORS issues in web frontend development with Svelte.
- Explores combining Go’s powerful built-in features with AI tools to develop secure, user-friendly web applications.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "이호민", en: "Homin Lee" },
      company: {
        ko: "42dot",
        en: "42dot",
      },
      intro: {
        ko: `- 10년 넘게 Go 언어의 실용성과 속도, 생산성에 매료되었습니다.
- 카카오 엔터프라이즈와 42dot에서 소프트웨어 정의 차량(SDV)의 안전한 업데이트를 지원하는 서버를 운영하고 있습니다.`,
        en: `- Fascinated by the practicality, speed, and productivity of the Go language for over a decade.
- Operate servers that support secure updates of software-defined vehicles (SDVs) at Kakao Enterprise and 42dot.`,
      },
      avatar: "연사자_이호민.webp",
    },
  },
  {
    day: "DAY 1",
    time: "14:20 - 14:30",
    title: {
      ko: "쉬는 시간",
      en: "Break Time",
    },
  },
  {
    day: "DAY 1",
    time: "14:30 - 15:00",
    title: {
      ko: "Golang 웹 프레임워크, Gin 모니터링 서비스 개발",
      en: "Developing Monitoring Services with Golang Web Framework Gin",
    },
    desc: {
      ko: `- Golang web framework인 gin을 모니터링하기 위한 gin미들웨어(metric, trace)를 개발하는 방법에 대해 공유드립니다.
- gin 미들웨어에 대한 기본적인 개념과 web framework를 모니터링하려면 어떤 지표가 필요한지에 대한 설명이 포함됩니다.
- 실제로 개발한 미들웨어를 간단한 어플리케이션들에 적용시켜 모니터링을 해보는 데모도 준비가 되어있습니다.`,
      en: `- I'll share how to build monitoring solutions for the Gin web framework using custom-built middleware for metrics and trace.
- Describes the basic concepts and necessary metrics for monitoring web frameworks like Gin.
- A demo will be included where we apply the middleware to a simple application for real-time monitoring.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "최정민", en: "Jungmin Choi" },
      company: {
        ko: "한화 비전",
        en: "Hanwha Vision",
      },
      intro: {
        ko: `- 한화비전에서 DevOps 엔지니어로 일하고 있으며 다양한 모니터링 툴을 개발합니다.
- 2023년 GopherCon Korea에서 Golang으로 서버 모니터링 툴을 개발하는 주제로 발표한 적이 있습니다.`,
        en: `- DevOps engineer at Hanwha Vision, developing various monitoring tools with Golang.
- Presented a session on server monitoring tools built with Go at GopherCon Korea 2023.`,
      },
      avatar: "연사자_최정민.webp",
    },
  },
  {
    day: "DAY 1",
    time: "15:00 - 15:10",
    title: {
      ko: "쉬는 시간",
      en: "Break Time",
    },
  },
  {
    day: "DAY 1",
    time: "15:10 - 15:40",
    title: {
      ko: "Deterministic testing in Go",
      en: "Deterministic testing in Go",
    },
    desc: {
      ko: `- 시간에 구애받지 않고 랜덤하게 실패하지 않는 테스트 방법을 알아봅니다.`,
      en: `- Learn how to write deterministic test codes that avoid random failures over time.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "정겨울", en: "Winter Jung" },
      company: {
        ko: "당근",
        en: "Karrot",
      },
      intro: {
        ko: `- 당근에서 소프트웨어 엔지니어로 일하고 있습니다.
- 트위터([https://twitter.com/res_tin](https://twitter.com/res_tin))와 블로그([https://www.winterjung.dev/](https://www.winterjung.dev/))에서 글을 씁니다. 종종 golang 관련 글([https://blog.banksalad.com/tech/go-best-practice-in-banksalad/](https://blog.banksalad.com/tech/go-best-practice-in-banksalad/), [https://blog.banksalad.com/tech/production-ready-grpc-in-golang/](https://blog.banksalad.com/tech/production-ready-grpc-in-golang/))을 쓰고 있습니다.`,
        en: `- Software engineer at Karrot. I write on Twitter ([https://twitter.com/res_tin](https://twitter.com/res_tin)) and my blog ([https://www.winterjung.dev/](https://www.winterjung.dev/)). Occasionally, I write about Golang ([https://blog.banksalad.com/tech/go-best-practice-in-banksalad/](https://blog.banksalad.com/tech/go-best-practice-in-banksalad/), [https://blog.banksalad.com/tech/production-ready-grpc-in-golang/](https://blog.banksalad.com/tech/production-ready-grpc-in-golang/)).`,
      },
      avatar: "연사자_정겨울.webp",
    },
  },
  {
    day: "DAY 1",
    time: "15:40 - 16:00",
    title: {
      ko: "쉬는 시간",
      en: "Break Time",
    },
  },
  {
    day: "DAY 1",
    time: "16:00 - 17:00",
    title: {
      ko: "k8s LMA venti-stack 개발기 파트: 2",
      en: "K8s LMA Venti-Stack Development Part 2",
    },
    desc: {
      ko: `- 오픈소스로 개발한 경량 k8s 모니터링/로깅 스택 venti-stack을 소개합니다.
- 새로운 개념으로 설계된 오픈소스 로그 DB 'Lethe'와 메트릭/로그 시각화 도구 'Venti'를 포함한 venti-stack의 기능과 개발 경험을 공유합니다.`,
      en: `- Introducing the lightweight open-source k8s monitoring/logging stack Venti-Stack.
- Sharing the features and development experience of Venti-Stack, including the Lethe open-source log DB and Venti, a metrics/log visualization tool.`,
    },
    diff: diff_advanced,
    speaker: {
      name: { ko: "김정민", en: "Jeongmin Kim" },
      company: {
        ko: "삼성SDS",
        en: "Samsung SDS",
      },
      intro: {
        ko: `- 삼성SDS에서 Samsung Kubernetes Engine을 개발하고 있습니다.
- Go 테스트와 k8s 관련 주제에 관심이 많습니다.`,
        en: `- Developing the Samsung Kubernetes Engine at Samsung SDS.
- Interested in topics related to Go testing and k8s.`,
      },
      avatar: "연사자_김정민.webp",
    },
  },
  {
    day: "DAY 1",
    time: "17:00 - 18:00",
    title: {
      ko: "이벤트 및 클로징",
      en: "Event & Closing",
    },
  },
  {
    day: "DAY 1",
    time: "18:00 - 20:00",
    title: {
      ko: "After Party & Networking",
      en: "After Party & Networking",
    },
  },
  {
    day: "DAY 2",
    time: "10:00 - 11:00",
    title: {
      ko: "체크인",
      en: "Check-In",
    },
  },
  {
    day: "DAY 2",
    time: "11:00 - 11:30",
    title: {
      ko: "오프닝",
      en: "Opening",
    },
  },
  {
    day: "DAY 2",
    time: "11:30 - 12:00",
    title: {
      ko: "쿠버네티스 플랫폼 프로그래밍",
      en: "Kubernetes Platform Programming",
    },
    desc: {
      ko: `- kubebuilder 프레임워크를 통해 쿠버네티스 플랫폼의 기능을 살펴봅니다.
- 오퍼레이터 패턴을 사용해 프로그램을 쉽게 구현할 수 있도록 복잡한 부분을 처리하는 방식과 개발 난이도를 낮추는 데 도움을 줍니다.
- client-go 라이브러리를 활용해 Go 언어로 쿠버네티스 플랫폼을 쉽게 활용하는 방법을 공유합니다.`,
      en: `- Explore Kubernetes platform features through the kubebuilder framework.
- Using the operator pattern, it helps reduce development complexity by handling intricate parts behind the scenes.
- Share how to leverage the client-go library and the kubebuilder framework to use the Kubernetes platform with the Go language.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "임찬식", en: "Chanshik Lim" },
      company: {
        ko: "라인플러스",
        en: "Line Plus",
      },
      intro: {
        ko: `- 백엔드 개발자로 다양한 플랫폼 구축과 로그 분석, 모니터링 인프라 구성 경험이 있습니다.
- 온프레미스 환경에 쿠버네티스를 도입해 직접 구축 및 운영한 경험을 바탕으로 쿠버네티스 관련 세미나에서 발표했습니다.`,
        en: `- Backend developer with experience in platform building, log analysis, and monitoring infrastructure.
- Deployed and managed Kubernetes in on-premise environments and shared these experiences in seminars and Kubernetes-related translations.`,
      },
      avatar: "연사자_임찬식.webp",
    },
  },
  {
    day: "DAY 2",
    time: "12:00 - 12:30",
    title: {
      ko: "Building Minimalistic Backend Microservice in Go",
      en: "Building Minimalistic Backend Microservice in Go",
    },
    desc: {
      ko: `- HTTP 백엔드 개발에서 유용한 팁과 트릭을 소개합니다.
- 좋은 서비스 코드를 작성하기 위한 모범 사례와 문제 해결 방법을 다룹니다.`,
      en: `- Practical tips and tricks for HTTP backend development in Go.
- Covers best practices for writing service code and solving common development issues.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "박래철", en: "Raecheol Park" },
      company: {
        ko: "카카오 엔터프라이즈",
        en: "Kakao Enterprise",
      },
      intro: {
        ko: `- 카카오엔터프라이즈에서 다음의 사이트 검색 서비스를 개발하고 있습니다.
- Go 언어와 Cloud Native 기술을 현업에 적용하며 배워나가고 있습니다.`,
        en: `- Developer at Kakao Enterprise, involved in Daum site search service development.
- Keen on Go and Cloud Native technologies and applying them in practical projects.`,
      },
      avatar: "연사자_박래철.webp",
    },
  },
  {
    day: "DAY 2",
    time: "12:30 - 13:50",
    title: {
      ko: "점심 식사",
      en: "Lunch Time",
    },
  },
  {
    day: "DAY 2",
    time: "13:50 - 14:20",
    title: {
      ko: "챌린저스 Go 서버 아키텍처 만들기, 근데 이제 리브랜딩을 곁들인",
      en: "Building Go Server Architecture of Challengers with a Side of Rebranding",
    },
    desc: {
      ko: `- 스폰서 세션이라 결국 회사에 대한 얘기도 해야하기 때문에 너무 테크니컬한 주제보다는 회사의 이야기를 주로 할 예정입니다.
- 회사가 리브랜딩 과정에서 고퍼로서 느낄 수 있었던 점들을, 같은 고민을 해본 적 있거나 앞으로 할 사람들과 가볍게 공유하는 자리를 가지려고 합니다.`,
      en: `- As this is a sponsor session, the focus will be more on the company rather than diving too deep into technical topics.
- I plan to share my experiences and thoughts on the rebranding process from the perspective of a Gopher, with those who have faced or will face similar challenges.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "곽웅휘 (Sean)", en: "Sean Gwak" },
      company: {
        ko: "화이트큐브 / 챌린저스",
        en: "Whitecube / Challengers",
      },
      intro: {
        ko: `- 백엔드 개발 경력 9년 차에 접어들고, Go를 사용한지는 5년이 조금 안되었습니다.
- 이번이 컨퍼런스 발표 경험이나 기타 활동을 해보는 첫 번째 기회입니다.`,
        en: `- I have nearly 9 years of experience in backend development and have been using Go for just under 5 years.
- This is my first time speaking at a conference or participating in similar activities.`,
      },
      avatar: "연사자_곽웅휘.webp",
    },
  },
  {
    day: "DAY 2",
    time: "14:20 - 14:50",
    title: {
      ko: "Go로 배우는 분산 시스템",
      en: "Distributed Systems with Go",
    },
    desc: {
      ko: `- Go를 이용해 단순한 시스템을 분산 시스템으로 만들어가는 과정을 소개합니다.
- 단순 구현에서 발생할 수 있는 다양한 문제와 해결 과정을 설명합니다.
- Gossip Glomers([https://fly.io/dist-sys](https://fly.io/dist-sys)) 내용을 기반으로 합니다.`,
      en: `- Introducing the process of evolving a simple system into distributed systems using Go.
- Describes potential issues and their solutions in simple implementations.
- Based on the content from Gossip Glomers ([https://fly.io/dist-sys](https://fly.io/dist-sys)).`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "김수빈", en: "Subin Kim" },
      company: {
        ko: "당근",
        en: "Karrot",
      },
      intro: {
        ko: `- 당근마켓 서버 개발자로, Go 언어와 CLI 개발, 빌드 환경 개선에 관심이 많습니다.
- GopherCon Korea 2023에서 'AWS Lambda in Go (with Kafka)' 주제로 발표했습니다.`,
        en: `- Server developer at Karrot, with interests in Go, CLI development, and improving build environments.
- Presented "AWS Lambda in Go (with Kafka)" at GopherCon Korea 2023.`,
      },
      avatar: "연사자_김수빈.webp",
    },
  },
  {
    day: "DAY 2",
    time: "14:50 - 15:00",
    title: {
      ko: "쉬는 시간",
      en: "Break Time",
    },
  },
  {
    day: "DAY 2",
    time: "15:00 - 16:00",
    title: {
      ko: "Cloud Barista Multi-Cloud Open Source in Go for AI",
      en: "Cloud Barista Multi-Cloud Open Source in Go for AI",
    },
    desc: {
      ko: `- Cloud-Barista는 Go 언어로 개발된 멀티 클라우드 인프라 관리 오픈소스 프로젝트로, AI 서비스 프로비저닝을 손쉽게 할 수 있습니다.
- Cloud-Barista의 기능과 구조, Go 언어 및 오픈소스 프로젝트 메인테이닝 관련 팁을 공유합니다.
- 멀티 클라우드 기반의 LLM 서비스 배포 방법과 Go 언어로 오픈소스에 기여하는 방법을 이해할 수 있습니다.`,
      en: `- Cloud-Barista is an open-source multi-cloud infrastructure management project developed in Go, enabling easy provisioning of AI services.
- Introduces Cloud-Barista’s features and architecture, with tips on Go and open-source project maintenance.
- Attendees will learn about deploying LLM services on multi-cloud infrastructure and contributing to open-source with Go.`,
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "손석호", en: "Seokho Son" },
      company: {
        ko: "ETRI",
        en: "ETRI",
      },
      intro: {
        ko: `- 한국전자통신연구원(ETRI)에서 클라우드 컴퓨팅 관련 연구를 수행 중입니다.
- Cloud-Barista 멀티 클라우드 오픈소스 프로젝트 창립 멤버이자 CNCF 앰배서더로 활동하고 있습니다.`,
        en: `- Senior Researcher at ETRI, working on cloud computing research.
- A founding member of Cloud-Barista and active CNCF Ambassador.`,
      },
      avatar: "연사자_손석호.webp",
    },
  },
  {
    day: "DAY 2",
    time: "16:00 - 16:10",
    title: {
      ko: "쉬는 시간",
      en: "Break Time",
    },
  },
  {
    day: "DAY 2",
    time: "16:10 - 17:10",
    title: {
      ko: "Building RAGOps Architecture with Golang",
      en: "Building RAGOps Architecture with Golang",
    },
    desc: {
      ko: `- Kubernetes 오퍼레이터를 사용한 RAGOps 시스템의 통합을 탐구합니다.
- RAG와 벡터 데이터베이스의 기본 개념을 다루며, 벡터 DB 프로비저닝 방안을 제시합니다.
- Golang과 Kubernetes 오퍼레이터를 사용해 확장 가능한 RAGOps 인프라를 구축하는 방법을 설명합니다.`,
      en: `- Explore the integration of RAGOps systems with Kubernetes Operators.
- Covers the fundamentals of RAG and Vector Databases, proposing efficient provisioning methods.
- Discusses building a scalable RAGOps infrastructure using Golang and Kubernetes operators.`,
    },
    diff: diff_advanced,
    speaker: {
      name: { ko: "Sigrid Jin", en: "Sigrid Jin" },
      company: {
        ko: "Sionic AI / Instruct.KR",
        en: "Sionic AI / Instruct.KR",
      },
      intro: {
        ko: `- Golang과 Kubernetes 기술을 바탕으로 AI 엔지니어링을 연구하고 있습니다.
- 현재 Sionic AI 소속으로 LLM 서비스를 비즈니스에 도입하는 작업을 지원하고 있습니다.`,
        en: `- Researching AI engineering using Golang and Kubernetes technologies.
- Currently supporting LLM service adoption for enterprise clients at Sionic AI.`,
      },
      avatar: "연사자_Sigrid Jin.webp",
    },
  },
  {
    day: "DAY 2",
    time: "17:10 - 17:40",
    title: {
      ko: "이벤트 및 클로징",
      en: "Event & Closing",
    },
  },
];

export default timetableList;
