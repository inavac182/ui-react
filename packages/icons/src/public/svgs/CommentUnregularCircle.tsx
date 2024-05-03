import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCommentUnregularCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M24 11.247A12.012 12.012 0 1 0 12.017 24H19a5.005 5.005 0 0 0 5-5v-7.753ZM22 19a3 3 0 0 1-3 3h-6.983a10.041 10.041 0 0 1-7.476-3.343 9.917 9.917 0 0 1-2.476-7.814 10.043 10.043 0 0 1 8.656-8.761 10.564 10.564 0 0 1 1.3-.082A9.921 9.921 0 0 1 18.4 4.3a10.041 10.041 0 0 1 3.6 7.042Z" />
    <motion.path {...props.motionPath} d="M8 9h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2ZM16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2ZM16 15H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" />
  </motion.svg>
);
export default SvgCommentUnregularCircle;
