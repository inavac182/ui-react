import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgPassword = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M15 17a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm-.293-9.707a1 1 0 0 0-1.414 0L12 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 10l1.293-1.293a1 1 0 0 0 0-1.414zM22 16h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-.586-6 1.293-1.293a1 1 0 1 0-1.414-1.414L20 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L18.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L20 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414zM6 16H2a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm.707-8.707a1 1 0 0 0-1.414 0L4 8.586 2.707 7.293a1 1 0 1 0-1.414 1.414L2.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L4 11.414l1.293 1.293a1 1 0 1 0 1.414-1.414L5.414 10l1.293-1.293a1 1 0 0 0 0-1.414z" />
  </motion.svg>
);
export default SvgPassword;
