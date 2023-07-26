import { gsap } from "gsap";
import React from "react";
import { useInView } from "react-intersection-observer";
import GoLangKoreaLogo from "/public/images/golang_korea_logo.png";
import GopherConLogo from "/public/images/gophercon_logo.png";

const About = () => {
  const [text, setText] = React.useState("국내 최초");
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const textAnimation = React.useCallback(() => {
    const tl = gsap.timeline();
    tl.to(textRef.current, {
      duration: 1,
      startAt: { opacity: 0 },
      opacity: 1,
      call: () => {
        setText("국내 최초");
      },
    });
    tl.to(textRef.current, {
      duration: 1,
      startAt: { opacity: 0 },
      opacity: 1,
      call: () => {
        setText("국내 최대");
      },
    })
      .to(textRef.current, {
        duration: 1,
        startAt: { opacity: 0 },
        opacity: 1,
        call: () => {
          setText("Go 사용자를 위한 컨퍼런스");
        },
      })
      .to(textRef.current, {
        duration: 1,
        startAt: { opacity: 0 },
        opacity: 1,
        call: () => {
          setText('"Go In Depth"');
        },
      })
      .to(textRef.current, {
        duration: 1,
        startAt: { opacity: 0 },
        opacity: 1,
        call: () => {
          setText("GopherCon Korea 2023");
        },
      });
  }, [textRef]);

  React.useEffect(() => {
    if (inView) {
      textAnimation();
    }
  }, [inView]);

  return (
    <section
      className='relative flex min-h-screen w-screen flex-col items-center justify-center gap-4 bg-white pt-80 max-lg:pt-32'
      style={{ transform: "perspective(1200px)" }}
      id='about'
    >
      <div ref={ref} />
      <p className='z-50 mb-20 cursor-pointer text-5xl font-bold max-lg:text-3xl' ref={textRef}>
        {text}
      </p>
      <div className='flex w-full items-center justify-center gap-10 p-5 max-lg:flex-col'>
        <div className='w-1/4 max-w-[500px] cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-xl transition hover:scale-105 max-lg:w-full'>
          <img
            src={"https://e0.pxfuel.com/wallpapers/412/505/desktop-wallpaper-golang-golang-gopher.jpg"}
            alt='gopher'
            className='h-[240px] w-full object-cover'
          />
          <div className='flex h-fit flex-col items-center p-10'>
            <p className='mb-8 text-2xl font-bold'>GO 언어에 대해서</p>
            <p className='text-lg'>
              Go 언어는 <b>Google에서 개발한 프로그래밍 언어</b>입니다. 간결하고 가독성이 높은 문법을 갖췄으며 동시성과
              빠른 컴파일 속도를 제공한다는 특징을 가지고 있는 Go 언어는,{" "}
              <b>대규모 시스템에서도 효율적인 실행과 확장성을 제공</b>합니다. Go는 주로 서버 프로그래밍과 분산 시스템에
              많이 사용되며, Docker, Kubernetes 등의 대형 프로젝트에서도 활발하게 사용되고 있습니다.
            </p>
          </div>
        </div>
        <div className='w-1/4 max-w-[500px] cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-xl transition hover:scale-105 max-lg:w-full'>
          <img src={GopherConLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex h-fit flex-col items-center p-10'>
            <p className='mb-8 text-2xl font-bold'>고퍼콘 코리아</p>
            <p className='text-lg'>
              Go 언어 사용자들과 Go 언어의 마스코트는 <b>고퍼(Gopher)</b>라고 불립니다. 여기서 창안된{" "}
              <b>고퍼콘(GopherCon)은 모든 고퍼들을 위한 컨퍼런스</b>입니다. 한국에서는 2023년에 최초로 연례 최대 고
              개발자 행사인 고퍼콘 코리아(GopherCon Korea)를 시작하였고, 이를 기점으로 매년 고퍼콘 코리아를 통해 고 언어
              소통 창구를 만들고 글로벌 연결을 시도하고 있습니다.
            </p>
          </div>
        </div>
        <div className='w-1/4 max-w-[500px] cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-xl transition hover:scale-105 max-lg:w-full'>
          <img src={GoLangKoreaLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex h-fit flex-col items-center p-10'>
            <p className='mb-8 text-2xl font-bold'>한국 고언어 사용자모임</p>
            <p className='text-lg'>
              Golang Korea는 2011년 부터 시작되어 12년간 꾸준하게 성장해온 <b>한국 고언어 커뮤니티</b>입니다. Facebook의
              7,300명에 달하는 커뮤니티 구성원과 Instagram, Thread, Slack, Twitter, YouTube, GitHub 등 다양한 채널을
              통해 다양한 고언어 사용자끼리의 <b>정보 공유와 네트워킹,</b> 그리고 <b>교육 세션</b>을 주관하고 재밌는
              온/오프라인 이벤트 기획하고 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className='absolute left-0 right-0 top-0 h-[520px] w-full -rotate-180 overflow-hidden max-lg:hidden'>
        <div className='purpleDot h-full w-full' />
        <div className='skyDot h-full w-full' />
      </div>
    </section>
  );
};

export default About;
