import React from "react";

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  const handleRegister = React.useCallback(() => {
    window.open("https://festa.io/events/3435", "_blank");
  }, []);

  return (
    <div className='bannerWrapper bannerGradient'>
      <div className='bannerText flex flex-col'>
        <p className='mb-4 text-5xl font-bold'>{title}</p>
        <p className='whitespace-pre-line text-xl'>{description}</p>
      </div>
      <div className='bannerCardWrapper'>
        <div className='bannerCardInner items-start justify-center'>
          <p className='font-semibold tracking-widest'>TICKET</p>
          <p>티켓 구매 가능</p>
          <p className='whitespace-pre-line'>{`국내 최초로 개최되는 GopherCon 2023에서\n 고 언어의 최신 기술, 전문가의 경험을 배우고\n다양한 고 언어 개발자와 교류하세요`}</p>
          <span className='mint-border w-30 cursor-pointer font-semibold uppercase' onClick={handleRegister}>
            Register now
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);
