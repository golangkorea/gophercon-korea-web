export interface Session {
  id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  speaker: {
    name: { en: string; ko: string };
    company: { en: string; ko: string };
    intro: { en: string; ko: string };
    image?: string;
  };
  difficulty: { en: "Beginner" | "Intermediate" | "Advanced"; ko: "초급" | "중급" | "고급" };
  category: { en: string; ko: string };
}

export interface ScheduleItem {
  time: string;
  type: "session" | "break";
  title: { en: string; ko: string };
  sessionId?: string;
}

export const sessions: Session[] = [
  {
    id: "TBD-1",
    title: {
      en: "if err != nil { return err }: A Love Story",
      ko: "if err != nil { return err }: 어느 개발자의 러브스토리",
    },
    description: {
      en: "A deep dive into Go's error handling philosophy. Why is it so simple, yet so powerful? We'll explore the beauty of explicit error handling and how it leads to more robust and readable code. We might even shed a tear or two for the try-catch blocks we left behind. (This is placeholder data)",
      ko: "Go의 에러 핸들링 철학에 대한 깊이 있는 탐구. 왜 Go의 에러 처리는 이토록 단순하면서도 강력할까요? 명시적 에러 핸들링의 아름다움과, 이것이 어떻게 더 견고하고 가독성 높은 코드로 이어지는지 알아봅니다. 우리가 뒤로 한 try-catch 블록을 위해 눈물 한 방울 흘릴지도 모릅니다. (이 데이터는 임시 정보입니다)",
    },
    speaker: {
      name: { en: "I. M. Gopher", ko: "임고퍼" },
      company: { en: "Error-Free Solutions", ko: "에러없는 솔루션" },
      intro: {
        en: "An evangelist for explicit error handling. Believes that a well-handled error is a feature, not a bug.",
        ko: "명시적 에러 핸들링의 전도사. 잘 처리된 에러는 버그가 아닌 기능이라고 믿습니다.",
      },
    },
    difficulty: { en: "Intermediate", ko: "중급" },
    category: { en: "Core", ko: "코어" },
  },
  {
    id: "TBD-2",
    title: {
      en: "My Code is Slow, and I Don't Know Why: A pprof Story",
      ko: "제 코드가 느린데 이유를 모르겠어요: pprof 분투기",
    },
    description: {
      en: "Is your application mysteriously slow? Does your CPU fan sound like a jet engine? Fear not! This session will turn you into a performance detective. We'll use `pprof` to hunt down bottlenecks, optimize memory usage, and make your Go programs blazingly fast. (This is placeholder data)",
      ko: "애플리케이션이 알 수 없는 이유로 느린가요? CPU 팬이 제트 엔진처럼 울부짖나요? 걱정 마세요! 이 세션이 당신을 성능 탐정으로 만들어 드립니다. `pprof`를 사용해 병목 현상을 추적하고, 메모리 사용량을 최적화하여 Go 프로그램을 빛처럼 빠르게 만들어 봅시다. (이 데이터는 임시 정보입니다)",
    },
    speaker: {
      name: { en: "Dr. Profile", ko: "프로파일 박사" },
      company: { en: "Blazing Fast Inc.", ko: "빛의속도 주식회사" },
      intro: {
        en: "A performance tuning expert who lives in the flame graph. Can spot a memory leak from a mile away.",
        ko: "플레임 그래프 속에서 사는 성능 튜닝 전문가. 1마일 밖에서도 메모리 누수를 발견할 수 있습니다.",
      },
    },
    difficulty: { en: "Beginner", ko: "초급" },
    category: { en: "Profiling", ko: "프로파일링" },
  },
  {
    id: "TBD-3",
    title: {
      en: "To Framework, or Not to Framework: That is the net/http Question",
      ko: "프레임워크냐, 아니냐: 그것이 net/http로다",
    },
    description: {
      en: "The eternal debate for Go developers. Should you use a web framework like Gin or Echo, or is the standard `net/http` library all you need? We'll compare the pros and cons, build a small service both ways, and help you make the right choice for your next project. (This is placeholder data)",
      ko: "Go 개발자들의 영원한 논쟁. Gin이나 Echo 같은 웹 프레임워크를 사용해야 할까요, 아니면 표준 `net/http` 라이브러리만으로 충분할까요? 장단점을 비교하고, 두 가지 방식으로 작은 서비스를 만들어보며 다음 프로젝트를 위한 올바른 선택을 돕습니다. (이 데이터는 임시 정보입니다)",
    },
    speaker: {
      name: { en: "Standard Library Stan", ko: "표준 라이브러리 옹호자" },
      company: { en: "Just-Enough-Code Co.", ko: "딱-필요한-코드 컴퍼니" },
      intro: {
        en: "A minimalist who believes the best code is the code you don't write. Prefers simplicity over magic.",
        ko: "최고의 코드는 작성하지 않은 코드라고 믿는 미니멀리스트. 마법보다는 단순함을 선호합니다.",
      },
    },
    difficulty: { en: "Advanced", ko: "고급" },
    category: { en: "Framework", ko: "프레임워크" },
  },
  {
    id: "TBD-4",
    title: {
      en: "Generics Saved My Keyboard: A Tale of Less Typing",
      ko: "제네릭이 제 키보드를 살렸습니다: 타이핑 절약 실화",
    },
    description: {
      en: "Remember the days of `interface{}` and type assertions? We've come a long way. This session celebrates the arrival of generics in Go. We'll explore practical use cases, how they simplify code, and share tips for writing clean, reusable, and type-safe generic functions. (This is placeholder data)",
      ko: "`interface{}`와 타입 단언의 시대를 기억하시나요? 우리는 먼 길을 왔습니다. 이 세션은 Go에 제네릭이 도입된 것을 기념합니다. 실용적인 사용 사례, 코드를 단순화하는 방법, 그리고 깔끔하고 재사용 가능하며 타입-안전한 제네릭 함수 작성 팁을 공유합니다. (이 데이터는 임시 정보입니다)",
    },
    speaker: {
      name: { en: "Gena Rics", ko: "제나 릭스" },
      company: { en: "TypeSafe & Sound", ko: "타입안전보장" },
      intro: {
        en: "Loves types, hates `any`. Has written `funcT any T` more times than they can count.",
        ko: "타입을 사랑하고 `any`를 싫어합니다. 셀 수 없이 많이 `funcT any T`를 작성했습니다.",
      },
    },
    difficulty: { en: "Beginner", ko: "초급" },
    category: { en: "Community", ko: "커뮤니티" },
  },
];

