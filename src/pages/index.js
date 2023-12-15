
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();
  
  return (
    <div className="h-full w-full dark:bg-zinc-800 bg-white flex flex-col overflow-x-hidden">


      <div className="w-full h-12 bg-zinc-700 dark:bg-zinc-800 items-center flex flex-row p-4 fixed justify-between 2xl:px-64 xl:px-52 lg:px-40 md:px-28 sm:px-16 px-8 z-50">
        <div className="flex flex-row justify-between items-center xl:2xl:gap-12 sm:lg:gap-8 gap-4">
          <img className="w-16" src="https://m-bank.mn/icons/navbar/ic_m_large.png"></img>
          <a className="text-zinc-400 dark:text-zinc-500 cursor-pointer text-sm hover:text-emerald-400">Танд</a>
          <a className="text-zinc-400 dark:text-zinc-500 cursor-pointer text-sm hover:text-emerald-400">Таны бизнест</a>
          <a className="text-zinc-400 dark:text-zinc-500 cursor-pointer text-sm hover:text-emerald-400">Бид</a>
        </div>
        <div className="flex flex-row items-center">
          <a className="cursor-pointer text-emerald-400 text-sm">М туслах</a>
          <div className="h-4 bg-zinc-600 rounded-md w-[1px] ml-4"></div>
          <button className="rounded-md bg-emerald-400 px-4 py-1 ml-4 text-sm text-white" onClick={() => router.push("/login")}>Нэвтрэх</button>
        </div>
      </div>

      <div className="w-full h-full 2xl:items-center xl:items-center lg:items-center md:items-center justify-center flex cursor-pointer relative">
        <img src="https://m-bank.mn/icons/landing/cashback_cover.png" className="object-cover 2xl:block xl:block lg:block md:block hidden"></img>
        <img src="https://m-bank.mn/icons/landing/cashback_cover_mobile.png" className="object-cover 2xl:hidden xl:hidden lg:hidden md:hidden block"></img>
        <img src="https://m-bank.mn/icons/landing/savings_cashback.png" className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 2xl:ml-[600px] xl:ml-[525px] lg:ml-[450px] md:ml-[350px] w-4/5 sm:mt-[800px] mt-[500px] absolute"></img>
      </div>

      <div className="2xl:pl-80 xl:pl-64 lg:pl-52 md:pl-40 sm:pl-24 pl-12 items-center bg-zinc-600 dark:bg-white justify-between py-32 gap-4 2xl:flex 2xl:flex-row grid grid-cols-1">
        <div className="flex flex-col">
          <p className="text-white dark:text-zinc-800 font-bold 2xl:text-7xl xl:text-6xl text-5xl">Танд зориулсан</p>
          <p className="text-white dark:text-zinc-800 font-bold 2xl:text-7xl xl:text-6xl text-5xl">шинэ үеийн</p>
          <p className="text-white dark:text-zinc-800 font-bold 2xl:text-7xl xl:text-6xl text-5xl">банк</p>
          <p className="text-zinc-400 mt-12 2xl:text-lg text-md">Банкны салбар хаах цагийг мэдэх шаардлагагүй.</p>
          <p className="text-zinc-400 2xl:text-lg text-md">Санхүүгийн бүх үйлчилгээг зайнаас аваарай.</p>
          <div className="h-12 w-20 rounded-xl border-[1px] mt-12 border-zinc-500 dark:border-zinc-200 stroke-black flex items-center justify-center cursor-pointer hover:bg-emerald-400 group hover:border-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:group-hover:stroke-white group-hover:stroke-black stroke-white dark:stroke-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
        <img className="rounded-md 2xl:w-3/5 w-4/5 mr-8" src="https://m-bank.mn/icons/landing/landing_3.png"></img>
      </div>

      <div className="w-full flex items-center bg-white dark:bg-zinc-700 flex-row justify-between xl:2xl:py-44 sm:lg:py-32 py-20 gap-4 2xl:flex 2xl:flex-row grid grid-cols-1 2xl:pl-12 xl:pl-64 lg:pl-52 md:pl-40 sm:pl-24 pl-12 justify-center">
        <img className="rounded-md 2xl:w-3/5 w-4/5 order-last 2xl:order-first 2xl:mt-0 mt-8" src="https://m-bank.mn/icons/landing/landing_2.png"></img>
        <div className="flex flex-col ml-8">
          <p className="dark:text-white text-black font-bold 2xl:text-7xl xl:text-6xl text-5xl">Бид бизнесүүдээ ч</p>
          <p className="dark:text-white text-black font-bold 2xl:text-7xl xl:text-6xl text-5xl">мартаагүй</p>
          <p className="text-zinc-400 mt-12 xl:2xl:text-lg sm:lg:text-md text-sm">Таны бизнесийг хэнээс ч илүү ойлгож, хамтран ажиллая.</p>
          <div className="h-12 w-20 rounded-xl border-[1px] mt-12 border-zinc-200 dark:border-zinc-600 stroke-black flex items-center justify-center cursor-pointer hover:bg-emerald-400 hover:border-0 group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-black dark:stroke-white dark:group-hover:stroke-black group-hover:stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full dark:bg-zinc-700 bg-white flex 2xl:flex-row items-center justify-center flex-col 2xl:gap-0 gap-16 xl:flex-row xl:gap-0">
        <img src="https://m-bank.mn/icons/footer/footer_1.png" className="w-96 2xl:mr-48 order-1 2xl:order-first xl:mr-48 xl:order-first"></img>
        <div className="flex 2xl:flex-col xl:flex-col">
          <img src="https://m-bank.mn/icons/footer/footer_qr.png" className="w-36 2xl:block hidden xl:block"></img>
          <div className="flex flex-row mt-12">
            <div className="bg-zinc-500 dark:bg-zinc-600 rounded-lg py-2 px-3 flex flex-row items-center cursor-pointer">
              <img src="https://m-bank.mn/icons/footer/footer_apple.png" className="w-6"></img>
              <p className="ml-2 text-white">AppStore</p>
            </div>
            <div className="bg-zinc-500 dark:bg-zinc-600 rounded-lg py-2 px-3 flex flex-row items-center cursor-pointer ml-2">
              <img src="https://m-bank.mn/icons/footer/footer_google.png" className="w-6"></img>
              <p className="ml-2 text-white">GooglePlay</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 dark:bg-zinc-800 flex flex-col pt-24 2xl:pl-80 xl:pl-60 lg:pl-44 md:pl-20 sm:pl-12 pl-8">
        <div className="flex 2xl:flex-row xl:flex-row flex-col">
          <div className="flex flex-row">
            <img src="https://m-bank.mn/icons/footer/ic_m_small.png" className="w-8 h-8"></img>
            <div className="flex flex-col ml-8">
              <p className="text-zinc-400 dark:text-zinc-500 font-bold">Танд</p>
              <p className="text-white mt-6 text-sm cursor-pointer">Харилцах данс</p>
              <p className="text-white mt-4 text-sm cursor-pointer">Дижитал зээл</p>
              <p className="text-white mt-4 text-sm cursor-pointer">Шилжүүлэг</p>
            </div>
            <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-8">
              <p className="text-zinc-400 dark:text-zinc-500 font-bold">Таны бизнест</p>
              <p className="text-white mt-6 text-sm cursor-pointer">Харилцах данс</p>
              <p className="text-white mt-4 text-sm cursor-pointer">Хөрөнгө оруулалтын зээл</p>
              <p className="text-white mt-4 text-sm cursor-pointer">Эргэлтийн хөрөнгийн зээл</p>
              <p className="text-white mt-4 text-sm cursor-pointer">Овердрафт</p>
            </div>
            <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-8">
              <p className="text-zinc-400 dark:text-zinc-500 font-bold">Холбоо барих</p>
              <p className="text-white mt-6 text-sm cursor-pointer">Монгол Улс, Улаанбаатар хот-14241,</p>
              <p className="text-white text-sm cursor-pointer">Сүхбаатар дүүрэг, 1-р хороо,</p>
              <p className="text-white text-sm cursor-pointer">“Шангри-Ла Оффис” төв, 6 давхар,</p>
              <p className="text-white text-sm cursor-pointer">605 тоот</p>
              <p className="text-white mt-4 text-sm cursor-pointer">Утас: 1800 2929</p>
              <p className="text-white text-sm cursor-pointer">hello@m-bank.mn</p>
            </div>
          </div>
          <div className="flex flex-col 2xl:ml-36 xl:ml-36 ml-0 2xl:mt-0 xl:mt-0 my-8">
              <p className="text-zinc-400 dark:text-zinc-500 font-bold 2xl:mt-0 xl:mt-0 mt-4">М community-д нэгдээрэй</p>
              <div className="flex flex-row gap-4 2xl:order-0 xl:order-0">
                <img src="https://m-bank.mn/icons/footer/Facebook.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/Users.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/Instagram.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/Twitter.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/LinkedIn.png" className="mt-6 w-6"></img>
              </div>
              <p className="text-zinc-400 dark:text-zinc-500 font-bold mt-6 cursor-pointer 2xl:order-last xl:order-last order-first">Бүтээгдэхүүн, үйлчилгээний нөхцөл</p>
            </div>
        </div>
        <div className="flex flex-row my-16 items-center justify-between w-3/4">
          <p className="text-zinc-400 dark:text-zinc-500 text-sm">Бүх эрх хуулиар хамгаалагдсан © 2023. М банк</p>
          <div className="flex flex-row mx-4">
            <p className="cursor-pointer text-sm text-zinc-400 dark:text-zinc-500">Үйлчилгээний нөхцөл</p>
            <img src="https://m-bank.mn/icons/en.png" className="w-4 h-4 ml-4 cursor-pointer"></img>
            <p className="text-zinc-400 dark:text-zinc-500 ml-2 text-sm cursor-pointer">EN</p>
          </div>
        </div>

      </div>

    </div>
  );
}
