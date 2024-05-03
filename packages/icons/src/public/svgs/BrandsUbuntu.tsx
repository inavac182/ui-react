import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsUbuntu = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.373 12-12c0-6.628-5.372-12-12-12zm2.55 4.499a1.542 1.542 0 1 1 2.67 1.543 1.542 1.542 0 0 1-2.67-1.543zM4.229 13.543a1.543 1.543 0 1 1 .002-3.086 1.543 1.543 0 0 1-.002 3.086zm1.361.148c.494-.398.81-1.007.81-1.692 0-.683-.316-1.293-.81-1.691a6.64 6.64 0 0 1 2.735-3.825L9.471 8.4A4.394 4.394 0 0 0 7.6 12c0 1.489.739 2.805 1.871 3.601l-1.147 1.916a6.642 6.642 0 0 1-2.734-3.826zm11.067 6.375a1.543 1.543 0 1 1-1.543-2.672 1.543 1.543 0 0 1 1.543 2.672zm.012-3.361a2.165 2.165 0 0 0-1.868.145c-.592.341-.962.92-1.059 1.547a6.623 6.623 0 0 1-1.74.231 6.603 6.603 0 0 1-2.94-.686l1.087-1.951a4.4 4.4 0 0 0 6.233-3.601l2.233.035a6.606 6.606 0 0 1-1.946 4.28zm-.286-5.095a4.4 4.4 0 0 0-6.237-3.602L9.06 6.058a6.659 6.659 0 0 1 4.68-.455A2.166 2.166 0 0 0 14.8 7.15a2.165 2.165 0 0 0 1.868.145 6.612 6.612 0 0 1 1.947 4.28l-2.232.035z" />
  </motion.svg>
);
export default SvgBrandsUbuntu;
