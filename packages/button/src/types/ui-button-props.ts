import { MouseEvent } from 'react';

import { ColorCategory, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiButtonProps = {
  /** onClick Handler */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Disable button */
  disabled?: boolean;
  children?: React.ReactNode;
  /** testId attribute */
  testId?: string;
  /** className attribute */
  className?: string;
  /** Button theme */
  theme?: ColorCategory;
  /** If button should take full height */
  fullHeight?: boolean;
  /** If button should take full width */
  fullWidth?: boolean;
  /** Button type */
  type?: 'button' | 'submit';
  /** Button type */
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
};

export type privateButtonProps = UiButtonProps & UiReactPrivateElementProps;
