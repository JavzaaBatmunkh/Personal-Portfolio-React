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

  }
]


export function Experience() {
  return <div> 
    <Card/>
    <Card/>
    <Card/>

  </div>;
}
