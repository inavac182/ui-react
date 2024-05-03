import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsMeta = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M17.225 4.026c-1.968 0-3.506 1.482-4.899 3.365-1.914-2.437-3.514-3.365-5.429-3.365C2.992 4.026 0 9.107 0 14.486c0 3.366 1.628 5.489 4.356 5.489 1.963 0 3.375-.925 5.885-5.313l1.766-3.12c.252.407.517.845.797 1.316l1.177 1.98c2.293 3.836 3.57 5.137 5.885 5.137 2.657 0 4.136-2.152 4.136-5.588C24 8.755 20.941 4.026 17.225 4.026zm-8.899 9.448c-2.035 3.19-2.739 3.905-3.872 3.905-1.166 0-1.859-1.024-1.859-2.849 0-3.905 1.947-7.897 4.268-7.897 1.257 0 2.307.726 3.916 3.029-1.527 2.342-2.453 3.812-2.453 3.812zm11.593 3.905c-1.159 0-1.713-.765-3.913-4.306l-1.407-2.347a49.092 49.092 0 0 0-1.098-1.71c1.268-1.957 2.314-2.933 3.559-2.933 2.585 0 4.653 3.806 4.653 8.48-.001 1.782-.584 2.816-1.794 2.816z" />
  </motion.svg>
);
export default SvgBrandsMeta;
