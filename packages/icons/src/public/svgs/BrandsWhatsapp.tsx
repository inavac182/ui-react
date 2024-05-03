import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsWhatsapp = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath}
      d="M20.463 3.488A11.817 11.817 0 0 0 12.05 0C5.495 0 .16 5.334.157 11.892a11.87 11.87 0 0 0 1.588 5.946L.057 24l6.304-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.817 11.817 0 0 0-3.479-8.413zM12.05 21.785h-.004a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.855 9.855 0 0 1-1.511-5.26c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.827 9.827 0 0 1 2.892 6.993c-.003 5.452-4.437 9.886-9.885 9.886zm5.422-7.403c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148s-.767.967-.941 1.166c-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059s-.018-.458.13-.606c.134-.133.297-.347.446-.521.15-.172.199-.296.299-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.241-.58-.486-.501-.669-.51-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479c0 1.463 1.065 2.876 1.213 3.074.148.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.125-.272-.199-.569-.348z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsWhatsapp;
