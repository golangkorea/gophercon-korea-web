import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { Session, SESSIONS } from "@/constants/sessions";
import { useRouter } from "next/router";
import React from "react";

const ProgramDetailPage = () => {
  const router = useRouter();
  const [data, setData] = React.useState<Session | undefined>(undefined);

  React.useEffect(() => {
    const { id } = router.query;
    if (id) {
      const target = SESSIONS.find((session) => session.id === Number(id));
      setData(target);
    }
  }, [router]);

  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner
          title={"Agenda"}
          description={`2일동안 준비된 다양한 프로그램들을 즐겨보세요\n 블라블라 한 2줄 적으면 ㄱㅊ을듯`}
        />
      </div>
      {data && (
        <section className='p-20 max-lg:p-4'>
          <div className='flex max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:pt-10'>
            <img src={data.speaker?.profileImage} alt={data.speaker.name} className='w-[320px] rounded-xl' />
            <div className='ml-4 flex flex-col p-4'>
              <p className='mb-2 text-3xl font-bold'>
                {data.speaker.name} | {data.speaker.company}
              </p>
              <p className='max-lg:mb-4'>{data.speaker.description}</p>
              <div className='flex h-full flex-1 flex-col justify-end gap-2'>
                <p>Github : https://github.com/</p>
                <p>LinkedIn : https://github.com/</p>
              </div>
            </div>
          </div>
          <div className='mt-16'>
            <p className='mb-4 text-5xl font-bold max-lg:text-3xl'>{data.title}</p>
            <p className='mb-2 text-2xl max-lg:text-2xl'>{data.category}</p>
            <p className='mb-2 text-2xl max-lg:text-2xl'>{`2023-${data.date} ${data.startTime} ~ ${data.endTime}`}</p>
            <p className='whitespace-pre-line text-2xl font-semibold tracking-wide max-lg:text-xl'>
              {data.description}
            </p>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProgramDetailPage;
