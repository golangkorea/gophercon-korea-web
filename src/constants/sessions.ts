export interface Speaker {
  name: string;
  company: string;
  description: string;
  profileImage: string;
}
export const enum Levels {
  None,
  Low,
  Mid,
  High,
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
  level: Levels;
}

export const SESSIONS: Record<"ko" | "en", Session[]> = {
  ko: [
    {
      id: 1,
      date: "08-05",
      startTime: "09:00",
      endTime: "10:00",
      title: "체크인",
      category: "",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 2,
      date: "08-05",
      startTime: "10:00",
      endTime: "10:30",
      title: "오프닝 및 후원사 홍보",
      category: "Keynote",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 3,
      date: "08-05",
      startTime: "10:30",
      endTime: "10:40",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 4,
      date: "08-05",
      startTime: "10:40",
      endTime: "11:10",
      title: "Open Source in Go",
      category: "Main Talk",
      description:
        "Go 언어 관련 강연에 참석하면 자주 들리는 질문이 있습니다. \n‘Go 언어로는 무엇을 할 수 있나요?’ \n이번 세션에서는 왜 Go 언어가 오픈소스에 기여할 수 있는 강력한 도구인지 이야기하고 Go 언어로 구현된 클라우드 네이티브 오픈소스들을 소개합니다. \n더 나은 이해를 위해 데모 애플리케이션을 활용합니다.\n \
        이후 ‘오픈소스 컨트리뷰션 아카데미’, ‘LFX Mentorship’등 오픈소스 기여를 도와주는 국내외 여러 프로그램에 참여한 경험을 소개합니다.",
      speaker: {
        name: "박남규",
        company: "LitmusChaos",
        description:
          "클라우드 네이티브 기술에 관심이 많은 Gopher 입니다. Litmus(CNCF 인큐베이팅 프로젝트)라는 오픈소스에 기여하고 있습니다.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4OJg1o7McNedDK3bJszOFW0MZu1K6gfQ3zKkf2EaZfpzKtH1K_NdO2fOQXDRZe0SNBFuYorEZ_Xs-iyMolPGvGjghi0W8xwRRbnOqiBmguxILhpF76UcBKJ0r1o22kb_wmg_P7bz6k8RhYz3qsUDdGPxIz515wdLZ4hCCddkweTchCqPMQgEttiuoHGlW2AqWN6VA3irBGQyUQA-w8ItMboLss_gHe0NVHzKtHgj4EFvLoH5lUI2Fi7PP8QHbz9yZHylhEqjzH7mylneQJQrCGOaHqBsGrAuTOdy1sqQt1e-elWGPABMQNwa0mpky8gnlrIa3UozF2XbzNPuErIq11VbY_QACzKVvUH7mZbdx_Tam_3vyohDdELxsB0qKUx2yNi0WkAZ8oCdJVsOZXP0-rj10ri2roEh-kt3CQ6rjS7upXXCoMii_Skqo6T-MrohuoKnDpY0xAEC2vm28gquNrp1rwW9evz1qBEgt2fmmlR51M6LSer7LGTYYUk2Ci9IpQ-RLvkCsAzXluOW0yqGrAww1zxYwj3fIrI0EUrt47hKze6eZNWqHH9dpqjLh9QXcxLWeNAJuL2OLZ2rGC6HLCLu5taZjGOZfC6IFJUI8ec1zEAvuGr4ejgsMTCpFIGM_CkIEFc0SFrzuhsyBPNQDlM0of-MwdpPv_WQkP1IFOSKDzZiwvDZdxnnsSemmvswjle6tKnqBwPW-uk4pfZWY-21rgUtE4eap5ku8pG0ybjOeMczCVNP1OKExyxU1xnK73TAruO2MyvfQhX1QcpVWyiXETuUbOYZbMJpyVnsFgM4ucx54fXHJfKHV_wrGBWckdjPBCl25Wf8FA6yw-5kB4X4Qs4i0T22irkio4tNwIMi2ymTffuFbJqD-Om1CS4O4-TsdlOo4Zh3mtpH4LF5EvCk7iiZcAQLmkTIfPSBi2taFDPRPjzbkhYnlVEZ7rLn5PNs9v4iAHIC-2Et22CGsoD4ZgHlVJwZdDixnFRJECq7PtuUiyQQegamqChXhH6E5lBaDmnogzliSOPSGCm-I7xYLgRpkyVtIgwvGDG2hcCx7t_fFE1p-kY1DHikHwpCCxoH_zNMqE_uGFFGtaSNpnATP269rfzq1QXXAelSUD6jgMT22nwyPteG1LvfyDUNYdOxZEnzCBGH1byEPtOMM0S-8MpNwvM90T3oz4eTS1-xWnjipYmq5ehvuYEbnvrf2zfAZg52liIhI_-UtE8XtSagK0rUzmYHVHV89Dzl11B_IXOGn6EQ9YcBYRZU8dDgFBAxqXQZq8IgJ6-eouHUUVlzt2vJSWTZwlX7Y_5qnwg2zNgZq3ej7QSs1s7KQch4JvKQGlltVVqznmIiL8SfSJCZnCab3RS5Q2oowSusqBTDCXv",
      },
      level: Levels.Low,
    },
    {
      id: 5,
      date: "08-05",
      startTime: "11:10",
      endTime: "11:20",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 6,
      date: "08-05",
      startTime: "11:20",
      endTime: "11:50",
      title: "Go 테스트의 거의 모든 것",
      category: "Main Talk",
      description:
        "Go 테스트의 특정 주제에 관한 문서는 많지만, \
        Go 테스트의 전반적인 내용을 체계적으로 정리한 문서는 찾기 어려웠습니다. \
        이번 기회에 Go 테스트에 관한 거의 모든 문서를 읽어보고 목차를 구성하고, \
        실습 코드와 사례를 중심으로 이해하기 쉬운 자료를 만들어 보았습니다. \
        \n \
        테스트 관련 패키지, 테스트 코드 작성 방법(블랙박스 테스트, 서브테스트, 수명주기, 네이밍/스타일)에 대해 알아보고, \
        mocking과 커버리지 100% 달성하는 방법을 논의합니다. \n\
        그외 테스트 관련 주제(에러/패닉, race, benchmark, GitHub Actions)와 경험을 공유합니다. \
        이미 Go 테스트에 익숙하신 분도 재밌고 유익한 정보를 얻으실 수 있을 것이라 생각합니다.",
      speaker: {
        name: "김정민",
        company: "삼성SDS",
        description:
          "Cloud와 Go 테스트에 관심이 많은 Go 개발자입니다.\n \
          삼성SDS에서 Samsung Kubernetes Engine 개발 업무를 하고 있습니다.\n \
          오픈소스 활동으로 Lethe (Log DB), Venti (Visualizer)를 개발하였습니다.\n \
          관심 있으신 분은 사용 및 참여 부탁드립니다.\n \
          \n \
          Go 언어에는 다양한 매력이 있는데, 특히 강력하고 세련된 테스트 기능을 내장하고 있다는 것이 큰 장점입니다.\n \
          이번 GopherCon에서는 'Go 테스트의 거의 모든 것'이라는 세션을 준비하였습니다.",
        profileImage: "",
      },
      level: Levels.Mid,
    },
    {
      id: 7,
      date: "08-05",
      startTime: "11:50",
      endTime: "12:00",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 8,
      date: "08-05",
      startTime: "12:00",
      endTime: "12:30",
      title: "Golang 도입, 그리고 4년 간의 기록",
      category: "Sponsor",
      description:
        "처음에 Golang을 도입한 계기와 4년동안 채팅 서비스를 개발하면서 서비스 규모에 따라 선택했던 아키텍처를 공유합니다. \n또한, 서비스를 운영하면서 겪었던 문제는 무엇이 있고 어떻게 해결했는지 레슨런을 공유합니다.",
      speaker: {
        name: "변규현",
        company: "후원사(당근마켓)",
        description:
          "- 당근마켓 채팅팀 Engineering Lead \n\
        - AWS Serverless Hero",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 9,
      date: "08-05",
      startTime: "12:30",
      endTime: "14:00",
      title: "Lunch Time (90min)",
      category: "Lunch",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 10,
      date: "08-05",
      startTime: "14:00",
      endTime: "14:30",
      title: "컨텍스트를 이용한 상태관리",
      category: "Main Talk",
      description:
        "현재 배포된 컨텍스트 패키지의 기능과 곧 추가될 기능을 합쳐 고 언어에서 활용할 수 있는 기초적인 상태관리 방법에 대한 발표입니다. \n \
        컨텍스트 타입을 알아보고, 어떤 곳에 활용할 수 있는 지 간단한 예시를 통해 알아봅시다!",
      speaker: {
        name: "권용민",
        company: "AfreecaTV",
        description:
          "누구나 안전하고 편리한 네트워크를 꿈꾸는 백엔드 개발자입니다. 고 언어는 누구나 쉽고 빠르게 네트워크에 접근할 수 있게 해주고, 통신에 필요한 라이브러리들을 안전하게 별도로 제공할 수 있다는 것에 매력을 느껴 시작하게 되었습니다. 지금은 어떻게 해야 고 언어에 대한 생산성을 높일 수 있을 지에 큰 관심을 두고 있습니다.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4OH_mYYi2H9GsUU72ocF7y7D2K2RK6glu0i5QzmWhtYFJGvZX8kvj6ERqQA4-mfQmO4ITGJ-nErgC1BVNseTXO7qhOLVTimJJP-TJ_XA_jtz9a83kXM2xb2N91Y9V-wm1a_nWOTGDZ0HltwaBTP-hAgzpetZREHK_cfcrx1v9Vjisinua-gFZiO6Q4GpLLXvZq3wIlLrYTR9jNeXF6K7CSQ-gMR_zS1zRYso8zy3CM7oEVIPkIMoUyLq9NjgbN7YCafwB8plo-mgy8k5W8jHhgPUXtaXnPXpeQMdW0NAlpGMcA575TAPGgSHXeh7QL3jfgCQ1QgazOgAs2o2hdF6bUSAD5s0PJxHq7-J73IbOIU2OiVaJyNCm5XCJ1uWIKBz8XUdxkCI79PQSKTJ5GhXxH1S7zkPCqdKbsvEGirZBiqC2PDu59UO62raixvLIYW4Ba04pQtmDmyEzRQ-NxzlB15uO1ufe2w2Dwoz0AsvQNJProljz55pRro1DLXSy8m89swknNutDVZqLgTMTPT623nw7UbhGyCe0HhIXe0Xq31tlTFnMzleX9nX_l_CAqwDyDrKgjfWA4I9vd3z78ziiDWPn28lNvMzIyDE1affYMYJ_XLNB68eyXgNoLMYv6QS7VMox9X-AgWf2Bzi_BtKI3MyBuyxoY5tLFKixn9du8xLlgFheJR_heAOXg4miDDUVuIiG9rfRM7FgOxhj-JchzE8gdtpGOS7kKtUH61rgssEyJeIzyj_TV8h16FHaNARYvYWj9EBdzEMIFPnfrWpBrMB7mC--JqtKsBn1VzR3ndov42KwmbIemmdkxot7q7srVhaPQow7A1vmLbVYSJO4GaIXHwC4xfEV0PkK0vP7MHTZGFQ1wIWjR_uozVhcSlnwQ3cOwnZa6YK8W4IjSkXQXC_uth8Cj75ZWfeqWi3btK0vN3pSXIHwl5Mdi6RIKqGmflfRVyx23h1CECBmChW_O5QJt2ror-awDxzfkW1XDS1nFQmXSsQxus3nNpHSCEbE6auZIIuij2h5hHn82RypSTxzmB3swb80xu1GD3vHglhdLa9g-EovZzrz6H43ct4aM5elLyyLenumEue4jBUjbn1gw6FxP6xKH7ygK5LBgxAhOkwG625T8VnbguDJ6FWJ5cCXaxyOaIqOAJzsq_Y5SQiZ54EfbyhYIF1WY2uJpdDT7pC7_Bl-sJ2vIIhmZH5r-RcXtISHB17KT_i9qgf6_xU9nmL0wR5YpQXHirQkFr_HnLC8yj6HP1TIGRGZL1FysuhrQ9HpEKae0-z_qfAxLsBQJl4nhtSOZMcakqGEQmyZbHKmhSSsJ-bVv_tTHYAVyax48ROR1j1DvxJ3XrsfWOalnVGyhy_xf7uaLuyEJqKh1n",
      },
      level: Levels.Low,
    },
    {
      id: 11,
      date: "08-05",
      startTime: "14:30",
      endTime: "14:40",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 12,
      date: "08-05",
      startTime: "14:40",
      endTime: "15:40",
      title: "API 서버 테스트코드 A-Z : 케이스별 효과적인 테스트코드 작성 전략",
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
      level: Levels.Mid,
    },
    {
      id: 13,
      date: "08-05",
      startTime: "15:40",
      endTime: "15:50",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 14,
      date: "08-05",
      startTime: "15:50",
      endTime: "16:20",
      title: "Go와 K8S로 만드는 Datacenter Autopilot",
      category: "Sponsor",
      description:
        "Hyundai Cloud의 Datacenter 자동화를 위해서 Go와 K8S의 Operator Pattern을 활용한 사례를 공유합니다. \n\
        Go를 활용하여 Kubernetes의 Operator를 개발하고 Datacenter의 자원들을 선언적인 방식으로 정의합니다. \n\
        이를 통해 자동차의 자율 주행처럼 데이터센터를 완전 자동화하여 사람의 개입 없이 운영하는 사례를 소개드립니다.",
      speaker: {
        name: "박도형(카클라우드인프라개발팀 박도형 책임매니저)",
        company: "후원사(현대자동차)",
        description:
          "클라우드 플랫폼 및 인프라 자동화 솔루션 개발 \n\
          . 현대자동차 카클라우드개발실 근무 (2023~) \n\
          . 삼성전자 클라우드개발그룹 근무 (2015~2023)",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 15,
      date: "08-05",
      startTime: "16:20",
      endTime: "16:30",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 16,
      date: "08-05",
      startTime: "16:30",
      endTime: "17:00",
      title: "Profiling and Tracing Tips in Go: OLAP 데이터베이스를 개발하며 얻은 교훈들",
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
      level: Levels.Mid,
    },
    {
      id: 17,
      date: "08-05",
      startTime: "17:00",
      endTime: "17:10",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 18,
      date: "08-05",
      startTime: "17:10",
      endTime: "17:40",
      title: "eBPF 도구를 이용해 Go 애플리케이션 추적하기",
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
      level: Levels.Mid,
    },
    {
      id: 19,
      date: "08-05",
      startTime: "17:40",
      endTime: "17:50",
      title: "럭키 드로우",
      category: "Event",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 20,
      date: "08-05",
      startTime: "17:50",
      endTime: "18:00",
      title: "클로징",
      category: "Closing",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 21,
      date: "08-06",
      startTime: "09:00",
      endTime: "10:00",
      title: "체크인",
      category: "",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 22,
      date: "08-06",
      startTime: "10:00",
      endTime: "10:20",
      title: "오프닝",
      category: "Keynote",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 23,
      date: "08-06",
      startTime: "10:20",
      endTime: "10:30",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 24,
      date: "08-06",
      startTime: "10:30",
      endTime: "11:00",
      title: "Golang으로 서버 모니터링 툴 개발",
      category: "Main Talk",
      description:
        "Golang으로 /proc 디렉토리에 접근해, 커널 지표로 서버모니터링을 개발하는 방법에 대해 공유드립니다. 대부분의 모니터링 툴이 Java로 구현이 되어있어 이와 비교하는 내용도 포함됩니다.",
      speaker: {
        name: "최정민",
        company: "와탭랩스",
        description:
          "모니터링과 클라우드에 관심이 많은 Gopher입니다. 현재 WhatapLabs에서 데브옵스 엔지니어 역할을 맡고있으며, 시스템의 운영, 관리부터 모니터링 툴 개발까지 다양한 역할을 수행하고있습니다. Go언어 개발자분들에게는 생소한 주제일 수도 있는 서버 모니터링 툴 개발에대한 발표를 간단하게 준비해 보았습니다.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4NmDhd5Ymi3AxtxV94p5vwcddduSMeGA6Sbcub9TUH3Jw6Dh1fIjR-DnS4y4rkOD_YRSy8hHw1zWw7_T_biKTLD2uO3ymw0aBdbRMaDfMuw4hJHQVgIckqqpXWeVK8IH5EJlgmmK0oNxxfsyUJ6i_mqL2fiRx3A0cFKk6cpQDnJVg-n-KFRH9o8HOnvbGgkHipDNsh_KsJhdk6f1CmYQCXGQHYBeqVTM_4QocB-fs-poeI_xwepKv5omfTFae2eXHrEA42BBNh1eB5Q7K6teu3PbDcx1SbE4aWj3KAcSf4ncE9QqfzazA4JUcmlSRDnlXMKHfRsPToOKrBlpVjyuJ5kBwKphBkOaq67FWvcmk32VKQy4v_1cxoYmBeqjDCef1RBHpxjZjCKz1_wDNdeTYNnDhC-TJLDrZMRwfwjyZtK-wrJvLknE_Se1sR7nMbVJFo90N5HOOA9obQDtwjSvjdZsOT8TEUqgxPwyV7CW4DQg7N39TGY2CRGda0HIjTLQfxzn2-HFSUwdr3geLJW2TpWTN0uLeT2RhgEIZwM5O6u6qLkUmJuzJd5tu54oblxJFF5XxQi8rCSjtAouAsU6d9yE2dlx5pXCMJ3Pp3Varu6h3CRAPiwO4_IlNpkp_slBDXqHZfCRg-pC48cFvM1ax71iN-OwQ0iWoVo-epNtQiJ26dm4Z6mEXD1Q6XdbNlMKWe7AzxGDuckL4079fVFIlKRVywtn8LIF77ST8cZNYa86T-w8ccnUWGlpApHxAd0gCq9X5dRPcfW4j1TKWoamIWs4DB1rMCMALAaeJe_9BayBEfH4tb92uIxHWHUfnyGHx6nWZFiH7V37w0vM3hLqXPCY30ufUSZyNiGjLnI3JPhVRnQfQLJRiiDzM_e4JZrvnxIWgn79tvdYhTNk_TYp7f9RYFp_FYOk-iUdYzm1ZXHKCuR-_YV4FGApZD3oeN927ngyy1QpJC85ZK275MAhAwS_anaFr207WndcBq0k1mtOSEe3jlw54LeOYYA7QXIWXX6o8ELoGdbQDPTASYZhEcAFbtDicWkefH2tjrreCQEE-bn2SgneAJPdthsvl1o1jh40LXIToDlQt8RFXR_5G_lJ0xD9xjMnpk34RdrddHYLG9SJyZjxGinfaKyQSqmYYjmFYXjbdeYQ2btwaGnApNV8NV2V2oYMRNCBGlQQ9v8sxdhDwea7pG1D6SwmzwMoiDv-w4VPuvXOKKD8SiV8EMQ3ATwpuSmXhyejTQV1T_Ux8jU2z7N6Iwzs9yI5ZrKjiajRvrZjII5oVqnvqrGWwsHveU2OcEmKr4qsc9Jez5d2A-vyvTEBAvwEd5a7JN4hOZT8Hicv6Ew3fqPP7YQeb4ThmwKlnsGYQ3_M8zNmbabkWAJ",
      },
      level: Levels.Low,
    },
    {
      id: 25,
      date: "08-06",
      startTime: "11:00",
      endTime: "11:10",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 26,
      date: "08-06",
      startTime: "11:10",
      endTime: "11:40",
      title: "AWS Lambda in Go (with Kafka)",
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
      level: Levels.Mid,
    },
    {
      id: 27,
      date: "08-06",
      startTime: "11:40",
      endTime: "11:50",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 28,
      date: "08-06",
      startTime: "11:50",
      endTime: "12:20",
      title: "프로메테우스는 어떻게 쿠버네티스의 메트릭을 자동으로 가지고 올까요?",
      category: "Sponsor",
      description: "Go로 작성된 프로메테우스가 어떻게 쿠버네티스의 메트릭을 수집해 오는지 확인합니다.",
      speaker: {
        name: "조훈",
        company: "후원사(메가존소프트) ",
        description:
          "시스템/네트워크 IT 벤더의 경험 이후, 메가존 GCP 클라우드 팀에서 쿠버네티스와 연관된 모든 프로젝트에 대한 Tech Advisor 및 Container Architecture Design을 제공하고 있습니다. \n \
          그 외에 페이스북 ‘IT 인프라 엔지니어 그룹’의 운영진을 맡고 있으며, 오픈 소스 컨트리뷰터로도 활동하고 있습니다. \n \
          그 외에 가지고 있는 지식을 공유하는 것을 좋아하여, 인프런/유데미에서 앤서블 및 쿠버네티스에 관한 강의를 기재하고 있으며, 또한 아는 지식을 문서로 남겨야 한다고 생각하기에 책( 『시스템/네트워크 관리자를 위한 파이썬 실무 프로그래밍』, 『우아하게 앤서블』), 『컨테이너 인프라 환경 구축을 위한 쿠버네티스/도커』(길벗) 이 있고, IT 잡지에 기고문을 쓰는 활동도 함께하고 있습니다. \n \
          CNCF 앰버서더 및 네이버 클라우드 앰버서더로서도 쿠버네티스 생태계가 더 활발하게 퍼질 수 있도록 기여하고 있습니다.",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 29,
      date: "08-06",
      startTime: "12:20",
      endTime: "13:50",
      title: "Lunch Time (90min)",
      category: "Lunch",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 30,
      date: "08-06",
      startTime: "13:50",
      endTime: "14:20",
      title: "버그 없는 프로그램 만들기: 테스팅의 관점으로. 근데 이제 블록체인을 곁들인",
      category: "Main Talk",
      description:
        "흔히들 말합니다. 이 세상에 버그 없는 프로그램은 존재하지 않는다고.\n \
        이 발표를 통해 버그 없는 프로그램을 만드는 방법에 대해서 소개해드리고 싶습니다. ",
      speaker: {
        name: "박창현",
        company: "오스모시스",
        description:
          '분산 시스템, p2p 네트워킹, 그리고 블록체인을 사랑하는 Gopher입니다.\n \
          현재 Osmosis에서 블록체인 엔지니어링을 맡고 있으며, 합의 알고리즘과 Proof-of-Stake(POS) 블록체인을 만들수 있는 오픈 소스 프레임워크를 개발하고 있습니다. 고언어 개발자를 위한 "버그 없는 프로그램을 만드는 방법:테스팅의 관점으로, 근데 이제 블록체인을 곁들인"를 주제로 한 발표를 준비해보았습니다. \n \
          버그없는 프로그램을 만드는 비밀에 대해 알려드리고 싶습니다. －－＝＝(/･_･)/==≡≡卍',
        profileImage: "https://drive.google.com/uc?id=1gm2boS_ocpHDc0RB6qoR5agls14S363v",
      },
      level: Levels.High,
    },
    {
      id: 31,
      date: "08-06",
      startTime: "14:20",
      endTime: "14:30",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 32,
      date: "08-06",
      startTime: "14:30",
      endTime: "15:00",
      title: "Scenario Tester: 인수 테스트 자동화로 자신감, 생산성 높이기",
      category: "Main Talk",
      description:
        "- 성능, 강타입 언어 등의 이점을 누리기 위해 거대한 레거시 시스템을 Python에서 Go로 마이그레이션 했던 경험을 간단하게 소개합니다.\n \
        - 마이그레이션 검증 과정에서 큰 역할을 했던 자동화 테스트 도구 Scenario Tester를 Go로 개발하기 위해 사용했던 전략, 도구 등을 소개합니다.\n \
        - 그럼에도 불구하고 발생했던 장애 경험과 개선기를 공유합니다.",
      speaker: {
        name: "김재원",
        company: "AB180",
        description:
          "마케팅 성과 분석 솔루션을 만들고있는 AB180에서 Data Pipeline 팀 리드를 맡고있습니다. 견고하고 효율적인 데이터 파이프라인 구축에 관심이 많습니다.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4M5SDDrv3yN3SesalbL4B4_PVdma75EyT9WpQOb0bOekNkiiz8LA_qI4sBWqLX-BLoPr-bDw3cIeW7lgSspEQDRDnwFdNo49d28XqXY43yTjbwqs5KJ0jjXD4Yr5qnoVsZmdFV5PLoKhPVOT3a8wCJGUMXV0B21CYmUefSl8azyn7WsudJUtTqdjRxfDDAaEh4hyxexKtaCaoGQIyBo66lZAXdVpayQjRjxyZvqgp4qm8Skn0nJ-E4zeG5H9hmpcPOgadK9VHwoOGCSiZ6pgCcw9bBhjBhs6gW4PYDZtmD1D03hw7uE-OFTDkq4WN6S8cuWAdRo5iAAebstpx_tVI9TIZWhTNq2yvtu-pey5R9BPebA0Wx7jDJGLgbN4xW3FVvHH_9RPxWILbYEJ2ocH9RlRrnCrvNoB3YoRmYcyh8Lh_25U5YqfMgW5TlFYHWbi6QihGItVlMvYzl21aqxpEuYvv90vQ4BcB6QlSi664b0To22fUISEvezZ4Q2f2_WuXn-3HLwzZB61ipkGi8Z7kcSMXfHysRRR01V9hJ8Tei4F1OGSko8hnLxKZywfT0Pr5DtI5yX5Gl-5DTdlr-jd5ty6VqCssGmLguQ-kd3buNFLLDtwGeRN_5lKdRZarQH7BQ5EOa1lFqfsgPXseOQU5tZRJdQ406qhk-sxkD5jF81YHa4gNlZyyoh_jpc0lta-3cMOc8TkPsNLHfzZ6XQ6LPrFjYfBxUOh0J-_PRJcSA65zTVr1xQTB8QwWEa9tbmNwoygCLc1OAhtCFXvyx0dlvLG4Q89TjXeDuAvoznyPCs8ktzN94cZd2Pae68yhAmxOkVyZbDJ7LrYxIxC4689MtQAJZb0g8q0iAmss3EYAe9cx-wzHBvXhvIrQR_NJCGhGjoQwSG4Kpc8TnrIaqmZ6-DL1nmGT3bTO_WRqIcdmKiJgFjFZtRiwCJOt2DDis5E3brlfgMIFW6icv7N2R3RVaD-QxYQ8G_0nifu0FlgTSC8gGjFNR0mbwhupNC1nYHRSDw-107rvcV2alsxD54qGqejgeOKrJD1Hu8lTxzcUOVrYYBchUZ2wNqXXXJXlwGrh9TAqBxwCp75MlmZBiJFj0UBl2Vf82lyNtKMraWPp7e9wPDCl2DozT7OjPajY47M4ghy3sFg2IXOfLwZRvf7bGjabV4oNETb2Nlp5g2I0EcHtWbHfhOa3QilukYbNxezN5l6EA9EK0GjfmROktU7GEi7rY0fEmxRFtbCajwd78XTREWadp7MK-UToqUttmoucgLe1XSUOLLkXN46qAn59qqI0Aff91Y89S_E4R1rxoQXxRy3BEo9ucDdkmz_DtWXZwJhz5CakFvSw45ZWQ6ySilk_DTK98i5f2Vt9uNX4zkfhWf",
      },
      level: Levels.Mid,
    },
    {
      id: 33,
      date: "08-06",
      startTime: "15:00",
      endTime: "15:10",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 34,
      date: "08-06",
      startTime: "15:10",
      endTime: "15:40",
      title: "Golang과 함께 서버 레이턴시를 500배 개선한 후기",
      category: "Main Talk",
      description:
        "동적언어로 빠르게 개발한 서비스가 수행하는 역할이 많아지고, 사용자가 커지면서 구조적 한계에 도달했습니다. \n \
        이 발표는 한계에 도달한 백엔드를 엔지니어들이 Golang을 통해 어떻게 돌파했는지 후기를 담고있습니다.",
      speaker: {
        name: "박세현",
        company: "코리아포트원",
        description:
          "저는 회사에 Golang과 Rust를 실용적인 부분에 도입하여 성능 최적화와 안정성을 높이는 데에 노력하고 있습니다. \n \
          또한 오픈소스 커뮤니티에 기여하면서 배움의 기회를 더 넓히고 있습니다. 현대적인 기술과 개발 동향에 관심을 가지고 있으며, 새로운 도전을 좋아합니다.",
        profileImage: "",
      },
      level: Levels.Mid,
    },
    {
      id: 35,
      date: "08-06",
      startTime: "15:40",
      endTime: "15:50",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 36,
      date: "08-06",
      startTime: "15:50",
      endTime: "16:50",
      title: "GC in Golang",
      category: "Main Talk",
      description:
        "Go에서 Garbage Collection를 이론적인 내용과 함께 살펴봅니다. 어떤 알고리즘으로 동작하는지로 시작해서 Go의 GC는 어떤 방향을 추구해왔는지 이야기합니다.",
      speaker: {
        name: "라스",
        company: "-",
        description: "라스입니다.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4N0fZNDoU2mKoQH_bJFjZnnJkgZM0XzNp721FVL7iswp5DRZbNw-lxgKssJRGaWVgag96ZPE4Tsv86kmHqTjXrKT4quDGgH1dNJypJA36Vo0hNYVe5ZQ-ITGQ_TGGBdo-Nx2qRo4eTd1wwRIh62qUuHnWHhaUzCR99QrmIG-31iwq69deTwk8qHelepUU3YzEf35U5u49ZvugbkZwMHxw3mvRE-8G7A_SJm7TlImkX_3S58fwdIv713lq_WDhqFey194zyzwf2dD_ZEJsGvxfq2kTV2QV3UZGJfjfmAxWfybv8nHRj6Q5tSGfdn_QN23TJYmk6b5WxfI9Cm8bl0af2WvM3uVPKV5MSz1YF0yVrlfUY5FcBt1P4sL6OFX88-hc3Gz_CDrfuE5vLJoHkOAvfQf97LwAFfpg-9A79h-5p8wf_NC7oI8BWNtd3iVuNZzPypB-RnhdDGQYjAQ0Ra5-d5kjhJTQ1mc_Ax4-CWIwa1f0DXbVLleSEOJBMnfvj-XRdjdjafTSlRW60lGCDsMqRiNkpuvwC_K6lhQ5epBI_6PSkJFpZwIZBGqEWJspkGbM1zdfqwR97eTzwK3u5iBbzWB-A1P9YSywK4W7CNlpe-1wH6X5cz7G6k708IlgyJ9-KvoiJN4yUcINwILfl0QPbU7I0PRRcuF4JMYOg9hpz8LG-S71EI3nXmqTiynn-7gIprMUE0O3ti9-l7y7HJNoGWM4UDCWfZ90L1BuEyCtZpnC3q_M1xkpsQ3i83zX_0spQp2WoNnuAouT7kEtzMmgWB7XWB9RPRU8CCKRYrjvm_mFypine55wF0PAkhdyCsL9UYTnBEJUh5wtb2iu4Z8EyvmtqnrgVqKNSaLeAdYpkJ0ux7wSiv0eWpCnrEuQ48ISMInVRZP9jnBuawl-mVfIq7ds3uCRtuNrsx9aLXyuNScUc8jfsWpGQwMWE_okRpGLqY-IrxUaxCZuYd8Uxk3ITkU5WGO72pKBveVf7Qgyf7Ox0ifyrq8CI_78Kue5Yq_K6S6PF0TmEhBvbzsqXK47UVaceDvr0FiWfp5Gx4xQOfmmyB0-vR5ZZkVzC4_e455ILYHXx5VsIqiDoOIuzuTv1H1jcjeQwLy8J2cZupbDpR3gzKuw-K_3b6xAUFMPr_Aqlg1Y8t0UFT60WmJoGgwlGznDgUWFgOPDsHoGrxkTh7TUJ3P3bQjkjVUTIDLcex9hMRfLF0tGRIf9kshEjsqos2trtCglZ6z4bYw33NIqMAm4Zu5LYmMlBOrCjiDKmmIQcu1spI5-6nwk-mYG7AGwpeqys7UbLANNnkFoE6j3WAo5wN6aRDcXgSEryqOFAwDl5E0UHyNfSJebQuYvxxQUH3zK-NiHNxzszOzHrqRlDiBhWq",
      },
      level: Levels.Mid,
    },
    {
      id: 37,
      date: "08-06",
      startTime: "16:50",
      endTime: "17:00",
      title: "쉬는시간",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 38,
      date: "08-06",
      startTime: "17:00",
      endTime: "17:40",
      title: "Golang Korea X AWSKRUG",
      category: "Event",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 39,
      date: "08-06",
      startTime: "17:40",
      endTime: "17:50",
      title: "럭키 드로우",
      category: "Event",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 40,
      date: "08-06",
      startTime: "17:50",
      endTime: "18:00",
      title: "클로징",
      category: "Closing",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
  ],
  en: [
    {
      id: 1,
      date: "08-05",
      startTime: "09:00",
      endTime: "10:00",
      title: "Check-in",
      category: "",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 2,
      date: "08-05",
      startTime: "10:00",
      endTime: "10:30",
      title: "Opening and sponsor intros",
      category: "Keynote",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 3,
      date: "08-05",
      startTime: "10:30",
      endTime: "10:40",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 4,
      date: "08-05",
      startTime: "10:40",
      endTime: "11:10",
      title: "Open Source in Go",
      category: "Main Talk",
      description:
        "When I attend talks about the Go language, there's a common question I hear. \n\"What can I do with the Go language?\"\nIn this session, we'll talk about why the Go language is a powerful tool for contributing to open source and introduce some cloud-native open source implementations in the Go language. We will utilize a demo application for a better understanding.\n \
        Afterwards, I will introduce my experience of participating in various domestic and international programs that help people contribute to open source, such as 'Open Source Contribution Academy' and 'LFX Mentorship'.",
      speaker: {
        name: "Namkyu Park",
        company: "LitmusChaos",
        description:
          "I'm a Gopher with a keen interest in cloud-native technologies. I contribute to an open source project called Litmus (a CNCF incubated project).",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4OJg1o7McNedDK3bJszOFW0MZu1K6gfQ3zKkf2EaZfpzKtH1K_NdO2fOQXDRZe0SNBFuYorEZ_Xs-iyMolPGvGjghi0W8xwRRbnOqiBmguxILhpF76UcBKJ0r1o22kb_wmg_P7bz6k8RhYz3qsUDdGPxIz515wdLZ4hCCddkweTchCqPMQgEttiuoHGlW2AqWN6VA3irBGQyUQA-w8ItMboLss_gHe0NVHzKtHgj4EFvLoH5lUI2Fi7PP8QHbz9yZHylhEqjzH7mylneQJQrCGOaHqBsGrAuTOdy1sqQt1e-elWGPABMQNwa0mpky8gnlrIa3UozF2XbzNPuErIq11VbY_QACzKVvUH7mZbdx_Tam_3vyohDdELxsB0qKUx2yNi0WkAZ8oCdJVsOZXP0-rj10ri2roEh-kt3CQ6rjS7upXXCoMii_Skqo6T-MrohuoKnDpY0xAEC2vm28gquNrp1rwW9evz1qBEgt2fmmlR51M6LSer7LGTYYUk2Ci9IpQ-RLvkCsAzXluOW0yqGrAww1zxYwj3fIrI0EUrt47hKze6eZNWqHH9dpqjLh9QXcxLWeNAJuL2OLZ2rGC6HLCLu5taZjGOZfC6IFJUI8ec1zEAvuGr4ejgsMTCpFIGM_CkIEFc0SFrzuhsyBPNQDlM0of-MwdpPv_WQkP1IFOSKDzZiwvDZdxnnsSemmvswjle6tKnqBwPW-uk4pfZWY-21rgUtE4eap5ku8pG0ybjOeMczCVNP1OKExyxU1xnK73TAruO2MyvfQhX1QcpVWyiXETuUbOYZbMJpyVnsFgM4ucx54fXHJfKHV_wrGBWckdjPBCl25Wf8FA6yw-5kB4X4Qs4i0T22irkio4tNwIMi2ymTffuFbJqD-Om1CS4O4-TsdlOo4Zh3mtpH4LF5EvCk7iiZcAQLmkTIfPSBi2taFDPRPjzbkhYnlVEZ7rLn5PNs9v4iAHIC-2Et22CGsoD4ZgHlVJwZdDixnFRJECq7PtuUiyQQegamqChXhH6E5lBaDmnogzliSOPSGCm-I7xYLgRpkyVtIgwvGDG2hcCx7t_fFE1p-kY1DHikHwpCCxoH_zNMqE_uGFFGtaSNpnATP269rfzq1QXXAelSUD6jgMT22nwyPteG1LvfyDUNYdOxZEnzCBGH1byEPtOMM0S-8MpNwvM90T3oz4eTS1-xWnjipYmq5ehvuYEbnvrf2zfAZg52liIhI_-UtE8XtSagK0rUzmYHVHV89Dzl11B_IXOGn6EQ9YcBYRZU8dDgFBAxqXQZq8IgJ6-eouHUUVlzt2vJSWTZwlX7Y_5qnwg2zNgZq3ej7QSs1s7KQch4JvKQGlltVVqznmIiL8SfSJCZnCab3RS5Q2oowSusqBTDCXv",
      },
      level: Levels.Low,
    },
    {
      id: 5,
      date: "08-05",
      startTime: "11:10",
      endTime: "11:20",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 6,
      date: "08-05",
      startTime: "11:20",
      endTime: "11:50",
      title: 'Almost everything you need to know about testing in Go, "Go" easy with hands-on exercises',
      category: "Main Talk",
      description:
        "Learn about testing-related packages (testing, testify, httptest).\n \
        Discuss how to write test code (subtests, TestMain, naming/styling, black box testing), server mocking, and how to achieve 100% coverage.\n \
        Share experiences on other testing-related topics (panic, goroutines, races, benchmarks, github actions).",
      speaker: {
        name: "Jungmin Kim",
        company: "Samsung SDS",
        description:
          "I work on k8s at Samsung SDS and use Go as my main language.\n \
          I have 3 conference presentations under my belt.\n \
          In this program, I would like to share my testing experience while developing the open source lethe/venti ( https://github.com/kuoss ).",
        profileImage: "",
      },
      level: Levels.Mid,
    },
    {
      id: 7,
      date: "08-05",
      startTime: "11:50",
      endTime: "12:00",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 8,
      date: "08-05",
      startTime: "12:00",
      endTime: "12:30",
      title: "TBD",
      category: "Sponsor",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 9,
      date: "08-05",
      startTime: "12:30",
      endTime: "14:00",
      title: "1.Generative AI with GO (30분)\n2.Event(60분)",
      category: "Lunch",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 10,
      date: "08-05",
      startTime: "14:00",
      endTime: "14:30",
      title: "State Management with Context",
      category: "Main Talk",
      description:
        "This session takes a topic on the basic state management methods available in the Go language, combining the features of the currently released context package with upcoming features. Let's take a look at context types and see what they can be used for with a simple example!",
      speaker: {
        name: "Yongmin Kwon",
        company: "AfreecaTV",
        description:
          "I'm a backend developer who dreams of a secure and convenient network. I got started with Go because I was fascinated by how easily and quickly anyone can access the network, and how securely we can provide separate libraries for communication. Now I'm really interested in how we can make Go more productive.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4OH_mYYi2H9GsUU72ocF7y7D2K2RK6glu0i5QzmWhtYFJGvZX8kvj6ERqQA4-mfQmO4ITGJ-nErgC1BVNseTXO7qhOLVTimJJP-TJ_XA_jtz9a83kXM2xb2N91Y9V-wm1a_nWOTGDZ0HltwaBTP-hAgzpetZREHK_cfcrx1v9Vjisinua-gFZiO6Q4GpLLXvZq3wIlLrYTR9jNeXF6K7CSQ-gMR_zS1zRYso8zy3CM7oEVIPkIMoUyLq9NjgbN7YCafwB8plo-mgy8k5W8jHhgPUXtaXnPXpeQMdW0NAlpGMcA575TAPGgSHXeh7QL3jfgCQ1QgazOgAs2o2hdF6bUSAD5s0PJxHq7-J73IbOIU2OiVaJyNCm5XCJ1uWIKBz8XUdxkCI79PQSKTJ5GhXxH1S7zkPCqdKbsvEGirZBiqC2PDu59UO62raixvLIYW4Ba04pQtmDmyEzRQ-NxzlB15uO1ufe2w2Dwoz0AsvQNJProljz55pRro1DLXSy8m89swknNutDVZqLgTMTPT623nw7UbhGyCe0HhIXe0Xq31tlTFnMzleX9nX_l_CAqwDyDrKgjfWA4I9vd3z78ziiDWPn28lNvMzIyDE1affYMYJ_XLNB68eyXgNoLMYv6QS7VMox9X-AgWf2Bzi_BtKI3MyBuyxoY5tLFKixn9du8xLlgFheJR_heAOXg4miDDUVuIiG9rfRM7FgOxhj-JchzE8gdtpGOS7kKtUH61rgssEyJeIzyj_TV8h16FHaNARYvYWj9EBdzEMIFPnfrWpBrMB7mC--JqtKsBn1VzR3ndov42KwmbIemmdkxot7q7srVhaPQow7A1vmLbVYSJO4GaIXHwC4xfEV0PkK0vP7MHTZGFQ1wIWjR_uozVhcSlnwQ3cOwnZa6YK8W4IjSkXQXC_uth8Cj75ZWfeqWi3btK0vN3pSXIHwl5Mdi6RIKqGmflfRVyx23h1CECBmChW_O5QJt2ror-awDxzfkW1XDS1nFQmXSsQxus3nNpHSCEbE6auZIIuij2h5hHn82RypSTxzmB3swb80xu1GD3vHglhdLa9g-EovZzrz6H43ct4aM5elLyyLenumEue4jBUjbn1gw6FxP6xKH7ygK5LBgxAhOkwG625T8VnbguDJ6FWJ5cCXaxyOaIqOAJzsq_Y5SQiZ54EfbyhYIF1WY2uJpdDT7pC7_Bl-sJ2vIIhmZH5r-RcXtISHB17KT_i9qgf6_xU9nmL0wR5YpQXHirQkFr_HnLC8yj6HP1TIGRGZL1FysuhrQ9HpEKae0-z_qfAxLsBQJl4nhtSOZMcakqGEQmyZbHKmhSSsJ-bVv_tTHYAVyax48ROR1j1DvxJ3XrsfWOalnVGyhy_xf7uaLuyEJqKh1n",
      },
      level: Levels.Low,
    },
    {
      id: 11,
      date: "08-05",
      startTime: "14:30",
      endTime: "14:40",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 12,
      date: "08-05",
      startTime: "14:40",
      endTime: "15:40",
      title: "API Server Test Code A-Z: A Case-by-Case Strategy for Writing Effective Test Code",
      category: "Main Talk",
      description:
        "We'll discuss what kind of project structure is advantageous for good test organization, how to write tests when there are external dependencies, and what tools you can use to help you.",
      speaker: {
        name: "Jinyong Kim",
        company: "Looko",
        description:
          "I work as a backend lead at Looko, a company that makes the global service Acloset.  \
          I'm passionate about how teams work together, communicate, solve problems, learn, and continuously grow.",
        profileImage: "https://drive.google.com/uc?id=1yZ3-tzpPFBOHEWHSaNcTUXIyX6XMf5rO",
      },
      level: Levels.Mid,
    },
    {
      id: 13,
      date: "08-05",
      startTime: "15:40",
      endTime: "15:50",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 14,
      date: "08-05",
      startTime: "15:50",
      endTime: "16:20",
      title: "TBD",
      category: "Sponsor",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 15,
      date: "08-05",
      startTime: "16:20",
      endTime: "16:30",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 16,
      date: "08-05",
      startTime: "16:30",
      endTime: "17:00",
      title: "Profiling and Tracing Tips in Go: Lessons Learned from Developing an OLAP Database",
      category: "Main Talk",
      description:
        "This session will introduce how to use go tool pprof and go tool trace through practical examples gained from developing OLAP databases.",
      speaker: {
        name: "Jaewan Park",
        company: "AB180",
        description:
          "I'm a Backend Engineer on the AB180 query engine team, working on Luft, \
          a distributed OLAP database. \
          I am interested in fast development and high execution performance.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4P01_nSfi7ZxfRGwglJhQjGiMQwuaHvg3ENavi8HnXU167oaLlLY5u4Yp-qbC5kFHvnKjIzZpG2g5XOllyxHAUz_TMHPTmyi4-OvvXTA5wbd6Sxfv0r77-Zkj-qR-CjH2_uIvlZYt0V-knEWkSqSgRJQT6yKwUi3dwEdTEjFG-yK89eYYfqANzZwohHg955TXNcuW6-du9io52JPjfdBLgzpeG2pKXD8ZGd0aCZ5f_ppYcA38jkqrHKMMOygE9QM9aCei8jFDSH5-5okZmGRZxg-ZOe3OiMIlV9XOC2CKPYwq8_YUPcUSs3O89vx9a5JWhe7JSl9ugERh51r_eG5mqjZGU63SyJZO6y9FpEN7z07spq1hlowGjeL9dTnD32Y-nhZ7ajb1YryYxMTPHzSuTR4wW9e7JNvqb8l2f8qnl7MMbm-03yRqat0qbREQrW6D9ial5AGNgeWRMoRg3raMrqJSh9PX00qoMgs44uNHAH4Mz95r0cGpx2h956R5pPmjDMV1s-QI6Pj23XAylMD8r9soxkU6yd3Vmiu5o3XErDCUj-Z-cyrwN9LmwuMYjAUZxzc3ZSCKrMizp9Ua5sGh2-S9NFzZQ3xQTPeYig5W0_g5S3ddKZXJ-6GyG5I109HnnNqZiq6OxG-nSK7IeoMRqoDmQGRAtuFgVzVFTsUUw6XEjbSjR8_4XvPTvoiZNQFLZ7gSW3Em9WpznQa5-XWZcRwPgWBRoSfjJvIsIyymN81w8Z9p2NpIn-VaHWHNN7p-sosCUZDXPL-hDqiQ7K3MhwOTEn6ZfmLvmg2SVmA2SRurpmrvf5kh6YbAD9RRpnA6jj3jcJZH4GRMpRfv4iZEIUTBWWFkoPUB_PMD8onBtCtREc49mEfoR5I9SWOTtefRrW96z4XXG5YxQL6TLquOaxBxc6OxJZcp9Zssd7hMZU8jkOiOymmVCkycFjdC1jQ0x3A4c7ScSF1K7MMvZi7YLCxpfZowLk_aiUMjpqnKyGbMmEHT3zzLTtFS8OjSqa1k3DYXnpIcwXZnLjMBGgev1eCATWAiC5wjo9FnxTdO3j0eV0WEJlHxHr3576NukkJtGv1PorEyz4CM6S92w96DWr_SyvsduHAoo2JF3YjKoMMo0km_o7LdqEp5nyaQ9s7M8pyhxlViznHdqODyDKrrAbmSTlkppgD2wlTQSPtCvPne3APeI41C88ZuBVrWjAMEzsLdAF9fA9uS7ZrnKu4snjFDJknKHrDKcaWzkIMvboszMsNz76OrG-3djKhKfl2J0bdSa3AETN74Hv0EPrc_YKc97lLUWba4qjpBDBJr9bsiQzktOlh4dLTZE5AT_-pjGxiw-Ps2-2S5YbEhtxtcV5Js_T0eqc6S6F2shN_qvRfdw",
      },
      level: Levels.Mid,
    },
    {
      id: 17,
      date: "08-05",
      startTime: "17:00",
      endTime: "17:10",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 18,
      date: "08-05",
      startTime: "17:10",
      endTime: "17:40",
      title: "Tracking Go applications with the eBPF tool",
      category: "Main Talk",
      description:
        "We're going to cover the basics of using eBPF tools to track applications developed in the Go language.\n \
        This talk will take a quick look at the basic eBPF concepts and see how eBPF tools utilize them.\n \
        Finally, we'll use these tools to trace inside a Go application and conclude the presentation by summarizing the possibilities and limitations.",
      speaker: {
        name: "Chansik Lim",
        company: "LINE PLUS",
        description:
          "I work on operating the Kubernetes platform and developing operators for running high-performance workloads. I've prepared a talk to summarize and share how I use the eBPF tool to track applications developed in the Go language.",
        profileImage: "https://drive.google.com/uc?id=1fSnSwjxlx44qQaHGk244Cqe2LlH5F59d",
      },
      level: Levels.Mid,
    },
    {
      id: 19,
      date: "08-05",
      startTime: "17:40",
      endTime: "17:50",
      title: "Events (raffles)",
      category: "Event",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 20,
      date: "08-05",
      startTime: "17:50",
      endTime: "18:00",
      title: "Closing",
      category: "Closing",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 21,
      date: "08-06",
      startTime: "09:00",
      endTime: "10:00",
      title: "Check-in",
      category: "",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 22,
      date: "08-06",
      startTime: "10:00",
      endTime: "10:20",
      title: "Opening",
      category: "Keynote",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 23,
      date: "08-06",
      startTime: "10:20",
      endTime: "10:30",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 24,
      date: "08-06",
      startTime: "10:30",
      endTime: "11:00",
      title: "Developing a server monitoring tool with Golang",
      category: "Main Talk",
      description:
        "I'll talk about how to access the /proc directory with Golang and develop server monitoring with kernel metrics. Since most monitoring tools are implemented in Java, a comparison will also be included.",
      speaker: {
        name: "Jungmin Choi",
        company: "WhaTap Labs",
        description:
          "Hello, I've been working as a DevOps engineer for about 2 years at a monitoring SaaS company called WhaTap Labs. I actively utilize Golang and Python in the process of creating tools for our operations.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4NmDhd5Ymi3AxtxV94p5vwcddduSMeGA6Sbcub9TUH3Jw6Dh1fIjR-DnS4y4rkOD_YRSy8hHw1zWw7_T_biKTLD2uO3ymw0aBdbRMaDfMuw4hJHQVgIckqqpXWeVK8IH5EJlgmmK0oNxxfsyUJ6i_mqL2fiRx3A0cFKk6cpQDnJVg-n-KFRH9o8HOnvbGgkHipDNsh_KsJhdk6f1CmYQCXGQHYBeqVTM_4QocB-fs-poeI_xwepKv5omfTFae2eXHrEA42BBNh1eB5Q7K6teu3PbDcx1SbE4aWj3KAcSf4ncE9QqfzazA4JUcmlSRDnlXMKHfRsPToOKrBlpVjyuJ5kBwKphBkOaq67FWvcmk32VKQy4v_1cxoYmBeqjDCef1RBHpxjZjCKz1_wDNdeTYNnDhC-TJLDrZMRwfwjyZtK-wrJvLknE_Se1sR7nMbVJFo90N5HOOA9obQDtwjSvjdZsOT8TEUqgxPwyV7CW4DQg7N39TGY2CRGda0HIjTLQfxzn2-HFSUwdr3geLJW2TpWTN0uLeT2RhgEIZwM5O6u6qLkUmJuzJd5tu54oblxJFF5XxQi8rCSjtAouAsU6d9yE2dlx5pXCMJ3Pp3Varu6h3CRAPiwO4_IlNpkp_slBDXqHZfCRg-pC48cFvM1ax71iN-OwQ0iWoVo-epNtQiJ26dm4Z6mEXD1Q6XdbNlMKWe7AzxGDuckL4079fVFIlKRVywtn8LIF77ST8cZNYa86T-w8ccnUWGlpApHxAd0gCq9X5dRPcfW4j1TKWoamIWs4DB1rMCMALAaeJe_9BayBEfH4tb92uIxHWHUfnyGHx6nWZFiH7V37w0vM3hLqXPCY30ufUSZyNiGjLnI3JPhVRnQfQLJRiiDzM_e4JZrvnxIWgn79tvdYhTNk_TYp7f9RYFp_FYOk-iUdYzm1ZXHKCuR-_YV4FGApZD3oeN927ngyy1QpJC85ZK275MAhAwS_anaFr207WndcBq0k1mtOSEe3jlw54LeOYYA7QXIWXX6o8ELoGdbQDPTASYZhEcAFbtDicWkefH2tjrreCQEE-bn2SgneAJPdthsvl1o1jh40LXIToDlQt8RFXR_5G_lJ0xD9xjMnpk34RdrddHYLG9SJyZjxGinfaKyQSqmYYjmFYXjbdeYQ2btwaGnApNV8NV2V2oYMRNCBGlQQ9v8sxdhDwea7pG1D6SwmzwMoiDv-w4VPuvXOKKD8SiV8EMQ3ATwpuSmXhyejTQV1T_Ux8jU2z7N6Iwzs9yI5ZrKjiajRvrZjII5oVqnvqrGWwsHveU2OcEmKr4qsc9Jez5d2A-vyvTEBAvwEd5a7JN4hOZT8Hicv6Ew3fqPP7YQeb4ThmwKlnsGYQ3_M8zNmbabkWAJ",
      },
      level: Levels.Low,
    },
    {
      id: 25,
      date: "08-06",
      startTime: "11:00",
      endTime: "11:10",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 26,
      date: "08-06",
      startTime: "11:10",
      endTime: "11:40",
      title: "AWS Lambda in Go \n(with Kafka)",
      category: "Main Talk",
      description:
        "I'll talk about our experience developing and deploying a serverless webhook service using AWS Lambda and Go after encountering issues with our existing architecture of webhooking events from a monolithic service.",
      speaker: {
        name: "Soobin Kim",
        company: "VIVA REPUBLICA (TOSS)",
        description:
          "I am Soobin Kim who is working as a server developer at VIVA REPUBLICA. I work on platform engineering to improve the development productivity of other developers in the team, and I'd like to share some of the best practices I've learned along the way.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
      },
      level: Levels.Mid,
    },
    {
      id: 27,
      date: "08-06",
      startTime: "11:40",
      endTime: "11:50",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 28,
      date: "08-06",
      startTime: "11:50",
      endTime: "12:20",
      title: "TBD",
      category: "Sponsor",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 29,
      date: "08-06",
      startTime: "12:20",
      endTime: "13:50",
      title: "1. International GDE Video (30 minutes)\n2. Events! (60 minutes)",
      category: "Lunch",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 30,
      date: "08-06",
      startTime: "13:50",
      endTime: "14:20",
      title: "Creating bug-free programs: A testing perspective. But now we have a blockchain",
      category: "Main Talk",
      description:
        "It's often said. There is no such thing as a bug-free program.\n \
        In this session, I'd like to show you how to create a bug-free program.",
      speaker: {
        name: "Changhyun Park",
        company: "Osmosis",
        description:
          "I'm a Gopher who loves distributed systems, peer-to-peer networking, and blockchain.\n \
          currently works in blockchain engineering at Osmosis, developing consensus algorithms and open source frameworks for creating Proof-of-Stake blockchains. I've put together a talk for high-language developers called \"How to write bug-free programs: from a testing perspective, but now with blockchain.\" I'd like to share the secrets of writing bug-free programs.\n \
          --＝＝(/･_･)/==≡≡卍",
        profileImage: "https://drive.google.com/uc?id=1gm2boS_ocpHDc0RB6qoR5agls14S363v",
      },
      level: Levels.High,
    },
    {
      id: 31,
      date: "08-06",
      startTime: "14:20",
      endTime: "14:30",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 32,
      date: "08-06",
      startTime: "14:30",
      endTime: "15:00",
      title: "Scenario Tester: Increase confidence and productivity with automated acceptance testing",
      category: "Main Talk",
      description:
        "- We'll take a quick look at our experience migrating a large legacy system from Python to Go to take advantage of performance, strongly typed languages, and more.\n \
        - Also share the strategies, tools, and more we used to develop our automated testing tool Scenario Tester in Go, which played a big role in validating the migration.\n \
        - Fianlly we'll treat some of the roadblocks we encountered along the way.",
      speaker: {
        name: "Jaewon Kim",
        company: "AB180",
        description:
          "I am the Data Pipeline Team Lead at AB180. The team relies heavily on Go, Kafka, and other technologies to process large amounts of data reliably and efficiently.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4M5SDDrv3yN3SesalbL4B4_PVdma75EyT9WpQOb0bOekNkiiz8LA_qI4sBWqLX-BLoPr-bDw3cIeW7lgSspEQDRDnwFdNo49d28XqXY43yTjbwqs5KJ0jjXD4Yr5qnoVsZmdFV5PLoKhPVOT3a8wCJGUMXV0B21CYmUefSl8azyn7WsudJUtTqdjRxfDDAaEh4hyxexKtaCaoGQIyBo66lZAXdVpayQjRjxyZvqgp4qm8Skn0nJ-E4zeG5H9hmpcPOgadK9VHwoOGCSiZ6pgCcw9bBhjBhs6gW4PYDZtmD1D03hw7uE-OFTDkq4WN6S8cuWAdRo5iAAebstpx_tVI9TIZWhTNq2yvtu-pey5R9BPebA0Wx7jDJGLgbN4xW3FVvHH_9RPxWILbYEJ2ocH9RlRrnCrvNoB3YoRmYcyh8Lh_25U5YqfMgW5TlFYHWbi6QihGItVlMvYzl21aqxpEuYvv90vQ4BcB6QlSi664b0To22fUISEvezZ4Q2f2_WuXn-3HLwzZB61ipkGi8Z7kcSMXfHysRRR01V9hJ8Tei4F1OGSko8hnLxKZywfT0Pr5DtI5yX5Gl-5DTdlr-jd5ty6VqCssGmLguQ-kd3buNFLLDtwGeRN_5lKdRZarQH7BQ5EOa1lFqfsgPXseOQU5tZRJdQ406qhk-sxkD5jF81YHa4gNlZyyoh_jpc0lta-3cMOc8TkPsNLHfzZ6XQ6LPrFjYfBxUOh0J-_PRJcSA65zTVr1xQTB8QwWEa9tbmNwoygCLc1OAhtCFXvyx0dlvLG4Q89TjXeDuAvoznyPCs8ktzN94cZd2Pae68yhAmxOkVyZbDJ7LrYxIxC4689MtQAJZb0g8q0iAmss3EYAe9cx-wzHBvXhvIrQR_NJCGhGjoQwSG4Kpc8TnrIaqmZ6-DL1nmGT3bTO_WRqIcdmKiJgFjFZtRiwCJOt2DDis5E3brlfgMIFW6icv7N2R3RVaD-QxYQ8G_0nifu0FlgTSC8gGjFNR0mbwhupNC1nYHRSDw-107rvcV2alsxD54qGqejgeOKrJD1Hu8lTxzcUOVrYYBchUZ2wNqXXXJXlwGrh9TAqBxwCp75MlmZBiJFj0UBl2Vf82lyNtKMraWPp7e9wPDCl2DozT7OjPajY47M4ghy3sFg2IXOfLwZRvf7bGjabV4oNETb2Nlp5g2I0EcHtWbHfhOa3QilukYbNxezN5l6EA9EK0GjfmROktU7GEi7rY0fEmxRFtbCajwd78XTREWadp7MK-UToqUttmoucgLe1XSUOLLkXN46qAn59qqI0Aff91Y89S_E4R1rxoQXxRy3BEo9ucDdkmz_DtWXZwJhz5CakFvSw45ZWQ6ySilk_DTK98i5f2Vt9uNX4zkfhWf",
      },
      level: Levels.Mid,
    },
    {
      id: 33,
      date: "08-06",
      startTime: "15:00",
      endTime: "15:10",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 34,
      date: "08-06",
      startTime: "15:10",
      endTime: "15:40",
      title: "TBD",
      category: "Sponsor",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.Mid,
    },
    {
      id: 35,
      date: "08-06",
      startTime: "15:40",
      endTime: "15:50",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 36,
      date: "08-06",
      startTime: "15:50",
      endTime: "16:50",
      title: "GC in Golang",
      category: "Main Talk",
      description:
        "Golang adopts GC with Concurrent Mark and Sweep.\n \
        In this process, the main goal is to reduce Stop The World to reduce latency.\n \
        To achieve this goal, we are making many efforts such as removing the gc assist goroutine for sweep and making the mark step one. \
        The session describes these efforts and show how they are beneficial.",
      speaker: {
        name: "Lars",
        company: "-",
        description:
          "I'm a 3rd-year developer with a strong interest in distributed systems. I mainly focus on server development.\n \
          I have presented at PyconKR four times from 2018 to 2021 and at PyconJP 2020.\n \
          For Golang, he presented once at Golang Korea MeetUp in Seoul in 2019.04.",
        profileImage:
          "https://lh3.googleusercontent.com/fife/AKsag4N0fZNDoU2mKoQH_bJFjZnnJkgZM0XzNp721FVL7iswp5DRZbNw-lxgKssJRGaWVgag96ZPE4Tsv86kmHqTjXrKT4quDGgH1dNJypJA36Vo0hNYVe5ZQ-ITGQ_TGGBdo-Nx2qRo4eTd1wwRIh62qUuHnWHhaUzCR99QrmIG-31iwq69deTwk8qHelepUU3YzEf35U5u49ZvugbkZwMHxw3mvRE-8G7A_SJm7TlImkX_3S58fwdIv713lq_WDhqFey194zyzwf2dD_ZEJsGvxfq2kTV2QV3UZGJfjfmAxWfybv8nHRj6Q5tSGfdn_QN23TJYmk6b5WxfI9Cm8bl0af2WvM3uVPKV5MSz1YF0yVrlfUY5FcBt1P4sL6OFX88-hc3Gz_CDrfuE5vLJoHkOAvfQf97LwAFfpg-9A79h-5p8wf_NC7oI8BWNtd3iVuNZzPypB-RnhdDGQYjAQ0Ra5-d5kjhJTQ1mc_Ax4-CWIwa1f0DXbVLleSEOJBMnfvj-XRdjdjafTSlRW60lGCDsMqRiNkpuvwC_K6lhQ5epBI_6PSkJFpZwIZBGqEWJspkGbM1zdfqwR97eTzwK3u5iBbzWB-A1P9YSywK4W7CNlpe-1wH6X5cz7G6k708IlgyJ9-KvoiJN4yUcINwILfl0QPbU7I0PRRcuF4JMYOg9hpz8LG-S71EI3nXmqTiynn-7gIprMUE0O3ti9-l7y7HJNoGWM4UDCWfZ90L1BuEyCtZpnC3q_M1xkpsQ3i83zX_0spQp2WoNnuAouT7kEtzMmgWB7XWB9RPRU8CCKRYrjvm_mFypine55wF0PAkhdyCsL9UYTnBEJUh5wtb2iu4Z8EyvmtqnrgVqKNSaLeAdYpkJ0ux7wSiv0eWpCnrEuQ48ISMInVRZP9jnBuawl-mVfIq7ds3uCRtuNrsx9aLXyuNScUc8jfsWpGQwMWE_okRpGLqY-IrxUaxCZuYd8Uxk3ITkU5WGO72pKBveVf7Qgyf7Ox0ifyrq8CI_78Kue5Yq_K6S6PF0TmEhBvbzsqXK47UVaceDvr0FiWfp5Gx4xQOfmmyB0-vR5ZZkVzC4_e455ILYHXx5VsIqiDoOIuzuTv1H1jcjeQwLy8J2cZupbDpR3gzKuw-K_3b6xAUFMPr_Aqlg1Y8t0UFT60WmJoGgwlGznDgUWFgOPDsHoGrxkTh7TUJ3P3bQjkjVUTIDLcex9hMRfLF0tGRIf9kshEjsqos2trtCglZ6z4bYw33NIqMAm4Zu5LYmMlBOrCjiDKmmIQcu1spI5-6nwk-mYG7AGwpeqys7UbLANNnkFoE6j3WAo5wN6aRDcXgSEryqOFAwDl5E0UHyNfSJebQuYvxxQUH3zK-NiHNxzszOzHrqRlDiBhWq",
      },
      level: Levels.Mid,
    },
    {
      id: 37,
      date: "08-06",
      startTime: "16:50",
      endTime: "17:00",
      title: "Breaktime",
      category: "Break Time",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 38,
      date: "08-06",
      startTime: "17:00",
      endTime: "17:40",
      title: "Golang Korea X AWSKRUG",
      category: "Event",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 39,
      date: "08-06",
      startTime: "17:40",
      endTime: "17:50",
      title: "Events (raffles)",
      category: "Event",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
    {
      id: 40,
      date: "08-06",
      startTime: "17:50",
      endTime: "18:00",
      title: "Closing",
      category: "Closing",
      description: "",
      speaker: {
        name: "",
        company: "",
        description: "",
        profileImage: "",
      },
      level: Levels.None,
    },
  ],
};
