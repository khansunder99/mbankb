import { Checkbox } from '@nextui-org/react';
import { useRouter } from 'next/router'

export default function Mhelper() {

  const router = useRouter();

    return (
      <div className="w-full h-full flex flex-col bg-white dark:bg-zinc-800 overflow-x-hidden">

        <div className="w-full h-12 bg-zinc-800 items-center flex flex-row p-4 fixed justify-between 2xl:px-64 xl:px-52 lg:px-40 md:px-28 sm:px-16 px-8 z-50">
          <div className="flex flex-row justify-between items-center xl:2xl:gap-12 sm:lg:gap-8 gap-4">
            <button onClick={ () => router.push("/")} className="w-16">
              <img className="w-16" src="https://m-bank.mn/icons/navbar/ic_m_large.png"></img>
            </button>
            <a className="text-zinc-500 cursor-pointer text-sm hover:text-emerald-400">Танд</a>
            <a className="text-zinc-500 cursor-pointer text-sm hover:text-emerald-400">Таны бизнест</a>
            <a className="text-zinc-500 cursor-pointer text-sm hover:text-emerald-400">Бид</a>
          </div>
          <div className="flex flex-row items-center">
            <a className="cursor-pointer text-emerald-400 text-sm">М туслах</a>
            <div className="h-4 bg-zinc-600 rounded-md w-[1px] ml-4" onClick={() => router.push("/mhelper")}></div>
            <button className="rounded-md bg-emerald-400 px-4 py-1 ml-4 text-sm text-white" onClick={() => router.push("/login")}>Нэвтрэх</button>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center mt-12 bg-slate-100 py-16 gap-[40px] dark:bg-zinc-700">
          <p className="flex 2xl:text-3xl xl:text-3xl text-2xl text-zinc-800 dark:text-zinc-100 font-bold">Танд яаж туслах вэ?</p>
          <div className="bg-white 2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 w-2/3 h-[48px] rounded-md flex items-center dark:bg-zinc-800">
            <img src="https://m-bank.mn/icons/ic_search.png" className="w-6 mx-4"></img>
            <input placeholder="Хайлт хийх" className="outline-0 focus:text-slate-800 dark:focus:text-white placeholder-zinc-500 dark:bg-zinc-800 bg-white dark:placeholder:text-zinc-700"></input>
          </div>
        </div>

        <div className="flex items-center flex-col">
          <div className="mt-12 bg-slate-200 w-64 h-16 p-2 rounded-full flex flex-row dark:bg-zinc-700">
            <div className="text-black flex items-center justify-center h-full bg-white rounded-full w-2/5 font-semibold dark:bg-zinc-600 dark:text-white">Иргэн</div>
            <div className="flex font-semibold text-black items-center justify-center w-3/5 text-slate-500 dark:bg-zinc-700 dark:text-zinc-400 rounded-full">Байгууллага</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-20 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:gap-28 xl:gap-28 gap-20 2xl:pl-64 xl:pl-52 lg:pl-40 md:pl-28 sm:pl-16 pl-8 2xl:pr-0 pr-8">
            <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
                <img className="w-12" src="https://m-bank.mn:8888/uploads/support_fingerprint_8874e1de4b.png"></img>
                <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">Бүртгүүлэх & нэвтрэх</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Иргэний үнэмлэхгүй бол яаж бүртгүүлэх вэ?</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Нууц үг ээ мартсан бол яах вэ?</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Яагаад нэг удаа харилцагчийн төв дээр ирж гэрээ байгуулах шаардлагатай вэ?</p>
                <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">Цааш харах</p>
              </div>
              <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
                <img className="w-12" src="https://m-bank.mn:8888/uploads/support_wallet_66234930d0.png"></img>
                <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">Харилцах данс & хадгаламж</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Харилцах данс нээх заавар</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Хадгаламжийн данс нээх заавар</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Банкны тодорхойлолт яаж авах вэ?</p>
                <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">Цааш харах</p>
              </div>
              <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
                <img className="w-12" src="https://m-bank.mn:8888/uploads/Frame_56449_665e3af7fe.png"></img>
                <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">Мөнгө илгээх & нэхэмжлэх</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Гүйлгээний ПИН код оо мартсан бол яах вэ?</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Нийтээр амрах өдрүүдэд болон ажлын цагийн дараа гүйлгээ хэрхэн хийгддэг вэ?</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Нэхэмжлэх хэрхэн илгээх вэ?</p>
                <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">Цааш харах</p>
              </div>
              <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
                <img className="w-12" src="https://m-bank.mn:8888/uploads/support_percentage_a9487ba893.png"></img>
                <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">Дижитал зээл & эргэн төлөлт</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Дижитал зээл авах зааварчилгаа</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Юунаас болж миний зээлийн хүү бусдаас өөр байгаа вэ?</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Зээлийн эргэн төлөлтөө хоцроовол яах вэ ?</p>
                <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">Цааш харах</p>
              </div>
              <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
                <img className="w-12" src="https://m-bank.mn:8888/uploads/support_card_5e40d47889.png"></img>
                <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">Карт захиалах & удирдах</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Карт захиалах</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Карт захиалга хүргэлттэй юу?</p>
                <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">Картаа гээсэн, хулгайд алдсан тохиолдолд хаана, хэнд хандах вэ?</p>
                <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">Цааш харах</p>
              </div>
          </div>
        </div>

        <div className="bg-zinc-800 flex flex-col pt-24 2xl:pl-80 xl:pl-60 lg:pl-44 md:pl-20 sm:pl-12 pl-8 mt-48">
          <div className="flex 2xl:flex-row xl:flex-row flex-col">
            <div className="flex flex-row">
              <img src="https://m-bank.mn/icons/footer/ic_m_small.png" className="w-8 h-8"></img>
              <div className="flex flex-col ml-8">
                <p className="text-zinc-500 font-bold">Танд</p>
                <p className="text-white mt-6 text-sm cursor-pointer">Харилцах данс</p>
                <p className="text-white mt-4 text-sm cursor-pointer">Дижитал зээл</p>
                <p className="text-white mt-4 text-sm cursor-pointer">Шилжүүлэг</p>
              </div>
              <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-8">
                <p className="text-zinc-500 font-bold">Таны бизнест</p>
                <p className="text-white mt-6 text-sm cursor-pointer">Харилцах данс</p>
                <p className="text-white mt-4 text-sm cursor-pointer">Хөрөнгө оруулалтын зээл</p>
                <p className="text-white mt-4 text-sm cursor-pointer">Эргэлтийн хөрөнгийн зээл</p>
                <p className="text-white mt-4 text-sm cursor-pointer">Овердрафт</p>
              </div>
              <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-8">
                <p className="text-zinc-500 font-bold">Холбоо барих</p>
                <p className="text-white mt-6 text-sm cursor-pointer">Монгол Улс, Улаанбаатар хот-14241,</p>
                <p className="text-white text-sm cursor-pointer">Сүхбаатар дүүрэг, 1-р хороо,</p>
                <p className="text-white text-sm cursor-pointer">“Шангри-Ла Оффис” төв, 6 давхар,</p>
                <p className="text-white text-sm cursor-pointer">605 тоот</p>
                <p className="text-white mt-4 text-sm cursor-pointer">Утас: 1800 2929</p>
                <p className="text-white text-sm cursor-pointer">hello@m-bank.mn</p>
              </div>
            </div>
            <div className="flex flex-col 2xl:ml-36 xl:ml-36 ml-0 2xl:mt-0 xl:mt-0 my-8">
              <p className="text-zinc-500 font-bold 2xl:mt-0 xl:mt-0 mt-4">М community-д нэгдээрэй</p>
              <div className="flex flex-row gap-4 2xl:order-0 xl:order-0">
                <img src="https://m-bank.mn/icons/footer/Facebook.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/Users.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/Instagram.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/Twitter.png" className="mt-6 w-6"></img>
                <img src="https://m-bank.mn/icons/footer/LinkedIn.png" className="mt-6 w-6"></img>
              </div>
              <p className="text-zinc-500 font-bold mt-6 cursor-pointer 2xl:order-last xl:order-last order-first">Бүтээгдэхүүн, үйлчилгээний нөхцөл</p>
            </div>
          </div>
          <div className="flex flex-row my-16 items-center justify-between w-3/4">
            <p className="text-zinc-500 text-sm">Бүх эрх хуулиар хамгаалагдсан © 2023. М банк</p>
            <div className="flex flex-row mx-4">
              <p className="cursor-pointer text-sm text-zinc-500">Үйлчилгээний нөхцөл</p>
              <img src="https://m-bank.mn/icons/en.png" className="w-4 h-4 ml-4 cursor-pointer"></img>
              <p className="text-zinc-500 ml-2 text-sm cursor-pointer">EN</p>
            </div>
          </div>
        </div>

      </div>
    );
  }