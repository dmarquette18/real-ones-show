import goldRings from "./images/goldRings.png"
import stepdadcover from "./images/yourstepdadcover.png"
import stepdadvideo from "./images/yourstepdad.mp4";
import avicover from "./images/aviphoto.jpg";
import avivideo from "./images/avivideo.mp4";
import goldycover from "./images/goldyphoto.jpg";
import goldyvideo from "./images/goldyvideo.mp4";
import scivcover from "./images/strancivphoto.jpg";
import scivvideo from "./images/strandedcivvideo.mp4";
import morgancover from "./images/morgancover.jpg";
import morganvideo from "./images/morganvid.mp4";
import realOnesLogo from "./images/realOnesLogo.PNG"
import { artistCard } from "./artistCard";
import {motion} from 'framer-motion';



export function TicketCard(){
    const logoVariant = {
        hidden: {opacity:"100%", x:"50vw", y:"1200px", scale:2},
        visible:{
            opacity:"100%",
            rotate:720,
            x:0,
            y:0,
            scale:1,
            transition:{
                type:'spring', duration: 3, bounce: 0.2, delay: 1
            }
        }
    }
    const cardContainerVariant = {
        hidden: {opacity:"0%"},
        visible:{
            opacity:"100%",
            transition:{
                duration: 3,
                delay: 1
            }
        }
    }
    const titleVariant = {
        hidden: {x:"500px"},
        visible:{
            x:0,
            transition:{
                type:'spring', duration: 1.75, bounce: 0.2
            }
        }
    }
    const dateVariant = {
        hidden: {x:"-250px"},
        visible:{
            x:0,
            transition:{
                type:'spring', duration: 1.25, bounce: 0.2
            }
        }
    }
    const doorsVariant = {
        hidden: {y:"250px",opacity:"0%"},
        visible:{
            opacity:"100%",
            y:0,
            transition:{
                type:'spring', duration: 1.50, bounce: 0.2
            }
        }
    }
    const showVariant = {
        hidden: {y:"500px"},
        visible:{
            opacity:"100%",
            y:0,
            transition:{
                type:'spring', duration: 1.50, bounce: 0.2
            }
        }
    }

    const performancesVariant = {
        hidden: {opacity:"0%"},
        visible:{
            opacity:"100%",
            transition:{
                duration: 1
            }
        }
    }



    return(



    <div className="w-max-screen h-full flex flex-row justify-center bg-[#1b2c7a]">
        
        <motion.div variants={cardContainerVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="Card flex flex-col w-[800px] w-max-screen h-[4300px] mt-[100px] mb-[20px] shadow-2xl  rounded-[75px] bg-[#f2f2d3] white relative cursor-grab">
            <div className="w-full flex flex-col flex-[0.25] relative center-items justify-end">
                <div className="logowrapper flex absolute scale-[0.5] z-20 w-full left-[-400px] top-[-300px]">
                    <motion.img variants={logoVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="w-auto h-full" src={realOnesLogo} alt="">
                    </motion.img>
                </div>
                <div className="CircleWrapper absolute top-0 left-0 min-w-full min-h-full overflow-hidden  rounded-tr-[75px]">
                    <div className="Circle absolute w-[500px] h-[500px] top-[-4.2em] right-[-10em] z-10 bg-[#ff8d68] rounded-full">
                    </div>
                </div>
                <div className="w-full absolute flex items-center justify-center ">
                    <div className="w-auto h-[190px] z-10 select-none mt-[25px]">
                        <img className="w-auto h-full select-non scale-[2.7]" src={goldRings} alt="">

                        </img>

                    </div>
                </div>
                
            </div>
            <motion.div className="flex-[1.4] flex flex-col min-w-0 flex-row  bg-gradient-to-b from-transparent to-[#ea0466] rounded-bl-[75px] rounded-br-[75px]">
                <h1 className="text-white uppercase ml-[90px] z-20 text-[120px] font-[500] font-serif">you're</h1>
                <h1 className="text-white uppercase ml-[130px] z-20 text-[200px] font-[500] font-serif">invited</h1>
                <motion.h1 variants={titleVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative left-[100px] z-20 text-[50px] font-[500] font-serif">real ones 2nd anniversary</motion.h1>
                <motion.h1 variants={dateVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative right-[200px] z-10 text-[120px] font-[500] font-serif z-20">Aug 20th</motion.h1>
                <motion.h1 variants={doorsVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative left-[300px] z-20 text-[100px] font-[10]"> doors open 8</motion.h1>
                <motion.h1 variants={showVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative left-[50%] z-20 text-[50px] font-[10]">show begins 9</motion.h1>
                <motion.h1 variants={performancesVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative left-[0] z-20 text-[50px] font-[10] text-center mt-[20px]">featuring performances from...</motion.h1>
                <div className="flex flex-row justify-center">
                <div className="flex-col flex-wrap items-center">
                    {artistCard(stepdadvideo, stepdadcover, "your stepdad")}
                    
                    {artistCard(goldyvideo, goldycover, "Gayun Cannon")}
                    {artistCard(scivvideo, scivcover, "Stranded Civilian")}
                    {artistCard(morganvideo, morgancover, "Morgan Gold")}
                    {artistCard(avivideo, avicover, "A.N.I")}
                    
                </div>
            </div>
                


            </motion.div>
            
        </motion.div>
    </div>
    )
}
 
export default TicketCard;