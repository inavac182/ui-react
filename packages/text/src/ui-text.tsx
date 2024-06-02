'use client';
import React from 'react';

import { getSpacingClass } from '@uireact/foundation';

import { UiTextProps } from './types';
import styles from './ui-text.scss';

export const UiText: React.FC<UiTextProps> = ({
  align = 'left',
  children,
  className = '',
  coloration,
  inline,
  fontStyle,
  size = 'regular',
  category = 'fonts',
  inverseColoration,
  wrap,
  margin,
  padding
}: UiTextProps) => {
  let classes = `${className} color-${inverseColoration ? 'inverse-' : ''}${category}-100 size-${size}`;

  if (align === 'left') {
    classes = `${classes} ${styles.alignLeft}`;
  }

  if (align === 'center') {
    classes = `${classes} ${styles.alignCenter}`;
  }

  if (align === 'right') {
    classes = `${classes} ${styles.alignRight}`;
  }

  if (coloration) {
    classes = `${classes} ${coloration}`;
  }

  if (wrap) {
    classes = `${classes} ${styles.wrap}`;
  }

  if (margin || padding) {
    classes = `${classes} ${getSpacingClass('margin', margin)} ${getSpacingClass('padding', padding)}`;
  }

  if (fontStyle) {
    classes = `${classes} ${fontStyle}`;
  }

  if (inline) {
    return (
      <span className={classes}>
        {children}
      </span>
    );
  }

  return (
    <p className={classes}>
      {children}
    </p>
  );
};

UiText.displayName = 'UiText';
