import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiSelectProps = {
  /** If checkbox is disabled */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Checkbox name used to identify it */
  name?: string;
  /** Label to render next to checkbox */
  label?: string;
  /** Label position */
  labelOnTop?: boolean;
  /** On change CB to handle checked state */
  onChange?: () => void;
  /** React ref */
  ref?: React.Ref<HTMLSelectElement>;
  /** Checkbox theme to render when checked */
  state?: 'POSITIVE' | 'ERROR' | 'NEGATIVE';
  /** Selected value */
  value?: HTMLSelectElement['value'];
} & UiReactElementProps;

export type privateSelectProps = UiSelectProps & UiReactPrivateElementProps;
