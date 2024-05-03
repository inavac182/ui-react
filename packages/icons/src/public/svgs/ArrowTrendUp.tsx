import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgArrowTrendUp = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M21 6h-6a1 1 0 1 0 0 2h5.586l-6.562 6.562a1.45 1.45 0 0 1-2.047 0l-2.539-2.539a3.451 3.451 0 0 0-4.875 0l-4.27 4.27a.999.999 0 1 0 1.414 1.414l4.27-4.27c.547-.547 1.5-.547 2.047 0l2.539 2.539a3.451 3.451 0 0 0 4.875 0l6.563-6.562V15a1 1 0 1 0 2 0V9c0-1.654-1.346-3-3-3Z" />
  </motion.svg>
);
export default SvgArrowTrendUp;
