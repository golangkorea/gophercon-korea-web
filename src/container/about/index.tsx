import { gsap } from "gsap";
import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [text, setText] = React.useState("국내 최초");
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const textAnimation = React.useCallback(() => {
    const tl = gsap.timeline();
    tl.to(textRef.current, {
      duration: 1,
      startAt: { opacity: 0 },
      opacity: 1,
      call: () => {
        setText("국내 최초");
      },
    });
    tl.to(textRef.current, {
      duration: 1,
      startAt: { opacity: 0 },
      opacity: 1,
      call: () => {
        setText("국내 최대");
      },
    })
      .to(textRef.current, {
        duration: 1,
        startAt: { opacity: 0 },
        opacity: 1,
        call: () => {
          setText("Go 사용자를 위한 컨퍼런스");
        },
      })
      .to(textRef.current, {
        duration: 1,
        startAt: { opacity: 0 },
        opacity: 1,
        call: () => {
          setText('"Go In Depth"');
        },
      })
      .to(textRef.current, {
        duration: 1,
        startAt: { opacity: 0 },
        opacity: 1,
        call: () => {
          setText("GopherCon Korea 2023");
        },
      });
  }, [textRef]);
  React.useEffect(() => {
    if (inView) {
      textAnimation();
    }
  }, [inView]);

  return (
    <section className='flex min-h-screen w-screen flex-col items-center gap-4 pt-64 max-sm:pt-44' ref={ref}>
      <p className='text-5xl font-bold max-sm:text-3xl' ref={textRef}>
        {text}
      </p>
    </section>
  );
};

export default About;
