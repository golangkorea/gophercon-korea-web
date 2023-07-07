import { Session } from "@/constants/sessions";
import { gsap } from "gsap";
import React from "react";
import { useInView } from "react-intersection-observer";

interface SessionCardProps {
  session: Session;
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const [isHover, setIsHover] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const onHover = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  const { speaker } = session;

  const handleAnimation = () => {
    console.log("inView");
    const tl = gsap.timeline();
    tl.to(cardRef.current, {
      duration: 1,
      startAt: {
        opacity: 0,
        y: 100,
      },
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });
  };

  React.useEffect(() => {
    if (inView) handleAnimation();
  }, [inView]);

  return (
    <div
      className='relative h-[400px] w-[320px] overflow-hidden rounded-xl'
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div ref={ref} />
      <img src={speaker.profileImage} className='z-10 h-full w-full' alt={speaker.name} />
      <div className='absolute bottom-0 z-20 flex h-full w-full flex-col justify-end bg-overlay50 p-4 text-white'>
        <p className='mb-4 '>{session.category}</p>
        <p className='mb-4 text-xl font-bold '>{session.title}</p>
        <p className=''>{`${speaker.name} / ${speaker.company}`}</p>
      </div>
      <div
        className='bg-overlay80 absolute bottom-0 z-30 h-full w-full flex-col bg-gray-500 p-4 text-white'
        style={{
          display: isHover ? "flex" : "none",
        }}
      >
        <p className='mb-2'>{`${speaker.name} / ${speaker.company}`}</p>
        <p className='mb-5 text-sm'>{speaker.description}</p>
        <p className='bottom-0'>{session.description}</p>
      </div>
    </div>
  );
};

export default React.memo(SessionCard);
