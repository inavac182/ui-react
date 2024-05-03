import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsZoom = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath}
      d="M9.727 10.093a2.692 2.692 0 0 0-1.905-.79h-.003a2.697 2.697 0 1 0 1.908.79zm-.763 3.051a1.618 1.618 0 1 1-2.288-2.287 1.618 1.618 0 0 1 2.288 2.287z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
    <motion.path {...props.motionPath}
      d="M15.39 10.093a2.694 2.694 0 0 0-3.814 0 2.697 2.697 0 1 0 3.814 0zm-.763 3.051a1.618 1.618 0 1 1-2.288-2.287 1.618 1.618 0 0 1 2.288 2.287zM1.079 14.683l.27.013h4.045l-.014-.269c-.036-.444-.35-.768-.796-.796l-.27-.013H1.888l3.236-3.236-.014-.269a.815.815 0 0 0-.795-.796l-.27-.013L0 9.303l.013.269c.035.439.354.77.795.796l.27.013h2.427L.27 13.618l.013.269a.825.825 0 0 0 .796.796zM19.54 10.92c.092.159.121.338.132.541l.013.27v1.888l.013.269a.829.829 0 0 0 .796.796l.269.013V11.73l.013-.27c.011-.2.04-.384.133-.543a1.079 1.079 0 0 1 1.866.003c.092.159.12.342.131.54l.013.269v1.888l.013.269c.028.444.35.77.796.796l.272.015V11.461a2.157 2.157 0 0 0-3.775-1.427 2.151 2.151 0 0 0-1.618-.73c-.448 0-.863.136-1.208.37-.21-.233-.679-.37-.949-.37v5.393l.27-.013c.45-.03.778-.348.796-.795l.013-.27V11.73l.013-.27c.011-.203.04-.383.132-.542a1.079 1.079 0 0 1 1.866.002z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsZoom;
