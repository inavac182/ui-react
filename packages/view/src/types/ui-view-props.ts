import { Theme, ThemeColor, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiViewProps = {
  /** If content should render centered and not fullscreen */
  centeredContent?: boolean;
  /** Selected color from theme */
  selectedTheme: ThemeColor;
  /** Theme for the view */
  theme: Theme;
} & UiReactElementProps;

export type UiViewRowProps = {
  /** If content should render centered and not fullscreen */
  centeredContent?: boolean;
  /** The weigth of the background color to use */
  weight?: '10' | '50' | '100' | '150' | '200';
} & UiReactElementProps;

export type privateViewProps = UiViewProps & UiReactPrivateElementProps;
export type privateViewRowProps = UiViewRowProps & UiReactPrivateElementProps;