import Banner from "@/components/banner";
import Layout from "@/components/layout";

export default function COCPage() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner
          title={"Code Of Conduct"}
          description={`GopherCon Korea는 모든 참가자들이 즐겁고 안전하게\n 행사에 참여할 수 있도록 최선을 다하고 있습니다.`}
        />
      </div>
    </Layout>
  );
}
