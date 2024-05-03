import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgVideoCamera = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M22.903 6.538a1.97 1.97 0 0 0-2.077.188 1.008 1.008 0 0 0-.11.096l-1.757 1.773C18.748 6.03 16.618 4.001 14 4.001H5A5.004 5.004 0 0 0 0 9v6c0 2.757 2.243 5 5 5h9c2.629 0 4.768-2.047 4.962-4.627l1.756 1.754c.034.033.069.063.107.092a1.975 1.975 0 0 0 2.078.187A1.973 1.973 0 0 0 24 15.632V8.314c0-.757-.42-1.437-1.097-1.775ZM14 18H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3Zm5-5.417v-1.189l3-3.028.025 7.238L19 12.582Z" />
  </motion.svg>
);
export default SvgVideoCamera;
