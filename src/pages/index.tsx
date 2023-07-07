import Layout from "@/components/layout";
import About from "@/container/about";
import Intro from "@/container/intro";
import Location from "@/container/location";
import Session from "@/container/session";
import Sponsors from "@/container/sponsors";

export default function Home() {
  return (
    <Layout>
      <div className='relative flex min-h-screen w-screen flex-col items-center justify-center'>
        <Intro />
        <About />
        <Session />
        <Sponsors />
        <Location />
      </div>
    </Layout>
  );
}
