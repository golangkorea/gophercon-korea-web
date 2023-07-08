import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function Navbar() {
  const openNewWindow = () => {
    window.open("https://festa.io/events/3435", "_blank");
  };
  return (
    <nav className='border-[rgba(0, 0, 0, 0.2)] fixed top-0 z-10 flex h-20 w-screen items-center border-b px-20 backdrop-blur-md max-sm:h-16 max-sm:px-4'>
      <Link href={"/"}>
        <h1 className='cursor-pointer text-2xl font-bold max-sm:text-xl'>GopherCon Korea 2023</h1>
      </Link>
      <div className='ml-auto flex h-full items-center gap-6 max-sm:hidden'>
        <Link className='cursor-pointer font-semibold' href='/program'>
          프로그램
        </Link>
        <Link className='cursor-pointer font-semibold' href='/sponsors'>
          스폰서
        </Link>
        <Link className='cursor-pointer font-semibold' href='/coc'>
          행동강령
        </Link>
        <Link className='cursor-pointer font-semibold' href='/scolarship-support'>
          장학지원
        </Link>
        <Link className='cursor-pointer font-semibold' href='/inquiries'>
          행사문의
        </Link>
        <button className='ticketGradient rounded-xl font-bold text-white' onClick={openNewWindow}>
          Register
        </button>
      </div>
      {/*TODO 모바일 메뉴*/}
      <Bars3Icon className='absolute right-4 h-10 w-10 sm:hidden' />
    </nav>
  );
}
