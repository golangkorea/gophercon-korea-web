import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { getI18nProps } from "@/i18n/utils/getI18nProps";

export default function COCPage() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner
          title={"Code Of Conduct"}
          description={`GopherCon Korea는 모든 참가자들이 즐겁고 안전하게\n 행사에 참여할 수 있도록 최선을 다하고 있습니다.`}
        />
      </div>
      <div className='flex h-screen items-center justify-center border border-gray-200 p-10 max-sm:p-4'>
        <iframe
          className='h-full w-full'
          src='https://docs.google.com/document/d/e/2PACX-1vSPAImvAKCS31mbGTrho8Ig4hkBu2Zk-QkSxYJ4_bgmr_eHVR4HitEJGKXB62c-8Iawt7HoqpfoLSje/pub?embedded=true'
        ></iframe>
      </div>
    </Layout>
  );
}

export const getStaticProps = getI18nProps;
