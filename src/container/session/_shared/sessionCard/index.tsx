import { Session } from "@/constants/sessions";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import React from "react";
import { useInView } from "react-intersection-observer";
import Gopher from "/public/images/gopher.png";

interface SessionCardProps {
  session: Session;
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const router = useRouter();
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

  const routeToDetail = () => {
    router.push(`/program/${session.id}`);
  };

  const { speaker } = session;

  const handleAnimation = () => {
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
    if (inView) {
      setTimeout(() => {
        handleAnimation();
      }, 300);
    }
  }, [inView]);

  const profileImage = speaker.profileImage == "" ? Gopher.src : speaker.profileImage;

  return (
    <div
      className='sessionCard relative h-[400px] w-[320px] cursor-pointer opacity-0'
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={routeToDetail}
    >
      <div ref={ref} />
      <div className='card'>
        <div className='card-side card-side-front'>
          <div
            style={{
              backgroundImage: `url('${profileImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              filter: "blur(16px)",
              backgroundRepeat: "no-repeat",
            }}
            className='absolute left-0 top-0 z-10 h-full w-full rounded-xl border border-gray-200 shadow-xl'
          />
          <div
            style={{
              backgroundImage: `url('${profileImage}')`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              fontSize: 0,
            }}
            className='absolute left-0 top-0 z-10 h-full w-full rounded-xl border border-gray-200 shadow-xl'
          >
            {speaker.name}
          </div>
          <div className='absolute bottom-0 z-20 flex h-full w-full flex-col justify-end rounded-xl border border-gray-200 bg-overlay50 p-4 text-white shadow-xl'>
            <p className='mb-4 '>{session.category}</p>
            <p className='mb-4 text-xl font-bold '>{session.title}</p>
            <p className=''>{`${speaker.name} / ${speaker.company}`}</p>
          </div>
        </div>
        <div className='card-side card-side-back'>
          <div
            className='sessionGradient absolute bottom-0 z-30 h-full w-full flex-col overflow-y-scroll rounded-xl border border-gray-200 bg-gray-500 p-4 text-white shadow-xl'
            style={{
              display: isHover ? "flex" : "none",
            }}
          >
            <p className='font-bold'>{`${speaker.name}`}</p>
            <p className='mb-2 text-sm'>{`${speaker.company}`}</p>
            <p className='mb-5 text-sm'>{speaker.description}</p>
            <p
              className='bottom-0'
              style={{
                whiteSpace: "pre-line",
              }}
            >
              {session.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SessionCard);
