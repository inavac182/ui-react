import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleSquareRight = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5ZM2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm14-7a2.993 2.993 0 0 1-.752 1.987c-.291.327-.574.637-.777.84L11.647 17.7a1 1 0 1 1-1.426-1.4l2.829-2.88c.187-.188.441-.468.7-.759a1 1 0 0 0 0-1.323 20.85 20.85 0 0 0-.693-.752L10.221 7.7a1 1 0 1 1 1.426-1.4l2.829 2.879c.2.2.48.507.769.833A2.99 2.99 0 0 1 16 12Z" />
  </motion.svg>
);
export default SvgAngleSquareRight;
