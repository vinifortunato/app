import styled, { css } from 'styled-components/native';
import { DateFilterItemStyleProps } from './DateFilter.types';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
  `}
`;

export const Items = styled.FlatList`

`;

export const BorderItem = styled.View`
  padding: 15px 0px;
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 130px;
  justify-content: center;
  border-color: black;
  border-width: 1px;
`;

export const Item = styled.View<DateFilterItemStyleProps>`
  ${({ isCurrent = false }) => css`
    padding: 15px 0px;
    background-color: ${isCurrent ? 'lightcoral' : 'lightblue'};
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 130px;
    justify-content: center;
    border-color: black;
    border-width: 1px;
  `}
`;

export const NavButton = styled.Button`
  width: 30px;
`;
