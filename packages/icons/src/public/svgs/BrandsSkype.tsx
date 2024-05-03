import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsSkype = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12.049 19.223c-3.987 0-5.808-2.031-5.808-3.521a1.292 1.292 0 0 1 1.363-1.292c1.707 0 1.26 2.56 4.445 2.56 1.628 0 2.584-.98 2.584-1.901 0-.553-.316-1.185-1.391-1.438l-3.556-.897c-2.857-.727-3.355-2.315-3.355-3.789 0-3.058 2.797-4.165 5.461-4.165 2.454 0 5.37 1.355 5.37 3.189 0 .79-.66 1.213-1.426 1.213-1.458 0-1.213-2.047-4.145-2.047-1.458 0-2.225.684-2.225 1.64 0 .956 1.134 1.28 2.13 1.498l2.624.593c2.877.648 3.643 2.335 3.643 3.951 0 2.485-1.924 4.406-5.717 4.406m11.011-5.259c.114-.652.171-1.313.17-1.976A11.228 11.228 0 0 0 10.053.881 6.6 6.6 0 0 0 6.742 0 6.717 6.717 0 0 0 .946 10.041a11.238 11.238 0 0 0 13.007 13.078A6.608 6.608 0 0 0 17.26 24a6.717 6.717 0 0 0 5.797-10.036" />
  </motion.svg>
);
export default SvgBrandsSkype;
