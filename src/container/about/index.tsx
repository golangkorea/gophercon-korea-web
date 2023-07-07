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
    <section className='flex min-h-screen w-screen flex-col items-center justify-center gap-4 max-sm:py-44'>
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
          <div className='flex flex-col items-center justify-center bg-gray-700 p-12'>
            <p className='mb-8 text-2xl'>블라블라</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
        <div className='w-1/4 cursor-pointer overflow-hidden rounded-xl transition hover:scale-105 max-sm:w-full'>
          <img src={GopherConLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex flex-col items-center justify-center bg-gray-700 p-12'>
            <p className='mb-8 text-2xl'>국내 최초 GopherCon</p>
            <p>
              세상에 이건 꼭 가야해! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
              eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.
            </p>
          </div>
        </div>
        <div className='w-1/4 cursor-pointer overflow-hidden rounded-xl transition hover:scale-105 max-sm:w-full'>
          <img src={GoLangKoreaLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex flex-col items-center justify-center bg-gray-700 p-12'>
            <p className='mb-8 text-2xl'>국내 최대 고 언어 커뮤니티</p>
            <p>
              고랭 코리아 짱짱맨 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
