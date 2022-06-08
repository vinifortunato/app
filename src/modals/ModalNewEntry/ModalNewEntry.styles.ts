import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0px 10px;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-color: ${theme.colors.gray};
    border-width: 1px;
    padding: 20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 18px;
    margin-bottom: 15px;
  `}
`;
