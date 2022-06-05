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
  return (
    <Styles.Wrapper>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input
        data-testid={testId}
        editable={editable}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
      />
    </Styles.Wrapper>
  );
};

export default DefaultTextInput;
