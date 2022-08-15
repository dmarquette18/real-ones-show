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
import HoverVideoPlayer from 'react-hover-video-player';
import { artistCard } from "./artistCard";

export function TicketCard(){
    return(
    <div className="flex flex-row justify-center bg-[#1b2c7a]">
        <div className="Card flex flex-col w-[800px] h-[3000px] mt-[100px] mb-[20px] shadow-2xl  rounded-[75px] bg-[#f2f2d3] white relative cursor-grab">
            <div className="w-full flex flex-col flex-[0.3] relative center-items justify-end">
                <div className="CircleWrapper absolute top-0 left-0 min-w-full min-h-full overflow-hidden  rounded-tr-[75px]">
                    <div className="Circle absolute w-[500px] h-[500px] top-[-4.2em] right-[-10em] z-10 bg-[#ff8d68] rounded-full">
                    </div>
                </div>
                <div className="w-full absolute flex items-center justify-center ">
                    <div className="w-auto h-[190px] z-10 select-none mt-[25px]">
                        <img className="w-auto h-full select-non scale-[2.7]" src={goldRings}>

                        </img>

                    </div>
                </div>
                
            </div>
            <div className="flex-[1.4] flex flex-col min-w-0 flex-row  bg-gradient-to-b from-transparent to-[#ea0466] rounded-bl-[75px] rounded-br-[75px]">
                <h1 className="text-white uppercase ml-[90px] z-20 text-[120px] font-[500] font-serif">you're</h1>
                <h1 className="text-white uppercase ml-[130px] z-20 text-[200px] font-[500] font-serif">invited</h1>
                <h1 className="text-white uppercase relative left-[100px] z-20 text-[50px] font-[500] font-serif">real ones 2nd anniversary</h1>
                <h1 className="text-white uppercase relative right-[200px] z-10 text-[120px] font-[500] font-serif z-20">Aug 20th</h1>
                <h1 className="text-white uppercase relative left-[300px] z-20 text-[100px] font-[10]"> doors open 8</h1>
                <div className="flex flex-row justify-center">
                <div className="flex-col flex-wrap items-center">
                    {artistCard(stepdadvideo, stepdadcover, "your stepdad")}
                    
                    {artistCard(goldyvideo, goldycover, "Gayun Cannon")}
                    {artistCard(scivvideo, scivcover, "Stranded Civilian")}
                    {artistCard(morganvideo, morgancover, "Morgan Gold")}
                    {artistCard(avivideo, avicover, "A.N.I")}
                    
                </div>
            </div>
                


            </div>
            
        </div>
    </div>
    )
}
 
export default TicketCard;