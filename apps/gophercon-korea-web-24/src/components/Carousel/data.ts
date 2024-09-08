export interface EachCardProps {
  level: LevelType;
  day: CardDayType;
  hour: CardHourType;
  imgSrc: string;
  name: string;
  theme: string;
}

type CardHourType = `${number}:${number}`;
type CardDayType = "DAY 1" | "DAY 2";
export type LevelType = "Beginner" | "Intermediate" | "Advanced";

const cardList: EachCardProps[] = [
  {
    level: "Intermediate",
    day: "DAY 1",
    hour: "18:00",
    name: "정우석",
    theme: "Go 언어의 병행성 프로그래밍 알아보기",
    imgSrc: `dummy.png`,
  },
  {
    level: "Intermediate",
    day: "DAY 1",
    hour: "18:00",
    name: "정우석",
    theme: "Go 언어의 병행성 프로그래밍 알아보기",
    imgSrc: `dummy.png`,
  },
  {
    level: "Beginner",
    day: "DAY 2",
    hour: "18:00",
    name: "정우석",
    theme: "우리는 테스트를 어떻게 해야하는가",
    imgSrc: `dummy.png`,
  },
  {
    level: "Advanced",
    day: "DAY 1",
    hour: "18:00",
    name: "정우석",
    theme: "우리는 테스트를 어떻게 해야하는가",
    imgSrc: `dummy.png`,
  },
  {
    level: "Advanced",
    day: "DAY 1",
    hour: "18:00",
    name: "정우석",
    theme: "우리는 테스트를 어떻게 해야하는가",
    imgSrc: `dummy.png`,
  },
  {
    level: "Advanced",
    day: "DAY 1",
    hour: "18:00",
    name: "정우석",
    theme: "우리는 테스트를 어떻게 해야하는가",
    imgSrc: `dummy.png`,
  },
];

export default cardList;
