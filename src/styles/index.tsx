import React from "react";
import GlobalStyle from "./global";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

interface PropsType {
  children: React.ReactNode;
}

const StyleProvider = ({ children }: PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
