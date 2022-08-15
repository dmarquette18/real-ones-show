import HoverVideoPlayer from 'react-hover-video-player';
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export function artistCard(video, cover, label){
    const artistVariant = {
        visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
    }
    return (
        <div className='flex flex-row justify-center relative mt-[30px]'>
            <motion.div variants={artistVariant} className=" absolute z-20 bottom-[0px]" hidden={false}>
                <h1 className='text-white text-[40px]'>{label}</h1>
            </motion.div>
            <HoverVideoPlayer
                videoClassName="z-30 justify-center"
                videoStyle={{borderRadius:"75px", width:"50%", marginLeft:"25%", marginTop:"23px"}}
                videoSrc={video}
                pausedOverlay={
                    
                    <img
                        src={cover}
                        alt=""
                        style={{
                            // Make the image expand to cover the video's dimensions
                            
                            width: '50%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius:"75px",
                            marginLeft:"25%",
                            marginTop:"20px"
                            
                        
                          }}
                        className="blur-sm"
                          
                      
                    />
                    
                      
                }
                volume={0.5}
                muted={false}

            />
        </div>
    )
}