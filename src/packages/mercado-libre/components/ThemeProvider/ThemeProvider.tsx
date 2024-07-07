import { createContext, PropsWithChildren } from 'react';

import 'packages/meli/styles/global.css';

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeContext = createContext({});

function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider };
export type { ThemeProviderProps };
