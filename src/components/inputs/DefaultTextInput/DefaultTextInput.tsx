import { useCallback } from 'react';
import * as Styles from './DefaultTextInput.styles';
import { DefaultTextInputProps } from './DefaultTextInput.types';

const DefaultTextInput = ({
  editable = true,
  label = 'Label',
  onChange,
  placeholder = '',
  testId = 'default-text-input',
  value,
}: DefaultTextInputProps) => {
  const handleOnChange = useCallback((event) => {
    onChange && onChange(event);
  }, [onChange]);

  return (
    <Styles.Wrapper>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input
        data-testid={testId}
        editable={editable}
        onChange={handleOnChange}
        placeholder={placeholder}
        value={value}
      />
    </Styles.Wrapper>
  );
};

export default DefaultTextInput;
