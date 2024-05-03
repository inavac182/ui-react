import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsFirefoxBrowser = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M22.776 8.049c-.505-1.216-1.529-2.528-2.333-2.943.654 1.282 1.033 2.569 1.178 3.529l.002.019c-1.315-3.277-3.545-4.599-5.366-7.476-.092-.146-.184-.291-.274-.445a3.703 3.703 0 0 1-.128-.241 2.092 2.092 0 0 1-.173-.46.03.03 0 0 0-.026-.031.041.041 0 0 0-.022 0l-.006.003a.667.667 0 0 0-.067.035C13.085 1.523 12 4.076 11.692 5.856a6.186 6.186 0 0 0-2.304.588.297.297 0 0 0-.147.369.293.293 0 0 0 .371.181l.025-.01a5.915 5.915 0 0 1 2.362-.539 5.775 5.775 0 0 1 3.093.867 5.958 5.958 0 0 1 2.034 2.104c-.621-.436-1.733-.867-2.804-.681 4.183 2.091 3.06 9.292-2.736 9.02a5.008 5.008 0 0 1-2.051-.525c-1.42-.734-2.593-2.121-2.739-3.805 0 0 .537-2 3.844-2 .357 0 1.379-.997 1.398-1.287-.004-.095-2.028-.9-2.817-1.677-.423-.416-.623-.616-.8-.766a3.715 3.715 0 0 0-.301-.228 5.385 5.385 0 0 1-.033-2.842c-1.71.787-2.805 2.163-2.805 2.163-.461-.583-.428-2.51-.402-2.912-.005-.025-.344.176-.388.206-.407.29-.787.616-1.136.974A10.09 10.09 0 0 0 2.27 6.358l-.001.002.001-.002A9.808 9.808 0 0 0 .71 9.881a13.611 13.611 0 0 0-.314 2.19 6.09 6.09 0 0 0-.009.302C.387 18.794 5.593 24 12.016 24c5.752 0 10.527-4.175 11.462-9.66.02-.149.035-.298.053-.449.231-1.993-.026-4.089-.755-5.842z" />
  </motion.svg>
);
export default SvgBrandsFirefoxBrowser;
