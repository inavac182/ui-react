import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsCss3 = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="m6.972 14.935.302 3.381 4.72 1.274.004-.001 4.727-1.276.492-5.497H2.528l-.379-4.238h15.435l.386-4.34H1.771L1.385 0h21.23l-1.929 21.59-8.673 2.404v.001l-.02.005-8.681-2.41-.594-6.655z" />
  </motion.svg>
);
export default SvgBrandsCss3;
