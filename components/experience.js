import { Card } from "./card-experience";
const experiences=[
  {
    title: "Sr. Frontend Developer",
    listItems:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ],
    date:"Nov 2021 - Present"

  },
  {
    title: "Team Lead",
    listItems:["Consectetur adipiscing elit.",
      "Ut pretium id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ],
    date:"July 2017 - Oct 2021"

  },
  {
    title: "Full Stack Developer",
    listItems:["Amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ],
    date:"Dec 2015 - May 2017"

  },

]


export function Experience() {
  return ( 
  <div className="bg-gray-50" style={{paddingTop: "80px", paddingBottom: "80px"}}> 

<div className="flex items-center justify-center">
          <div class="inline-flex items-center bg-gray-200 rounded-full px-6 py-1">
            <div class="text-center">
              <h2 class="text-sm font-normal">Experience</h2>
            </div>
          </div>
    </div>

    <div class="text-center pt-5 pb-5 text-normal font-light">
          <p>
          Here is a quick summary of my most recent experiences:
          </p>
    </div>

    <div>
    {experiences.map((experience, index)=>(
      <Card 
      key={index} 
      hakkinda={{
        jobTitle: experience.title,
        jobexperience: experience.listItems,
        date: experience.date,
      }}
      />
    )
  )}
  </div>

  </div>
  );
}
