import { TbLamp, TbLampOff } from "react-icons/tb";
import { ThemeProvider } from "styled-components";

import { dark, light } from "../../themes";
import { useTheme } from "../../hooks/use-theme";
import GlobalStyle from "../../global";

import { Container, Title } from "./styles";

export function Home() {
  const { theme, handleTheme } = useTheme();

  function changeTheme() {
    theme.title === "dark" ? handleTheme(light) : handleTheme(dark);
  }

  const iconProps = {
    size: 100,
    color: theme.colors.icon,
    onClick: changeTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        {theme.title === "dark" ? (
          <TbLampOff {...iconProps} />
        ) : (
          <TbLamp {...iconProps} />
        )}

        <Title>Dark/Light</Title>
      </Container>
    </ThemeProvider>
  );
}
