
import { useRouter } from "next/router";

export default function shiljuuleg() {

  return (
    <div>
      <div className="w-screen h-screen flex flex-col bg-white">
        <div className="w-full h-12 bg-zinc-800 items-center flex flex-row p-4 fixed justify-between 2xl:px-64 xl:px-52 lg:px-40 md:px-28 sm:px-16 px-8 z-50 border-0 dark:border-b-2 border-zinc-700">
          <div className="flex flex-row justify-between items-center xl:2xl:gap-12 sm:lg:gap-8 gap-4">
            <button onClick={() => router.push("/")} className="w-16">
              <img
                className="w-16"
                src="https://m-bank.mn/icons/navbar/ic_m_large.png"
              ></img>
            </button>
            <a
              className="text-zinc-500 cursor-pointer text-sm hover:text-emerald-400 2xl:block xl:block lg:block md:block hidden"
              href="/shiljuuleg"
            >
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
        <div class="w-full h-full mt-12">
          <div className="w-full xl:h-[700px] bg-white xl:flex-row xl:px-52 sm:px-20 pt-16 sm:pt-15 xl:pt-0 flex flex-col xl:flex-row text-center items-center xl:text-left">
            <div className="xl:w-1/2 w-full xl:pr-12 ">
              <p className="xl:text-[51px] sm:text-[34px] text-2xl xl:text-start xl:leading-[1.1] text-zinc-800 font-bold ">
                Хамгийн цөөн даралтаар
                <span className="text-emerald-400"> шилжүүлэг хий</span>
              </p>
            </div>
            <img
              src="https://m-bank.mn/icons/retail/retail_payment_1.png"
              alt="photo1"
              className="xl:w-1/2 xl:absolute xl:h-[700px] xl:left-[45%] xl:object-contain"
            ></img>
          </div>
        </div>
        <div className="w-full py-10 xl:py-20 flex  justify-center items-center bg-slate-50">
          <div className="w-full xl:flex xl:flex-row sm:grid sm:grid-cols-2 flex flex-col gap-4 xl:gap-10 sm:gap-5 px-5 xl:px-24 sm:px-20 justify-center">
            <div
              data-aos="zoom-in-right"
              className="w-full xl:h-full p-5 xl:p-10 sm:p-6 bg-white rounded-2xl "
            >
              <img
                src="https://m-bank.mn/icons/retail/ic_mobile.png"
                alt="img2"
                class="w-6 h-6 mb-4 sm:w-8 sm:h-8 xl:w-10 xl:h-10 xl:mb-8"
              ></img>
              <p class="text-zinc-800 font-bold text-sm mb-2 sm:text-base sm:mb-3 xl:text-xl xl:mb-4">
                Дансаа биш дугаараа
              </p>
              <p class="text-zinc-800 text-md sm:ml xl:text-lg leading-[1.4]">
                Банк дотор утасны дугаар ашиглан шилжүүлэг хийгээрэй.
              </p>
            </div>
            <div
              data-aos="zoom-in-right"
              className="w-full xl:h-full p-5 xl:p-10 sm:p-6 bg-white rounded-2xl "
            >
              <img
                src="https://m-bank.mn/icons/retail/ic_stopwatch.png"
                alt="img3"
                class="w-6 h-6 mb-4 sm:w-8 sm:h-8 xl:w-10 xl:h-10 xl:mb-8"
              ></img>
              <p class="text-zinc-800 font-bold text-sm mb-2 sm:text-base sm:mb-3 xl:text-xl xl:mb-4">
                Шимтгэлгүй
              </p>
              <p class="text-zinc-800 text-md sm:ml xl:text-lg leading-[1.4]">
                Банк дотор шимтгэлгүй шилжүүлэг хийгээрэй.
              </p>
            </div>
            <div
              data-aos="zoom-in-right"
              className="w-full xl:h-full p-5 xl:p-10 sm:p-6 bg-white rounded-2xl "
            >
              <img
                src="https://m-bank.mn/icons/retail/ic_pie.png"
                alt="img4"
                class="w-6 h-6 mb-4 sm:w-8 sm:h-8 xl:w-10 xl:h-10 xl:mb-8"
              ></img>
              <p class="text-zinc-800 font-bold text-sm mb-2 sm:text-base sm:mb-3 xl:text-xl xl:mb-4">
                Хэрэглээгээ тань
              </p>
              <p class="text-zinc-800 text-md sm:ml xl:text-lg leading-[1.4]">
                Хийсэн гүйлгээ болгоноо ангилж, хэрэглээгээ хянах боломжтой.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-16 xl:py-32 xl:px-24">
          <div className="w-full flex flex-col text-center">
            <p className="text-zinc-800 font-bold text-3xl sm:text-4xl xl:text-5xl mb-8 xl:mb-20">
              Үйлчилгээний нөхцөл
            </p>
            <div className="xl:w-full">
              <div className="flex gap-3 px-5 py-4 sm:gap-10 sm:px-10 sm:py-6">
                <p className="w-1/2 text-emerald-400 text-md font-semibold leading-5 sm:text-lg sm:leading-6 text-left">
                  Үйлчилгээ
                </p>
                <p className="w-1/2 text-emerald-400 text-md font-semibold leading-5 sm:text-lg sm:leading-6 text-left">
                  Хураамж, шимтгэлийн төрөл
                </p>
              </div>
              <div className="flex gap-3 px-5 py-4 sm:py-8 sm:px-10 sm:gap-10 items-center bg-slate-50 sm:rounded-2xl">
                <p className="w-1/2 text-gray-400 text-md font-normal leading-5 sm:text-lg sm:leading-7 text-left">
                  Өөрийн данс хооронд
                </p>
                <p className="w-1/2 text-zinc-800 text-md font-bold leading-5 sm:text-lg sm:leading-7 text-left">
                  ₮0
                </p>
              </div>
              <div className="flex gap-3 px-5 py-4 sm:py-8 sm:px-10 sm:gap-10 items-center bg-white">
                <p className="w-1/2 text-gray-400 text-md font-normal leading-5 sm:text-lg sm:leading-7 text-left">
                  Банк дотор хийгдэх зарлага
                </p>
                <p className="w-1/2 text-zinc-800 text-md font-bold leading-5 sm:text-lg sm:leading-7 text-left">
                  ₮0
                </p>
              </div>
              <div className="flex gap-3 px-5 py-4 sm:py-8 sm:px-10 sm:gap-10 items-center bg-slate-50 sm:rounded-2xl">
                <p className="w-1/2 text-gray-400 text-md font-normal leading-5 sm:text-lg sm:leading-7 text-left">
                  Банк хооронд /бага дүнтэй/
                </p>
                <p className="w-1/2 text-zinc-800 text-md font-bold leading-5 sm:text-lg sm:leading-7 text-left">
                  ₮200
                </p>
              </div>
              <div className="flex gap-3 px-5 py-4 sm:py-8 sm:px-10 sm:gap-10 items-center bg-white">
                <p className="w-1/2 text-gray-400 text-md font-normal leading-5 sm:text-lg sm:leading-7 text-left">
                  Банк хооронд /их дүнтэй/
                </p>
                <p className="w-1/2 text-zinc-800 text-md font-bold leading-5 sm:text-lg sm:leading-7 text-left">
                  ₮500
                </p>
              </div>
              <div className="flex gap-3 px-5 py-4 sm:py-8 sm:px-10 sm:gap-10 items-center bg-slate-50 sm:rounded-2xl">
                <p className="w-1/2 text-gray-400 text-md font-normal leading-5 sm:text-lg sm:leading-7 text-left">
                  Бэлэн орлого
                </p>
                <p className="w-1/2 text-zinc-800 text-md font-bold leading-5 sm:text-lg sm:leading-7 text-left">
                  ₮0
                </p>
              </div>
              <div className="flex gap-3 px-5 py-4 sm:py-8 sm:px-10 sm:gap-10 items-center bg-white">
                <p className="w-1/2 text-gray-400 text-md font-normal leading-5 sm:text-lg sm:leading-7 text-left">
                  Бэлэн бус орлого
                </p>
                <p className="w-1/2 text-zinc-800 text-md font-bold leading-5 sm:text-lg sm:leading-7 text-left">
                  ₮0
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center bg-slate-50 px-4 xl:px-0 py-16 xl:py-20">
          <div className="max-w-[620px] text-center">
            <p className="text-lg sm:text-2xl xl:text-[34px] font-bold text-zinc-800 mb-10">
              Түгээмэл асуулт хариулт
            </p>
            <div className="flex flex-col">
              <button className="py-6 sm:py-8 xl:py-10  border-b">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-bold text-zinc-800 text-md sm:text-[19px] xl:text-[21.5px] text-left mt-[-1px]">
                      Пин код буруу оруулснаас болоод блок хийгдчихлээ, яах
                      ёстой вэ? 😞
                    </p>
                  </div>
                  <img
                    src="https://m-bank.mn/icons/retail/ic_arrow_down.png"
                    alt="img5"
                    className="w-6 h-6 ml-10"
                  ></img>
                </div>
              </button>
              <button className="py-6 sm:py-8 xl:py-10  border-b">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-bold text-zinc-800 text-md sm:text-[19px] xl:text-[21.5px] text-left mt-[-1px]">
                      Гүйлгээний өдрийн лимит хэд вэ? 🤔
                    </p>
                  </div>
                  <img
                    src="https://m-bank.mn/icons/retail/ic_arrow_down.png"
                    alt="img6"
                    className="w-6 h-6 ml-10"
                  ></img>
                </div>
              </button>
              <button className="py-6 sm:py-8 xl:py-10  border-b">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-bold text-zinc-800 text-md sm:text-[19px] xl:text-[21.5px] text-left mt-[-1px]">
                      Гүйлгээний шимтгэл гэж байгаа юу? 💸
                    </p>
                  </div>
                  <img
                    src="https://m-bank.mn/icons/retail/ic_arrow_down.png"
                    alt="img7"
                    className="w-6 h-6 ml-10"
                  ></img>
                </div>
              </button>
              <button className="py-6 sm:py-8 xl:py-10  border-b">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-bold text-zinc-800 text-md sm:text-[19px] xl:text-[21.5px] text-left mt-[-1px]">
                      Гүйлгээний баримтыг и-мэйлээр авч болох уу? 📧
                    </p>
                  </div>
                  <img
                    src="https://m-bank.mn/icons/retail/ic_arrow_down.png"
                    alt="img8"
                    className="w-6 h-6 ml-10"
                  ></img>
                </div>
              </button>
              <button className="py-6 sm:py-8 xl:py-10  border-b">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="font-bold text-zinc-800 text-md sm:text-[19px] xl:text-[21.5px] text-left mt-[-1px]">
                      Олон нийтийн амралтын өдөр болон ажлын цагийн дараа
                      гүйлгээ хэрхэн хийгддэг вэ? 🌲
                    </p>
                  </div>
                  <img
                    src="https://m-bank.mn/icons/retail/ic_arrow_down.png"
                    alt="img9"
                    className="w-6 h-6 ml-10"
                  ></img>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-zinc-700 flex 2xl:flex-row items-center justify-center flex-col 2xl:gap-0 gap-16 xl:flex-row xl:gap-0 pt-12">
          <img
            src="https://m-bank.mn/icons/footer/footer_1.png"
            className="w-96 2xl:mr-48 order-1 2xl:order-first xl:mr-48 xl:order-first"
          ></img>
          <div className="flex 2xl:flex-col xl:flex-col">
            <img
              src="https://m-bank.mn/icons/footer/footer_qr.png"
              className="w-36 2xl:block hidden xl:block"
            ></img>
            <div className="flex flex-row mt-12">
              <div className="bg-zinc-600 rounded-lg py-2 px-3 flex flex-row items-center cursor-pointer">
                <img
                  src="https://m-bank.mn/icons/footer/footer_apple.png"
                  className="w-6"
                ></img>
                <p className="ml-2 text-white">AppStore</p>
              </div>
              <div className="bg-zinc-600 rounded-lg py-2 px-3 flex flex-row items-center cursor-pointer ml-2">
                <img
                  src="https://m-bank.mn/icons/footer/footer_google.png"
                  className="w-6"
                ></img>
                <p className="ml-2 text-white">GooglePlay</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 flex flex-col pt-24 2xl:px-80 xl:px-60 lg:px-44 md:px-20 sm:px-12 px-8">
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
    </div>
  );
}
