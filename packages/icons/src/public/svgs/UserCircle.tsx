import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgUserCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0ZM8 21.164V21c0-2.206 1.794-4 4-4s4 1.794 4 4v.164c-1.226.537-2.578.836-4 .836s-2.774-.299-4-.836Zm9.925-1.113C17.469 17.192 14.986 15 12 15s-5.468 2.192-5.925 5.051A9.993 9.993 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.993 9.993 0 0 1-4.075 8.051ZM12 5C9.794 5 8 6.794 8 9s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4Zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z" />
  </motion.svg>
);
export default SvgUserCircle;
