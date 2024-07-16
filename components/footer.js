import Image from 'next/image';

export function Footer() {
  return (

    <div className="flex flex-row bg-gray-50 pt-5 pb-5 text-center justify-center items-center gap-1">

    <div className='items-center justify-center'>
    <Image src="/images/CopyRight-Icon.png" alt="figma" width={14} height={14}/>
    </div>

      <div className='text-sm font-light'>
        2023 | <u>Designed</u> and <u>coded</u> with ❤️️ by Sagar Shah
      </div>
    </div>

  )
};
