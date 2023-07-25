import Image from "next/image";

// DIAMOND

// PLATINUM
import Hyundai from "/public/images/sponsors/platinum/logo_hyundai.webp";

// GOLD
import Karrot from "/public/images/sponsors/gold/logo_daangn.webp";
import Dreamus from "/public/images/sponsors/gold/logo_flo.webp";
import Megazon from "/public/images/sponsors/gold/logo_megazon.webp";

// SILVER
import Openup from "/public/images/sponsors/silver/logo_openup.webp";

// BRONZE
import AB180 from "/public/images/sponsors/bronze/logo_ab180.webp";
import Onuii from "/public/images/sponsors/bronze/logo_onuii.webp";

// COMMUNITY
import Awskrug from "/public/images/sponsors/community/logo_awskrug.webp";
import Google from "/public/images/sponsors/community/logo_gdg.webp";
import Jetbrains from "/public/images/sponsors/community/logo_jetbrains.webp";

// PUBLISHER
import { SPONSORS } from "@/constants/sponsors";
import { MouseEventHandler } from "react";
import Decoding from "/public/images/sponsors/publisher/logo_decoding.webp";
import GoldenRabbit from "/public/images/sponsors/publisher/logo_goldenRabbit.webp";
import Hanbit from "/public/images/sponsors/publisher/logo_hanbitmedia.webp";
import Jpub from "/public/images/sponsors/publisher/logo_jpub.webp";

const Sponsors = () => {
  const handleClickLogo: MouseEventHandler<HTMLImageElement> = (e) => {
    const { id } = e.currentTarget;
    const link = SPONSORS.find((sponsor) => sponsor.name === id)?.link;
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <section className='flex w-screen flex-col gap-4 bg-white px-16 py-16 max-lg:px-4'>
      <p className='mb-12 text-5xl font-extrabold'>Sponsors</p>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>platinum</p>
        <div className='platinumColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='현대자동차'
            src={Hyundai}
            alt={"Hyundai Motors"}
            width={400}
            height={180}
            className='h-[170px] w-full cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>gold</p>
        <div className='goldColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='드림어스컴퍼니'
            src={Dreamus}
            alt={"Dreamus"}
            width={350}
            height={170}
            className='h-[155px] w-4/5 cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='당근마켓'
            src={Karrot}
            alt={"Karrot"}
            width={350}
            height={170}
            className='h-[155px] w-4/5 cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='메가존소프트'
            src={Megazon}
            alt={"Megazon"}
            width={350}
            height={170}
            className='h-[155px] w-4/5 cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>silver</p>
        <div className='silverColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            src={Openup}
            alt={"Openup"}
            width={300}
            height={150}
            className='h-[135px] w-3/6 cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>bronze</p>
        <div className='bronzeColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='AB180'
            src={AB180}
            alt={"AB180"}
            width={280}
            height={125}
            className='h-[115px] w-1/6 cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='오누이(설탭)'
            src={Onuii}
            alt={"Onuii"}
            width={280}
            height={125}
            className='h-[115px] w-1/6 cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>community</p>
        <div className='etcColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            src={Google}
            alt={"Google"}
            width={400}
            height={180}
            className='h-[170px] w-4/6 cursor-pointer cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            src={Awskrug}
            alt={"Awskrug"}
            width={250}
            height={125}
            className='h-[115px] w-1/6 cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            src={Jetbrains}
            alt={"Jetbrains"}
            width={250}
            height={125}
            className='h-[115px] w-1/6 cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>publisher</p>
        <div className='etcColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            src={GoldenRabbit}
            alt={"GoldenRabbit"}
            width={200}
            height={100}
            className='w-1/7 h-[115px] cursor-pointer p-2'
          />
          <Image
            onClick={handleClickLogo}
            src={Hanbit}
            alt={"Hanbit"}
            width={200}
            height={100}
            className='w-1/7 h-[115px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            src={Decoding}
            alt={"Decoding"}
            width={200}
            height={100}
            className='w-1/7 h-[115px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            src={Jpub}
            alt={"Jpub"}
            width={200}
            height={100}
            className='w-1/7 h-[115px] cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
