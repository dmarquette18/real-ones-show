import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TicketCard from './TicketCard';

function LandingPage() {
    return(
        <div>
            <TicketCard/>
        </div>
    );
}

export default LandingPage;