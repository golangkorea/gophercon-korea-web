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
      ko: "",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "변규현", en: "변규현" },
      company: {
        ko: "당근",
        en: "당근",
      },
      intro: {
        ko: "",
        en: "",
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
      ko: "PHP -> Golang 마이그레이션 대한 내용\n+ 배경, 개선 내용, 회고 등\n+ Image resize Lib 생태계 및 벤치마크 내용 공유\n+ Container 환경에서 Golang CPU/메모리 설정",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "백경준", en: "변규현" },
      company: {
        ko: "백패커(아이디어스, 텀블벅)",
        en: "당근",
      },
      intro: {
        ko: "백패커에서 데브옵스 및 데이터 엔지니어로 일하고 있습니다. 백엔드 개발과 인프라 자동화, 데이터 워크플로우 관리에 대한 이해를 바탕으로 사용자에게 더 나은 서비스를 제공하기 위해 노력하고 있습니다. Golang Korea의 주최자로 활동하며 개발 커뮤니티의 성장을 도모하고 있으며, 다양한 멘토링 활동을 통해 지식을 공유하고 있습니다.",
        en: "",
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
    time: "13:30 - 14:10",
    title: {
      ko: "Sponsor Talk",
      en: "Sponsor Talk",
    },
    speaker: {
      name: { ko: "스폰서사 추후 공개", en: "변규현" },
      company: {
        ko: "",
        en: "",
      },
    },
    isSponsor: true,
  },
  {
    day: "DAY 1",
    time: "14:20 - 14:50",
    title: {
      ko: "차량 업데이트 파일의 안전한 관리",
      en: "Safe Management of Vehicle Update Files",
    },
    desc: {
      ko: "",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "이호민", en: "변규현" },
      company: {
        ko: "42dot",
        en: "42dot",
      },
      intro: {
        ko: "개발의 속도보다 그 안에서의 방향성이 중요하다고 생각하는\n협력을 추구하는 엔지니어입니다.\n\nGo에 대해서 관심이 많고 특히 Go의 성능 최적화를 들여다보고 있습니다.",
        en: "",
      },
      avatar: "연사자_이호민.webp",
    },
  },
  {
    day: "DAY 1",
    time: "15:00 - 15:30",
    title: {
      ko: "Golang 웹 프레임워크, Gin 모니터링 서비스 개발",
      en: "Developing Monitoring Services with Golang Web Framework Gin",
    },
    desc: {
      ko: "- Golang web framework인 gin을 모니터링하기위한 gin미들웨어(metric, trace)를 개발하는 방법에 대해 공유드립니다.\n- gin 미들웨어에 대한 기본적인 개념과 web framework를 모니터링하려면 어떤 지표가 필요한지에 대한 설명이 포함됩니다.\n- 실제로 개발한 미들웨어를 간단한 어플리케이션들에 적용시켜 모니터링을 해보는 데모도 준비가 되어있습니다.",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "최정민", en: "변규현" },
      company: {
        ko: "한화 비전",
        en: "Hanwha Vision",
      },
      intro: {
        ko: "한화비전이라는 회사에서 devops 엔지니어로 일하고있는 최정민이라고합니다. golang을 활용한 다양한 모니터링툴을 개발하는 것을 좋아하고, 작년 GopherCon Korea 2023에 Golang으로 서버 모니터링 툴 개발이라는 주제로 세션을 진행하였습니다.",
        en: "",
      },
      avatar: "연사자_최정민.webp",
    },
  },
  {
    day: "DAY 1",
    time: "15:40 - 16:10",
    title: {
      ko: "Deterministic testing in Go",
      en: "Deterministic testing in Go",
    },
    desc: {
      ko: "시간에 구애받지 않고 랜덤하게 실패하지 않는 테스트 방법을 알아봅니다.",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "정겨울", en: "변규현" },
      company: {
        ko: "당근",
        en: "Hanwha Vision",
      },
      intro: {
        ko: "당근에서 소프트웨어 엔지니어로 일하고있는 정겨울입니다. 트위터(https://twitter.com/res_tin)나 블로그(https://www.winterjung.dev/)에 글을 쓰고 종종 golang 관련 글(https://blog.banksalad.com/tech/go-best-practice-in-banksalad/, https://blog.banksalad.com/tech/production-ready-grpc-in-golang/)을 씁니다. 최근 go to jeju 행사에서 발표한 주제(https://festa.io/events/5326)에 내용을 더해 더 많은 분들과 나눠보고 싶습니다.",
        en: "",
      },
      avatar: "연사자_정겨울.webp",
    },
  },
  {
    day: "DAY 1",
    time: "16:20 - 17:20",
    title: {
      ko: "k8s LMA venti-stack 개발기 파트: 2",
      en: "K8s LMA Venti-Stack Development Part 2",
    },
    desc: {
      ko: "오픈소스로 개발한 경량 k8s 모니터링/로깅 스택 venti-stack을 소개합니다. 여기에는 새로운 개념으로 설계된 오픈소스 로그 DB 'Lethe'와, 메트릭/로그 시각화 도구 'Venti'가 포함되어 있습니다. venti-stack을 개발하게 된 계기와 기능, 그 구성과 개발경험을 공유하고자 합니다.",
      en: "",
    },
    diff: diff_advanced,
    speaker: {
      name: { ko: "김정민", en: "변규현" },
      company: {
        ko: "삼성SDS",
        en: "Samsung SDS",
      },
      intro: {
        ko: "작년 GopherCon Korea 2023에서 발표했던 김정민입니다. 삼성SDS에서 Samsung Kubernetes Engine을 개발하고 있습니다. Go 테스트와 k8s 관련 주제에 관심이 많습니다.",
        en: "",
      },
      avatar: "연사자_김정민.webp",
    },
  },
  {
    day: "DAY 1",
    time: "17:20 - 17:40",
    title: {
      ko: "Sponsor Talk",
      en: "Sponsor Talk",
    },
    speaker: {
      name: { ko: "스폰서사 추후 공개", en: "변규현" },
      company: {
        ko: "",
        en: "",
      },
    },
    isSponsor: true,
  },
  {
    day: "DAY 1",
    time: "17:40 - 18:10",
    title: {
      ko: "이벤트 및 클로징",
      en: "Event & Closing",
    },
  },
  {
    day: "DAY 1",
    time: "18:10 - 20:00",
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
      ko: "쿠버네티스 플랫폼에서 제공하는 기능을 kubebuilder 프레임워크를 통해 살펴보려고 합니다. kubebuilder 프레임워크는 쿠버네티스 오퍼레이터 패턴을 사용해 프로그램을 쉽게 구현할 수 있도록 복잡한 부분을 내부에서 처리해 줍니다. 사용자는 오퍼레이터를 통해 구현하고자 했던 기능에만 집중할 수 있어 전체적인 개발 난이도를 낮추는 데 큰 도움을 줍니다. 이번 세션에서는 kubebuilder 프레임워크와 client-go 라이브러리를 활용해 Go 언어로 쿠버네티스 플랫폼을 좀 더 쉽게 활용할 수 있는 방식을 공유할 예정입니다.",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "임찬식", en: "변규현" },
      company: {
        ko: "라인플러스",
        en: "Line Plus",
      },
      intro: {
        ko: "백엔드 개발자로 플랫폼 구축에서 로그 분석, 모니터링 인프라 구성 및 서비스 개발까지 다양한 업무를 경험했습니다. 다수의 노드를 관리하기 위해 온-프레미스 환경에 쿠버네티스를 도입해 직접 구축하고 관리하면서 서비스를 제공했던 경험을 가지고 있습니다. 이 때 쿠버네티스를 운영하며 겪었던 여러 경험을 정리해 세미나를 통해 공유하기도 하고 쿠버네티스 책을 번역하는 데 참여하기도 하였습니다. 최근에는 쿠버네티스 기반으로 CUDA 라이브러리를 사용하는 고성능 애플리케이션을 운영할 수 있는 온-프레미스 서빙 플랫폼을 개발하고 있습니다.",
        en: "",
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
      ko: "이 강연에서는 Go 언어를 사용하여 HTTP 백엔드 개발에서 실질적으로 유용한 팁과 트릭을 소개합니다. 좋은 서비스 코드를 작성하기 위한 모범 사례와 함께, 개발 과정에서 자주 접하게 되는 문제들을 효과적으로 해결하는 방법을 다룹니다. 실무에서 바로 적용할 수 있는 실용적인 지식과 코드를 얻어갈 수 있도록 준비하겠습니다.",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "박래철", en: "변규현" },
      company: {
        ko: "카카오엔터프라이즈",
        en: "Kakao Enterprise",
      },
      intro: {
        ko: "안녕하세요. 저는 3년차 백엔드 개발자인 박래철입니다.\n\n카카오엔터프라이즈에서 다음의 사이트 검색 서비스를 개발하고 있습니다. 실무에서 다양한 기술과 엔지니어링 문제들을 Go 언어로 해결하는 경험을 했습니다. 최근에 특히 Go의 철학과 Cloud Native 기술들에 흥미를 느껴 현업에 실제로 기술들을 적용해 가며 배워나가고 있습니다.",
        en: "",
      },
      avatar: "연사자_박래철.webp",
    },
  },
  {
    day: "DAY 2",
    time: "12:30 - 13:30",
    title: {
      ko: "점심 식사",
      en: "Lunch Time",
    },
  },
  {
    day: "DAY 2",
    time: "13:30 - 13:50",
    title: {
      ko: "Sponsor Talk",
      en: "Sponsor Talk",
    },
    speaker: {
      name: { ko: "스폰서사 추후 공개", en: "변규현" },
      company: {
        ko: "",
        en: "",
      },
    },
    isSponsor: true,
  },
  {
    day: "DAY 2",
    time: "13:50 - 14:20",
    title: {
      ko: "Go로 배우는 분산 시스템",
      en: "Distributed Systems with Go",
    },
    desc: {
      ko: "Go를 이용해 단순한 시스템을 점차 분산 시스템으로 만들어가는 과정을 소개하는 발표입니다. 단순한 구현에서 발생할 수 있는 다양한 잠재적 문제와 이를 해결하는 과정을 설명합니다. Gossip Glomers(https://fly.io/dist-sys)의 내용을 기반으로 하는 발표입니다.",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "김수빈", en: "변규현" },
      company: {
        ko: "당근",
        en: "Kakao Enterprise",
      },
      intro: {
        ko: "안녕하세요, 당근마켓에서 서버 개발자로 일하고 있는 김수빈입니다. Go 언어를 좋아하고, CLI 개발 및 빌드 환경 개선과 같은 일들을 좋아합니다. GopherCon Korea 2023 행사에서 『AWS Lambda in Go (with Kafka)』 주제로 발표했습니다.",
        en: "",
      },
      avatar: "연사자_김수빈.webp",
    },
  },
  {
    day: "DAY 2",
    time: "14:30 - 14:50",
    title: {
      ko: "Sponsor Talk",
      en: "Sponsor Talk",
    },
    speaker: {
      name: { ko: "스폰서사 추후 공개", en: "변규현" },
      company: {
        ko: "",
        en: "",
      },
    },
    isSponsor: true,
  },
  {
    day: "DAY 2",
    time: "15:00 - 16:00",
    title: {
      ko: "Cloud Barista Multi-Cloud Open Source in Go for AI",
      en: "Cloud Barista Multi-Cloud Open Source in Go for AI",
    },
    desc: {
      ko: "Cloud-Barista는 Go 언어로 개발된 멀티 클라우드 인프라 관리 오픈소스 프로젝트로, 전 세계 어디서든 클라우드 기반의 글로벌 인프라를 구성하고 LLM(대형 언어 모델)과 같은 AI 서비스를 손쉽게 프로비저닝할 수 있습니다.\n이 세션에서는 Cloud-Barista의 메인테이너이자 CNCF 앰배서더, 그리고 Kubernetes 컨트리뷰터인 발표자가 Cloud-Barista의 기능과 구조를 설명하며, Go 언어 및 프로젝트 메인테이닝과 관련된 유용한 팁들도 함께 다룰 예정입니다.\n참가자들은 Cloud-Barista를 통해 멀티 클라우드 기반의 LLM 서비스 배포 방법과 Go 언어로 오픈소스에 기여하는 방법을 이해할 수 있습니다.",
      en: "",
    },
    diff: diff_intermediate,
    speaker: {
      name: { ko: "손석호", en: "변규현" },
      company: {
        ko: "ETRI",
        en: "ETRI",
      },
      intro: {
        ko: "안녕하세요. 저는 한국전자통신연구원(ETRI)에서 오픈소스 전문위원 및 선임연구원으로 활동하고 있는 손석호입니다. 주 업무로 클라우드 컴퓨팅 관련 국가 R&D를 수행하고 있으며, 다양한 오픈소스 프로젝트를 메인테이닝하고 리딩하며 기여하고 있습니다.\n\n오픈소스 활동으로는 Kubernetes 커뮤니티에 오랫동안 기여해왔으며, 2022년에는 Kubernetes Contributor Awards를 수상하기도 했습니다. 현재 Kubernetes SIG-Docs Localization Subproject Lead와 CNCF 글로벌 앰배서더로 활동 중입니다. 발표와 관련된 Cloud-Barista 멀티 클라우드 오픈소스 프로젝트의 창립 멤버로서, Go 프로그래밍이 능숙하진 않지만 6~7년간 열심히 활용해 온 Gopher입니다.\n\nOpenInfra Day Korea, Kubernetes Community Days(KCD) Korea, CNCF Cloud Native Sustainability Week 등의 행사를 주최했으며, KubeCon 프로그램 위원회에도 참여했습니다. 더불어, Cloud-Barista와 Kubernetes 컨트리뷰션 아카데미에서 멘토로도 활동했습니다. Cloud-Native, Kubernetes, Cloud-Barista 관련 주요 행사에서 지속적으로 발표도 하고 있습니다. 처음 취미로 시작한 오픈소스 기여가 이렇게 넓은 범위로 확장될 줄은 미처 몰랐습니다. ^^;\n\nGopherCon에는 아직 참석해본 적이 없지만, 이번 기회를 통해 많은 사람들과 네트워킹할 수 있기를 기대하며 발표를 신청해봅니다.\n\nSNS: https://www.linkedin.com/in/seokho-son/",
        en: "",
      },
      avatar: "연사자_손석호.webp",
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
      ko: "The presentation explores the seamless integration of RAGOps systems using Kubernetes Operators, delving into the fundamentals of Retrieval-Augmented Generation (RAG) and Vector Databases. We'll examine serverless computing strategies for efficient Vector DB provisioning, discussing both temporary and long-term solutions to serve RAG pipelines to millions of customers, including the implementation of Golang and Kubernetes operators in building a robust and scalable RAGOps infrastructure.",
      en: "The presentation explores the seamless integration of RAGOps systems using Kubernetes Operators, delving into the fundamentals of Retrieval-Augmented Generation (RAG) and Vector Databases. We'll examine serverless computing strategies for efficient Vector DB provisioning, discussing both temporary and long-term solutions to serve RAG pipelines to millions of customers, including the implementation of Golang and Kubernetes operators in building a robust and scalable RAGOps infrastructure.",
    },
    diff: diff_advanced,
    speaker: {
      name: { ko: "Sigrid Jin", en: "Sigrid Jin" },
      company: {
        ko: "Sionic AI",
        en: "Sionic AI",
      },
      intro: {
        ko: "Golang을 사랑하는 만 2년 6개월 차 소프트웨어 엔지니어입니다. 블록체인, 핀테크부터 에듀테크와 AI에 이르기까지 수많은 도메인을 경험했습니다. 현재 Sionic AI 소속으로 기업 고객들이 가장 합리적인 방법으로 LLM을 비즈니스에 도입할 수 있도록 돕고 있습니다. 최근에는 Information Retrieval (IR) 시스템에 큰 관심을 가지고 RAG, Embedding/Retrieval Model을 연구하면서 Kubernetes 기술을 바탕으로 확장 가능한 AI 엔지니어링을 연구하고 있습니다.",
        en: "",
      },
      avatar: "연사자_Sigrid Jin.webp",
    },
  },
  {
    day: "DAY 2",
    time: "17:10 - 17:30",
    title: {
      ko: "Sponsor Talk",
      en: "Sponsor Talk",
    },
    speaker: {
      name: { ko: "스폰서사 추후 공개", en: "변규현" },
      company: {
        ko: "",
        en: "",
      },
    },
    isSponsor: true,
  },
  {
    day: "DAY 2",
    time: "17:30 - 18:00",
    title: {
      ko: "이벤트 및 클로징",
      en: "Event & Closing",
    },
  },
];

export default timetableList;
