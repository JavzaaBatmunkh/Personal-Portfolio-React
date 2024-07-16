import { Icon } from "./icon";

 export function Skills() {
  return (
  <div style = {{paddingTop: '80px', paddingBottom: '80px' }} >
    
    <div class="flex items-center justify-center">
          <div class="inline-flex items-center bg-gray-200 rounded-full px-6 py-1">
            <div class="text-center">
              <h2 class="text-sm font-normal">Skills</h2>
            </div>
          </div>
    </div>
        
        <div class="text-center pt-5 pb-5 text-normal font-light">
          <p>
            The skills, tools and technologies that I'm really good at:
          </p>
        </div>
     
     <div className="grid grid-cols-8 grid-rows-2">
      <Icon title="Javascript" pic="icon-javscript.svg"/>
      <Icon title="Typescript" pic="icon-typescript.svg"/>
      <Icon title="React" pic="icon-react.svg"/>
      <Icon title="Next.js" pic="next.svg"/>
      <Icon title="Node.js" pic="nodejs.svg"/>
      <Icon title="Express.js" pic="icon-express.svg"/>
      <Icon title="Nest.js" pic="icon-nest.svg"/>
      <Icon title="Socket.io" pic="icon-socket.svg"/>
      <Icon title="PostgreSQL" pic="icon-postgresql.svg"/>
      <Icon title="MongoDB" pic="icon-mongodb.svg"/>
      <Icon title="Sass/Scss" pic="icon-sass.svg"/>
      <Icon title="Tailwindcss" pic="icon-tailwindcss.svg"/>
      <Icon title="Figma" pic="icon-figma.svg"/>
      <Icon title="Cypress"  pic="icon-cypress.svg"/>
      <Icon title="Storybook" pic="icon-sass.svg"/>
      <Icon title="Git" pic="icon-git.svg"/>
      </div>
    
  </div>);
}
