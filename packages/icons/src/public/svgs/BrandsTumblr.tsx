import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsTumblr = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M14.785 24c-3.61 0-6.299-1.857-6.299-6.299v-7.115h-3.28V6.733C8.815 5.796 10.325 2.69 10.499 0h3.748v6.108h4.373v4.477h-4.373v6.195c0 1.857.937 2.499 2.429 2.499h2.117V24h-4.008z" />
  </motion.svg>
);
export default SvgBrandsTumblr;
