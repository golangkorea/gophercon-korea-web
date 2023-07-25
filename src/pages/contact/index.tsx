import Accordion from "@/components/accordion";
import Content from "@/components/content";
import Layout from "@/components/layout";
import { QNA } from "@/constants/qna";
import { getI18nProps } from "@/i18n/utils/getI18nProps";

export default function ContactPage() {
  return (
    <Layout>
      <Content>
        <div className='w-full'>
          {QNA.map((item) => (
            <Accordion key={item.id} title={item.question}>
              {item.answer}
            </Accordion>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

export const getStaticProps = getI18nProps;
