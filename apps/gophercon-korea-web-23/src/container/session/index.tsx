import { SESSIONS } from "@/constants/sessions";
import SessionCard from "@/container/session/_shared/sessionCard";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Session = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation(["common", "nav", "coc"]);
  return (
    <section
      className='flex min-h-screen w-screen flex-col items-center justify-center gap-4 bg-white pb-12 max-lg:py-44'
      id='session'
    >
      <p className='w-full text-center text-3xl font-bold uppercase sm:hidden'>session</p>
      <div className='mt-20 flex w-full flex-wrap justify-around gap-y-8 px-32 max-lg:px-4'>
        <div className='sessionGradient relative h-[400px] w-[320px] rounded-xl border border-gray-200 shadow-2xl shadow-xl max-lg:hidden'>
          <div className='absolute bottom-0 z-20 flex h-full w-full flex-col justify-between p-4 text-white '>
            <p className='mb-4 text-3xl font-bold uppercase'>Session</p>
            <p className=''>{t("common:readTopics")}</p>
          </div>
        </div>
        {(locale === "ko" ? SESSIONS.ko : SESSIONS.en).map((session, index) => {
          if (session.category === "Main Talk") return <SessionCard session={session} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Session;
