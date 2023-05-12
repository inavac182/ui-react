import { Sizing, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiFlexGridProps = {
  /** Items alignment inside flex grid */
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center';
  /** Children component */
  children?: React.ReactNode;
  /** Spacing between flex columns */
  columnGap?: Sizing;
  /** Class name */
  className?: string;
  /** Flex grid direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** Spacing between flex items, value comes from SPACING prop in theme */
  gap?: Sizing;
  /** Flex grid wrap */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  /** Spacing between flex rows */
  rowGap?: Sizing;
  /** Flex grid wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export type privateFlexGridProps = UiFlexGridProps & UiReactPrivateElementProps;