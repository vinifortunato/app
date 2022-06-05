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
    color: ${theme.colors.black};;
    margin: 5px 0px;
    padding: 15px 10px;
  `}
`;
