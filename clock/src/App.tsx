import { format } from 'date-fns';
import { useEffect, useState } from 'react'

const Temp = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0)

  useEffect(() => {
    setInterval(() => {
      const sec = new Date().getSeconds();
      const min = new Date().getMinutes();
      const hour = (new Date().getHours() + 24) % 12 || 12;
      setSecond(180 + (6 * sec));
      setMinutes((175 + (6 * min) + (Math.floor(sec / 10))));
      setHours(180 + (30 * hour) + ((min / 60) * 30));
    }, 100);
  }, []);


  return (
    <div className='bg-black w-screen h-screen text-white'>
      <div className='border-4 border-white z-50 w-56 h-56 rounded-full flex justify-center items-center relative'>
        <div className='h-6 w-24 absolute top-16 rounded-md bg-slate-800 text-sm flex items-center justify-center'>{format(new Date(), 'dd/MM/yyyy')}</div>
        <div className='h-6 w-24 absolute bottom-16 rounded-md bg-slate-800 text-sm flex items-center justify-center'>{`${(new Date().getHours() + 24) % 12 || 12}:${new Date().getMinutes()}:${new Date().getSeconds()} AM`}</div>

        <div className='w-3 h-3 rounded-full bg-slate-300 z-40'></div>
        <div style={{ rotate: `${second}deg` }} className='relative -left-1.5'>
          <div className='w-0.5 h-20 bg-white  -top-14 invisible'></div>
          <div className='w-[1px] h-20 bg-red-400 top-[-2px] left-[-5px] rounded-3xl'></div>
        </div>


        <div style={{ rotate: `${minutes}deg` }} className='relative -left-[9px] top-[1px]'>
          <div className='w-0.5 h-[72px] bg-white  -top-14 invisible'></div>
          <div className='w-0.5 h-[72px] bg-white  top-[-2px] left-[-5px] rounded-lg'></div>
        </div>

        <div style={{ rotate: `${hours}deg` }} className='relative -left-[11px]'>
          <div className='w-0.5 h-14 bg-white  -top-14 invisible'></div>
          <div className='w-[2.5px] h-14 bg-green-400  top-[-2px] left-[-5px] rounded-lg'></div>
        </div>

        <div className='w-4 h-1 bg-slate-300 absolute top-1.5 rotate-90'></div>
        <div className='w-4 h-1 bg-slate-300 absolute bottom-1 rotate-90'></div>
        <div className='w-4 h-1 bg-slate-300 absolute right-0 rotate-0'></div>
        <div className='w-4 h-1 bg-slate-300 absolute left-0 rotate-0'></div>

        <div className='w-4 h-1 bg-slate-400 absolute top-[9%] right-[22%] rotate-[130deg]'></div>
        <div className='w-4 h-1 bg-slate-400 absolute top-[26%] right-[6%] rotate-[150deg]'></div>

        <div className='w-4 h-1 bg-slate-400 absolute top-[9%] left-[22%] rotate-[58deg]'></div>
        <div className='w-4 h-1 bg-slate-400 absolute top-[26%] left-[6%] rotate-[35deg]'></div>

        <div className='w-4 h-1 bg-slate-400 absolute bottom-[9%] left-[22%] rotate-[120deg]'></div>
        <div className='w-4 h-1 bg-slate-400 absolute bottom-[26%] left-[6%] rotate-[150deg]'></div>

        <div className='w-4 h-1 bg-slate-400 absolute bottom-[9%] right-[22%] rotate-[60deg]'></div>
        <div className='w-4 h-1 bg-slate-400 absolute bottom-[26%] right-[6%] rotate-[30deg]'></div>
      </div>
    </div>
  )
}

export default Temp