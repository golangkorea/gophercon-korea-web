import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { SPONSORS } from "@/constants/sponsors";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import SponsorCard from "@/pages/sponsors/_shared/card";

export default function SponsorsPage() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner
          title={"Sponsors"}
          description={`GopherCon에서 고 언어를 사용하는 다양한 회사를 만나보세요.\n 스폰서들의 세션에서 전문가들의 다양한 기술과 노하우를 배울 수 있습니다.`}
        />
        <div className='grid grid-cols-4 gap-10 p-16 max-lg:grid-cols-1 max-lg:gap-5 max-lg:p-4 lg:gap-y-8'>
          {SPONSORS.map((sponsor) => (
            <SponsorCard {...sponsor} key={sponsor.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = getI18nProps;
