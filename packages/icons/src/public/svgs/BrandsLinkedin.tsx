import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsLinkedin = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M23.002 21.584h.227l-.435-.658c.266 0 .407-.169.409-.376l-.001-.025c0-.282-.17-.417-.519-.417h-.564v1.476h.212v-.643h.261l.41.643zm-.425-.81h-.246v-.499h.312c.161 0 .345.026.345.237 0 .242-.186.262-.412.262M17.291 19.073h-3.007v-4.709c0-1.123-.02-2.568-1.564-2.568-1.566 0-1.806 1.223-1.806 2.487v4.79H7.908V9.389h2.887v1.323h.04a3.165 3.165 0 0 1 2.848-1.564c3.048 0 3.609 2.005 3.609 4.612l-.001 5.313zM4.515 8.065a1.745 1.745 0 1 1 0-3.49 1.745 1.745 0 0 1 0 3.49m1.503 11.008h-3.01V9.389h3.01v9.684zM18.79 1.783H1.497A1.481 1.481 0 0 0 0 3.246V20.61c.01.818.68 1.473 1.497 1.464H18.79a1.485 1.485 0 0 0 1.503-1.464V3.245a1.484 1.484 0 0 0-1.503-1.463" />
    <motion.path {...props.motionPath} d="M22.603 19.451a1.383 1.383 0 1 0 .027 0h-.027m.032 2.608c-.67.011-1.254-.522-1.265-1.192a1.213 1.213 0 1 1 2.426-.04v.02a1.187 1.187 0 0 1-1.161 1.212h-.031" />
  </motion.svg>
);
export default SvgBrandsLinkedin;
