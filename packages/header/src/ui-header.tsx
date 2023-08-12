import React from 'react';

import styled from 'styled-components';

import { ThemeContext, UiViewport, getThemeStyling, useViewport } from '@uireact/foundation';

import { UiHeaderProps, privateUiHeaderProps } from './types';
import { CenteredDiv } from './__private';
import { themeMapper } from './theme';

const Div = styled.div<privateUiHeaderProps>`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 3px;
  border-style: solid;

  ${(props) => {
    return `
    ${getThemeStyling(props.$customTheme, props.$selectedTheme, themeMapper)}
    ${props.$fixed ? 'position: sticky;' : ''}
    `;
  }}

  top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  z-index: 10;
`;

export const UiHeader: React.FC<UiHeaderProps> = ({ centered, children, fixed }: UiHeaderProps) => {
  const themeContext = React.useContext(ThemeContext);
  const { isLarge } = useViewport();

  return (
    <Div
      $customTheme={themeContext.theme}
      $selectedTheme={themeContext.selectedTheme}
      $fixed={fixed}
      data-testid="UiHeader"
    >
      {centered ? (
        <>
          <UiViewport criteria={'l|xl'}>
            <CenteredDiv size={isLarge ? 'l' : 'xl'}>{children}</CenteredDiv>
          </UiViewport>
          <UiViewport criteria={'s|m'}>{children}</UiViewport>
        </>
      ) : (
        <>{children}</>
      )}
    </Div>
  );
};

UiHeader.displayName = 'UiHeader';
