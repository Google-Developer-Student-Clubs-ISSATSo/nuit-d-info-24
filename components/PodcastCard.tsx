import { div } from "framer-motion/client";
import { CirclePlay } from "lucide-react";
import Image from "next/image";

export default function PodcastCard(){
    return(
        
        <div className = "box border-[solid] border-[1px] border-[red] grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))]  gap-[20px] ">
            <Image
                  src="/images/lungs.png"
                  width={65}
                  height={100}
                  alt="Aqua Echo logo"
                />
            <div className = {"textContent"}>
                <h1 className  = {"title"}>Episode 1</h1>
                <p className = {"paragraph"}>DescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
                <CirclePlay/>
            </div>
        </div>
        
    )
}