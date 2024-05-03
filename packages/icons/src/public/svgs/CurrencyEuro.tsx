import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCurrencyEuro = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M21.715 18.363A10 10 0 0 1 4.461 15H15a1 1 0 0 0 0-2H4.051a9.829 9.829 0 0 1 0-2H15a1 1 0 0 0 0-2H4.461a10 10 0 0 1 17.254-3.363 1 1 0 0 0 1.542-1.274A11.989 11.989 0 0 0 2.4 9H1a1 1 0 0 0 0 2h1.051c-.028.331-.051.662-.051 1s.023.669.051 1H1a1 1 0 0 0 0 2h1.4a11.989 11.989 0 0 0 20.862 4.637 1 1 0 0 0-1.542-1.274z" />
  </motion.svg>
);
export default SvgCurrencyEuro;
