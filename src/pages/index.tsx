import Layout from "@/components/layout";
import Intro from "@/container/intro";

export default function Home() {
  return (
    <Layout>
      <div className='flex min-h-screen w-screen items-center justify-center'>
        <Intro />
      </div>
    </Layout>
  );
}
