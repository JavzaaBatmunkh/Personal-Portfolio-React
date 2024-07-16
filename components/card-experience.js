import Image from "next/image";

export function Card({hakkinda}) {
  const {jobTitle, jobexperience, date} = hakkinda || {};
  const img ="/images/logo-upwork.svg";
    return (
      <>         
      
        
          <div className="flex items-center justify-center">

           <div className="inline-flex items-right justify-center bg-white rounded-md p-12 shadow-xl my-6 gap-20">   
           <div className="text-left"> 
             <Image src={img} width={102} height={28}/>
           </div>
          
            <ul>
              <div>
                      <strong>{jobTitle}</strong>
              
              
              <span>{jobexperience && jobexperience.map((item, index) => (
                <li key={index}>{item}</li>
              ))}</span>
              
              </div>
            </ul>
            
            <div className="text-left">
            <p>{date}</p>
            </div>
            </div>
            </div>
              
          </>
        );
      }
      
  