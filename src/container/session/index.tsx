import { SESSIONS } from "@/constants/sessions";
import SessionCard from "@/container/session/_shared/sessionCard";

const Session = () => {
  return (
    <section
      className='flex min-h-screen w-screen flex-col items-center justify-center gap-4 bg-white pb-12 max-lg:py-44'
      id='session'
    >
      <p className='w-full text-center text-3xl font-bold uppercase sm:hidden'>session</p>
      <div className='mt-20 flex w-full flex-wrap justify-around gap-y-8 px-32 max-lg:px-4'>
        <div className='sessionGradient rainbowBorder relative h-[400px] w-[320px] shadow-2xl max-lg:hidden'>
          <div className='absolute bottom-0 z-20 flex h-full w-full flex-col justify-between p-4 text-white '>
            <p className='mb-4 text-3xl font-bold uppercase'>Session</p>
            <p className=''>
              다양한 회사들의 Go 사용기를 들어보세요. 블라블라 한 2~3줄 적으면 될듯 수빈님 도배 죄송해요
            </p>
          </div>
        </div>
        {SESSIONS.map((session, index) => (
          <SessionCard session={session} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Session;
