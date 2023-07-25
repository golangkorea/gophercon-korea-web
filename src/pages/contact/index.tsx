import Accordion from "@/components/accordion";
import Layout from "@/components/layout";
import { getI18nProps } from "@/i18n/utils/getI18nProps";

export default function ContactPage() {
  return (
    <Layout>
      <div className='w-full'>
        <Accordion title={"예시 입니다"}>아코디언 예시입니다</Accordion>
      </div>
    </Layout>
  );
}

export const getStaticProps = getI18nProps;
