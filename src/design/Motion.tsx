import React from 'react';
import {motion,useReducedMotion} from 'motion/react';
import {nodeMotion} from './motion-data';
export function Animated({as='div',sourceId,style,...rest}:any){
 const reduce=useReducedMotion(); const C=(motion as any)[as]; const data=nodeMotion[sourceId]??{};
 return <C {...data} {...rest} style={{...data.style,...style}} initial={reduce?false:data.initial} animate={reduce?undefined:data.animate}/>;
}
export function RewardAmount({children,...props}:any){
 const reduce=useReducedMotion();
 // Original text-group preset: WORD, LEFT_RIGHT, 2 groups, 2560.075ms start.
 // Distance 60px from bottom, scale 70%, opacity 0%, mass 1/stiffness 100/damping 10.
 return <p {...props} aria-label="0.45">{['0.','45'].map((part,i)=><motion.span aria-hidden key={part} style={{display:'inline-block',transformOrigin:'50% 50%'}}
 initial={reduce?false:{y:60,scale:.7,opacity:0}} animate={{y:0,scale:1,opacity:1}}
 transition={{type:'spring',mass:1,stiffness:100,damping:10,duration:.909091,delay:reduce?0:2.560075+i*.09090899658203125}}>{part}</motion.span>)}</p>;
}
