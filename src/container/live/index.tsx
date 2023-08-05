import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import YouTube from "react-youtube";

const DAY1 = dayjs("2023-08-05 10:00", "YYYY-MM-DD HH:mm");
const DAY2 = dayjs("2023-08-06 10:00", "YYYY-MM-DD HH:mm");

type ViewPort = {
  width: number;
  height: number;
};
const Live = () => {
  const [mute, setMute] = React.useState<boolean>(true);
  const [viewport, setViewport] = React.useState<ViewPort>({
    width: 0,
    height: 0,
  });
  const ref = React.useRef<any>();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);
  const youtubeLink = React.useMemo(() => {
    const today = dayjs();
    if (today.isBefore(DAY2)) {
      return "WZthMW0BaNA";
    } else return "8AUVKh0qJgU";
  }, []);

  const opts = {
    height: viewport.height,
    width: viewport.width,
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };

  React.useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onPlay = () => {
    ref.current.internalPlayer.unMute();
    setMute(false);
  };

  if (!viewport.width || !viewport.height) return null;

  return (
    <div className='relative h-screen w-full pt-[60px]'>
      {mute && <div className='absolute z-10 h-screen w-full bg-black opacity-60' onClick={onPlay} />}
      {mute && (
        <Image
          src={"/images/youtube.png"}
          width={100}
          height={50}
          alt='play'
          onClick={onPlay}
          className='absolute bottom-0 left-0 right-0 top-0 z-20 m-auto cursor-pointer'
        />
      )}
      <YouTube id='youtube' videoId={youtubeLink} opts={opts} ref={ref} />
    </div>
  );
};

export default Live;
