
import { Checkbox } from '@nextui-org/react';
import { useRouter } from 'next/router'

export default function Login() {

  const router = useRouter();

    return (
      <div className="w-full h-full flex flex-row bg-white dark:bg-zinc-800 justify-center">

      <div className="2xl:p-12 xl:p-12 p-8 flex flex-col 2xl:w-2/3 2xl:block xl:block lg:block md:block hidden w-1/2 h-screen bg-[url('https://e-mbank.mn/images/m_business_web_bg1.png')] bg-cover bg-left 2xl:bg-[100%] xl:bg-[80%] lg:bg-[60%] md:bg-[60%]">
        <img src="https://e-mbank.mn/images/bc_logo.png" className="w-44"></img>
        <p className="flex font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-white mt-20">Харилцах дансны</p>
        <p className="flex font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-white mt-4">үлдэгдэлд</p>
        <p className="flex font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-emerald-400 mt-4">хүү тооцдог боллоо.</p>
      </div>

      <div className="flex flex-col items-center justify-center 2xl:w-1/3 w-1/2 h-screen dark:bg-zinc-800 bg-white ml-1">
        <div className="flex flex-col">
            <div className="dark:bg-zinc-700 bg-slate-200 cursor-pointer rounded-lg 2xl:w-96 xl:w-96 lg:w-[368px] md:w-[368px] sm:w-96 w-80 p-1 relative h-[42px] gap-1 cursor-pointer flex flex-row">
                <div className="dark:bg-zinc-600 bg-white h-full w-1/2 rounded-lg justify-center items-center dark:text-white text-black flex text-sm">Байгууллага</div>
                <div className="dark:bg-zinc-700 h-full w-1/2 rounded-lg justify-center items-center dark:text-zinc-400 text-slate-500 flex text-sm">M Sign</div>
            </div>
            <p className="dark:text-white text-black 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-4xl text-3xl mt-6">Нэвтрэх</p>
            <p className="dark:text-zinc-500 text-slate-500 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm text-xs mt-6">Байгууллагын интернэт банканд тавтай морилно уу.</p>
            <div className="p-2 mt-8 bg-slate-200 dark:bg-zinc-600 rounded-lg flex flex-row items-center 2xl:w-96 xl:w-96 lg:w-[368px] md:w-[368px] sm:w-96 w-80">
              <img src="https://e-mbank.mn/icons/ic_user.png" className="w-[16px] h-[20px] ml-2 mt-0.5"></img>
              <input placeholder="Нэвтрэх нэр" className="outline-0 focus:text-sm dark:focus:text-white placeholder-zinc-500 dark:bg-zinc-600 bg-slate-200 ml-4 placeholder:text-sm"></input>
            </div>
            <div className="p-2 mt-4 bg-slate-200 dark:bg-zinc-600 rounded-lg flex flex-row items-center 2xl:w-96 xl:w-96 lg:w-[368px] md:w-[368px] sm:w-96 w-80">
              <img src="https://e-mbank.mn/icons/ic_password.png" className="w-[16px] h-[20px] ml-2 mt-0.5"></img>
              <input placeholder="Нууц үг" className="outline-0 focus:text-sm  dark:focus:text-white placeholder-zinc-500 bg-slate-200 dark:bg-zinc-600 ml-4 placeholder:text-sm"></input>
              <img src="https://e-mbank.mn/icons/ic_hide.png" className="w-[20px] h-[20px] 2xl:ml-32 xl:ml-32 lg:ml-28 md:ml-28 sm:ml-32 ml-16 cursor-pointer"></img>
            </div>
            <div className="flex flex-row mt-6 items-center">
              <input type="checkbox" className="w-4 h-4 bg-zinc-600 rounded-lg" value=""></input>
              <p className="text-slate-800 dark:text-white ml-2 text-xs">Нэвтрэх нэр сануулах</p>
            </div>
            <button className="bg-emerald-400 2xl:w-96 xl:w-96 lg:w-[368px] md:w-[368px] sm:w-96 w-80 text-white h-[42px] rounded-lg mt-6 cursor-pointer">Нэвтрэх</button>
            <div className="flex flex-row mt-8">
              <p className="text-slate-500 dark:text-zinc-500 text-xs">Нэвтрэх нэр, нууц үгээ мартсан бол</p>
              <p className="text-blue-400 px-1 cursor-pointer text-xs"> Энд </p>
              <p className="text-slate-500 dark:text-zinc-500 text-xs"> дарж сэргээнэ үү.</p>
            </div>
        </div>
      </div>
      </div>
    );
  }
  