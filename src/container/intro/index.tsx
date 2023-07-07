const Intro = () => {
  return (
    <section className='fixed min-h-screen w-full'>
      <div className='min-w-screen absolute left-0 top-0 min-h-screen'>
        <video className='h-screen w-screen object-cover transition' autoPlay muted loop playsInline preload={"auto"}>
          <source src='https://changhyeon.s3.ap-northeast-2.amazonaws.com/assets/intro.mp4' type={"video/mp4"} />
        </video>
      </div>
      <div className='absolute bottom-12 left-12 flex flex-col text-white max-sm:bottom-6 max-sm:left-6'>
        <h1 className='mb-4 text-7xl font-bold max-sm:mb-2 max-sm:text-3xl'>Go in depth</h1>
        <h2 className='text-5xl font-bold max-sm:text-xl'>2023. 08. 05 - 06</h2>
      </div>
    </section>
  );
};
export default Intro;
