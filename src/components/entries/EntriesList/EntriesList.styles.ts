import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View``;

export const EntryWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 20px 15px;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.sm};
  `}
`;

export const EntryHeader = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const EntryTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.sm};
  `}
`;

export const IconEntryTypeAdapter = styled.View`
  display: flex;
  height: 8px;
  margin-right: 10px;
  width: 8px;
`;

export const EntryDetails = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const EntryAmount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.sm};
  `}
`;

export const EntryRevenueAmount = styled(EntryAmount)`
  ${({ theme }) => css`
    color: ${theme.colors.success};
  `}
`;

export const EntryExpenseAmount = styled(EntryAmount)`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
