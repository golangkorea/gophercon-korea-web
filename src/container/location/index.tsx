import useCountdown from "@/hooks/useCountdown";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import dayjs from "dayjs";
import { gsap } from "gsap";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const DATE = dayjs("2023-08-05 10:00", "YYYY-MM-DD HH:mm").toDate();
const Location = () => {
  const daysRef = React.useRef<HTMLDivElement>(null);
  const hoursRef = React.useRef<HTMLDivElement>(null);
  const minutesRef = React.useRef<HTMLDivElement>(null);
  const secondsRef = React.useRef<HTMLDivElement>(null);
  const [days, hours, minutes, seconds] = useCountdown(DATE);

  const TRIGGER = {
    day: daysRef.current,
    hour: hoursRef.current,
    minute: minutesRef.current,
    second: secondsRef.current,
  };

  const tickAnimation = (trigger: keyof typeof TRIGGER) => {
    let tl = gsap.timeline();
    tl.to(TRIGGER[trigger], {
      duration: 0.1,
      y: -10,
      ease: "power1.inOut",
    }).to(TRIGGER[trigger], {
      duration: 0.1,
      y: 0,
      ease: "power1.inOut",
    });
  };

  React.useEffect(() => {
    tickAnimation("day");
  }, [days]);

  React.useEffect(() => {
    tickAnimation("hour");
  }, [hours]);

  React.useEffect(() => {
    tickAnimation("minute");
  }, [minutes]);

  React.useEffect(() => {
    tickAnimation("second");
  }, [seconds]);

  return (
    <section className='locationGradient justify-betweenu relative flex h-screen w-screen items-center bg-white text-white max-lg:h-[400px]'>
      <div className='z-10 flex h-full w-full flex-col items-center justify-center'>
        <div className='mb-10 ml-12 text-center max-lg:ml-0'>
          <p className='text-8xl font-extrabold max-lg:text-4xl'>GopherCon 2023</p>
          <p className='text-8xl font-extrabold max-lg:text-4xl'>Korea</p>
          <p className='mb-4 mt-2 text-5xl font-extrabold max-lg:text-xl'>2023.08.05-06</p>
          <CopyToClipboard
            text='서울특별시 광진구 능동로 209'
            onCopy={() => {
              window.alert("주소가 클립보드에 복사되었습니다.");
            }}
          >
            <button className='text-2xl font-extrabold underline max-lg:text-base'>
              서울특별시 광진구 능동로 209, 세종대학교 대양 AI 센터 (12층)
            </button>
          </CopyToClipboard>
          <div className='mt-4 flex w-full justify-center'>
            <AddToCalendarButton
              name='GopherCon Korea 2023'
              description='안녕하세요, Golang Korea입니다.
      2023년 여름, Go 언어 사용자들의 최대 행사인 GopherCon이 한국에서 처음으로 개최됩니다! 🎉

      이번 GopherCon Korea 2023의 주제는 "Go In Depth"로 그동안 미처 살펴보지 못했던 Go 언어의 활용법과 내부를 들여다 볼 수 있다는 다양한 세션이 준비되어 있습니다.'
              startDate='2023-08-05'
              startTime='10:00'
              endDate='2023-08-06'
              endTime='18:00'
              timeZone='Asia/Seoul'
              location='서울특별시 광진구 능동로 209, 세종대학교 대양 AI 센터 (12층)'
              options="'Apple','Google','iCal','Outlook.com','Microsoft365'"
              buttonStyle='3d'
              listStyle='overlay'
            />
          </div>
        </div>
        <div className='z-10 ml-12 flex gap-4 max-lg:ml-0 max-lg:w-screen max-lg:justify-center max-lg:gap-2'>
          <div className='countDownWrapper' ref={daysRef}>
            <div className='countDownInner'>
              <div className='countDown'>
                <p className='text-3xl font-bold'>{days}</p>
                <p>days</p>
              </div>
            </div>
          </div>
          <div className='countDownWrapper' ref={hoursRef}>
            <div className='countDownInner'>
              <div className='countDown'>
                <p className='text-3xl font-bold'>{hours}</p>
                <p>hours</p>
              </div>
            </div>
          </div>
          <div className='countDownWrapper' ref={minutesRef}>
            <div className='countDownInner'>
              <div className='countDown'>
                <p className='text-3xl font-bold'>{minutes}</p>
                <p>minutes</p>
              </div>
            </div>
          </div>
          <div className='countDownWrapper' ref={secondsRef}>
            <div className='countDownInner'>
              <div className='countDown'>
                <p className='text-3xl font-bold'>{seconds}</p>
                <p>seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
