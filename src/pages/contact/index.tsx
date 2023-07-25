import Accordion from "@/components/accordion";
import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { getI18nProps } from "@/i18n/utils/getI18nProps";

export default function ContactPage() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner title={"Contact"} description={`문의 사항이 있으면 아래로 연락 블라블라`} />
      </div>
      <div className='w-full'>
        <Accordion title={"예시 입니다"}>아코디언 예시입니다</Accordion>
      </div>
    </Layout>
  );
}

export const getStaticProps = getI18nProps;
