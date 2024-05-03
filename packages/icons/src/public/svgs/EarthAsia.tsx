import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgEarthAsia = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M10 17.188a.813.813 0 0 1-.812.812H7.812A.813.813 0 0 1 7 17.188v-.229c0-.502.451-.884.946-.801l1.376.229a.812.812 0 0 1 .679.801Zm3.446-4.046a.812.812 0 0 0-1.235.102l-.811 1.135a.811.811 0 0 0 1.235 1.046l.973-.973a.812.812 0 0 0 0-1.148l-.162-.162Zm2.713-4.623.529-1.27a.813.813 0 0 0-1.437-.744l-.741 1.182a.812.812 0 0 0 .376 1.181l.212.088a.813.813 0 0 0 1.062-.437ZM24 11.999c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-12 10c2.59 0 4.952-.989 6.73-2.61l-2.036-.291a1.338 1.338 0 0 1-1.008-.727l-.387-.774a1.343 1.343 0 0 1 0-1.198l.408-.815c.185-.37.53-.633.935-.714l1.605-.321a.85.85 0 0 0 .434-.232l.849-.849a.85.85 0 0 1 1.038-.128l1.215.729c.141-.668.216-1.361.216-2.07 0-4.39-2.844-8.129-6.786-9.47A296.9 296.9 0 0 1 14.198 4.6a.964.964 0 0 1-.633.508l-1.102.275a.873.873 0 0 0-.616.57l-.204.613a.87.87 0 0 0 .13.799l.7.933c.312.416.312.987 0 1.403l-.623.831a1.17 1.17 0 0 1-.935.468h-.679a.624.624 0 0 0-.616.727l.283 1.697a.791.791 0 0 1-.427.838l-.905.452a.79.79 0 0 1-.972-.214l-1.186-1.483a.684.684 0 0 0-.944-.12l-1.155.866a1.182 1.182 0 0 1-.71.237H2.199c.929 4.559 4.97 8 9.799 8Z" />
  </motion.svg>
);
export default SvgEarthAsia;
