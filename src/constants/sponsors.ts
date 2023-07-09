export interface Sponsor {
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
  {
    name: "당근마켓",
    thumbnail:
      "https://about.daangn.com/static/ee3192f2489ff7a7137f293b082e2e2d/39497/1e36a8e6-39e3-4a12-8766-73e3e9ad53b6_service_02.avif",
    logo: "https://dnvefa72aowie.cloudfront.net/karrot-cs/etc/202007/0cf1d10235c37b2635c02719125da37cc1bd632518198b1e1da7f5a364156540.png",
    link: "https://www.daangn.com",
    service: "당근마켓",
    description: `당근마켓은 동네의 가치에 주목합니다.\n근처에 살고 있는 이웃과의 중고 직거래를 시작으로, 전에 없던 지역 생활 커뮤니티를 만들어나가고 있어요.\n이웃들은 진짜 우리 동네 이야기를 주고받을 수 있고, 가게 사장님들은 이웃의 목소리를 가장 가까이서 들을 수 있지요.\n`,
    detail:
      "당근마켓은 동네의 가치에 주목합니다. 근처에 살고 있는 이웃과의 중고 직거래를 시작으로, 전에 없던 지역 생활 커뮤니티를 만들어나가고 있어요. 이웃들은 진짜 우리 동네 이야기를 주고받을 수 있고, 가게 사장님들은 이웃의 목소리를 가장 가까이서 들을 수 있지요. 거래, 모임, 홍보, 결제까지, 동네에서 일어나는 다양한 경험을 당근마켓으로 연결하고 있습니다.",
  },
];
