import { Dictionary } from '@src/types/common.types';
import { Entry, EntryTypes } from '@store/entries/entries.types';
import { useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components/native';
import { EntriesListProps, EntryListDay, EntryListMonth, EntryListYear } from './EntriesList.types';
import * as Styles from './EntriesList.styles';
import { currency } from '@src/utils';
import { IconEntryType } from '@src/icons';
import { Text, View } from 'react-native';

const EntriesList = ({ entries = [] }: EntriesListProps) => {
  const theme = useTheme();

  const getEntryTypeIconColor = useCallback((type: EntryTypes) => {
    switch (type) {
      case EntryTypes.EXPENSE:
        return theme.colors.error;
      case EntryTypes.REVENUE:
        return theme.colors.success;
      default:
        return theme.colors.warning;
    }
  }, [theme]);

  const assemblyEntries = (entries: Array<Entry>) => {
    const assembledEntries: Dictionary<EntryListYear> = {};

    entries.forEach((entry: Entry) => {
      const parsedDate = Number(entry.date);
      const date: Date = new Date(parsedDate);

      // Year
      const yearKey = date.getUTCFullYear().toString();
      if (assembledEntries[yearKey] === undefined) {
        assembledEntries[yearKey] = {
          key: yearKey,
          label: yearKey,
          months: {},
        };
      }
      const year: EntryListYear = assembledEntries[yearKey];

      // Month
      const normalizedMonth = (date.getUTCMonth() + 1).toString();
      const monthKey = normalizedMonth.toString().padStart(2, '0');
      if (year.months[monthKey] === undefined) {
        year.months[monthKey] = {
          key: monthKey,
          label: monthKey,
          days: {}
        };
      }
      const month: EntryListMonth = year.months[monthKey];

      // Day
      const normalizedDay = date.getUTCDate().toString();
      const dayKey = normalizedDay.toString().padStart(2, '0');
      if (month.days[dayKey] === undefined) {
        month.days[dayKey] = {
          key: dayKey,
          label: dayKey,
          entries: []
        };
      }
      const day: EntryListDay = month.days[dayKey];

      // Entry
      day.entries.push(entry);
    });

    return assembledEntries;
  };

  const listMap = useMemo(() => {
    const assembledEntries: Dictionary<EntryListYear> = assemblyEntries(entries);

    return Object.keys(assembledEntries).map((yearKey: string) => {
      const year: EntryListYear = assembledEntries[yearKey];

      const months: Dictionary<EntryListMonth> = year.months;
      const monthsMap = Object.keys(months).map((monthKey: string) => {
        const month: EntryListMonth = months[monthKey];

        const days: Dictionary<EntryListDay> = month.days;
        const daysMap = Object.keys(days).map((dayKey: string) => {
          const day: EntryListDay = days[dayKey];

          const entries: Array<Entry> = day.entries;
          const entriesMap = entries.map((entry: Entry) => {
            const id = `entry-${entry.id}`;
            const formattedAmount = currency({ value: entry.amount });

            return (
              <Styles.EntryWrapper key={id}>
                <Styles.EntryHeader>
                  <Styles.IconEntryTypeAdapter>
                    <IconEntryType fill={getEntryTypeIconColor(entry.type)} />
                  </Styles.IconEntryTypeAdapter>
                  <Styles.EntryTitle>{entry.title}</Styles.EntryTitle>
                </Styles.EntryHeader>
                <Styles.EntryDetails>
                  {entry.type === EntryTypes.REVENUE ? (
                    <Styles.EntryRevenueAmount>{`+ ${formattedAmount}`}</Styles.EntryRevenueAmount>
                  ) : (
                    <Styles.EntryExpenseAmount>{`- ${formattedAmount}`}</Styles.EntryExpenseAmount>
                  )}
                </Styles.EntryDetails>
              </Styles.EntryWrapper>
            );
          });

          return (
            <View key={day.key}>
              <Styles.Date>{`${day.label}/${month.label}/${year.label}`}</Styles.Date>
              {entriesMap}
            </View>
          );
        });

        return (
          <View key={month.key}>
            {daysMap}
          </View>
        );
      });

      return (
        <View key={year.key}>
          {monthsMap}
        </View>
      );
    });
  }, [entries, getEntryTypeIconColor]);

  return (
    <Styles.Wrapper>
      {entries.length <= 0 ? (
        <Text>Nenhuma entrada</Text>
      ) : (
        <View>{listMap}</View>
      )}
    </Styles.Wrapper>
  );
};

export default EntriesList;
