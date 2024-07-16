import Image from 'next/image';

export function ContactMe() {
  return (
  <section id="contact"> 
  <div>

    {/* //Get in touch button-like section */}
    <div className="flex items-center justify-center">
      <div className="inline-flex items-center bg-gray-200 rounded-full px-6 py-1">
        <div className="text-center">
          <h2 className="text-sm font-normal">Get in touch</h2>
        </div>
      </div>
    </div>

    <div className="text-center items-center justify-center pt-5 pb-5 text-lg font-light">
      <p>
      What is next? Feel free to reach out to me if you are looking for 
      </p>
      <p> 
      a developer, have a query, or simply want to connect.</p>
    </div>

    <div className="flex items-center justify-center">
      <div className="inline-flex items-center gap-4">
        <div>
          <Image src="/images/email-Icon.png" alt="" width={30} height={30}/>
        </div>
        <div className='text-4xl'>
            <h1>reachsagarshah@gmail.com</h1>
        </div>
        <div>
        <Image src="/images/copyButton-Icon.png" alt="" width={30} height={30}/>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <div className="inline-flex items-center gap-4">
        <div>
          <Image src="/images/Phone-Icon.png" alt="" width={30} height={30}/>
        </div>
        <div className='text-4xl'>
            <h1>+91 8980500565</h1>
        </div>
        <div>
        <Image src="/images/copyButton-Icon.png" alt="" width={30} height={30}/>
        </div>
      </div>
    </div>

    <div className='text-center items-center justify-center pt-10 pb-20 font-light text-sm'>
      <div>
        <p>
        You may also find me on these platforms!
        </p>
      </div>
      <div className='flex inline-flex'>
        <div><Image src="/images/GitHub-Icon.png" alt="gitHub" width={30} height={30}/></div>
        <div><Image src="/images/Twitter Icon.png" alt="twitter" width={30} height={30}/></div>
        <div><Image src="/images/Figma-Icon.png" alt="figma" width={30} height={30}/></div>
      </div>
    </div>
  </div>;
  </section>
  )
}
