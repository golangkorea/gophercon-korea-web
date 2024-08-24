import { gsap } from "gsap";
import { WithTranslation, withTranslation } from "next-i18next";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import GoLangKoreaLogo from "/public/images/golang_korea_logo.png";
import GopherConLogo from "/public/images/gophercon_logo.png";

const About: React.FC<WithTranslation> = ({ t }) => {
  const [text, setText] = useState(t("common:copyright1"));
  const textRef = useRef<HTMLParagraphElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const textAnimation = useCallback(() => {
    const tl = gsap.timeline();
    tl.to(textRef.current, {
      duration: 1,
      startAt: { opacity: 0 },
      opacity: 1,
      call: () => {
        setText(t("common:copyright1"));
      },
    });
    tl.to(textRef.current, {
      duration: 1,
      startAt: { opacity: 0 },
      opacity: 1,
      call: () => {
        setText(t("common:copyright2"));
      },
    })
      .to(textRef.current, {
        duration: 1,
        startAt: { opacity: 0 },
        opacity: 1,
        call: () => {
          setText(t("common:copyright3"));
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
  }, [textRef, t]);

  useEffect(() => {
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
            <p className='mb-8 text-2xl font-bold'>{t("common:aboutGo")}</p>
            <p className='text-lg'>{t("common:aboutGoDesc")}</p>
          </div>
        </div>
        <div className='w-1/4 max-w-[500px] cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-xl transition hover:scale-105 max-lg:w-full'>
          <img src={GopherConLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex h-fit flex-col items-center p-10'>
            <p className='mb-8 text-2xl font-bold'>{t("common:gopherConKorea")}</p>
            <p className='text-lg'>{t("common:gopherConKoreaDesc")}</p>
          </div>
        </div>
        <div className='w-1/4 max-w-[500px] cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-xl transition hover:scale-105 max-lg:w-full'>
          <img src={GoLangKoreaLogo.src} alt='gopher' className='h-[240px] w-full bg-white object-contain p-2' />
          <div className='flex h-fit flex-col items-center p-10'>
            <p className='mb-8 text-2xl font-bold'>{t("common:golangKorea")}</p>
            <p className='text-lg'>{t("common:golangKoreaDesc")}</p>
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

export default withTranslation(["common", "nav", "coc"])(About);
