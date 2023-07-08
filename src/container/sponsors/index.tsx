import Image from "next/image";

// DIAMOND

// PLATINUM
import Hyundai from "/public/images/sponsors/platinum/hyundai.png";
// GOLD
import Dreamus from "/public/images/sponsors/gold/dreamus.jpg";
import Karrot from "/public/images/sponsors/gold/karrot.png";
import Megazon from "/public/images/sponsors/gold/megazon.png";

// SILVER
import Openup from "/public/images/sponsors/silver/openup.png";

// BRONZE
import AB180 from "/public/images/sponsors/bronze/ab180.png";
import Onuii from "/public/images/sponsors/bronze/onuii.png";

// COMMUNITY
import Awskrug from "/public/images/sponsors/community/awskrug.png";

// PUBLISHER
import GoldenRabbit from "/public/images/sponsors/publisher/goldenRabbit.png";
import Hanbit from "/public/images/sponsors/publisher/hanbit.png";
import Jpub from "/public/images/sponsors/publisher/jpub.jpeg";

// ETC
import Datadog from "/public/images/sponsors/etc/datadog.png";
import Google from "/public/images/sponsors/etc/google.png";
import Jetbrains from "/public/images/sponsors/etc/jetbrains.png";
import SkCnC from "/public/images/sponsors/etc/skCnC.png";
import Skt from "/public/images/sponsors/etc/skt.png";

const Sponsors = () => {
  return (
    <section className='flex w-screen flex-col gap-4 bg-background bg-white px-16 py-16 max-lg:px-4'>
      <p className='mb-12 text-5xl font-extrabold'>Sponsors</p>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>diamond</p>
        <div className='diamondColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center p-4'>
          <Image
            src={Google}
            alt={"Google"}
            width={400}
            height={300}
            className='h-[200px] w-[400px] cursor-pointer cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>platinum</p>
        <div className='platinumColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            src={Hyundai}
            alt={"Hyundai Motors"}
            width={400}
            height={300}
            className='h-[200px] w-[400px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={Datadog}
            alt={"Datadog Motors"}
            width={400}
            height={300}
            className='h-[200px] w-[400px] cursor-pointer object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>gold</p>
        <div className='goldColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            src={Dreamus}
            alt={"Dreamus"}
            width={400}
            height={200}
            className='h-[200px] w-[400px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={Karrot}
            alt={"Karrot"}
            width={400}
            height={200}
            className='h-[200px] w-[400px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={Megazon}
            alt={"Megazon"}
            width={400}
            height={200}
            className='h-[200px] w-[400px] cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>silver</p>
        <div className='silverColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            src={Openup}
            alt={"Openup"}
            width={300}
            height={200}
            className='h-[200px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={Jetbrains}
            alt={"Jetbrains"}
            width={300}
            height={200}
            className='h-[200px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={Skt}
            alt={"Skt"}
            width={300}
            height={200}
            className='h-[200px] w-[300px] cursor-pointer object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>bronze</p>
        <div className='bronzeColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            src={AB180}
            alt={"AB180"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={Onuii}
            alt={"Onuii"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={SkCnC}
            alt={"SkCnC"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>community</p>
        <div className='etcColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            src={Awskrug}
            alt={"Awskrug"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>publisher</p>
        <div className='etcColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            src={GoldenRabbit}
            alt={"GoldenRabbit"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] cursor-pointer p-2'
          />
          <Image
            src={Hanbit}
            alt={"Hanbit"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            src={Jpub}
            alt={"Jpub"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
