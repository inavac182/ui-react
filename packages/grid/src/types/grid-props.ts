import { SpacingType, UiReactElementProps } from '@uireact/foundation';

export type GridBreakpointsDistribution = {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
};

export type UiGridProps = {
  /** Sets the grid-auto-flow property */
  autoFlow?: 'row' | 'column' | 'row-dense' | 'column-dense';
  /** Number of columns that the grid will have, default is 1 */
  cols?: number | GridBreakpointsDistribution;
  /** Gap between each colum */
  colsGap?: SpacingType;
  /** Size of each col: px or % */
  colSize?: string;
  /** Sets if the grid items will be inline */
  inlineGrid?: boolean;
  /** Sets the justify property of all grid items */
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of rows that the grid will have, default is 1 */
  rows?: number | GridBreakpointsDistribution;
  /** Gap between each row */
  rowsGap?: SpacingType;
  /** Size of each row: px or % */
  rowSize?: string;
} & UiReactElementProps;
