export type TargetDay = "DAY 1" | "DAY 2";

export interface TimeTableProps {
  day: TargetDay;
  time: string;
  title: {
    en: string;
    ko: string;
  };
  speaker?: {
    name: {
      ko: string;
      en: string;
    };
    company: {
      ko: string;
      en: string;
    };
    avatar?: string;
  };
  isSponsor?: boolean;
}

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
    speaker: {
      name: { ko: "변규현", en: "변규현" },
      company: {
        ko: "당근",
        en: "당근",
      },
      avatar: "연사자_변규현.webp",
    },
  },
  {
    day: "DAY 1",
    time: "12:00 - 12:30",
    title: {
      ko: "Golang으로 4일 만에 Image 서버 성능 72% 개선",
      en: "Improving Image Server Performance by 72% in 4 Days with Golang",
    },
    speaker: {
      name: { ko: "백경준", en: "변규현" },
      company: {
        ko: "백패커(아이디어스, 텀블벅)",
        en: "당근",
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
    speaker: {
      name: { ko: "이호민", en: "변규현" },
      company: {
        ko: "42dot",
        en: "42dot",
      },
      avatar: "연사자_이호민.webp",
    },
  },
  {
    day: "DAY 1",
    time: "15:00 - 15:30",
    title: {
      ko: "Golang 웹 프레임워크, Gin 모니터링 서비스 개발",
      en: "Developing Monitoring Services with Golang Web Framework, Gin",
    },
    speaker: {
      name: { ko: "최정민", en: "변규현" },
      company: {
        ko: "한화 비전",
        en: "Hanwha Vision",
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
    speaker: {
      name: { ko: "정겨울", en: "변규현" },
      company: {
        ko: "당근",
        en: "Hanwha Vision",
      },
      avatar: "연사자_정겨울.webp",
    },
  },
  {
    day: "DAY 1",
    time: "16:20 - 17:20",
    title: {
      ko: "k8s LMA venti-stack 개발기 파트: 2",
      en: "K8s LMA Venti-Stack Development Part: 2",
    },
    speaker: {
      name: { ko: "김정민", en: "변규현" },
      company: {
        ko: "삼성SDS",
        en: "Samsung SDS",
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
    speaker: {
      name: { ko: "임찬식", en: "변규현" },
      company: {
        ko: "라인플러스",
        en: "Line Plus",
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
    speaker: {
      name: { ko: "박래철", en: "변규현" },
      company: {
        ko: "카카오엔터프라이즈",
        en: "Kakao Enterprise",
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
    speaker: {
      name: { ko: "김수빈", en: "변규현" },
      company: {
        ko: "당근",
        en: "Kakao Enterprise",
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
      ko: "Cloud Barista: Multi-Cloud Open Source in Go (for AI)",
      en: "Cloud Barista: Multi-Cloud Open Source in Go (for AI)",
    },
    speaker: {
      name: { ko: "손석호", en: "변규현" },
      company: {
        ko: "ETRI",
        en: "ETRI",
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
    speaker: {
      name: { ko: "Sigrid Jin", en: "Sigrid Jin" },
      company: {
        ko: "Sionic AI",
        en: "Sionic AI",
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
