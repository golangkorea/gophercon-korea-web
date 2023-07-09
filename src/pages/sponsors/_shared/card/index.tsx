import { Sponsor } from "@/constants/sponsors";
import { gsap } from "gsap";
import React from "react";
import { useInView } from "react-intersection-observer";
import Gopher from "/public/images/gopher.png";

interface SponsorCardProps extends Sponsor {}
const SponsorCard: React.FC<SponsorCardProps> = ({ ...props }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const { name, thumbnail, youtube, logo, link, service, description } = props;

  React.useEffect(() => {
    if (inView) {
      setTimeout(() => {
        let tl = gsap.timeline();
        tl.to(cardRef.current, {
          duration: 0.5,
          scale: 0,
        }).to(cardRef.current, {
          duration: 0.5,
          opacity: 1,
          scale: 1,
        });
      }, 200);
    }
  }, [inView]);
  return (
    <div className='min-h-[500px] w-[500px] scale-0 rounded-xl shadow-2xl' ref={cardRef}>
      <div ref={ref} />
      <div className='flex h-16 w-full items-center justify-between gap-2 px-5 py-2 shadow-md'>
        <div className='flex gap-2'>
          <div className='h-4 w-4 rounded-full bg-red-400' />
          <div className='h-4 w-4 rounded-full bg-yellow-400' />
          <div className='h-4 w-4 rounded-full bg-green-400' />
        </div>
        <div className='flex h-full w-full items-center justify-center rounded-2xl border border-gray-200'>
          <p className='text-xl tracking-wide'>{name}</p>
        </div>
        <img src={Gopher.src} alt={"gopher"} className='h-12 w-12 rounded-full border border-gray-200 p-1' />
      </div>
      <div className='flex h-full flex-col'>
        {thumbnail && <img src={thumbnail} alt={name} className='h-[250px] w-full' />}
        <div className='whitespace-pre-line p-4'>{description}</div>
      </div>
    </div>
  );
};

export default React.memo(SponsorCard);
