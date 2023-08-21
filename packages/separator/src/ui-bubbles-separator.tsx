import React from 'react';

import styled from 'styled-components';

import {
  ColorCategory,
  ColorTokens,
  ThemeContext,
  UiReactElementProps,
  getColorCategory,
  getThemeColor,
} from '@uireact/foundation';

import { privateSeparatorProps } from './types';

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const InitialBgDiv = styled.div<privateSeparatorProps>`
  width: 150%;
  height: 100px;
  position: absolute;

  ${(props) => `
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$from),
      ColorTokens.token_100
    )};
  `}
`;

const FirstTransitionDiv = styled.div<privateSeparatorProps>`
  width: 70%;
  height: 150px;
  border-radius: 50%;
  opacity: 0.5;
  position: absolute;
  left: 0;

  ${(props) => `
    top: ${props.$inverse ? '-80px' : '20px'};
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$to),
      ColorTokens.token_100
    )};
  `}
`;

const SecondTransitionDiv = styled.div<privateSeparatorProps>`
  width: 70%;
  height: 200px;
  border-radius: 50%;
  opacity: 0.8;
  position: absolute;
  right: 0;

  ${(props) => `
    top: ${props.$inverse ? '-120px' : '25px'};
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$to),
      ColorTokens.token_100
    )};
  `}
`;

const EndTransitionDiv = styled.div<privateSeparatorProps>`
  width: 50%;
  height: 80px;
  border-radius: 50%;
  opacity: 1;
  position: absolute;

  ${(props) => `
    top: ${props.$inverse ? '-40px' : '60px'};
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$to),
      ColorTokens.token_100
    )};
  `}
`;

const EndTransitionDiv2 = styled.div<privateSeparatorProps>`
  width: 50%;
  height: 80px;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
  right: 0;

  ${(props) => `
    top: ${props.$inverse ? '-40px' : '60px'};
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$to),
      ColorTokens.token_100
    )};
  `}
`;

const EndTransitionDiv3 = styled.div<privateSeparatorProps>`
  width: 40%;
  height: 100px;
  border-radius: 50%;
  float: right;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 30%;

  ${(props) => `
    top: ${props.$inverse ? '-30px' : '30px'};
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$to),
      ColorTokens.token_100
    )};
  `}
`;

export type UiBubblesSeparatorProps = {
  from: ColorCategory;
  to: ColorCategory;
  inverse?: boolean;
} & UiReactElementProps;

export const UiBubblesSeparator: React.FC<UiBubblesSeparatorProps> = ({
  from,
  to,
  className,
  testId,
  inverse,
}: UiBubblesSeparatorProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <ContainerDiv data-testid={testId} className={className}>
      <InitialBgDiv
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        $inverse={inverse}
      ></InitialBgDiv>
      <FirstTransitionDiv
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        $inverse={inverse}
      ></FirstTransitionDiv>
      <SecondTransitionDiv
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        $inverse={inverse}
      ></SecondTransitionDiv>
      <EndTransitionDiv
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        $inverse={inverse}
      ></EndTransitionDiv>
      <EndTransitionDiv2
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        $inverse={inverse}
      ></EndTransitionDiv2>
      <EndTransitionDiv3
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        $inverse={inverse}
      ></EndTransitionDiv3>
    </ContainerDiv>
  );
};

UiBubblesSeparator.displayName = 'UiBubblesSeparator';