import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Wrapper =  styled(Animated.View)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary};
    bottom: 0px;
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: ${theme.layers.awaysOnTop};
    opacity: 1;
    pointer-events: none;
  `}
`;

export const Title =  styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.lg};
  `}
`;
