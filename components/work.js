import Image from "next/image";
import WorkK from "./workK";

const works = [
  {
  workFigure: "/images/Project-pic.png", 
  workText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",},
  ]

export function Work() {
    return(
      <section id="work"> 
      <div style={{paddingTop: "80px", paddingBottom: "80px"}}>
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center bg-gray-200 rounded-full px-6 py-1">
            <div className="text-center">
              <h2 className="text-sm font-normal">Work</h2>
            </div>
          </div>
    </div>

    <div class="text-center pt-5 pb-20 text-normal font-light">
          <p>
              Some of the noteworthy projects I have built:          
          </p>

    </div>
    
    <div>
        {works.map((work, index)=>(
        <WorkK key={index} 
        infor={{projectFigure: work.workFigure,
          projectText: work.workText
        }}/>
      ))}
    </div>
      
</div>
</section>
    )
  };
  