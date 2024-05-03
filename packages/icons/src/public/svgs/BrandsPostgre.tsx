import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsPostgre = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M23.559 14.723a.501.501 0 0 0-.056-.119c-.139-.263-.477-.342-1.007-.232-1.653.341-2.294.131-2.526-.019 1.342-2.048 2.445-4.522 3.041-6.83.271-1.051.798-3.524.122-4.732a1.655 1.655 0 0 0-.151-.235C21.693.908 19.801.025 17.51 0c-1.496-.015-2.771.346-3.116.479a9.938 9.938 0 0 0-.516-.082 8.07 8.07 0 0 0-1.311-.128c-1.182-.019-2.204.264-3.05.841-.858-.32-4.789-1.644-7.222.08C.936 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.242 5.744.46 1.507.939 2.702 1.433 3.582.553.994 1.126 1.593 1.714 1.79.447.149 1.133.144 1.858-.728a54.752 54.752 0 0 1 1.945-2.207c.435.235.906.362 1.39.377v.004c-.098.116-.179.218-.247.305-.339.43-.409.52-1.5.744-.31.064-1.134.234-1.146.812a.589.589 0 0 0 .092.327c.227.423.921.61 1.015.633 1.335.334 2.504.092 3.371-.679-.017 2.231.078 4.417.345 5.087.223.554.763 1.905 2.47 1.905.25 0 .526-.029.83-.094 1.782-.382 2.556-1.17 2.855-2.906.15-.871.402-2.875.539-4.101.017-.07.036-.121.057-.136.001 0 .07-.047.427.031a.67.67 0 0 0 .044.007l.254.022.015.001c.847.039 1.911-.143 2.531-.431.644-.299 1.806-1.033 1.595-1.67zM2.371 11.876c-.744-2.435-1.178-4.885-1.212-5.571-.109-2.172.417-3.683 1.562-4.493 1.837-1.299 4.84-.541 6.108-.13l-.01.009c-2.024 2.044-1.976 5.536-1.971 5.75 0 .082.007.199.016.359.035.587.1 1.68-.073 2.918-.161 1.15.194 2.276.973 3.089.081.084.165.163.252.238-.347.371-1.1 1.193-1.903 2.158-.568.682-.96.552-1.089.509-.392-.131-.813-.587-1.239-1.323-.478-.84-.962-2.032-1.414-3.513zm6.007 5.087a1.63 1.63 0 0 1-.432-.177c.089-.039.237-.09.483-.141 1.283-.264 1.481-.451 1.914-1 .099-.126.212-.269.367-.443a.352.352 0 0 0 .074-.13c.171-.151.272-.11.437-.042.156.065.308.26.369.475.029.102.062.294-.045.444-.904 1.268-2.221 1.251-3.167 1.014zm2.094-3.987-.053.141c-.133.357-.257.688-.333 1.003-.667-.002-1.317-.287-1.811-.802-.628-.655-.913-1.566-.782-2.5.183-1.309.116-2.448.079-3.06-.005-.086-.01-.161-.012-.22.296-.262 1.666-.996 2.643-.772.446.102.718.406.831.928.585 2.704.077 3.831-.33 4.736a8.332 8.332 0 0 0-.232.546zm7.364 4.572c-.017.177-.036.376-.062.596l-.146.438a.33.33 0 0 0-.018.108c-.006.475-.054.649-.115.869-.063.229-.135.489-.179 1.057-.11 1.414-.878 2.227-2.417 2.557-1.516.325-1.784-.497-2.021-1.222a6.62 6.62 0 0 0-.077-.227c-.215-.586-.191-1.412-.157-2.555.017-.561-.025-1.901-.33-2.646a69.3 69.3 0 0 1 .019-.892.355.355 0 0 0-.015-.113 1.43 1.43 0 0 0-.044-.208c-.123-.428-.421-.787-.78-.935-.142-.059-.404-.167-.718-.087.067-.276.183-.587.309-.925l.053-.142c.059-.16.134-.326.213-.501.427-.948 1.011-2.245.377-5.177-.237-1.098-1.031-1.634-2.233-1.51-.722.076-1.381.367-1.71.533-.07.036-.135.071-.196.104.092-1.106.439-3.174 1.736-4.482a3.93 3.93 0 0 1 .303-.276.344.344 0 0 0 .145-.064c.752-.571 1.695-.851 2.802-.833.409.007.802.034 1.174.081 1.939.354 3.244 1.447 4.036 2.383.814.962 1.255 1.932 1.431 2.454-1.323-.135-2.223.127-2.68.779-.993 1.419.543 4.173 1.281 5.496.135.243.252.452.289.541.24.583.551.971.779 1.255.07.087.137.171.189.245-.401.116-1.121.383-1.055 1.717-.012.156-.042.447-.083.815a6.514 6.514 0 0 0-.1.767zm.89-1.621c-.04-.832.269-.918.597-1.01a2.66 2.66 0 0 0 .135-.041c.039.035.083.069.134.103.57.377 1.582.421 3.007.134a4.064 4.064 0 0 1-.953.601c-.41.19-1.096.333-1.747.364-.72.034-1.086-.081-1.173-.151zm.57-9.271a7.264 7.264 0 0 1-.105 1.002c-.055.358-.112.727-.126 1.176-.014.437.04.891.093 1.33.107.887.216 1.8-.207 2.701a3.563 3.563 0 0 1-.188-.386 7.56 7.56 0 0 0-.325-.616c-.616-1.104-2.057-3.69-1.319-4.745.378-.542 1.34-.565 2.177-.462zm.228 7.013-.085-.107-.036-.045c.726-1.199.584-2.386.458-3.438-.052-.432-.101-.84-.088-1.223.013-.406.067-.754.118-1.091.064-.415.129-.844.111-1.351a.568.568 0 0 0 .012-.19c-.046-.485-.6-1.938-1.729-3.253A7.805 7.805 0 0 0 15.597.932a9.325 9.325 0 0 1 2.024-.186c2.052.046 3.675.814 4.824 2.282.024.03.046.064.067.1.722 1.357-.277 6.276-2.988 10.541z" />
    <motion.path {...props.motionPath} d="M10.096 7.135c-.258-.036-.491-.003-.61.087a.224.224 0 0 0-.092.148c-.015.107.06.224.106.285.129.172.319.29.506.316a.552.552 0 0 0 .081.006c.312 0 .596-.243.621-.423.031-.226-.295-.375-.612-.419zM18.003 6.957c-.297.041-.585.175-.561.352.019.137.267.372.561.372a.63.63 0 0 0 .075-.005.725.725 0 0 0 .408-.223c.104-.109.164-.231.153-.31-.025-.177-.339-.228-.636-.186z" />
  </motion.svg>
);
export default SvgBrandsPostgre;
