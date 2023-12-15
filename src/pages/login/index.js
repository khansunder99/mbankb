
import { Checkbox } from '@nextui-org/react';
import { useRouter } from 'next/router'

export default function Login() {

  const router = useRouter();

    return (
      <div className="w-full h-full flex flex-row bg-zinc-800">
      <div className="flex flex-col 2xl:w-2/3 2xl:block xl:block lg:block md:block hidden w-1/2 h-screen bg-[url('https://e-mbank.mn/images/m_business_web_bg1.png')] bg-cover bg-left 2xl:bg-[100%] xl:bg-[80%] lg:bg-[60%] md:bg-[60%]"></div>
      <div className="flex flex-col items-center justify-center 2xl:w-1/3 w-1/2 h-screen bg-zinc-800">
        <div className="flex flex-col">
            <div className="bg-zinc-700 cursor-pointer rounded-lg w-96 p-1 relative h-[42px] gap-1 cursor-pointer flex flex-row">
                <div className="bg-zinc-600 h-full w-1/2 rounded-lg justify-center items-center text-white flex text-sm">Байгууллага</div>
                <div className="bg-zinc-700 h-full w-1/2 rounded-lg justify-center items-center text-zinc-400 flex text-sm">M Sign</div>
            </div>
            <p className="text-white text-4xl mt-6">Нэвтрэх</p>
            <p className="text-zinc-400 text-sm mt-6">Байгууллагын интернэт банканд тавтай морилно уу.</p>
            <input placeholder="Нэвтрэх нэр" className="p-2 pl-12 mt-8 bg-zinc-600 rounded-lg outline-0 focus:text-white placeholder-zinc-500">

            </input>
            <input placeholder="Нууц үг" className="p-2 pl-12 mt-4 bg-zinc-600 rounded-lg outline-0 focus:text-white placeholder-zinc-500">
                
            </input>
            <div className="flex flex-row mt-4">
                <Checkbox></Checkbox>
                <p className="text-white ml-2 text-xs">Нэвтрэх нэр сануулах</p>
            </div>

        </div>
      </div>
      </div>
    );
  }
  