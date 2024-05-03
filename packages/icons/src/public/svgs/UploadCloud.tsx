import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgUploadCloud = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M17.974 7.146a1.032 1.032 0 0 1-.742-.569c-1.55-3.271-5.143-5.1-8.734-4.438A7.946 7.946 0 0 0 2.114 8.64a8.13 8.13 0 0 0 .033 2.89c.06.309-.073.653-.346.901A5.51 5.51 0 0 0 0 16.501c0 3.032 2.467 5.5 5.5 5.5h11c4.136 0 7.5-3.364 7.5-7.5 0-3.565-2.534-6.658-6.026-7.354ZM16.5 20h-11C3.57 20 2 18.43 2 16.5a3.51 3.51 0 0 1 1.146-2.59c.786-.715 1.155-1.773.963-2.763a6.142 6.142 0 0 1-.024-2.181c.403-2.422 2.365-4.421 4.771-4.862.385-.07.768-.104 1.146-.104a5.95 5.95 0 0 1 5.422 3.434 3.013 3.013 0 0 0 2.158 1.673 5.51 5.51 0 0 1 4.417 5.394c0 3.032-2.468 5.5-5.5 5.5Zm-1.379-7.707a.999.999 0 1 1-1.414 1.414L12 12v5a1 1 0 1 1-2 0v-5l-1.707 1.707a.999.999 0 1 1-1.414-1.414l2.707-2.707a1.99 1.99 0 0 1 1.4-.583L11 9l.014.003a1.989 1.989 0 0 1 1.4.583l2.707 2.707Z" />
  </motion.svg>
);
export default SvgUploadCloud;
