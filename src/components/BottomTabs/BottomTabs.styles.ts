import styled, { css } from 'styled-components/native';
import { BottomTabsStyleProps } from './BottomTabs.types';

export const Wrapper = styled.View<BottomTabsStyleProps>`
  ${({ theme, insets }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    padding-bottom: ${insets.bottom}px;
  `}
`;

export const Container = styled.View`
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
`;
