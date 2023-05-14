import { ColorCategories, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

import * as SvgsComponent from '../public/svgs';

export type UiIconProps = {
  /** Icon ID to be rendered */
  icon: keyof typeof SvgsComponent;
  /** Icon category */
  category?: ColorCategories;
  /** Icon Size */
  size?: TextSize;
} & UiReactElementProps;

export type privateIconProps = Omit<UiIconProps, 'icon'> & UiReactPrivateElementProps;