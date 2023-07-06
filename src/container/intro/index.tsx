const Intro = () => {
  return (
    <div className='h-full w-full'>
      <div className='min-w-screen absolute left-0 top-0 min-h-screen'>
        <video className='h-screen w-screen object-cover transition' autoPlay muted loop playsInline preload={"auto"}>
          <source src='https://changhyeon.s3.ap-northeast-2.amazonaws.com/assets/intro.mp4' type={"video/mp4"} />
        </video>
      </div>
      <div className='margin-auto absolute bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-center text-white'>
        <h1 className='mb-7 text-7xl font-extrabold max-sm:text-5xl'>“Go in depth”</h1>
        <h2 className='mb-24 text-5xl font-bold max-sm:mb-12 max-sm:text-3xl'>2023. 08. 05 - 06</h2>
        <p className='text-3xl opacity-80 max-sm:text-xl'>국내 고 언어 최대 커뮤니티와 함께하세요</p>
      </div>
    </div>
  );
};
export default Intro;
