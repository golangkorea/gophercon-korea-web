import Banner from "@/components/banner";
import Layout from "@/components/layout";

export default function ScholarshipSupportPage() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner title={"Scholarship"} description={`장학금 제가 받고 싶네요. 얼마줘요?`} />
      </div>
    </Layout>
  );
}
