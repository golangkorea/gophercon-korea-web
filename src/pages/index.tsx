import Layout from "@/components/layout";
import About from "@/container/about";
import Intro from "@/container/intro";
import Location from "@/container/location";
import Program from "@/container/program";
import Sponsors from "@/container/sponsors";
import React from "react";

export default function Home() {
  const [scrollY, setScrollY] = React.useState(0);
  // MEMO 스크롤에 따라 하단 콘텐츠 overlay
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className='relative flex min-h-screen w-screen flex-col items-center justify-center'>
        <Intro />
        <div
          className='absolute top-[100vh] mb-10 w-screen bg-background p-4'
          style={{
            transform: `translateY(-${scrollY}px)`,
          }}
        >
          <About />
          <Program />
          <Sponsors />
          <Location />
        </div>
      </div>
    </Layout>
  );
}
