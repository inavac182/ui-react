import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsReddit = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M9.25 14.5c-.689 0-1.25-.561-1.25-1.25S8.561 12 9.25 12s1.25.561 1.25 1.25-.561 1.25-1.25 1.25zM14.97 16.095a.324.324 0 0 1 0 .458c-.853.852-2.488.918-2.969.918-.481 0-2.116-.066-2.968-.918a.323.323 0 0 1 0-.458.323.323 0 0 1 .458 0c.538.538 1.688.728 2.51.728.822 0 1.972-.191 2.511-.729a.324.324 0 0 1 .458.001zM16 13.25a1.251 1.251 0 0 1-2.5 0c0-.689.561-1.25 1.25-1.25s1.25.561 1.25 1.25z" />
    <motion.path {...props.motionPath} d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.957 13.599c.027.173.041.348.041.526 0 2.692-3.134 4.875-7 4.875s-7-2.183-7-4.875c0-.179.015-.355.042-.529a1.75 1.75 0 0 1 .716-3.346c.47 0 .896.186 1.21.488 1.212-.873 2.886-1.431 4.749-1.483l.89-4.185a.312.312 0 0 1 .37-.241l2.908.618A1.249 1.249 0 1 1 17 7.25c-.67 0-1.213-.529-1.244-1.191l-2.604-.554-.797 3.75c1.836.064 3.484.622 4.68 1.485a1.75 1.75 0 1 1 1.922 2.859z" />
  </motion.svg>
);
export default SvgBrandsReddit;
