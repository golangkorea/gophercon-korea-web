import { gsap } from "gsap";
import { useRouter } from "next/router";
import React from "react";
import { useInView } from "react-intersection-observer";
import GoLangKoreaLogo from "/public/images/golang_korea_logo.png";
import GopherConLogo from "/public/images/gophercon_logo.png";

const About = () => {
  const router = useRouter();
  const [text, setText] = React.useState("국내 최초");
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.8,
    // triggerOnce: true,
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
    <section className='flex min-h-screen w-screen flex-col items-center justify-center gap-4 max-sm:py-44' id='about'>
      <div ref={ref} />
      <p className='mb-20 cursor-pointer text-5xl font-bold max-sm:text-3xl' ref={textRef}>
        {text}
      </p>
      <div className='flex w-full items-center justify-center gap-8 p-8 max-sm:flex-col'>
        <div className='w-1/4 cursor-pointer overflow-hidden rounded-xl transition hover:scale-105 max-sm:w-full'>
          <img
            src={"https://e0.pxfuel.com/wallpapers/412/505/desktop-wallpaper-golang-golang-gopher.jpg"}
            alt='gopher'
            className='h-[240px] w-full object-cover'
          />
          <div className='flex h-[330px] flex-col items-center bg-gray-700 p-12'>
            <p className='mb-8 text-2xl'>블라블라</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
        <div className='w-1/4 cursor-pointer overflow-hidden rounded-xl transition hover:scale-105 max-sm:w-full'>
          <img src={GopherConLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex h-[330px] flex-col items-center bg-gray-700 p-12'>
            <p className='mb-8 text-2xl'>국내 최초 GopherCon</p>
            <p>
              Go 언어 사용자들을 고퍼(Gopher)라고 부르며, 고퍼들을 위한 연례행사인 고퍼콘(GopherCon)이 2014년 시작해
              미국, 독일, 영국, 중국, 일본, 브라질, 이스라엘, 인도, 캐나다, 이탈리아, 싱가포르 등 세계 각국에서 매년
              열리고 있습니다.
            </p>
          </div>
        </div>
        <div className='w-1/4 cursor-pointer overflow-hidden rounded-xl transition hover:scale-105 max-sm:w-full'>
          <img src={GoLangKoreaLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex h-[330px] flex-col items-center bg-gray-700 p-12'>
            <p className='mb-8 text-2xl'>국내 최대 고 언어 커뮤니티</p>
            <p>
              Golang Korea는 페이스북을 기반으로 약 7천명의 사용자가 모여 Go 프로그래밍 언어에 대한 정보 교류 및
              네트워크를 연결하는 비영리 커뮤니티입니다. Go 생태계 활성화 및 다양성을 키워가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
