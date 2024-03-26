import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";


const Animate = (props) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: false})
    const animCtrls = useAnimation()
    React.useEffect(() => {
        if(isInView){
            animCtrls.start("visible")
        }
    }, [isInView])
    return (
        <div ref={ref} style={{position: "relative", width: "100%", overflow: "hidden"}}>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={animCtrls}
            transition={{duration: props.duration, delay: 0.5}}
            >
                {props.children}
            </motion.div>
        </div>
    )
}

export default Animate