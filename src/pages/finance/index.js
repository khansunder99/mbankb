import { useRouter } from "next/router";

export default function Mhelper() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-zinc-800 overflow-x-hidden">
      <div className="w-full h-12 bg-zinc-800 items-center flex flex-row p-4 fixed justify-between 2xl:px-64 xl:px-52 lg:px-40 md:px-28 sm:px-16 px-8 z-50 dark:border-b-2 border-0 border-zinc-700">
        <div className="flex flex-row justify-between items-center xl:2xl:gap-12 sm:lg:gap-8 gap-4">
          <button onClick={() => router.push("/")} className="w-16">
            <img
              className="w-16"
              src="https://m-bank.mn/icons/navbar/ic_m_large.png"
            ></img>
          </button>
          <a className="text-zinc-500 cursor-pointer text-sm hover:text-emerald-400 2xl:block xl:block lg:block md:block hidden">
            Танд
          </a>
          <a className="text-zinc-500 cursor-pointer text-sm hover:text-emerald-400 2xl:block xl:block lg:block md:block hidden">
            Таны бизнест
          </a>
          <a
            href="/finance"
            className="text-zinc-500 cursor-pointer text-sm hover:text-emerald-400 2xl:block xl:block lg:block md:block hidden"
          >
            Санхүү
          </a>
        </div>
        <div className="flex flex-row items-center">
          <a
            className="cursor-pointer text-emerald-400 text-sm"
            onClick={() => router.push("/mhelper")}
          >
            М туслах
          </a>
          <div className="h-4 bg-zinc-600 rounded-md w-[1px] ml-4"></div>
          <button
            className="rounded-md bg-emerald-400 px-4 py-1 ml-4 text-sm text-white 2xl:block xl:block lg:block md:block hidden"
            onClick={() => router.push("/login")}
          >
            Нэвтрэх
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-white 2xl:hidden xl:hidden lg:hidden md:hidden block ml-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:pl-64 xl:pl-52 lg:pl-40 md:pl-28 pl-0 2xl:mt-28 xl:mt-28 lg:mt-28 md:mt-28 mt-12 2xl:pr-64 xl:pr-44 lg:pr-32 md:pr-16 pr-0">
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden block w-full flex items-center bg-white border-b-2 border-t-2 border-zinc-600 px-8 h-12 justify-between bg-white dark:bg-zinc-800 dark:border-zinc-700">
          <p className="text-zinc-900 font-semibold dark:text-zinc-100">
            Санхүүгийн мэдээлэл
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-zinc-900 dark:stroke-zinc-100 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex flex-col w-64 2xl:block xl:block lg:block md:block hidden">
          <p className="font-semibold text-4xl text-zinc-900 dark:text-zinc-100">
            Санхүүгийн мэдээлэл
          </p>
          <p className="cursor-pointer text-md mt-8 text-zinc-900 font-semibold dark:text-zinc-100">
            Санхүү бүртгэлийн тогтолцоо, дотоод хяналт
          </p>
          <div className="flex flex-row group mt-10 cursor-pointer">
            <p className="text-md text-zinc-600 dark:text-zinc-500 font-semibold group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              Санхүүгийн тайлан
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 stroke-zinc-600 dark:stroke-zinc-500 group-hover:stroke-zinc-900 ml-16 mt-1 dark:group-hover:stroke-zinc-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <p className="text-md dark:text-zinc-500 text-zinc-600 font-semibold hover:text-zinc-900 mt-8 cursor-pointer dark:hover:text-zinc-100">
            Чанаргүй активыг бууруулах зорилтын гүйцэтгэл
          </p>
          <p className="text-md dark:text-zinc-500 text-zinc-600 font-semibold hover:text-zinc-900 mt-8 cursor-pointer dark:hover:text-zinc-100">
            Банкны холбогдох этгээдэд олгосон зээл болон зээлтэй адилтган тооцох
            бусад актив хөрөнгийн тайлан
          </p>
          <p className="text-md dark:text-zinc-500 text-zinc-600 font-semibold hover:text-zinc-900 mt-8 cursor-pointer dark:hover:text-zinc-100">
            Аудитлагдсан санхүүгийн тайлан
          </p>
          <p className="text-md dark:text-zinc-500 text-zinc-600 font-semibold hover:text-zinc-900 mt-8 cursor-pointer dark:hover:text-zinc-100">
            Жилийн тайлан
          </p>
        </div>
        <div className="flex flex-col 2xl:ml-32 xl:ml-28 lg:ml-24 md:ml-20 ml-8 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-0 pr-8 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-12">
          <p className="text-zinc-900 text-lg font-semibold dark:text-zinc-100">
            Санхүүгийн бүртгэл, хяналтын тогтолцоо
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            Банкны санхүү, нягтлан бодох бүртгэл, төлбөр тооцоо, тайлагналын үйл
            ажиллагааг Санхүү хариуцсан захирлын харъяа Санхүүгийн удирдлагын
            нэгж, Санхүүгийн бүртгэл, тайлангийн нэгж, Төлбөр тооцоо, үйл
            ажиллагааны нэгжүүдээр дамжуулан зохион байгуулдаг ба дараах үндсэн
            чиг үүрэг бүхий хяналтууд хэрэгждэг. Үүнд:
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            - Банкны нягтлан бодох бүртгэлийн бодлогын баримт бичгийг Монгол
            улсын хууль, Монголбанкны заавар, журам, СТОУС, НББОУС-д нийцүүлэн
            тодорхойлж, банкны үйл ажиллагаанд хэрэгжүүлэх, санхүүгийн бүртгэл
            тайлангийн үнэн зөв, ил тод, тасралтгүй байдлыг хангах;
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            - Нягтлан бодох бүртгэл хөтлөлт, санхүүгийн тайлагналын зорилгоор
            Банкны суурь бүртгэлийн системийн үнэн зөв байдалд өдөр тутам хяналт
            тавьж, дотоод хяналтын системийн тасралтгүй, найдвартай ажиллагааг
            ханган ажиллах, нягтлан бодох бүртгэл, төлбөр тооцооны үйл
            ажиллагааны эрсдэлийг бууруулах, хянах чиг үүргийг хэрэгжүүлэх;
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            - Банкны санхүүгийн тайланг СТОУС-д нийцүүлэн бэлтгэх, хөндлөнгийн
            аудитын байгууллагаар баталгаажуулах, банкны гадаад, дотоод мэдээлэл
            хэрэглэгчдийг үнэн зөв, найдвартай мэдээллээр хангах;
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            - Санхүү, хөрөнгө оруулалтын төлөвлөлт, банкны төсвийн удирдлагыг үр
            ашигтайгаар зохион байгуулах, санхүүгийн шинжилгээнд үндэслэн
            оновчтой шийдвэр гаргахад дэмжлэг үзүүлэх, удирдлагын мэдээллийн
            системийн тасралтгүй байдлыг хангах.
          </p>
          <p className="text-zinc-900 text-lg font-semibold mt-16 dark:text-zinc-100">
            Санхүүгийн бүртгэл, хяналтын тогтолцоо
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            Банкны дотоод аудитын үйл ажиллагааг ТУЗ-ийн харъяанд байх Дотоод
            аудитын нэгж хариуцан ажилладаг. Дотоод аудит нь банкны үйл
            ажиллагааг сайжруулах, түүний үнэ цэнийг нэмэгдүүлэхэд чиглэсэн
            хараат бус, зөвлөх үйл ажиллагааг хэрэгжүүлнэ. Ингэхдээ системтэй,
            оновчтой арга хандлагаар банкны эрсдэлийн удирдлага, засаглал ба
            дотоод хяналтын үйл явцын үр нөлөөтэй, үр ашигтай байдлыг үнэлж,
            байнгын сайжруулалтыг санал болгох замаар удирдлагад дэмжлэг үзүүлэх
            үүрэгтэй.
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            Дотоод аудит нь банкны засаглал, үйл ажиллагаа болон стратегийн
            эрсдэлийг бууруулахад чиглэсэн хамгаалалтын 3-р бүсийн хяналтыг
            дараах чиглэлээр хэрэгжүүлнэ. Үүнд:
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            1. Зээлийн эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            2. Зээлийн төвлөрлийн эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            3. Зах зээлийн эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            4. Өөрийн хөрөнгийн хүрэлцээний эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            5. Хөрвөх чадварын эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            6. Үйл ажиллагааны эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            7. Мэдээллийн аюулгүй байдлын эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            8. Ёс зүй, нэр хүндийн эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            9. Хянан нийцүүлэлтийн эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            10. Мэдээллийн системийн эрсдэл
          </p>
          <p className="text-black text-sm mt-1 dark:text-white font-thin">
            11. Бусад эрсдэл
          </p>
        </div>
      </div>
      <div className="bg-zinc-800 flex flex-col pt-24 2xl:px-80 xl:px-60 lg:px-44 md:px-20 sm:px-12 px-8 mt-24 border-0 dark:border-t-2 border-zinc-700">
        <div className="flex 2xl:flex-row xl:flex-row flex-col">
          <div className="2xl:flex xl:flex lg:flex md:flex sm:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row grid grid-cols-2">
            <img
              src="https://m-bank.mn/icons/footer/ic_m_small.png"
              className="w-8 h-8 2xl:block xl:block lg:block md:block sm:block hidden"
            ></img>
            <div className="flex flex-col 2xl:ml-8 xl:ml-8 lg:ml-8 md:ml-8 sm:ml-8 ml-0">
              <p className="text-zinc-500 font-bold">Танд</p>
              <p className="text-white mt-6 text-sm cursor-pointer">
                Харилцах данс
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Дижитал зээл
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Шилжүүлэг
              </p>
            </div>
            <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-0">
              <p className="text-zinc-500 font-bold">Таны бизнест</p>
              <p className="text-white mt-6 text-sm cursor-pointer">
                Харилцах данс
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Хөрөнгө оруулалтын зээл
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Эргэлтийн хөрөнгийн зээл
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Овердрафт
              </p>
            </div>
            <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-16 2xl:col-span-0 xl:col-span-0 lg:col-span-0 md:col-span-0 sm:col-span-0 col-span-2">
              <p className="text-zinc-500 font-bold">Холбоо барих</p>
              <p className="text-white mt-6 text-sm cursor-pointer">
                Монгол Улс, Улаанбаатар хот-14241,
              </p>
              <p className="text-white text-sm cursor-pointer">
                Сүхбаатар дүүрэг, 1-р хороо,
              </p>
              <p className="text-white text-sm cursor-pointer">
                “Шангри-Ла Оффис” төв, 6 давхар,
              </p>
              <p className="text-white text-sm cursor-pointer">605 тоот</p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Утас: 1800 2929
              </p>
              <p className="text-white text-sm cursor-pointer">
                hello@m-bank.mn
              </p>
            </div>
          </div>
          <div className="flex flex-col 2xl:ml-36 xl:ml-36 ml-0 2xl:mt-0 xl:mt-0 my-8">
            <p className="text-zinc-500 font-bold 2xl:mt-0 xl:mt-0 mt-4">
              М community-д нэгдээрэй
            </p>
            <div className="flex flex-row gap-4 2xl:order-0 xl:order-0">
              <img
                src="https://m-bank.mn/icons/footer/Facebook.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/Users.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/Instagram.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/Twitter.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/LinkedIn.png"
                className="mt-6 w-6"
              ></img>
            </div>
            <p className="text-zinc-500 font-bold mt-6 cursor-pointer 2xl:order-last xl:order-last order-first">
              Бүтээгдэхүүн, үйлчилгээний нөхцөл
            </p>
          </div>
        </div>
        <div className="flex flex-row my-16 items-center justify-between w-3/4">
          <p className="text-zinc-500 text-sm">
            Бүх эрх хуулиар хамгаалагдсан © 2023. М банк
          </p>
          <div className="flex flex-row mx-4">
            <p className="cursor-pointer text-sm text-zinc-500">
              Үйлчилгээний нөхцөл
            </p>
            <img
              src="https://m-bank.mn/icons/en.png"
              className="w-4 h-4 ml-4 cursor-pointer"
            ></img>
            <p className="text-zinc-500 ml-2 text-sm cursor-pointer">EN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
