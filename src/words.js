import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useRef } from "react";

export const useWords = (word) => {
    const wordVariants = {
        hidden: {x:'-50vw'},
        visible:{
            x:0,
            transition:{
                type:'spring', duration: 2, bounce: 0.3
            }
        }
    }
    const {ref,inView} = useInView();
    const youreAnimation = useAnimation();

    useEffect(()=>{
        if(inView){
            youreAnimation.start('visible')
        }
        if(!inView){
            youreAnimation.start('hidden');
        }
    }, [inView])

    return(
        <motion.h1  ref={ref} initial="hidden" animate="visible" variants={wordVariants}>{word}</motion.h1>
    );
}