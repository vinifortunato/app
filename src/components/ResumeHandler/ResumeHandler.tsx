import { ResumeHandlerProps } from './ResumeHandler.types';
import * as Styles from './ResumeHandler.styles';
import { Text, View } from 'react-native';
import { calculate, currency } from '@src/utils';
import { Balance } from '@src/types/common.types';
import { useAppSelector } from '@src/hooks';
import { User } from '@store/user/user.types';
import { AppState } from '@store/store.types';
import { Entry } from '@store/entries/entries.types';
import { ScreenStyles } from '@src/styles';

const ResumeHandler = ({ testId = 'default' }: ResumeHandlerProps) => {
  const user: User | null = useAppSelector<User | null>((state: AppState) => state.user);
  const entries: Array<Entry> = useAppSelector<Array<Entry>>((state: AppState) => state.entries);

  const balance: Balance = calculate.entries(entries);

  return (
    <Styles.Wrapper data-testid={testId}>
      <View>
        <ScreenStyles.Box>
          <Text>{`Boa noite, ${user?.name}!`}</Text>
          <View>
            <Text>Saldo geral</Text>
            <Text>{currency({ value: balance.balance })}</Text>
          </View>
          <View>
            <Text>Receita geral</Text>
            <Text>{currency({ value: balance.earnings })}</Text>
          </View>
          <View>
            <Text>Despesa geral</Text>
            <Text>{currency({ value: balance.expenses })}</Text>
          </View>
        </ScreenStyles.Box>
        <ScreenStyles.Box>
          <Text>Minhas contas</Text>
          <View>
            <View>
              <Text>Icon</Text>
              <Text>NuBank</Text>
              <View>
                <Text>{currency({ value: 10.50 })}</Text>
              </View>
            </View>
          </View>
        </ScreenStyles.Box>
      </View>
    </Styles.Wrapper>
  );
};

export default ResumeHandler;
