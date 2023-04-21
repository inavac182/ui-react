import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  z-index: 1;
`;

export const DialogBackground: React.FC = () => <Div />;

DialogBackground.displayName = 'DialogBackground';
