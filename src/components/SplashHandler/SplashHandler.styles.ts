import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Wrapper =  styled(Animated.View)`
  ${() => css`
    align-items: center;
    background-color: blue;
    bottom: 0px;
    display: flex;
    justify-content: center;
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1;
    opacity: 1;
    pointer-events: none;
  `}
`;
