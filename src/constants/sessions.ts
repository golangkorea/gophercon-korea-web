export interface Speaker {
  name: string;
  company: string;
  description: string;
  profileImage: string;
}
export interface Session {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  category: string;
  description: string;
  speaker: Speaker;
}

export const SESSIONS: Session[] = [
  {
    id: 1,
    date: "08-05",
    startTime: "09:00",
    endTime: "10:00",
    title: `Check-in`,
    category: "",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 2,
    date: "08-05",
    startTime: "10:00",
    endTime: "10:30",
    title: `오프닝 및 후원사 홍보`,
    category: "Keynote",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 3,
    date: "08-05",
    startTime: "10:30",
    endTime: "10:40",
    title: `쉬는시간`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 4,
    date: "08-05",
    startTime: "10:40",
    endTime: "11:10",
    title: `Open Source in Go`,
    category: "Main Talk",
    description: `Go 언어 관련 강연에 참석하면 자주 들리는 질문이 있습니다. \n‘Go 언어로는 무엇을 할 수 있나요?’ \n이번 세션에서는 왜 Go 언어가 오픈소스에 기여할 수 있는 강력한 도구인지 이야기하고 Go 언어로 구현된 클라우드 네이티브 오픈소스들을 소개합니다. \n더 나은 이해를 위해 데모 애플리케이션을 활용합니다.\n \
      이후 ‘오픈소스 컨트리뷰션 아카데미’, ‘LFX Mentorship’등 오픈소스 기여를 도와주는 국내외 여러 프로그램에 참여한 경험을 소개합니다.`,
    speaker: {
      name: "박남규",
      company: "LitmusChaos",
      description:
        "클라우드 네이티브 기술에 관심이 많은 Gopher 입니다. Litmus(CNCF 인큐베이팅 프로젝트)라는 오픈소스에 기여하고 있습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4OJg1o7McNedDK3bJszOFW0MZu1K6gfQ3zKkf2EaZfpzKtH1K_NdO2fOQXDRZe0SNBFuYorEZ_Xs-iyMolPGvGjghi0W8xwRRbnOqiBmguxILhpF76UcBKJ0r1o22kb_wmg_P7bz6k8RhYz3qsUDdGPxIz515wdLZ4hCCddkweTchCqPMQgEttiuoHGlW2AqWN6VA3irBGQyUQA-w8ItMboLss_gHe0NVHzKtHgj4EFvLoH5lUI2Fi7PP8QHbz9yZHylhEqjzH7mylneQJQrCGOaHqBsGrAuTOdy1sqQt1e-elWGPABMQNwa0mpky8gnlrIa3UozF2XbzNPuErIq11VbY_QACzKVvUH7mZbdx_Tam_3vyohDdELxsB0qKUx2yNi0WkAZ8oCdJVsOZXP0-rj10ri2roEh-kt3CQ6rjS7upXXCoMii_Skqo6T-MrohuoKnDpY0xAEC2vm28gquNrp1rwW9evz1qBEgt2fmmlR51M6LSer7LGTYYUk2Ci9IpQ-RLvkCsAzXluOW0yqGrAww1zxYwj3fIrI0EUrt47hKze6eZNWqHH9dpqjLh9QXcxLWeNAJuL2OLZ2rGC6HLCLu5taZjGOZfC6IFJUI8ec1zEAvuGr4ejgsMTCpFIGM_CkIEFc0SFrzuhsyBPNQDlM0of-MwdpPv_WQkP1IFOSKDzZiwvDZdxnnsSemmvswjle6tKnqBwPW-uk4pfZWY-21rgUtE4eap5ku8pG0ybjOeMczCVNP1OKExyxU1xnK73TAruO2MyvfQhX1QcpVWyiXETuUbOYZbMJpyVnsFgM4ucx54fXHJfKHV_wrGBWckdjPBCl25Wf8FA6yw-5kB4X4Qs4i0T22irkio4tNwIMi2ymTffuFbJqD-Om1CS4O4-TsdlOo4Zh3mtpH4LF5EvCk7iiZcAQLmkTIfPSBi2taFDPRPjzbkhYnlVEZ7rLn5PNs9v4iAHIC-2Et22CGsoD4ZgHlVJwZdDixnFRJECq7PtuUiyQQegamqChXhH6E5lBaDmnogzliSOPSGCm-I7xYLgRpkyVtIgwvGDG2hcCx7t_fFE1p-kY1DHikHwpCCxoH_zNMqE_uGFFGtaSNpnATP269rfzq1QXXAelSUD6jgMT22nwyPteG1LvfyDUNYdOxZEnzCBGH1byEPtOMM0S-8MpNwvM90T3oz4eTS1-xWnjipYmq5ehvuYEbnvrf2zfAZg52liIhI_-UtE8XtSagK0rUzmYHVHV89Dzl11B_IXOGn6EQ9YcBYRZU8dDgFBAxqXQZq8IgJ6-eouHUUVlzt2vJSWTZwlX7Y_5qnwg2zNgZq3ej7QSs1s7KQch4JvKQGlltVVqznmIiL8SfSJCZnCab3RS5Q2oowSusqBTDCXv",
    },
  },
  {
    id: 5,
    date: "08-05",
    startTime: "11:10",
    endTime: "11:20",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 6,
    date: "08-05",
    startTime: "11:20",
    endTime: "11:50",
    title: `Go 테스트의 모든 것, 모든 것을 테스트해보자`,
    category: "Main Talk",
    description:
      "테스트 관련 패키지(testing, testify, httptest)들에 대해 알아봅니다.\n \
      테스트 코드 작성 방법(서브테스트, TestMain, 네이밍/스타일, 블랙박스 테스트), 서버 mocking, 커버리지 100% 달성하는 방법을 논의합니다.\n \
      그외의 테스트 관련 주제(패닉, 고루틴, race, benchmark, github actions)에 대한 경험을 공유합니다.",
    speaker: {
      name: "김정민",
      company: "삼성SDS",
      description:
        "삼성SDS에서 k8s 관련 업무를 하며, Go를 주언어로 다룹니다.\n \
        컨퍼런스 발표 경험은 3회 정도 있습니다.\n \
        오픈소스 lethe/venti( https://github.com/kuoss )를 개발하면서 겪은 테스트 관련 경험을 공유하고자 합니다.",
      profileImage: "",
    },
  },
  {
    id: 7,
    date: "08-05",
    startTime: "11:50",
    endTime: "12:00",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 8,
    date: "08-05",
    startTime: "12:00",
    endTime: "12:30",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 9,
    date: "08-05",
    startTime: "12:30",
    endTime: "14:00",
    title: `1.Generative AI with GO (30분) \n 
    2.Event(60분)`,
    category: "Lunch",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 10,
    date: "08-05",
    startTime: "14:00",
    endTime: "14:30",
    title: `컨텍스트를 이용한 상태관리`,
    category: "Main Talk",
    description:
      "현재 배포된 컨텍스트 패키지의 기능과 곧 추가될 기능을 합쳐 고 언어에서 활용할 수 있는 기초적인 상태관리 방법에 대한 발표입니다. 컨텍스트 타입을 알아보고, 어떤 곳에 활용할 수 있는 지 간단한 예시를 통해 알아봅시다!",
    speaker: {
      name: "권용민",
      company: "AfreecaTV",
      description:
        "누구나 안전하고 편리한 네트워크를 꿈꾸는 백엔드 개발자입니다. 고 언어는 누구나 쉽고 빠르게 네트워크에 접근할 수 있게 해주고, 통신에 필요한 라이브러리들을 안전하게 별도로 제공할 수 있다는 것에 매력을 느껴 시작하게 되었습니다. 지금은 어떻게 해야 고 언어에 대한 생산성을 높일 수 있을 지에 큰 관심을 두고 있습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4OH_mYYi2H9GsUU72ocF7y7D2K2RK6glu0i5QzmWhtYFJGvZX8kvj6ERqQA4-mfQmO4ITGJ-nErgC1BVNseTXO7qhOLVTimJJP-TJ_XA_jtz9a83kXM2xb2N91Y9V-wm1a_nWOTGDZ0HltwaBTP-hAgzpetZREHK_cfcrx1v9Vjisinua-gFZiO6Q4GpLLXvZq3wIlLrYTR9jNeXF6K7CSQ-gMR_zS1zRYso8zy3CM7oEVIPkIMoUyLq9NjgbN7YCafwB8plo-mgy8k5W8jHhgPUXtaXnPXpeQMdW0NAlpGMcA575TAPGgSHXeh7QL3jfgCQ1QgazOgAs2o2hdF6bUSAD5s0PJxHq7-J73IbOIU2OiVaJyNCm5XCJ1uWIKBz8XUdxkCI79PQSKTJ5GhXxH1S7zkPCqdKbsvEGirZBiqC2PDu59UO62raixvLIYW4Ba04pQtmDmyEzRQ-NxzlB15uO1ufe2w2Dwoz0AsvQNJProljz55pRro1DLXSy8m89swknNutDVZqLgTMTPT623nw7UbhGyCe0HhIXe0Xq31tlTFnMzleX9nX_l_CAqwDyDrKgjfWA4I9vd3z78ziiDWPn28lNvMzIyDE1affYMYJ_XLNB68eyXgNoLMYv6QS7VMox9X-AgWf2Bzi_BtKI3MyBuyxoY5tLFKixn9du8xLlgFheJR_heAOXg4miDDUVuIiG9rfRM7FgOxhj-JchzE8gdtpGOS7kKtUH61rgssEyJeIzyj_TV8h16FHaNARYvYWj9EBdzEMIFPnfrWpBrMB7mC--JqtKsBn1VzR3ndov42KwmbIemmdkxot7q7srVhaPQow7A1vmLbVYSJO4GaIXHwC4xfEV0PkK0vP7MHTZGFQ1wIWjR_uozVhcSlnwQ3cOwnZa6YK8W4IjSkXQXC_uth8Cj75ZWfeqWi3btK0vN3pSXIHwl5Mdi6RIKqGmflfRVyx23h1CECBmChW_O5QJt2ror-awDxzfkW1XDS1nFQmXSsQxus3nNpHSCEbE6auZIIuij2h5hHn82RypSTxzmB3swb80xu1GD3vHglhdLa9g-EovZzrz6H43ct4aM5elLyyLenumEue4jBUjbn1gw6FxP6xKH7ygK5LBgxAhOkwG625T8VnbguDJ6FWJ5cCXaxyOaIqOAJzsq_Y5SQiZ54EfbyhYIF1WY2uJpdDT7pC7_Bl-sJ2vIIhmZH5r-RcXtISHB17KT_i9qgf6_xU9nmL0wR5YpQXHirQkFr_HnLC8yj6HP1TIGRGZL1FysuhrQ9HpEKae0-z_qfAxLsBQJl4nhtSOZMcakqGEQmyZbHKmhSSsJ-bVv_tTHYAVyax48ROR1j1DvxJ3XrsfWOalnVGyhy_xf7uaLuyEJqKh1n",
    },
  },
  {
    id: 11,
    date: "08-05",
    startTime: "14:30",
    endTime: "14:40",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 12,
    date: "08-05",
    startTime: "14:40",
    endTime: "15:40",
    title: `API 서버 테스트코드 A-Z : 케이스별 효과적인 테스트코드 작성 전략`,
    category: "Main Talk",
    description:
      "테스트를 잘 짜기 위해서는 어떤 프로젝트 구조를 가지는 것이 유리한지, 외부의존성이 있는 경우에는 테스트를 어떻게 작성해야하는지에 대해서 설명하고 유용하게 사용할 수 있는 툴들에 대해서 설명합니다.",
    speaker: {
      name: "김진용",
      company: "룩코",
      description:
        "글로벌 서비스인 에이클로젯을 만드는 룩코에서 백엔드 리드로서 일하고 있습니다. \
        팀이 어떻게 함께 일하고, 소통하며, 문제를 해결하고, 학습하고, 지속적으로 성장하는 방법에 대해서 관심이 많습니다.",
      profileImage: "https://drive.google.com/uc?id=1yZ3-tzpPFBOHEWHSaNcTUXIyX6XMf5rO",
    },
  },
  {
    id: 13,
    date: "08-05",
    startTime: "15:40",
    endTime: "15:50",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 14,
    date: "08-05",
    startTime: "15:50",
    endTime: "16:20",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 15,
    date: "08-05",
    startTime: "16:20",
    endTime: "16:30",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 16,
    date: "08-05",
    startTime: "16:30",
    endTime: "17:00",
    title: `Profiling and Tracing Tips in Go: OLAP 데이터베이스를 개발하며 얻은 교훈들`,
    category: "Main Talk",
    description:
      "OLAP 데이터베이스를 개발하며 얻은 실전적 사례들을 통해, go tool pprof, go tool trace 의 활용법에 대해 소개합니다.",
    speaker: {
      name: "박재완",
      company: "AB180",
      description:
        "AB180 query engine 팀에서 Backend Engineer 로 일하고 있으며, \
        분산 OLAP 데이터베이스인 Luft 를 개발중입니다. \
        빠른 개발속도와 높은 실행성능에 관심이 많습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4P01_nSfi7ZxfRGwglJhQjGiMQwuaHvg3ENavi8HnXU167oaLlLY5u4Yp-qbC5kFHvnKjIzZpG2g5XOllyxHAUz_TMHPTmyi4-OvvXTA5wbd6Sxfv0r77-Zkj-qR-CjH2_uIvlZYt0V-knEWkSqSgRJQT6yKwUi3dwEdTEjFG-yK89eYYfqANzZwohHg955TXNcuW6-du9io52JPjfdBLgzpeG2pKXD8ZGd0aCZ5f_ppYcA38jkqrHKMMOygE9QM9aCei8jFDSH5-5okZmGRZxg-ZOe3OiMIlV9XOC2CKPYwq8_YUPcUSs3O89vx9a5JWhe7JSl9ugERh51r_eG5mqjZGU63SyJZO6y9FpEN7z07spq1hlowGjeL9dTnD32Y-nhZ7ajb1YryYxMTPHzSuTR4wW9e7JNvqb8l2f8qnl7MMbm-03yRqat0qbREQrW6D9ial5AGNgeWRMoRg3raMrqJSh9PX00qoMgs44uNHAH4Mz95r0cGpx2h956R5pPmjDMV1s-QI6Pj23XAylMD8r9soxkU6yd3Vmiu5o3XErDCUj-Z-cyrwN9LmwuMYjAUZxzc3ZSCKrMizp9Ua5sGh2-S9NFzZQ3xQTPeYig5W0_g5S3ddKZXJ-6GyG5I109HnnNqZiq6OxG-nSK7IeoMRqoDmQGRAtuFgVzVFTsUUw6XEjbSjR8_4XvPTvoiZNQFLZ7gSW3Em9WpznQa5-XWZcRwPgWBRoSfjJvIsIyymN81w8Z9p2NpIn-VaHWHNN7p-sosCUZDXPL-hDqiQ7K3MhwOTEn6ZfmLvmg2SVmA2SRurpmrvf5kh6YbAD9RRpnA6jj3jcJZH4GRMpRfv4iZEIUTBWWFkoPUB_PMD8onBtCtREc49mEfoR5I9SWOTtefRrW96z4XXG5YxQL6TLquOaxBxc6OxJZcp9Zssd7hMZU8jkOiOymmVCkycFjdC1jQ0x3A4c7ScSF1K7MMvZi7YLCxpfZowLk_aiUMjpqnKyGbMmEHT3zzLTtFS8OjSqa1k3DYXnpIcwXZnLjMBGgev1eCATWAiC5wjo9FnxTdO3j0eV0WEJlHxHr3576NukkJtGv1PorEyz4CM6S92w96DWr_SyvsduHAoo2JF3YjKoMMo0km_o7LdqEp5nyaQ9s7M8pyhxlViznHdqODyDKrrAbmSTlkppgD2wlTQSPtCvPne3APeI41C88ZuBVrWjAMEzsLdAF9fA9uS7ZrnKu4snjFDJknKHrDKcaWzkIMvboszMsNz76OrG-3djKhKfl2J0bdSa3AETN74Hv0EPrc_YKc97lLUWba4qjpBDBJr9bsiQzktOlh4dLTZE5AT_-pjGxiw-Ps2-2S5YbEhtxtcV5Js_T0eqc6S6F2shN_qvRfdw",
    },
  },
  {
    id: 17,
    date: "08-05",
    startTime: "17:00",
    endTime: "17:10",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 18,
    date: "08-05",
    startTime: "17:10",
    endTime: "17:40",
    title: `eBPF 도구를 이용해 Go 애플리케이션 추적하기`,
    category: "Main Talk",
    description:
      "eBPF 도구를 이용해 Go 언어로 개발된 애플리케이션을 추적하는 기본적인 내용을 다뤄보려고 합니다.\n \
      eBPF 기본 개념을 간단하게 살펴보고 eBPF 도구들이 어떻게 활용하는지 살펴봅니다.\n \
      그리고 이 도구를 이용해 Go 애플리케이션 내부를 추적해보고 가능성과 한계점을 정리하며 발표를 마무리합니다.",
    speaker: {
      name: "임찬식",
      company: "라인플러스",
      description:
        "고성능 워크로드 실행을 위한 쿠버네티스 플랫폼 운영 및 오퍼레이터 개발 업무를 진행하고 있습니다. Go 언어로 개발한 애플리케이션을 eBPF 도구를 이용해 추적하는 방법을 정리해 공유하는 발표를 준비해 보았습니다.",
      profileImage: "https://drive.google.com/uc?id=1fSnSwjxlx44qQaHGk244Cqe2LlH5F59d",
    },
  },
  {
    id: 19,
    date: "08-05",
    startTime: "17:40",
    endTime: "17:50",
    title: `이벤트(추첨)`,
    category: "Event",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 20,
    date: "08-05",
    startTime: "17:50",
    endTime: "18:00",
    title: `클로징 (10분)`,
    category: "Closing",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 21,
    date: "08-06",
    startTime: "09:00",
    endTime: "10:00",
    title: `Check-in`,
    category: "",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 22,
    date: "08-06",
    startTime: "10:00",
    endTime: "10:20",
    title: `오프닝 (20분)`,
    category: "Keynote",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 23,
    date: "08-06",
    startTime: "10:20",
    endTime: "10:30",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 24,
    date: "08-06",
    startTime: "10:30",
    endTime: "11:00",
    title: `Golang으로 서버 모니터링 툴 개발`,
    category: "Main Talk",
    description:
      "Golang으로 /proc 디렉토리에 접근해, 커널 지표로 서버모니터링을 개발하는 방법에 대해 공유드립니다. 대부분의 모니터링 툴이 Java로 구현이 되어있어 이와 비교하는 내용도 포함됩니다.",
    speaker: {
      name: "최정민",
      company: "와탭랩스/Devops엔지니어",
      description:
        "안녕하세요 와탭랩스라는 모니터링을 SaaS로 제공하는 회사에서 DevOps엔지니어로 약 2년째 재직 중입니다. 운영과정에 필요한 툴을 만드는 과정에서 Golang과 Python을 적극 활용합니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4NmDhd5Ymi3AxtxV94p5vwcddduSMeGA6Sbcub9TUH3Jw6Dh1fIjR-DnS4y4rkOD_YRSy8hHw1zWw7_T_biKTLD2uO3ymw0aBdbRMaDfMuw4hJHQVgIckqqpXWeVK8IH5EJlgmmK0oNxxfsyUJ6i_mqL2fiRx3A0cFKk6cpQDnJVg-n-KFRH9o8HOnvbGgkHipDNsh_KsJhdk6f1CmYQCXGQHYBeqVTM_4QocB-fs-poeI_xwepKv5omfTFae2eXHrEA42BBNh1eB5Q7K6teu3PbDcx1SbE4aWj3KAcSf4ncE9QqfzazA4JUcmlSRDnlXMKHfRsPToOKrBlpVjyuJ5kBwKphBkOaq67FWvcmk32VKQy4v_1cxoYmBeqjDCef1RBHpxjZjCKz1_wDNdeTYNnDhC-TJLDrZMRwfwjyZtK-wrJvLknE_Se1sR7nMbVJFo90N5HOOA9obQDtwjSvjdZsOT8TEUqgxPwyV7CW4DQg7N39TGY2CRGda0HIjTLQfxzn2-HFSUwdr3geLJW2TpWTN0uLeT2RhgEIZwM5O6u6qLkUmJuzJd5tu54oblxJFF5XxQi8rCSjtAouAsU6d9yE2dlx5pXCMJ3Pp3Varu6h3CRAPiwO4_IlNpkp_slBDXqHZfCRg-pC48cFvM1ax71iN-OwQ0iWoVo-epNtQiJ26dm4Z6mEXD1Q6XdbNlMKWe7AzxGDuckL4079fVFIlKRVywtn8LIF77ST8cZNYa86T-w8ccnUWGlpApHxAd0gCq9X5dRPcfW4j1TKWoamIWs4DB1rMCMALAaeJe_9BayBEfH4tb92uIxHWHUfnyGHx6nWZFiH7V37w0vM3hLqXPCY30ufUSZyNiGjLnI3JPhVRnQfQLJRiiDzM_e4JZrvnxIWgn79tvdYhTNk_TYp7f9RYFp_FYOk-iUdYzm1ZXHKCuR-_YV4FGApZD3oeN927ngyy1QpJC85ZK275MAhAwS_anaFr207WndcBq0k1mtOSEe3jlw54LeOYYA7QXIWXX6o8ELoGdbQDPTASYZhEcAFbtDicWkefH2tjrreCQEE-bn2SgneAJPdthsvl1o1jh40LXIToDlQt8RFXR_5G_lJ0xD9xjMnpk34RdrddHYLG9SJyZjxGinfaKyQSqmYYjmFYXjbdeYQ2btwaGnApNV8NV2V2oYMRNCBGlQQ9v8sxdhDwea7pG1D6SwmzwMoiDv-w4VPuvXOKKD8SiV8EMQ3ATwpuSmXhyejTQV1T_Ux8jU2z7N6Iwzs9yI5ZrKjiajRvrZjII5oVqnvqrGWwsHveU2OcEmKr4qsc9Jez5d2A-vyvTEBAvwEd5a7JN4hOZT8Hicv6Ew3fqPP7YQeb4ThmwKlnsGYQ3_M8zNmbabkWAJ",
    },
  },
  {
    id: 25,
    date: "08-06",
    startTime: "11:00",
    endTime: "11:10",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 26,
    date: "08-06",
    startTime: "11:10",
    endTime: "11:40",
    title: `AWS Lambda in Go \n(with Kafka)`,
    category: "Main Talk",
    description:
      "기존 모놀리식 서비스에서 이벤트를 웹훅으로 받아 처리하던 아키텍처에서 문제를 겪고, AWS Lambda와 Go를 이용해 서버리스 웹훅 서비스를 개발, 배포한 경험에 대해 소개드립니다.",
    speaker: {
      name: "김수빈",
      company: "비바리퍼블리카 (TOSS)",
      description:
        "현재 비바리퍼블리카에서 서버 개발자로 일하고 있는 김수빈입니다. 저는 팀 내에서 다른 개발자 분들의 개발 생산성을 개선하는 플랫폼 엔지니어링을 주로 하고 있는데요, 그 과정에서 얻은 여러 경혐들을 공유 드리고자 합니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
    id: 27,
    date: "08-06",
    startTime: "11:40",
    endTime: "11:50",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 28,
    date: "08-06",
    startTime: "11:50",
    endTime: "12:20",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 29,
    date: "08-06",
    startTime: "12:20",
    endTime: "13:50",
    title: `1. 해외 GDE 영상 (30분) \n 2. 이벤트 가능! (60분)`,
    category: "Lunch",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 30,
    date: "08-06",
    startTime: "13:50",
    endTime: "14:20",
    title: `버그 없는 프로그램 만들기: 테스팅의 관점으로. 근데 이제 블록체인을 곁들인`,
    category: "Main Talk",
    description:
      "흔히들 말합니다. 이 세상에 버그 없는 프로그램은 존재하지 않는다고.\n \
      이 발표를 통해 버그 없는 프로그램을 만드는 방법에 대해서 소개해드리고 싶습니다. ",
    speaker: {
      name: "박창현",
      company: "오스모시스",
      description:
        '분산 시스템, p2p 네트워킹, 그리고 블록체인을 사랑하는 Gopher입니다.\n \
        현재 Osmosis에서 블록체인 엔지니어링을 맡고 있으며, 합의 알고리즘과 Proof-of-Stake(POS) 블록체인을 만들수 있는 오픈 소스 프레임워크를 개발하고 있습니다. 고언어 개발자를 위한 "버그 없는 프로그램을 만드는 방법:테스팅의 관점으로, 근데 이제 블록체인을 곁들인"를 주제로 한 발표를 준비해보았습니다. 버그없는 프로그램을 만드는 비밀에 대해 알려드리고 싶습니다.\n \
        －－＝＝(/･_･)/==≡≡卍',
      profileImage: "https://drive.google.com/uc?id=1gm2boS_ocpHDc0RB6qoR5agls14S363v",
    },
  },
  {
    id: 31,
    date: "08-06",
    startTime: "14:20",
    endTime: "14:30",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 32,
    date: "08-06",
    startTime: "14:30",
    endTime: "15:00",
    title: `Scenario Tester: 인수 테스트 자동화로 자신감, 생산성 높이기`,
    category: "Main Talk",
    description:
      "- 성능, 강타입 언어 등의 이점을 누리기 위해 거대한 레거시 시스템을 Python에서 Go로 마이그레이션 했던 경험을 간단하게 소개합니다.\n \
      - 마이그레이션 검증 과정에서 큰 역할을 했던 자동화 테스트 도구 Scenario Tester를 Go로 개발하기 위해 사용했던 전략, 도구 등을 소개합니다.\n \
      - 그럼에도 불구하고 발생했던 장애 경험과 개선기를 공유합니다.",
    speaker: {
      name: "김재원",
      company: "AB180",
      description:
        "AB180에서 Data Pipeline Team Lead를 맡고있습니다. 대용량 데이터를 안정적이고 효율적으로 처리하기 위해 팀에서 Go, Kafka 등을 적극 활용하고 있습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4M5SDDrv3yN3SesalbL4B4_PVdma75EyT9WpQOb0bOekNkiiz8LA_qI4sBWqLX-BLoPr-bDw3cIeW7lgSspEQDRDnwFdNo49d28XqXY43yTjbwqs5KJ0jjXD4Yr5qnoVsZmdFV5PLoKhPVOT3a8wCJGUMXV0B21CYmUefSl8azyn7WsudJUtTqdjRxfDDAaEh4hyxexKtaCaoGQIyBo66lZAXdVpayQjRjxyZvqgp4qm8Skn0nJ-E4zeG5H9hmpcPOgadK9VHwoOGCSiZ6pgCcw9bBhjBhs6gW4PYDZtmD1D03hw7uE-OFTDkq4WN6S8cuWAdRo5iAAebstpx_tVI9TIZWhTNq2yvtu-pey5R9BPebA0Wx7jDJGLgbN4xW3FVvHH_9RPxWILbYEJ2ocH9RlRrnCrvNoB3YoRmYcyh8Lh_25U5YqfMgW5TlFYHWbi6QihGItVlMvYzl21aqxpEuYvv90vQ4BcB6QlSi664b0To22fUISEvezZ4Q2f2_WuXn-3HLwzZB61ipkGi8Z7kcSMXfHysRRR01V9hJ8Tei4F1OGSko8hnLxKZywfT0Pr5DtI5yX5Gl-5DTdlr-jd5ty6VqCssGmLguQ-kd3buNFLLDtwGeRN_5lKdRZarQH7BQ5EOa1lFqfsgPXseOQU5tZRJdQ406qhk-sxkD5jF81YHa4gNlZyyoh_jpc0lta-3cMOc8TkPsNLHfzZ6XQ6LPrFjYfBxUOh0J-_PRJcSA65zTVr1xQTB8QwWEa9tbmNwoygCLc1OAhtCFXvyx0dlvLG4Q89TjXeDuAvoznyPCs8ktzN94cZd2Pae68yhAmxOkVyZbDJ7LrYxIxC4689MtQAJZb0g8q0iAmss3EYAe9cx-wzHBvXhvIrQR_NJCGhGjoQwSG4Kpc8TnrIaqmZ6-DL1nmGT3bTO_WRqIcdmKiJgFjFZtRiwCJOt2DDis5E3brlfgMIFW6icv7N2R3RVaD-QxYQ8G_0nifu0FlgTSC8gGjFNR0mbwhupNC1nYHRSDw-107rvcV2alsxD54qGqejgeOKrJD1Hu8lTxzcUOVrYYBchUZ2wNqXXXJXlwGrh9TAqBxwCp75MlmZBiJFj0UBl2Vf82lyNtKMraWPp7e9wPDCl2DozT7OjPajY47M4ghy3sFg2IXOfLwZRvf7bGjabV4oNETb2Nlp5g2I0EcHtWbHfhOa3QilukYbNxezN5l6EA9EK0GjfmROktU7GEi7rY0fEmxRFtbCajwd78XTREWadp7MK-UToqUttmoucgLe1XSUOLLkXN46qAn59qqI0Aff91Y89S_E4R1rxoQXxRy3BEo9ucDdkmz_DtWXZwJhz5CakFvSw45ZWQ6ySilk_DTK98i5f2Vt9uNX4zkfhWf",
    },
  },
  {
    id: 33,
    date: "08-06",
    startTime: "15:00",
    endTime: "15:10",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 34,
    date: "08-06",
    startTime: "15:10",
    endTime: "15:40",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 35,
    date: "08-06",
    startTime: "15:40",
    endTime: "15:50",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 36,
    date: "08-06",
    startTime: "15:50",
    endTime: "16:50",
    title: `GC in Golang`,
    category: "Main Talk",
    description:
      "Golang은 Concurrent Mark and Sweep을 사용한 GC를 채택하고 있습니다.\n \
      이 과정에서 latency를 줄이기 위하여 Stop The World를 줄이는 것이 주요한 목표입니다.\n \
      이러한 목표를 이루기 위하여 sweep을 위한 gc assist goroutine를 없애거나, mark단계를 하나로 만드는 등의 많은 노력을 하고있습니다. \
      이러한 노력들을 설명하고 어떤 이점이 있는지 소개합니다.",
    speaker: {
      name: "라스",
      company: "-",
      description:
        "분산 시스템에 관심이 많은 3년차 개발자입니다. 서버 개발을 주로 합니다.\n \
        PyconKR에서 2018년부터 2021년까지 4차례 발표를 했으며, PyconJP 2020에서도 발표를 진행했었습니다.\n \
        Golang과 관련하여 Golang Korea MeetUp in Seoul 2019.04 에서도 한차례 발표를 했었습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4N0fZNDoU2mKoQH_bJFjZnnJkgZM0XzNp721FVL7iswp5DRZbNw-lxgKssJRGaWVgag96ZPE4Tsv86kmHqTjXrKT4quDGgH1dNJypJA36Vo0hNYVe5ZQ-ITGQ_TGGBdo-Nx2qRo4eTd1wwRIh62qUuHnWHhaUzCR99QrmIG-31iwq69deTwk8qHelepUU3YzEf35U5u49ZvugbkZwMHxw3mvRE-8G7A_SJm7TlImkX_3S58fwdIv713lq_WDhqFey194zyzwf2dD_ZEJsGvxfq2kTV2QV3UZGJfjfmAxWfybv8nHRj6Q5tSGfdn_QN23TJYmk6b5WxfI9Cm8bl0af2WvM3uVPKV5MSz1YF0yVrlfUY5FcBt1P4sL6OFX88-hc3Gz_CDrfuE5vLJoHkOAvfQf97LwAFfpg-9A79h-5p8wf_NC7oI8BWNtd3iVuNZzPypB-RnhdDGQYjAQ0Ra5-d5kjhJTQ1mc_Ax4-CWIwa1f0DXbVLleSEOJBMnfvj-XRdjdjafTSlRW60lGCDsMqRiNkpuvwC_K6lhQ5epBI_6PSkJFpZwIZBGqEWJspkGbM1zdfqwR97eTzwK3u5iBbzWB-A1P9YSywK4W7CNlpe-1wH6X5cz7G6k708IlgyJ9-KvoiJN4yUcINwILfl0QPbU7I0PRRcuF4JMYOg9hpz8LG-S71EI3nXmqTiynn-7gIprMUE0O3ti9-l7y7HJNoGWM4UDCWfZ90L1BuEyCtZpnC3q_M1xkpsQ3i83zX_0spQp2WoNnuAouT7kEtzMmgWB7XWB9RPRU8CCKRYrjvm_mFypine55wF0PAkhdyCsL9UYTnBEJUh5wtb2iu4Z8EyvmtqnrgVqKNSaLeAdYpkJ0ux7wSiv0eWpCnrEuQ48ISMInVRZP9jnBuawl-mVfIq7ds3uCRtuNrsx9aLXyuNScUc8jfsWpGQwMWE_okRpGLqY-IrxUaxCZuYd8Uxk3ITkU5WGO72pKBveVf7Qgyf7Ox0ifyrq8CI_78Kue5Yq_K6S6PF0TmEhBvbzsqXK47UVaceDvr0FiWfp5Gx4xQOfmmyB0-vR5ZZkVzC4_e455ILYHXx5VsIqiDoOIuzuTv1H1jcjeQwLy8J2cZupbDpR3gzKuw-K_3b6xAUFMPr_Aqlg1Y8t0UFT60WmJoGgwlGznDgUWFgOPDsHoGrxkTh7TUJ3P3bQjkjVUTIDLcex9hMRfLF0tGRIf9kshEjsqos2trtCglZ6z4bYw33NIqMAm4Zu5LYmMlBOrCjiDKmmIQcu1spI5-6nwk-mYG7AGwpeqys7UbLANNnkFoE6j3WAo5wN6aRDcXgSEryqOFAwDl5E0UHyNfSJebQuYvxxQUH3zK-NiHNxzszOzHrqRlDiBhWq",
    },
  },
  {
    id: 37,
    date: "08-06",
    startTime: "16:50",
    endTime: "17:30",
    title: `이벤트 + 네트워킹`,
    category: "Event + Networking",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 38,
    date: "08-06",
    startTime: "17:30",
    endTime: "17:40",
    title: `이벤트 (추첨)`,
    category: "Event",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 39,
    date: "08-06",
    startTime: "17:40",
    endTime: "18:00",
    title: `클로징 (20분)`,
    category: "Closing",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
];
