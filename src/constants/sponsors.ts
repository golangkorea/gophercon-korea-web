export interface Sponsor {
  id: number;
  name: string;
  thumbnail?: string;
  youtube?: string;
  logo: string;
  link: string;
  service: string;
  description: string;
  detail: string;
}

export const SPONSORS: Sponsor[] = [
  // {
  //   id: 1,
  //   name: "현대자동차그룹",
  //   thumbnail:
  //     "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   logo: "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   link: "https://gophercon-korea-2023.vercel.app/",
  //   service: "현대자동차그룹",
  //   description: `.\n`,
  //   detail: `.`,
  // },
  {
    id: 2,
    name: "당근마켓",
    thumbnail:
      "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/sponsors/gold/thumbnail_daangn.jpg",
    logo: "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/sponsors/gold/logo_daangn.png",
    link: "https://about.daangn.com/",
    service: "당근마켓",
    description: `당근마켓은 동네의 가치에 주목합니다.\n근처에 살고 있는 이웃과의 중고 직거래를 시작으로, 전에 없던 지역 생활 커뮤니티를 만들어나가고 있어요.\n이웃들은 진짜 우리 동네 이야기를 주고받을 수 있고, 가게 사장님들은 이웃의 목소리를 가장 가까이서 들을 수 있지요.\n`,
    detail: `당근마켓은 동네의 가치에 주목합니다.\n근처에 살고 있는 이웃과의 중고 직거래를 시작으로, 전에 없던 지역 생활 커뮤니티를 만들어나가고 있어요.\n이웃들은 진짜 우리 동네 이야기를 주고받을 수 있고, 가게 사장님들은 이웃의 목소리를 가장 가까이서 들을 수 있지요.\n거래, 모임, 홍보, 결제까지, 동네에서 일어나는 다양한 경험을 당근마켓으로 연결하고 있습니다.`,
  },
  //   {
  //   id: 3,
  //   name: "드림어스컴퍼니",
  //   thumbnail:
  //     "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   logo: "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   link: "https://gophercon-korea-2023.vercel.app/",
  //   service: "드림어스컴퍼니",
  //   description: `.\n`,
  //   detail: `.`,
  // },
  //   {
  //   id: 4,
  //   name: "메가존클라우드",
  //   thumbnail:
  //     "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   logo: "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   link: "https://gophercon-korea-2023.vercel.app/",
  //   service: "메가존클라우드",
  //   description: `.\n`,
  //   detail: `.`,
  // },
  {
    id: 5,
    name: "AB180",
    thumbnail:
      "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/sponsors/bronze/logo_ab180.png",
    logo: "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/sponsors/bronze/logo_airbridge.png",
    link: "www.airbridge.io",
    service: "에어브릿지",
    description: `AB180(에이비일팔공)은 2015년 설립된 데이터 기반의 마테크 전문 회사로, 웹+앱 통합 광고 기여도를 측정 및 분석하는 Airbridge(에어브릿지), 마케팅 자동화 & CRM 솔루션 Braze, 고객 행동 분석 솔루션 Amplitude를 통해 국내외 약 300개 이상 고객사들의 디지털 성장을 돕고 있습니다.\n`,
    detail: `AB180이 자체 개발 및 공급하는 모바일 광고 성과 분석 솔루션인 Airbridge는, 매일 세계 각국에서 발생하는 10억개 넘는 이벤트 데이터,1억 대의 디바이스, 100만 RPM을 바탕으로, 웹과 앱을 넘나드는 사용자의 유입을 정확히 파악하고, 광고 채널 및 캠페인별 성과를 측정할 수 있는 국내 유일의 웹+앱 통합 광고 성과 어트리뷰션 솔루션입니다.`,
  },
  //   {
  //   id: 6,
  //   name: "오누이(설탭)",
  //   thumbnail:
  //     "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   logo: "https://raw.githubusercontent.com/golangkorea/gophercon-korea-2023/main/public/images/golang_korea_logo.png",
  //   link: "https://gophercon-korea-2023.vercel.app/",
  //   service: "오누이(설탭)",
  //   description: `.\n`,
  //   detail: `.`,
  // },
];