export const schedule: ScheduleItem[] = [
  {
    time: "10:00 - 11:00",
    type: "break",
    title: { en: "Check-In & Coffee{...}", ko: "체크인 & 커피{...}" },
  },
  {
    time: "11:00 - 11:30",
    type: "break",
    title: { en: "Opening: func main() { ... }", ko: "오프닝: func main() { ... }" },
  },
  {
    time: "11:30 - 12:00",
    type: "session",
    title: {
      en: "if err != nil { return err }: A Love Story",
      ko: "if err != nil { return err }: 어느 개발자의 러브스토리",
    },
    sessionId: "TBD-1",
  },
  {
    time: "12:00 - 12:30",
    type: "session",
    title: {
      en: "My Code is Slow, and I Don't Know Why: A pprof Story",
      ko: "제 코드가 느린데 이유를 모르겠어요: pprof 분투기",
    },
    sessionId: "TBD-2",
  },
  {
    time: "12:30 - 13:30",
    type: "break",
    title: { en: "Lunch: // TODO: Refill energy", ko: "점심: // TODO: 에너지 보충" },
  },
  {
    time: "13:30 - 14:10",
    type: "session",
    title: {
      en: "To Framework, or Not to Framework: That is the net/http Question",
      ko: "프레임워크냐, 아니냐: 그것이 net/http로다",
    },
    sessionId: "TBD-3",
  },
  {
    time: "14:20 - 14:50",
    type: "session",
    title: {
      en: "Generics Saved My Keyboard: A Tale of Less Typing",
      ko: "제네릭이 제 키보드를 살렸습니다: 타이핑 절약 실화",
    },
    sessionId: "TBD-4",
  },
  {
    time: "15:00 - 18:00",
    type: "break",
    title: { en: "Networking & Closing: for { ... }", ko: "네트워킹 & 클로징: for { ... }" },
  },
];
