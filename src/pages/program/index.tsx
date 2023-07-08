import Banner from "@/components/banner";
import Layout from "@/components/layout";
export default function Program() {
  return (
    <Layout>
      <div className='mt-20 max-lg:mt-16'>
        <Banner
          title={"Agenda"}
          description={`2일동안 준비된 다양한 프로그램들을 즐겨보세요\n 블라블라 한 2줄 적으면 ㄱㅊ을듯`}
        />
      </div>
    </Layout>
  );
}
