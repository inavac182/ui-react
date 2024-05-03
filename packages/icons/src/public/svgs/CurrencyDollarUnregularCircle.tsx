import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCurrencyDollarUnregularCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12.836.029a12.043 12.043 0 0 0-9.327 3.492 12.027 12.027 0 0 0-3.48 9.333C.47 19.208 6.082 24 13.083 24H19c2.757 0 5-2.243 5-5v-6.66C24 5.862 19.097.454 12.836.029ZM22 19c0 1.654-1.346 3-3 3h-5.917c-6.034 0-10.686-3.905-11.058-9.285a10.027 10.027 0 0 1 2.898-7.782 10.019 10.019 0 0 1 7.778-2.91C17.915 2.377 22 6.909 22 12.339v6.66Zm-6-5c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.001c.179.308.511.5.867.5h2.268c.552 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.041-.507A2.761 2.761 0 0 1 7.999 10c0-1.654 1.346-3 3-3V6a1 1 0 1 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H11c-.552 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507A2.761 2.761 0 0 1 16 14.001Z" />
  </motion.svg>
);
export default SvgCurrencyDollarUnregularCircle;
