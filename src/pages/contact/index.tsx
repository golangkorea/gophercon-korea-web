import Banner from "@/components/banner";
import Layout from "@/components/layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner title={"Contact"} description={`문의 사항이 있으면 아래로 연락 블라블라`} />
      </div>
    </Layout>
  );
}
