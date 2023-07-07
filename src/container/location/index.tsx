import dayjs from "dayjs";
import React from "react";

const DATE = dayjs("2023-08-05 10:00", "YYYY-MM-DD HH:mm");
const Location = () => {
  const [now, setNow] = React.useState(dayjs());
  return (
    <section className='flex w-screen flex-col gap-4 bg-white px-16 py-16 max-sm:px-4'>
      {/*<img src={Banner.src} alt={"banner"} className={"w-screen object-cover"} />*/}
    </section>
  );
};

export default Location;
