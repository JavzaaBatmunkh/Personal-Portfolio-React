import { CardProject } from "./card-project";
import { Tag } from "./tag";

export function Work() {
  return (
    <div style={{ paddingTop: "80px", paddingBottom: "80px" }} id="work">
      <div className="flex items-center justify-center">
        <Tag props="Work" />
      </div>

      <div class="text-center pt-5 pb-20 text-normal font-light">
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      <CardProject />
    </div>
  );
}
