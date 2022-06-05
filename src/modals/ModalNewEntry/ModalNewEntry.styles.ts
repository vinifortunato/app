import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: end;
  margin: 0px 10px;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 20px;
  `}
`;
