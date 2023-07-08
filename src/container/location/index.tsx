"use client";

import useCountdown from "@/hooks/useCountdown";
import dayjs from "dayjs";

const DATE = dayjs("2023-08-05 10:00", "YYYY-MM-DD HH:mm").toDate();
const Location = () => {
  const [days, hours, minutes, seconds] = useCountdown(DATE);
  return (
    <section className='locationGradient justify-betweenu relative flex h-[750px] w-screen items-center bg-white text-white max-sm:h-[400px]'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <div className='mb-10 ml-12 text-center max-sm:ml-0'>
          <p className='text-8xl font-extrabold max-sm:text-4xl'>GopherCon 2023</p>
          <p className='text-8xl font-extrabold max-sm:text-4xl'>Korea</p>
          <p className='mb-4 text-5xl font-extrabold max-sm:text-xl'>2023.08.05-06</p>
          <p className='text-2xl font-extrabold max-sm:text-base'>
            서울특별시 광진구 능동로 209, 세종대학교 대양 AI 센터 (12층)
          </p>
        </div>
        <div className='z-10 ml-12 flex gap-4 max-sm:ml-0 max-sm:w-screen max-sm:justify-center max-sm:gap-2'>
          <div className='countDownWrapper'>
            <div className='countDownInner'>
              <div className='countDown'>
                <p className='text-3xl font-bold'>{days}</p>
                <p>days</p>
              </div>
            </div>
          </div>
          <div className='countDownWrapper'>
            <div className='countDownInner'>
              <div className='countDown'>
                <p className='text-3xl font-bold'>{hours}</p>
                <p>hours</p>
              </div>
            </div>
          </div>
          <div className='countDownWrapper'>
            <div className='countDownInner'>
              <div className='countDown'>
                <p className='text-3xl font-bold'>{minutes}</p>
                <p>minutes</p>
              </div>
            </div>
          </div>
          <div className='countDownWrapper'>
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
