import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsBitcoin = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M14.28 14.509c-.407 1.635-3.159.751-4.051.53l.722-2.9c.893.223 3.755.665 3.33 2.37zM14.688 10.267c-.371 1.487-2.663.731-3.406.546l.655-2.629c.744.185 3.138.531 2.75 2.083z" />
    <motion.path {...props.motionPath} d="M14.9.36C8.475-1.245 1.963 2.67.36 9.097c-1.603 6.428 2.31 12.94 8.736 14.543 6.429 1.603 12.94-2.31 14.543-8.738C25.242 8.474 21.329 1.962 14.9.359zM9.53 8.095c.017-.28-.08-.633-.614-.766.021-.014-.956-.238-.956-.238l.351-1.406 1.816.453-.002.008c.273.067.554.132.842.197l.54-2.162 1.315.328-.529 2.12c.353.081.709.162 1.055.249l.525-2.106 1.316.328-.539 2.163c1.662.572 2.878 1.43 2.64 3.027-.174 1.17-.822 1.735-1.682 1.933 1.181.615 1.782 1.558 1.21 3.194-.711 2.03-2.4 2.202-4.645 1.777l-.544 2.183-1.317-.328.538-2.154c-.341-.085-.69-.174-1.05-.272l-.539 2.164-1.315-.329.545-2.187c-.308-.08-.62-.162-.94-.242l-1.713-.428.654-1.507s.97.258.957.24c.373.091.538-.152.604-.314L9.53 8.096z" />
  </motion.svg>
);
export default SvgBrandsBitcoin;
