import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCoins = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M16.5 0C12.294 0 9 1.977 9 4.5v2.587A12.816 12.816 0 0 0 7.5 7C3.294 7 0 8.977 0 11.5v8C0 22.023 3.294 24 7.5 24c3.407 0 6.216-1.297 7.16-3.131.598.087 1.214.131 1.84.131 4.206 0 7.5-1.977 7.5-4.5v-12C24 1.977 20.706 0 16.5 0ZM22 12.5c0 1.18-2.352 2.5-5.5 2.5-.512 0-1.014-.035-1.5-.103v-1.984c.49.057.992.087 1.5.087 2.194 0 4.14-.538 5.5-1.411v.911ZM2 14.589C3.36 15.462 5.306 16 7.5 16s4.14-.538 5.5-1.411v.911c0 1.18-2.352 2.5-5.5 2.5S2 16.68 2 15.5v-.911ZM22 8.5c0 1.18-2.352 2.5-5.5 2.5-.535 0-1.06-.038-1.566-.112-.193-.887-.8-1.684-1.706-2.323.984.28 2.092.435 3.272.435 2.194 0 4.14-.538 5.5-1.411V8.5ZM16.5 2C19.648 2 22 3.32 22 4.5S19.648 7 16.5 7 11 5.68 11 4.5 13.352 2 16.5 2Zm-9 7c3.148 0 5.5 1.32 5.5 2.5S10.648 14 7.5 14 2 12.68 2 11.5 4.352 9 7.5 9Zm0 13C4.352 22 2 20.68 2 19.5v-.911C3.36 19.462 5.306 20 7.5 20s4.14-.538 5.5-1.411v.911c0 1.18-2.352 2.5-5.5 2.5Zm9-3c-.512 0-1.014-.035-1.5-.103v-1.984c.49.057.992.087 1.5.087 2.194 0 4.14-.538 5.5-1.411v.911c0 1.18-2.352 2.5-5.5 2.5Z" />
  </motion.svg>
);
export default SvgCoins;
