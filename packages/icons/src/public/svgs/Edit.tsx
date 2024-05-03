import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgEdit = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M22.853 1.148a3.626 3.626 0 0 0-5.124 0L1.465 17.412A4.968 4.968 0 0 0 0 20.947V23a1 1 0 0 0 1 1h2.053a4.966 4.966 0 0 0 3.535-1.464L22.853 6.271a3.626 3.626 0 0 0 0-5.123ZM5.174 21.122A3.022 3.022 0 0 1 3.053 22H2v-1.053a2.98 2.98 0 0 1 .879-2.121L15.222 6.483l2.3 2.3ZM21.438 4.857l-2.506 2.507-2.3-2.295 2.507-2.507a1.623 1.623 0 1 1 2.295 2.3Z" />
  </motion.svg>
);
export default SvgEdit;
