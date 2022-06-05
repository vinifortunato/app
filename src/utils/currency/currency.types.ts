export type CurrencyFormat = {
  decimalDelimiter: string;
  decimals: number;
  preCurrency: string;
  postCurrency: string;
  sections: number;
  sectionsDelimiter: string;
};

export type CurrencyFormats = {
  [key: string]: CurrencyFormat;
};

export type CurrencyProps = {
  currency?: string;
  value: number | string;
};

export type FormatProps = {
  decimalDelimiter: string;
  decimals: number;
  preCurrency: string;
  postCurrency: string;
  sections: number;
  sectionsDelimiter: string;
  value: number | string;
};
