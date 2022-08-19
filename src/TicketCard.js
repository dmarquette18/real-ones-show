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
import { artistCard } from "./artistCard";
import {motion} from 'framer-motion';



export function TicketCard(){
    const logoVariant = {
        hidden: { x:"50vw", y:"-200px", scale:2},
        visible:{
            rotate:720,
            x:0,
            y:30,
            scale:1.1,
            transition:{
                type:'spring', duration: 3, bounce: 0.2, delay: 1.75
            }
        }
    }
    const cardContainerVariant = {
        hidden: {opacity:"0%"},
        visible:{
            opacity:"100%",
            transition:{
                duration: 3,
                delay: 1.75
            }
        }
    }
    const titleVariant = {
        hidden: {x:"100px"},
        visible:{
            x:0,
            transition:{
                type:'spring', duration: 1.75, bounce: 0.2
            }
        }
    }
    const dateVariant = {
        hidden: {x:"-100px"},
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
        hidden: {y:"300px"},
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



    <div className="w-full h-full flex flex-row justify-center relative sm:top-0 top-[0px] sm:place-items-center place-items-start bg-[#1b2c7a] sm:scale-[1] scale-[0.7]">
        
        <motion.div variants={cardContainerVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="Card h-[2600px] flex flex-col sm:m-[0px] m-[30px] sm:w-[800px] sm:h-[4300px] sm:mt-[100px] mb-[20px] shadow-2xl  rounded-[75px] bg-[#f2f2d3] white relative cursor-grab">
            <div className="w-full flex flex-col flex-[0.4] relative center-items justify-end">
                <div className="logowrapper flex absolute scale-[0.5] w-full top-[-650px] sm:left-[-400px] sm:top-[-300px] z-20 b-0">
                    <motion.img variants={logoVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} src="https://i.ibb.co/k3qNwy4/real-Ones-Logo.png" alt="" >
                    </motion.img>
                </div>
                <div className="CircleWrapper absolute top-0 right-0 h-[500px] sm:h-[700px] w-full rounded-tr-[75px] justify-center overflow-hidden">
                    <div className="Circle absolute flex w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] sm:w-[700px] right-[-150px] top-[-150px] sm:h-[700px] z-0 bg-[#ff8d68] rounded-full">
                    </div>
                </div>
                <div className="w-full absolute flex items-center justify-center ">
                    <div className="w-auto h-[190px] z-10 select-none sm:mt-[25px]">
                        <img className="w-auto h-full scale-[2.7]" src={goldRings} alt="">
                        </img>
                    </div>
                </div>
                
            </div>
            <motion.div className="flex-[1.4]  w-[500px] sm:w-full flex flex-col bg-gradient-to-b from-transparent to-[#ea0466] rounded-bl-[75px] rounded-br-[75px] font-serif mt-[20px] pb-[90px] h-full">
                <h1 className="text-white uppercase ml-[10%] sm:ml-[90px] z-20 text-[115px] sm:text-[120px] font-[800] font-serif">you're</h1>
                <h1 className="text-white uppercase ml-[80px] sm:ml-[130px] z-20 text-[100px] sm:text-[120px] font-[800] font-serif">invited</h1>
                <motion.h1 variants={titleVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative left-[90px] sm:left-[100px] text-[50px] sm:text-[50px] font-[600] font-serif">real ones 2nd anniversary</motion.h1>
                <motion.h1 variants={dateVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative right-[10px] sm:right-[200px] z-10 text-[60px] sm:text-[120px] font-[600] font-serif ">Aug 20th</motion.h1>
                <motion.h1 variants={doorsVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative w-full sm:w-full left-[200px] sm:left-[300px] z-20 text-[40px] sm:text-[100px] font-[10]"> doors open 8</motion.h1>
                <motion.h1 variants={showVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative w-1/2 sm:w-full left-[50%] z-20 text-[20px] sm:text-[50px] font-[10]">show begins 9</motion.h1>
                <motion.h1 variants={performancesVariant} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="text-white uppercase relative left-[0] text-[25px] z-20 sm:text-[50px] font-[300] text-center mt-[20px]">featuring performances from...</motion.h1>
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