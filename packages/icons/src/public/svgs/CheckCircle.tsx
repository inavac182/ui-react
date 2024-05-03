import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCheckCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M18.214 9.098a.999.999 0 0 1-.014 1.414l-4.426 4.345a3.984 3.984 0 0 1-2.8 1.151 3.984 3.984 0 0 1-2.776-1.129l-1.899-1.867a1 1 0 1 1 1.402-1.426l1.893 1.861c.776.75 2.001.746 2.781-.018L16.8 9.085a.999.999 0 0 1 1.414.013ZM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-2 0c0-5.514-4.486-10-10-10S2 6.486 2 12s4.486 10 10 10 10-4.486 10-10Z" />
  </motion.svg>
);
export default SvgCheckCircle;
