import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  position: relative;
  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.xs};
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 3px;
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.black};
    display: flex;
    flex: 1;
    margin: 5px 0px;
    padding: 12px;
    transition: background-color 200ms ease-in-out 0s, border-color 200ms ease-in-out 0s, box-shadow 200ms ease-in-out 0s, color 200ms ease-in-out 0s;
  `}
`;
