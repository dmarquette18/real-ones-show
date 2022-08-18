import HoverVideoPlayer from 'react-hover-video-player';
import React from "react";
import {motion} from 'framer-motion';


export function artistCard(video, cover, label){
    const artistPicVariant = {
        hidden: {opacity:"0%", y:"200px"},
        visible:{
            opacity:"100%",
            y:0,
            transition:{
                type:'linear', duration: 0.75
            }
        }
    }
    return (
        <motion.div variants={artistPicVariant} initial={"hidden"} whileInView={"visible"} className='flex flex-col justify-center items-center relative mt-[30px]'>
            <div className='flex w-[250px] h-[100px] z-30 bg-[#ff8d68] justify-center place-items-center relative top-[30px] drop-shadow-xl'>
                <div className='flex w-[250px] h-[100px] z-30 bg-[#1b2c7a] relative left-[35px] bottom-[25px] justify-center place-items-center drop-shadow-xl'>
                    <h1 className='text-white text-[35px] z-40'>{label}</h1>
                </div>
            </div>
            <HoverVideoPlayer
                videoClassName="z-20 justify-center"
                videoStyle={{borderRadius:"75px", width:"75%", marginLeft:"12.5%", marginTop:"23px"}}
                videoSrc={video}
                pausedOverlay={
                    
                    <img
                        src={cover}
                        alt=""
                        style={{
                            // Make the image expand to cover the video's dimensions
                            
                            width: '75%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius:"75px",
                            marginLeft:"12.5%",
                            marginTop:"20px"
                            
                        
                          }}
                        className="blur-sm"
                          
                      
                    />
                    
                      
                }
                volume={0.5}
                muted={false}

            />
        </motion.div>
    )
}