export interface Speaker {
  name: string;
  company: string;
  description: string;
  profileImage: string;
}
export interface Session {
  startTime: string;
  endTime: string;
  title: string;
  category: string;
  description: string;
  speaker: Speaker;
}

// export const SESSIONS: Session[] = [
//   {
//     startTime: "10:40",
//     endTime: "11:10",
//     title: `AWS Lambda in Go \n(with Kafka)`,
//     category: "Main Talk",
//     description:
//       "기존 모놀리식 서비스에서 이벤트를 웹훅으로 받아 처리하던 아키텍처에서 문제를 겪고, AWS Lambda와 Go를 이용해 서버리스 웹훅 서비스를 개발, 배포한 경험에 대해 소개드립니다.",
//     speaker: {
//       name: "김수빈",
//       company: "비바리퍼블리카 (TOSS)",
//       description:
//         "현재 비바리퍼블리카에서 서버 개발자로 일하고 있는 김수빈입니다. 저는 팀 내에서 다른 개발자 분들의 개발 생산성을 개선하는 플랫폼 엔지니어링을 주로 하고 있는데요, 그 과정에서 얻은 여러 경혐들을 공유 드리고자 합니다.",
//       profileImage:
//         "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
//     },
//   },
// ];

// FIXME : 임시 데이터
export const SESSIONS: Session[] = Array.from({ length: 9 }).map((_, index) => ({
  startTime: "10:40",
  endTime: "11:10",
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
}));
