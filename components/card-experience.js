import Image from "next/image";

export function Card({ hakkinda }) {
  const { jobTitle, jobexperience, date } = hakkinda || {};
  const img = "/images/logo-upwork.svg";
  return (
    <div className="md:flex   justify-between light:bg-white rounded-md p-[3.6%] shadow-xl my-6 gap-20 dark:bg-[#1F2937] max-w-4xl mx-auto px-[3%]
">
      <div className="text-left">
        <Image src={img} width={102} height={28} />
      </div>

      <div className="mt-4">
        <strong>{jobTitle}</strong>

        <span>
          {jobexperience &&
            jobexperience.map((item, index) => <li key={index}>{item}</li>)}
        </span>
      </div>

      <div className="text-left mt-4">
        <p>{date}</p>
      </div>
    </div>
  );
}
