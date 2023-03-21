import Darkweb from "../assets/darkweb.jpg";
import Deftpatrol from "../assets/deftpatrol.jpg";
import { BsGithub } from "react-icons/bs";
export const ProjectList=()=>[
    {
        name:"Darkweb Crawling",
        skills:"Python",
        image:Darkweb,
        icon:<a href={"https://github.com/THENISHA-S"}>
        <BsGithub className="logo-icon" style={{color:"#fff"}}/>
       </a>
    },
    {
        name:"Deft patrol Application",
        image:Deftpatrol,
        icon:<a href={"https://github.com/THENISHA-S"}>
        <BsGithub className="logo-icon" style={{color:"#fff"}}/>
       </a>
    },
];

export default ProjectList;