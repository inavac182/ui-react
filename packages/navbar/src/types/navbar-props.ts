import { ColorCategory, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type Alignment = 'start' | 'center' | 'end';

export type Orientation = 'stacked' | 'inline';

export type UiNavbarProps = {
  children: React.ReactNode;
  /**  Stacked will render all options vertically - INLINE Default */
  orientation?: Orientation;
  /** Color category for navbar */
  category?: ColorCategory;
  /** Navbar alignment */
  align?: Alignment;
  /** If top and bottom item render rounded corners, useful for rendering navbar inside cards */
  roundedCorners?: boolean;
} & Omit<UiReactElementProps, 'children'>;

export type privateNavbarProps = UiNavbarProps & {
  orientation: Orientation;
  align: Alignment;
} & UiReactPrivateElementProps;