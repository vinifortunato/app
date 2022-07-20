import styled, { css } from 'styled-components/native';
import { DefaultDatePickerDayTypes, DefaultDatePickerStyleProps } from './DefaultDatePicker.types';

export const Wrapper = styled.View`
  ${({ theme }) => css`
  position: relative;
    z-index: ${theme.layers.awaysOnTop};
  `}
`;

export const FieldOverlay = styled.Pressable<DefaultDatePickerStyleProps>`
  ${() => css`
    background-color: transparent;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 12px;
  `}
`;

export const PikerWrapper = styled.View<DefaultDatePickerStyleProps>`
  ${({ show, theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 3px;
    border: 1px solid ${theme.colors.gray};
    left: 0px;
    max-width: 300px;
    padding: 10px 10px 10px 10px;
    position: absolute;
    right: 0px;
    top: 70px;
    z-index: ${theme.layers.awaysOnTop};
    opacity: ${show ? 1 : 0};
  `}
`;

export const Navigation = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationRightButtonAdapter = styled.Pressable`
  padding: 3px 6px;
  margin: 2px;
  transform: rotate(-180deg);
`;

export const NavigationButton = styled.View`

`;

export const NavigationLeftButtonAdapter = styled.Pressable`
  padding: 3px 7px;
  margin: 2px;
  transform: rotate(0deg);
`;

export const DayNamesWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const DayName = styled.View`
  ${() => css`
    padding: 5px 0px;
    width: 35px;
    margin: 2px;
    align-items: center;
  `}
`;

export const DayNameLabel = styled.Text`
  ${() => css``}
`;

export const DaysWrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ButtonDay = styled.Pressable<DefaultDatePickerStyleProps>`
  ${({ dayType, selected, theme }) => css`
    background-color: red;
    padding: 10px 0px;
    margin: 2px;
    width: 35px;
    align-items: center;

    ${dayType !== DefaultDatePickerDayTypes.CURRENT && css`
      background-color: ${theme.colors.gray};
    `}

    ${dayType === DefaultDatePickerDayTypes.TODAY && css`
      background-color: red;
    `}

    ${selected && css`
      background-color: ${theme.colors.primary};
    `}
  `}
`;

export const ButtonDayLabel = styled.Text<DefaultDatePickerStyleProps>`
  ${({ dayType, selected, theme }) => css`
    display: flex;
    flex-direction: row;
    color: ${theme.colors.white};

    ${dayType !== DefaultDatePickerDayTypes.CURRENT && css`
      color: ${theme.colors.dark};
    `}

    ${dayType === DefaultDatePickerDayTypes.TODAY && css`
      color: ${theme.colors.white};
    `}

    ${selected && css`
      color: ${theme.colors.white};
    `}
  `}
`;
