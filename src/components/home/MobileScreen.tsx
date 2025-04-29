import logo from '@/assets/logo.png'
import {Download, Star} from 'lucide-react'
import { Button } from '../ui/button'
import ImageCarousel from './Carousel'


export default function MobileScreen() {
  const handleDownload = () => {
    // Directly set the file URL
    const apkUrl = "/Aviator.apk";
  
    // Create a temporary <a> element to trigger download
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Aviator.apk"); // Sets the download filename
    document.body.appendChild(link);
    link.click();
  
    // Clean up the temporary link element
    document.body.removeChild(link);
  };
  return (
    <div className="flex md:hidden flex-col">
      <div className="flex p-4 w-full items-center">
        <img src={logo} className='h-20 w-20 border-[3px] border-[#b9b7b7] rounded-lg p-2' alt="L" />
        <div className='pl-8 h-full pt-1'>
          <h1 className="text-xl font-bold text-white">Aviator Crash Game</h1>
          <h2 className="text-md font-semibold text-[#b9b7b7]">Klik Games</h2>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2 items-center'>
            <Download size={24}/>
            <span className='text-xs'>27 MB</span>
        </div>
        <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-2'>
                <span className='text-md font-bold'>4.6</span>
                <Star size={20} className='fill-white' />
            </div>
            <span className='text-xs'>Ratings</span>
        </div>
        <div className='flex flex-col gap-2 items-center'>
             <span className='text-md font-bold'>18+</span>
             <span className='text-xs'>Rated for 18+</span>
        </div>
        <div className='flex flex-col gap-2 items-center'>
             <span className='text-md font-bold'>20K+</span>
             <span className='text-xs'>Downloads</span>
        </div>
      </div>
      <Button onClick={handleDownload} className='mt-4 bg-orange-600 hover:bg-orange-600 text-md font-bold py-5'>Install</Button>
      </div>
      <div className='w-full mt-4 overflow-hidden'>
        <ImageCarousel/>
      </div>
      <div className='p-4 flex flex-col gap-3 mt-6'>
        <h1 className='text-lg font-bold'>About this app</h1>
        <span className='text-md'>Aviator game can be defined as a game in the crash genre that boasts gripping gameplay and is based on the Provably Fair mechanism. An aircraft taking off is the central mechanic. The speed increases with each second, beginning with an x1 multiplier. You must cash out INR before the airplane flies away, which occurs at random. Upon withdrawal, the total of your bet will be multiplied by the current coefficient. Your bet will be null and void if you can’t withdraw the entire stake before the aircraft disappears.</span>
      </div>
    </div>
  )
}
