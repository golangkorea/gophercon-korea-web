import Layout from "@/components/layout";
import { Session, SESSIONS } from "@/constants/sessions";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React from "react";
import Gopher from "/public/images/gopher.png";

const ProgramDetailPage = () => {
  const router = useRouter();
  const [data, setData] = React.useState<Session | undefined>(undefined);

  React.useEffect(() => {
    const { id } = router.query;
    if (id) {
      const target = SESSIONS.find((session) => session.id === Number(id));
      console.log(target);
      setData(target);
    }
  }, [router]);

  const randomTwo = React.useMemo(() => {
    const { id } = router.query;
    if (!id) return [];
    const target = SESSIONS.filter((session) => session.id !== Number(id) && session.category === "Main Talk");
    let random = Number(id);
    let random2 = Number(id);
    while (Number(id) === random || Number(id) === random2 || random === random2) {
      random = Math.floor(Math.random() * target.length);
      random2 = Math.floor(Math.random() * target.length);
    }
    return [target[random], target[random2]];
  }, [router]);

  if (!data) return null;

  return (
    <Layout>
      <div className='programDetailBackground max-lg: mt-20 flex h-[50vh] items-center justify-around max-lg:mt-16 max-lg:h-full max-lg:flex-col max-lg:items-start max-lg:p-4'>
        <div className='max-lg:mt-5'>
          <p className='text-gray-500'>{`2023-${data.date}`}</p>
          <p className='text-gray-500'>{`${data.startTime} ~ ${data.endTime}`}</p>
          <p className='mt-5 w-[400px] text-4xl font-extrabold tracking-wider max-lg:w-full'>{data.title}</p>
          <p className='mt-5 w-[400px] font-bold tracking-wide text-[#00000080] max-lg:w-full'>{data.description}</p>
          <p className='mt-5 font-extrabold tracking-wide'>{`With ${data.speaker.name} | ${data.speaker.company}`}</p>
        </div>
        <div className='max-lg:mt-5 max-lg:flex max-lg:w-full max-lg:justify-center'>
          <img
            src={data.speaker?.profileImage == "" ? Gopher.src : data.speaker?.profileImage}
            alt={data.speaker.name}
            className='w-[500px]'
          />
        </div>
      </div>
      <div className='flex flex-col p-10'>
        <p className='mb-10 text-4xl font-extrabold tracking-wide'>You might also like</p>
        <div className='flex gap-5 max-lg:flex-col'>
          {randomTwo.map((session, index) => (
            <div
              key={session.id}
              className='relative flex cursor-pointer'
              onClick={() => router.push(`/program/${session.id}`)}
            >
              <img
                src={session.speaker?.profileImage == "" ? Gopher.src : session.speaker?.profileImage}
                alt={session.speaker.name}
                className='z-0 w-[450px]'
              />
              <div className='absolute z-10 flex h-full w-full flex-col justify-end bg-overlay50 p-10 text-white max-lg:p-5'>
                <p className='mb-2 whitespace-pre-line text-3xl font-extrabold'>{`Ep.${session.id}`}</p>
                <p className='mb-2 text-2xl'>{session.title}</p>
                <p className='text-lg'>{`2023-${session.date}`}</p>
                <p className='text-lg'>{`${session.startTime} ~ ${session.endTime}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProgramDetailPage;

export const getStaticProps = getI18nProps;
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
