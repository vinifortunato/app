const defaultTheme = {
  breakpoints: {
    xs: '321px',
    sm: '576px',
    md: '767px',
    lg: '991px',
    xl: '1200px',
  },
  colors: {
    black: '#000000',
    danger: '#FF9442',
    dark: '#363636',
    error: '#FC3C2B',
    gray: '#dbdbdb',
    light: '#F2F4F7',
    primary: '#0230BA',
    secondary: '#c7c7c7',
    success: '#30B47A',
    warning: '#FFCF00',
    white: '#ffffff',
  },
  font: {
    sizes: {
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '22px',
      xxl: '26px',
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
  layers: {
    base: 0,
    modal: 1,
    toasts: 2,
    awaysOnTop: 3,
  },
} as const;

export default defaultTheme;
