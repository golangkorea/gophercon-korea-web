import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { getI18nProps } from "@/i18n/utils/getI18nProps";

export default function ContactPage() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner title={"Contact"} description={`문의 사항이 있으면 아래로 연락 블라블라`} />
      </div>
    </Layout>
  );
}

export const getStaticProps = getI18nProps;
