import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCheckCircleEmpty = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 24c-.77 0-1.81-.06-3.18-.18a9.545 9.545 0 0 1-8.64-8.64C.06 13.84 0 12.77 0 12s.06-1.83.18-3.18A9.545 9.545 0 0 1 8.82.18C10.19.06 11.23 0 12 0s1.81.06 3.18.18c4.59.42 8.23 4.05 8.64 8.64.12 1.34.18 2.41.18 3.18s-.06 1.83-.18 3.18a9.545 9.545 0 0 1-8.64 8.64c-1.37.12-2.41.18-3.18.18Zm0-22c-.7 0-1.7.06-3 .17C5.37 2.5 2.5 5.37 2.17 9c-.12 1.29-.18 2.29-.18 3s.06 1.71.18 3c.33 3.63 3.2 6.5 6.83 6.83 1.29.12 2.3.17 3 .17s1.7-.06 3-.17c3.63-.33 6.5-3.2 6.83-6.83.12-1.29.18-2.29.18-3s-.06-1.71-.18-3c-.33-3.63-3.2-6.5-6.83-6.83-1.29-.12-2.3-.17-3-.17Zm10.82 13.09Z" />
  </motion.svg>
);
export default SvgCheckCircleEmpty;
