import * as Styles from './DefaultTextInput.styles';
import { DefaultTextInputProps } from './DefaultTextInput.types';

const DefaultTextInput = ({
  editable = true,
  label = 'Label',
  onChange,
  onFocus,
  placeholder = '',
  testId = 'default-text-input',
  value,
}: DefaultTextInputProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input
        data-testid={testId}
        editable={editable}
        onChangeText={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        value={value}
      />
    </Styles.Wrapper>
  );
};

export default DefaultTextInput;
