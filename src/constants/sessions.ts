export interface Speaker {
  name: string;
  company: string;
  description: string;
  profileImage: string;
}
export interface Session {
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
    date: "08-05",
    startTime: "10:40",
    endTime: "11:10",
    title: `Open Source in Go`,
    category: "Main Talk",
    description:
      "Go 언어 관련 강연에 참석하면 자주 들리는 질문이 있습니다. ‘Go 언어로는 무엇을 할 수 있나요?’ 이번 세션에서는 왜 Go 언어가 오픈소스에 기여할 수 있는 강력한 도구인지 이야기하고 Go 언어로 구현된 클라우드 네이티브 오픈소스들을 소개합니다. 더 나은 이해를 위해 데모 애플리케이션을 활용합니다.\n \
      이후 ‘오픈소스 컨트리뷰션 아카데미’, ‘LFX Mentorship’등 오픈소스 기여를 도와주는 국내외 여러 프로그램에 참여한 경험을 소개합니다.",
    speaker: {
      name: "박남규",
      company: "LitmusChaos",
      description:
        "클라우드 네이티브 기술에 관심이 많은 Gopher 입니다. Litmus(CNCF 인큐베이팅 프로젝트)라는 오픈소스에 기여하고 있습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
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
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
];
